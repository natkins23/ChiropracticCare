import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Layout from '../components/Layout';
import SymptomExplainer from '../components/SymptomExplainer';

const SymptomExplainerPage: React.FC = () => {
  return (
    <Layout>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Interactive Symptom Explainer
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Identify and understand your symptoms using our AI-powered tool. Get insights about potential causes and treatment approaches for various conditions.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/conditions">
                <a className="text-blue-600 hover:text-blue-800 font-medium flex items-center underline">
                  View Conditions We Treat
                </a>
              </Link>
              <span className="text-gray-400 mx-2">•</span>
              <Link href="/contact">
                <a className="text-blue-600 hover:text-blue-800 font-medium flex items-center underline">
                  Book an Appointment
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Symptom Explainer Tool */}
      <div className="py-12 bg-gray-50">
        <SymptomExplainer />
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How The Symptom Explainer Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-blue-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Select Area</h3>
              <p className="text-gray-600">Click on the interactive body map to indicate where you're experiencing symptoms or discomfort.</p>
            </motion.div>
            
            <motion.div 
              className="bg-blue-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Describe Symptoms</h3>
              <p className="text-gray-600">Provide details about your symptoms, including pain level and duration, to help our AI generate accurate insights.</p>
            </motion.div>
            
            <motion.div 
              className="bg-blue-50 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 3: Get Insights</h3>
              <p className="text-gray-600">Review AI-generated insights about possible causes, treatments, and recommended next steps for your symptoms.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-700">Important Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              The Symptom Explainer is designed to provide general information and insights about symptoms but is not intended to replace professional medical advice, diagnosis, or treatment.
            </p>
            <p className="text-gray-700">
              Always consult with a qualified healthcare provider for proper evaluation of your specific condition. In case of emergency or severe symptoms, please seek immediate medical attention.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SymptomExplainerPage;