import { motion } from "framer-motion";
import { Tag, ChevronRight } from "lucide-react";

const QuizBanner = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-blue-500/90 text-white py-2 fixed top-20 w-full z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-center md:justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <p className="text-sm md:text-base font-medium">
              <span className="font-bold">Explore Our Services</span> - Chiropractic Care, Massage Therapy, Corrective Exercises & More
            </p>
          </div>

          <button
            onClick={() => scrollToSection("quiz")}
            className="hidden md:flex items-center text-sm font-bold hover:underline ml-4"
          >
            Take Quiz <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizBanner;
