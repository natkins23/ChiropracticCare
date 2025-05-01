import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";
import { z } from "zod";
import { Link } from "wouter";

// Extended to allow for more steps
type QuizStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// Extended quiz answers interface with more fields
interface QuizAnswers {
  painLocation: string;
  painDuration: string;
  painIntensity: string;
  painFrequency: string;
  painTriggers: string;
  painTimeOfDay: string;
  painLimitations: string;
  previousChiro: string;
}

// Form validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const SymptomQuiz = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    painLocation: "",
    painDuration: "",
    painIntensity: "",
    painFrequency: "",
    painTriggers: "",
    painTimeOfDay: "",
    painLimitations: "",
    previousChiro: "",
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Animation variants for smooth transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  // Track animation direction
  const [direction, setDirection] = useState(0);

  // Update the message field when reaching the final step
  useEffect(() => {
    if (currentStep === 8) {
      const summaryMessage = `Symptoms summary:\n- Pain location: ${answers.painLocation}\n- Duration: ${answers.painDuration}\n- Intensity: ${answers.painIntensity}\n- Frequency: ${answers.painFrequency}\n- Triggers: ${answers.painTriggers}\n- Time of day: ${answers.painTimeOfDay}\n- Limitations: ${answers.painLimitations}\n- Previous chiropractic care: ${answers.previousChiro}`;
      setFormData((prev) => ({
        ...prev,
        message: summaryMessage,
      }));
    }
  }, [currentStep, answers]);

  const handleOptionClick = (value: string) => {
    setDirection(1); // Going forward

    // Update the appropriate answer based on current step
    switch (currentStep) {
      case 0:
        setAnswers({ ...answers, painLocation: value });
        break;
      case 1:
        setAnswers({ ...answers, painDuration: value });
        break;
      case 2:
        setAnswers({ ...answers, painIntensity: value });
        break;
      case 3:
        setAnswers({ ...answers, painFrequency: value });
        break;
      case 4:
        setAnswers({ ...answers, painTriggers: value });
        break;
      case 5:
        setAnswers({ ...answers, painTimeOfDay: value });
        break;
      case 6:
        setAnswers({ ...answers, painLimitations: value });
        break;
      case 7:
        setAnswers({ ...answers, previousChiro: value });
        break;
    }

    // Move to next step with a slight delay for animation
    setTimeout(() => {
      if (currentStep < 8) {
        setCurrentStep((currentStep + 1) as QuizStep);
      }
    }, 150);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1); // Going backward
      setTimeout(() => {
        setCurrentStep((currentStep - 1) as QuizStep);
      }, 150);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Clear error for this field when user types
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: "",
      });
    }
  };

  const validateForm = (): boolean => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          const path = err.path[0];
          newErrors[path as string] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, this would be an API call
      // await apiRequest('/api/appointments', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     ...formData,
      //     quizAnswers: answers
      //   })
      // });

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setShowSuccess(true);

      // Reset after showing success
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setAnswers({
          painLocation: "",
          painDuration: "",
          painIntensity: "",
          painFrequency: "",
          painTriggers: "",
          painTimeOfDay: "",
          painLimitations: "",
          previousChiro: "",
        });
        setCurrentStep(0);
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Define question content for each step
  const quizSteps = [
    {
      title: "Where are you feeling pain?",
      options: [
        "Neck",
        "Lower Back",
        "Mid Back",
        "Shoulders",
        "Hips/Legs",
        "Headaches",
      ],
      cols: 2,
    },
    {
      title: "How long have you had this issue?",
      options: ["Less than a week", "1–4 weeks", "1-3 months", "Over 3 months"],
      cols: 1,
    },
    {
      title: "How would you rate your pain intensity?",
      options: ["Mild", "Moderate", "Severe", "Varies throughout the day"],
      cols: 2,
    },
    {
      title: "How often do you experience this pain?",
      options: [
        "Constantly",
        "Several times daily",
        "A few times a week",
        "Occasionally",
      ],
      cols: 2,
    },
    {
      title: "What triggers or worsens your pain?",
      options: [
        "Sitting",
        "Standing",
        "Physical activity",
        "Stress",
        "Sleep position",
        "Unknown",
      ],
      cols: 2,
    },
    {
      title: "When is your pain typically at its worst?",
      options: [
        "Morning",
        "Afternoon",
        "Evening",
        "Night",
        "After activity",
        "No pattern",
      ],
      cols: 2,
    },
    {
      title: "How does this pain limit you?",
      options: [
        "Work performance",
        "Sleep quality",
        "Exercise/activities",
        "Daily tasks",
        "Mood/mental health",
        "Not limiting",
      ],
      cols: 2,
    },
    {
      title: "Have you seen a chiropractor before?",
      options: ["Yes, recently", "Yes, but not recently", "No, never"],
      cols: 1,
    },
  ];

  return (
    <section
      id="quiz"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Where Does It Hurt?
          </h2>
          <p className="text-lg text-gray-600">
            Answer a few questions to help us understand your symptoms and
            recommend the right treatment.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          {/* Progress indicator */}
          {currentStep < 8 && (
            <div className="mb-8">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(currentStep / quizSteps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>Start</span>
                <span>
                  Step {currentStep + 1} of {quizSteps.length}
                </span>
              </div>
            </div>
          )}

          {/* Question Steps */}
          <AnimatePresence custom={direction} mode="wait">
            {currentStep < 8 && (
              <motion.div
                key={`step-${currentStep}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="min-h-[300px]"
              >
                <h3 className="text-xl font-semibold mb-6">
                  {quizSteps[currentStep].title}
                </h3>
                <div
                  className={`grid grid-cols-1 ${quizSteps[currentStep].cols === 2 ? "md:grid-cols-2" : ""} gap-4`}
                >
                  {quizSteps[currentStep].options.map((option) => (
                    <motion.button
                      key={option}
                      className="p-4 border rounded-md hover:bg-blue-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => handleOptionClick(option)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <motion.button
                    onClick={handleBack}
                    className="mt-6 text-blue-500 hover:text-blue-700 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    &larr; Back to previous question
                  </motion.button>
                )}
              </motion.div>
            )}

            {/* Final Step - Contact Form */}
            {currentStep === 8 && (
              <motion.div
                key="final-step"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-center"
              >
                {showSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-4 text-green-500">
                      <CheckCircle className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-lg mb-6">
                      Your appointment request has been submitted. We'll contact
                      you shortly to confirm.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-4 text-blue-500">
                      <CheckCircle className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">We Can Help!</h3>
                    <p className="text-lg mb-6">
                      Based on your answers, we recommend scheduling an initial
                      consultation to assess your{" "}
                      <span className="font-medium">
                        {answers.painLocation.toLowerCase()}
                      </span>{" "}
                      pain.
                    </p>
                    <div className="w-full max-w-md mx-auto">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 text-left"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full rounded-md border ${errors.name ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
                          />
                          {errors.name && (
                            <p className="mt-1 text-red-500 text-sm text-left">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 text-left"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-red-500 text-sm text-left">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 text-left"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full rounded-md border ${errors.phone ? "border-red-500" : "border-gray-300"} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50`}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-red-500 text-sm text-left">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 text-left"
                          >
                            Quiz Results
                          </label>
                          <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 resize-none overflow-auto"
                          ></textarea>
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 text-left"
                          >
                            Additional Comments (Optional)
                          </label>
                          <textarea
                            id="message"
                            onChange={handleInputChange}
                            rows={3}
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 resize-none overflow-auto"
                          ></textarea>
                        </div>

                        {/* Hidden fields with quiz answers */}
                        <input
                          type="hidden"
                          name="pain-location"
                          value={answers.painLocation}
                        />
                        <input
                          type="hidden"
                          name="pain-duration"
                          value={answers.painDuration}
                        />
                        <input
                          type="hidden"
                          name="pain-intensity"
                          value={answers.painIntensity}
                        />
                        <input
                          type="hidden"
                          name="pain-frequency"
                          value={answers.painFrequency}
                        />
                        <input
                          type="hidden"
                          name="pain-triggers"
                          value={answers.painTriggers}
                        />
                        <input
                          type="hidden"
                          name="pain-time-of-day"
                          value={answers.painTimeOfDay}
                        />
                        <input
                          type="hidden"
                          name="pain-limitations"
                          value={answers.painLimitations}
                        />
                        <input
                          type="hidden"
                          name="previous-chiro"
                          value={answers.previousChiro}
                        />

                        <div className="mt-6 mb-4">
                          <Link
                            href="/ai-diagnosis-tool"
                            className="text-blue-600 hover:text-blue-800 inline-block font-medium"
                          >
                            Try our AI Diagnosis Tool for more detailed insights
                            →
                          </Link>
                        </div>

                        <motion.button
                          type="submit"
                          className="w-full bg-blue-500 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                        >
                          {isSubmitting
                            ? "Submitting..."
                            : "Schedule Consultation"}
                        </motion.button>

                        <motion.button
                          type="button"
                          onClick={handleBack}
                          className="mt-2 text-blue-500 hover:text-blue-700 font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          &larr; Back to questions
                        </motion.button>
                      </form>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SymptomQuiz;
