import { motion } from "framer-motion";
import { CheckCircle, Star, HelpCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex items-center">
          <div className="lg:w-1/3 mb-10 lg:mb-0 animate-fade">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Dr. James Carter" 
              className="rounded-lg shadow-lg mx-auto lg:mx-0"
              width="400"
              height="500"
            />
          </div>
          <div className="lg:w-2/3 lg:pl-16 animate-slide">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Dr. James Carter</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 10 years of experience helping patients relieve pain and restore mobility, Dr. Carter takes a personalized approach to chiropractic care. Certified, compassionate, and committed to your health — you're in good hands.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Dr. Carter specializes in a gentle adjustment technique that delivers results without discomfort. His practice combines traditional chiropractic methods with modern therapeutic approaches for comprehensive care.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                <span>Board Certified</span>
              </div>
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                <Star className="h-5 w-5 text-blue-500 mr-2" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                <HelpCircle className="h-5 w-5 text-blue-500 mr-2" />
                <span>Continuing Education</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
