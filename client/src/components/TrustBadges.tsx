import { motion } from 'framer-motion';
import { CheckCircle, Star, FileText } from 'lucide-react';

const TrustBadges = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Trusted & Certified</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-5 mb-4 shadow-sm">
                <CheckCircle className="h-10 w-10 text-blue-500" />
              </div>
              <p className="font-medium text-lg mb-2">Board Certified Chiropractor</p>
              <p className="text-gray-600 text-center">Licensed and certified with advanced training</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-5 mb-4 shadow-sm">
                <Star className="h-10 w-10 text-blue-500" />
              </div>
              <p className="font-medium text-lg mb-2">Top Rated in Pasadena (2024)</p>
              <p className="text-gray-600 text-center">5-star rated practice on Google and Yelp</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-5 mb-4 shadow-sm">
                <FileText className="h-10 w-10 text-blue-500" />
              </div>
              <p className="font-medium text-lg mb-2">Insurance Partners</p>
              <p className="text-gray-600 text-center">Blue Shield, Aetna, Kaiser, and more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
