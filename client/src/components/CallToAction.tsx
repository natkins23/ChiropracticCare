import { motion } from 'framer-motion';

const CallToAction = () => {
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
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-blue-500 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade">Feel Better Starting Today.</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto animate-fade">
          Don't wait to start feeling like yourself again. Book your first adjustment today and take the first step toward relief.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide">
          <button
            onClick={() => scrollToSection("quiz")}
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
          >
            Schedule Adjustment
          </button>
          <a
            href="tel:6265551234"
            className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white hover:bg-white hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
