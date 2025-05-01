import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface TopBannerProps {
  onBookNowClick: () => void;
}

const TopBanner: React.FC<TopBannerProps> = ({ onBookNowClick }) => {
  return (
    <div className="bg-blue-500 text-white py-2.5 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-3 sm:mb-0 text-center sm:text-left">
            <p className="text-sm md:text-base">
              <span className="font-medium">Professional Chiropractic Care in </span>
              <span className="font-bold">Pasadena, CA</span>
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <a 
              href="tel:6265551234" 
              className="flex items-center bg-white text-blue-500 hover:bg-blue-50 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              <Phone className="mr-1.5 h-4 w-4" />
              <span className="hidden sm:inline">(626) 555-1234</span>
              <span className="sm:hidden">Call</span>
            </a>
            <button 
              onClick={onBookNowClick}
              className="flex items-center bg-orange-500 text-white hover:bg-orange-600 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              <Calendar className="mr-1.5 h-4 w-4" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;