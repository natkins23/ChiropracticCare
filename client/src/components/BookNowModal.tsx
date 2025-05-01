import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Check, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  appointmentType: z.string().min(1, { message: "Please select an appointment type" }),
  preferredDate: z.string().min(1, { message: "Please select a preferred date" }),
  preferredTime: z.string().min(1, { message: "Please select a preferred time" }),
  isNewPatient: z.enum(["yes", "no"]),
  insuranceInfo: z.string().optional(),
  concerns: z.string().min(10, { message: "Please briefly describe your concerns or symptoms" }),
});

type FormData = z.infer<typeof formSchema>;

interface BookNowModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const appointmentTypes = [
  { value: "initial-consultation", label: "Initial Consultation" },
  { value: "adjustment", label: "Chiropractic Adjustment" },
  { value: "follow-up", label: "Follow-up Visit" },
  { value: "massage-therapy", label: "Massage Therapy" },
  { value: "urgent-care", label: "Urgent Care / Same Day" },
];

const timeSlots = [
  { value: "morning-early", label: "Early Morning (8:00 AM - 10:00 AM)" },
  { value: "morning-late", label: "Late Morning (10:00 AM - 12:00 PM)" },
  { value: "afternoon-early", label: "Early Afternoon (12:00 PM - 2:00 PM)" },
  { value: "afternoon-late", label: "Late Afternoon (2:00 PM - 4:00 PM)" },
  { value: "evening", label: "Evening (4:00 PM - 6:00 PM)" },
];

// Generate next 14 days for date selection
const generateDateOptions = () => {
  const dateOptions = [];
  const today = new Date();
  
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    // Don't include Sundays (0 is Sunday in getDay())
    if (date.getDay() !== 0) {
      const formattedDate = date.toLocaleDateString('en-US', { 
        weekday: 'short',
        month: 'short', 
        day: 'numeric' 
      });
      
      dateOptions.push({
        value: date.toISOString().split('T')[0],
        label: formattedDate
      });
    }
  }
  
  return dateOptions;
};

const BookNowModal: React.FC<BookNowModalProps> = ({ open, onOpenChange }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dateOptions = generateDateOptions();
  
  // Initialize react-hook-form with Zod validation
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      appointmentType: '',
      preferredDate: '',
      preferredTime: '',
      isNewPatient: 'no',
      insuranceInfo: '',
      concerns: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    // In a real application, you would send this data to your backend
    console.log('Appointment form submitted:', data);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    form.reset();
    setIsSubmitted(false);
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      if (!newOpen) {
        // Reset the form when closing the dialog
        resetForm();
      }
      onOpenChange(newOpen);
    }}>
      <DialogContent className="sm:max-w-[650px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Book Your Appointment
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Complete the form below to schedule your appointment with us.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-10 flex flex-col items-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Appointment Request Sent!</h3>
            <p className="text-center text-gray-600 mb-2">
              Thank you for booking with us. We've received your appointment request.
            </p>
            <p className="text-center text-gray-600 mb-6">
              Our staff will confirm your appointment shortly via email or phone.
            </p>
            <DialogClose asChild>
              <Button variant="default" onClick={resetForm}>Close</Button>
            </DialogClose>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="appointmentType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Appointment Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select appointment type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 flex items-center mb-3">
                  <Calendar className="h-5 w-5 mr-2" /> Preferred Appointment Time
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select date" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {dateOptions.map((date) => (
                              <SelectItem key={date.value} value={date.value}>
                                {date.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time.value} value={time.value}>
                                {time.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="isNewPatient"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Are you a new patient?</FormLabel>
                      <div className="flex space-x-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="new-patient-yes"
                            value="yes"
                            checked={field.value === 'yes'}
                            onChange={() => field.onChange('yes')}
                            className="mr-2 h-4 w-4"
                          />
                          <Label htmlFor="new-patient-yes" className="cursor-pointer">
                            Yes
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="new-patient-no"
                            value="no"
                            checked={field.value === 'no'}
                            onChange={() => field.onChange('no')}
                            className="mr-2 h-4 w-4"
                          />
                          <Label htmlFor="new-patient-no" className="cursor-pointer">
                            No
                          </Label>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="insuranceInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Insurance Provider (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Blue Cross, Kaiser, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="concerns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about your symptoms or concerns</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe your symptoms, pain level, duration, etc." 
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4 flex justify-end space-x-2">
                <DialogClose asChild>
                  <Button variant="outline" type="button">Cancel</Button>
                </DialogClose>
                <Button type="submit" disabled={form.formState.isSubmitting} className="bg-primary hover:bg-primary/90">
                  {form.formState.isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookNowModal;