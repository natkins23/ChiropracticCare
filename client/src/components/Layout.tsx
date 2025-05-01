import React, { useState } from "react";
import Navbar from "@/components/Navbar";
// QuizBanner removed, integrated into top banner
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { Tag, Calendar, Phone } from "lucide-react";
import BookNowModal from "./BookNowModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  
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
    <div className="font-sans text-text-dark bg-white">
      {/* Top Banner */}
      <div className="bg-blue-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-3 sm:mb-0 text-center sm:text-left">
              <Tag className="h-5 w-5 hidden sm:block" />
              <p className="text-sm md:text-base">
                <span className="font-medium">Take our </span>
                <button 
                  onClick={() => scrollToSection("quiz")} 
                  className="font-bold underline hover:text-blue-200 transition-colors"
                >
                  symptom quiz
                </button>
                <span className="font-medium"> and receive a <span className="font-bold">10% OFF</span> coupon for your first visit!</span>
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
                onClick={() => setIsBookModalOpen(true)}
                className="flex items-center bg-orange-500 text-white hover:bg-orange-600 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
              >
                <Calendar className="mr-1.5 h-4 w-4" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
      <LiveChat />
      <BookNowModal open={isBookModalOpen} onOpenChange={setIsBookModalOpen} />
    </div>
  );
};

export default Layout;