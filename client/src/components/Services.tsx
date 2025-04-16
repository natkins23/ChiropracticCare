import { motion } from "framer-motion";

const Services = () => {
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
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Treat</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach addresses a wide range of conditions with personalized care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg animate-slide">
            <div className="text-blue-500 text-4xl mb-4">🦴</div>
            <h3 className="text-xl font-semibold mb-2">Back Pain</h3>
            <p className="text-gray-600">Relief for chronic and acute lower back issues. Our gentle adjustments target the source of your discomfort.</p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg animate-slide">
            <div className="text-blue-500 text-4xl mb-4">💢</div>
            <h3 className="text-xl font-semibold mb-2">Neck Pain</h3>
            <p className="text-gray-600">Gentle adjustments to ease stiffness and pain. Perfect for those with desk jobs or text neck.</p>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg animate-slide">
            <div className="text-blue-500 text-4xl mb-4">🏃‍♂️</div>
            <h3 className="text-xl font-semibold mb-2">Sports Injuries</h3>
            <p className="text-gray-600">Rehab for sprains, strains, and soreness. Get back to your active lifestyle faster.</p>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg animate-slide">
            <div className="text-blue-500 text-4xl mb-4">🧘‍♀️</div>
            <h3 className="text-xl font-semibold mb-2">Posture Issues</h3>
            <p className="text-gray-600">Realignment to support posture and comfort. Address the root cause of recurring issues.</p>
          </div>
          
          {/* Service 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg animate-slide">
            <div className="text-blue-500 text-4xl mb-4">🪑</div>
            <h3 className="text-xl font-semibold mb-2">Sciatica</h3>
            <p className="text-gray-600">Targeted relief for radiating nerve pain. Our approach helps reduce inflammation and pressure.</p>
          </div>
          
          {/* Book Now Card */}
          <div className="bg-blue-500 rounded-lg shadow-md p-6 text-white animate-slide">
            <h3 className="text-xl font-semibold mb-4">Not sure what you need?</h3>
            <p className="mb-6">Schedule a consultation and we'll help identify the right treatment for your specific situation.</p>
            <button 
              onClick={() => scrollToSection("quiz")}
              className="inline-block px-6 py-3 bg-white text-blue-500 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Take Symptom Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
