import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do you take insurance?",
      answer: "Yes, we work with most major providers. Contact us to confirm coverage. We also offer affordable self-pay options for those without insurance."
    },
    {
      question: "What should I expect on my first visit?",
      answer: "A full assessment, discussion of your symptoms, and gentle initial adjustment. The first visit typically takes around 45-60 minutes as we collect your medical history and perform a thorough examination."
    },
    {
      question: "How many sessions will I need?",
      answer: "It varies — we'll customize your care based on progress and comfort. Some patients find relief after 1-2 sessions, while chronic conditions may require ongoing maintenance care. We'll develop a personalized treatment plan after your initial assessment."
    },
    {
      question: "Is chiropractic care safe?",
      answer: "Yes, chiropractic care is considered very safe when performed by a licensed professional. Dr. Carter uses gentle techniques appropriate for each patient's condition and age. We'll discuss any concerns during your consultation."
    },
    {
      question: "Do you offer weekend appointments?",
      answer: "Yes, we're open on Saturdays from 10am to 2pm to accommodate busy schedules. Please book weekend appointments in advance as they tend to fill quickly."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to frequently asked questions about our services, insurance, and what to expect.
          </p>
        </div>
        
        <div className="space-y-6 animate-slide">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
                aria-expanded={openIndex === index}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-blue-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                />
              </button>
              <div 
                className={`px-6 pb-6 transition-all duration-200 ease-in-out ${openIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
