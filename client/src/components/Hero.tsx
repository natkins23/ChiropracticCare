import { motion } from "framer-motion";
import { useState } from "react"; // Import useState

const Hero = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false); // Add state for modal

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Relief Starts Here.</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Experience gentle, effective chiropractic care tailored to your needs. Whether you're dealing with back pain, neck tension, or recovering from injury — we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setIsBookModalOpen(true)} // Open modal on click
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Book Now
              </button>
              <a 
                href="tel:6265551234" 
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Call Today
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 mt-10 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Chiropractor treating patient" 
              className="rounded-lg shadow-xl mx-auto lg:ml-auto"
              width="600"
              height="400"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* BookNowModal component (placeholder - needs implementation) */}
    <BookNowModal open={isBookModalOpen} onOpenChange={setIsBookModalOpen} /> 
  );
};

export default Hero;