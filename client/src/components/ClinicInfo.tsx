import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ClinicInfo = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're conveniently located in downtown Pasadena with ample parking nearby.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="animate-slide">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Main St, Pasadena, CA 91101</p>
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
              
              <div className="mt-8">
                <a 
                  href="tel:6265551234" 
                  className="inline-flex justify-center items-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-slide">
            {/* Google Map Placeholder */}
            <div className="rounded-lg overflow-hidden shadow-sm h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-medium">Google Maps Integration</p>
                <p className="text-gray-600 mt-2">Interactive map showing office location and directions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
