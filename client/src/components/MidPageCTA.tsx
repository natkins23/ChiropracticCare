import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';

const MidPageCTA = () => {
  return (
    <section 
      id="mid-cta" 
      className="relative py-20 md:py-24 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1604480133435-25b86862d276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Background" 
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content */}
          <div className="mb-8 md:mb-0 md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Learn how we can help with your pain. Reach out to our expert team to schedule an appointment!
            </h2>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-lg hover:bg-orange-600 transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              BOOK NOW
            </a>
            <a 
              href="tel:6265551234" 
              className="inline-flex justify-center items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-lg hover:bg-green-600 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              CALL NOW
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MidPageCTA;