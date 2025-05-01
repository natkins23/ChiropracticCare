import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { analyzeSymptoms, getBodyPartInformation } from '../lib/geminiService';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import ReactMarkdown from 'react-markdown';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const bodyParts = [
  { id: 'head', name: 'Head', coords: { x: 50, y: 10 }, radius: 8 },
  { id: 'neck', name: 'Neck', coords: { x: 50, y: 18 }, radius: 5 },
  { id: 'shoulder-left', name: 'Left Shoulder', coords: { x: 40, y: 25 }, radius: 6 },
  { id: 'shoulder-right', name: 'Right Shoulder', coords: { x: 60, y: 25 }, radius: 6 },
  { id: 'upper-back', name: 'Upper Back', coords: { x: 50, y: 25 }, radius: 6 },
  { id: 'mid-back', name: 'Mid Back', coords: { x: 50, y: 35 }, radius: 6 },
  { id: 'lower-back', name: 'Lower Back', coords: { x: 50, y: 45 }, radius: 6 },
  { id: 'arm-left', name: 'Left Arm', coords: { x: 35, y: 35 }, radius: 5 },
  { id: 'arm-right', name: 'Right Arm', coords: { x: 65, y: 35 }, radius: 5 },
  { id: 'elbow-left', name: 'Left Elbow', coords: { x: 33, y: 40 }, radius: 4 },
  { id: 'elbow-right', name: 'Right Elbow', coords: { x: 67, y: 40 }, radius: 4 },
  { id: 'wrist-left', name: 'Left Wrist', coords: { x: 30, y: 50 }, radius: 4 },
  { id: 'wrist-right', name: 'Right Wrist', coords: { x: 70, y: 50 }, radius: 4 },
  { id: 'hand-left', name: 'Left Hand', coords: { x: 28, y: 55 }, radius: 4 },
  { id: 'hand-right', name: 'Right Hand', coords: { x: 72, y: 55 }, radius: 4 },
  { id: 'hip-left', name: 'Left Hip', coords: { x: 45, y: 55 }, radius: 5 },
  { id: 'hip-right', name: 'Right Hip', coords: { x: 55, y: 55 }, radius: 5 },
  { id: 'leg-left', name: 'Left Leg', coords: { x: 45, y: 70 }, radius: 5 },
  { id: 'leg-right', name: 'Right Leg', coords: { x: 55, y: 70 }, radius: 5 },
  { id: 'knee-left', name: 'Left Knee', coords: { x: 45, y: 75 }, radius: 4 },
  { id: 'knee-right', name: 'Right Knee', coords: { x: 55, y: 75 }, radius: 4 },
  { id: 'ankle-left', name: 'Left Ankle', coords: { x: 45, y: 90 }, radius: 4 },
  { id: 'ankle-right', name: 'Right Ankle', coords: { x: 55, y: 90 }, radius: 4 },
  { id: 'foot-left', name: 'Left Foot', coords: { x: 43, y: 95 }, radius: 5 },
  { id: 'foot-right', name: 'Right Foot', coords: { x: 57, y: 95 }, radius: 5 },
];

// Zod schema for form validation
const formSchema = z.object({
  symptoms: z.string().min(5, { message: "Please describe your symptoms in more detail" }),
  painLevel: z.number().min(1).max(10),
  duration: z.string().min(1, { message: "Please select how long you've had these symptoms" })
});

type FormData = z.infer<typeof formSchema>;

const durationOptions = [
  { value: "less-than-week", label: "Less than a week" },
  { value: "1-4-weeks", label: "1-4 weeks" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "6-12-months", label: "6-12 months" },
  { value: "over-1-year", label: "Over 1 year" },
  { value: "over-5-years", label: "Over 5 years" },
];

