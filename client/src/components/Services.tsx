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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of effective treatments to help you feel your best.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-105 animate-slide">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Chiropractor adjusting a patient" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Chiropractic Care</h3>
              <p className="text-gray-600 mb-4">
                We provide spinal correction utilizing gentle chiropractic techniques. Never in the history of chiropractic have we been able to provide the level of help and expertise that now exists.
              </p>
              <a href="/services/chiropractic-care" className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-105 animate-slide">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1599901860904-1e82e87a44be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="People doing stretches" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Corrective Exercises</h3>
              <p className="text-gray-600 mb-4">
                We teach our patients special "blueprint" exercises to help strengthen and correct their own unique problems. These exercises can be performed in the comfort of your own home.
              </p>
              <a href="/services/corrective-exercises" className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-105 animate-slide">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Shockwave Therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Shockwave Therapy</h3>
              <p className="text-gray-600 mb-4">
                A cutting-edge treatment that uses sound wave pulses to stimulate healing in injured soft tissues. Often used for chronic pain and stubborn injuries.
              </p>
              <a href="/services/shockwave-therapy" className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-105 animate-slide">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Person receiving a back massage" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Massage Therapy</h3>
              <p className="text-gray-600 mb-4">
                Massage therapy offers a natural conservative treatment approach that relieves musculoskeletal pain. Our office provides specific massage and muscular therapy.
              </p>
              <a href="/services/massage-therapy" className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:scale-105 animate-slide">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1598894000396-bc7e3242c9e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Therapist performing soft tissue technique" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Graston Soft Tissue Release</h3>
              <p className="text-gray-600 mb-4">
                We use the Graston Technique to break up scar tissue and adhesions in muscles. It helps restore normal motion and relieve chronic discomfort.
              </p>
              <a href="/services/graston-technique" className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Not Sure Card - We're setting this aside for later as requested */}
          <div className="bg-blue-500 rounded-lg shadow-md p-6 text-white animate-slide hidden">
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
