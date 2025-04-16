import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

type QuizStep = 0 | 1 | 2 | 3;

interface QuizAnswers {
  painLocation: string;
  painDuration: string;
  previousChiro: string;
}

const SymptomQuiz = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    painLocation: '',
    painDuration: '',
    previousChiro: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleOptionClick = (value: string) => {
    if (currentStep === 0) {
      setAnswers({ ...answers, painLocation: value });
    } else if (currentStep === 1) {
      setAnswers({ ...answers, painDuration: value });
    } else if (currentStep === 2) {
      setAnswers({ ...answers, previousChiro: value });
    }

    // Move to next step
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1 as QuizStep);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would submit the data to a server
    alert('Thank you! Your appointment request has been submitted. We\'ll contact you shortly to confirm.');
    
    // Reset form and quiz
    setFormData({ name: '', email: '', phone: '' });
    setAnswers({ painLocation: '', painDuration: '', previousChiro: '' });
    setCurrentStep(0);
  };

  return (
    <section id="quiz" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Does It Hurt?</h2>
          <p className="text-lg text-gray-600">
            Answer a few questions to help us understand your symptoms and recommend the right treatment.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 animate-slide">
          {currentStep === 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Where are you feeling pain?</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Neck', 'Lower Back', 'Mid Back', 'Shoulders', 'Hips/Legs'].map((option) => (
                  <button
                    key={option}
                    className="p-4 border rounded-md hover:bg-blue-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">How long have you had this issue?</h3>
              <div className="grid grid-cols-1 gap-4">
                {['Less than a week', '1–4 weeks', 'Over a month'].map((option) => (
                  <button
                    key={option}
                    className="p-4 border rounded-md hover:bg-blue-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Have you seen a chiropractor before?</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Yes', 'No'].map((option) => (
                  <button
                    key={option}
                    className="p-4 border rounded-md hover:bg-blue-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="text-center">
              <div className="mb-4 text-blue-500">
                <CheckCircle className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4">We Can Help!</h3>
              <p className="text-lg mb-6">
                Based on your answers, we recommend scheduling an initial consultation to assess your{' '}
                <span className="font-medium">{answers.painLocation.toLowerCase()}</span> pain.
              </p>
              <div className="w-full max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-left">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <input type="hidden" name="pain-location" value={answers.painLocation} />
                  <input type="hidden" name="pain-duration" value={answers.painDuration} />
                  <input type="hidden" name="previous-chiro" value={answers.previousChiro} />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                  >
                    Schedule Consultation
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SymptomQuiz;