const SymptomExplainer: React.FC = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bodyPartInfo, setBodyPartInfo] = useState<string>('');
  const [bodyPartInfoLoading, setBodyPartInfoLoading] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<'select' | 'describe' | 'results'>('select');

  // Initialize react-hook-form with Zod validation
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      symptoms: '',
      painLevel: 5,
      duration: '',
    },
  });

  const handleBodyPartClick = async (bodyPartId: string, bodyPartName: string) => {
    setSelectedBodyPart(bodyPartId);
    setActiveStep('describe');
    
    // Get general information about the selected body part
    setBodyPartInfoLoading(true);
    try {
      const info = await getBodyPartInformation(bodyPartName);
      setBodyPartInfo(info);
    } catch (error) {
      console.error('Error fetching body part information:', error);
    } finally {
      setBodyPartInfoLoading(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setActiveStep('results');

    try {
      const selectedPart = bodyParts.find(part => part.id === selectedBodyPart);
      if (!selectedPart) throw new Error('No body part selected');

      // Get the label for the duration instead of the value
      const durationLabel = durationOptions.find(option => option.value === data.duration)?.label || data.duration;

      const result = await analyzeSymptoms(
        selectedPart.name,
        data.symptoms,
        data.painLevel,
        durationLabel
      );

      setAnalysis(result);
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      setAnalysis('Sorry, we encountered an error analyzing your symptoms. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedBodyPart(null);
    form.reset();
    setAnalysis('');
    setBodyPartInfo('');
    setActiveStep('select');
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">AI Diagnosis Tool</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column - Body map */}
        <div className="relative bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">
            {activeStep === 'select' ? 'Select where you feel discomfort' : 
             activeStep === 'describe' ? `You selected: ${bodyParts.find(part => part.id === selectedBodyPart)?.name}` :
             `Analysis for: ${bodyParts.find(part => part.id === selectedBodyPart)?.name}`}
          </h3>
          
          {/* Body Map */}
          <div className="relative w-full max-w-[300px] h-[500px] bg-gray-50 rounded-lg border border-gray-200">
            {/* Outline of human body - simple SVG */}
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full"
              style={{ filter: activeStep !== 'select' ? 'blur(0px)' : 'none' }}
            >
              {/* Simple body outline */}
              <path 
                d="M50,10 C45,10 40,15 40,20 C40,25 45,28 50,30 C55,28 60,25 60,20 C60,15 55,10 50,10 Z"
                fill="#e5e7eb" 
                stroke="#9ca3af" 
                strokeWidth="0.5"
              />
              <path 
                d="M43,29 L40,45 L36,60 L40,75 L43,90 L50,95 L57,90 L60,75 L64,60 L60,45 L57,29 C57,29 55,33 50,33 C45,33 43,29 43,29 Z"
                fill="#e5e7eb" 
                stroke="#9ca3af" 
                strokeWidth="0.5"
              />
              <path 
                d="M40,45 L30,60 L28,70" 
                fill="none" 
                stroke="#9ca3af" 
                strokeWidth="0.5"
              />
              <path 
                d="M60,45 L70,60 L72,70" 
                fill="none" 
                stroke="#9ca3af" 
                strokeWidth="0.5"
              />

              {/* Body part hotspots */}
              {bodyParts.map((part) => (
                <circle
                  key={part.id}
                  cx={part.coords.x}
                  cy={part.coords.y}
                  r={activeStep === 'select' ? part.radius : (selectedBodyPart === part.id ? part.radius * 1.5 : part.radius * 0.7)}
                  fill={selectedBodyPart === part.id ? '#3b82f6' : (activeStep === 'select' ? '#6366f1' : '#9ca3af')}
                  fillOpacity={selectedBodyPart === part.id ? 0.8 : (activeStep === 'select' ? 0.6 : 0.2)}
                  stroke={selectedBodyPart === part.id ? '#1d4ed8' : '#4b5563'}
                  strokeWidth="0.5"
                  className={activeStep === 'select' ? 'cursor-pointer hover:fill-blue-500 transition-all duration-200' : ''}
                  onClick={() => activeStep === 'select' && handleBodyPartClick(part.id, part.name)}
                />
              ))}
            </svg>
            
            {/* Instruction overlay */}
            {activeStep === 'select' && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center">
                  <p className="text-gray-700">Click on the area where you're experiencing symptoms</p>
                </div>
              </div>
            )}
          </div>

          {/* Body part information */}
          {bodyPartInfo && activeStep !== 'select' && (
            <div className="mt-6 w-full">
              <h4 className="text-lg font-medium mb-2">About this area:</h4>
              {bodyPartInfoLoading ? (
                <div className="animate-pulse h-32 bg-gray-100 rounded"></div>
              ) : (
                <div className="bg-blue-50 p-4 rounded-lg text-sm prose prose-sm max-w-none">
                  <ReactMarkdown>{bodyPartInfo}</ReactMarkdown>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right column - Form or Results */}
        <div className="bg-white rounded-xl shadow-md p-6">
          {activeStep === 'select' && (
            <div className="flex flex-col items-center justify-center h-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-20 w-20 text-blue-500 mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" 
                />
              </svg>
              <h3 className="text-xl font-semibold text-center mb-2">Get Professional Insights</h3>
              <p className="text-center text-gray-600 mb-4">
                Our AI-powered diagnosis tool provides insights about your symptoms and possible chiropractic approaches.
              </p>
              <p className="text-center text-gray-500 text-sm">
                Begin by selecting the area of discomfort on the body map.
              </p>
            </div>
          )}

          {activeStep === 'describe' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="symptoms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium">Describe your symptoms</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe what you're feeling (e.g., sharp pain, dull ache, stiffness, etc.)"
                            className="w-full mt-2"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="painLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium">Pain Level (1-10)</FormLabel>
                        <FormControl>
                          <div className="pt-4 pb-2">
                            <Slider
                              defaultValue={[field.value]}
                              max={10}
                              min={1}
                              step={1}
                              onValueChange={(vals) => field.onChange(vals[0])}
                            />
                          </div>
                        </FormControl>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Mild (1)</span>
                          <span>Moderate (5)</span>
                          <span>Severe (10)</span>
                        </div>
                        <div className="text-center mt-1 font-medium">
                          Current selection: {field.value}
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-medium">How long have you had these symptoms?</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {durationOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4 flex gap-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={resetForm}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit"
                      className="flex-1"
                      disabled={!form.formState.isValid}
                    >
                      Get Analysis
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          )}

          {activeStep === 'results' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-4">Your Symptom Analysis</h3>
              
              {isLoading ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">Analyzing your symptoms...</p>
                  <p className="text-gray-500 text-sm mt-2">This may take a few moments</p>
                </div>
              ) : (
                <div className="flex-1 overflow-auto">
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                    <h4 className="font-medium mb-2 text-blue-700">AI-Generated Analysis</h4>
                    <div className="prose max-w-none">
                      <ReactMarkdown>{analysis}</ReactMarkdown>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-yellow-700">
                        <span className="font-medium">Important:</span> This analysis is for informational purposes only and is not a medical diagnosis. Always consult with a qualified healthcare provider for proper diagnosis and treatment.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={resetForm}
                    >
                      Start Over
                    </Button>
                    <Button 
                      variant="default"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Book Appointment
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SymptomExplainer;