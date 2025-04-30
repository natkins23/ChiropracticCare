import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ClinicInfo = () => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  
  // Office location coordinates for Pasadena
  const location = {
    address: "123 Main St, Pasadena, CA 91101",
    lat: 34.1478,
    lng: -118.1445,
  };

  // Handle map loading animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mapRef.current) {
          // Delay loading to ensure smooth animation
          setTimeout(() => {
            mapRef.current?.classList.remove('opacity-0');
            mapRef.current?.classList.add('opacity-100');
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're conveniently located in downtown Pasadena with ample parking nearby.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">(626) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@drcarterchiro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-600">Mon–Fri: 9am–6pm</p>
                    <p className="text-gray-600">Sat: 10am–2pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                <a 
                  href="tel:6265551234" 
                  className="inline-flex justify-center items-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                
                <a 
                  href={`https://www.openstreetmap.org/directions?from=&to=${location.lat}%2C${location.lng}#map=15/${location.lat}/${location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center w-full px-6 py-3 border border-blue-500 text-base font-medium rounded-md shadow-sm text-blue-500 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="rounded-lg overflow-hidden shadow-md h-96 bg-gray-100 relative">
              <iframe
                ref={mapRef}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-118.16585540771486%2C34.13909775056255%2C-118.12304496765138%2C34.15606005239286&amp;layer=mapnik&amp;marker=34.1478%2C-118.1445"
                className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-500 z-10"
                loading="lazy"
                title="OpenStreetMap showing clinic location"
                allowFullScreen
              ></iframe>

              {/* This div acts as a placeholder while the map is loading */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-0">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4 animate-bounce" />
                  <p className="text-gray-600 text-lg font-medium">Loading Map...</p>
                  <p className="text-gray-600 mt-2">
                    See our location at {location.address}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-500 italic">
              This map uses OpenStreetMap which is free and doesn't require an API key.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
