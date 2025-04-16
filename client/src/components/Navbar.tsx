import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// Data for the two dropdown menus
const conditionsData = [
  "Back Pain",
  "Neck Pain",
  "Hip Pain",
  "Knee Pain",
  "Sciatica",
  "Carpal Tunnel",
  "Tension Headaches",
  "Whiplash",
  "Pinched Nerve",
  "Cervical Disc Herniation",
  "Pediatric",
  "Auto Accident Injuries",
  "Sports Injury"
];

const therapiesData = [
  "Chiropractic Care",
  "Massage Therapy",
  "Myofascial Release",
  "Graston Soft Tissue Release",
  "Corrective Exercises",
  "Spinal Decompression",
  "Shockwave Therapy",
  "Service Areas (Pasadena, Altadena, San Marino)",
  "Same-Day Appointments",
  "Personal Injury Cases",
  "Family Chiropractic"
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSections, setMobileSections] = useState<{
    conditions: boolean;
    therapies: boolean;
  }>({
    conditions: false,
    therapies: false,
  });

  const conditionsRef = useRef<HTMLDivElement>(null);
  const therapiesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (conditionsRef.current && !conditionsRef.current.contains(event.target as Node)) &&
        (therapiesRef.current && !therapiesRef.current.contains(event.target as Node))
      ) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for larger fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileSection = (section: 'conditions' | 'therapies') => {
    setMobileSections({
      ...mobileSections,
      [section]: !mobileSections[section],
    });
  };

  return (
    <header className={`fixed w-full top-0 z-50 bg-white ${isScrolled ? "shadow-md" : ""} transition-shadow`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
              <span className="text-primary font-bold text-xl md:text-2xl">Dr. Carter Chiropractic</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-primary font-medium text-base lg:text-lg px-3 py-2 rounded-md hover:bg-gray-50" 
              onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary font-medium text-base lg:text-lg px-3 py-2 rounded-md hover:bg-gray-50" 
              onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
            >
              About
            </a>
            
            {/* Conditions We Treat dropdown */}
            <div 
              ref={conditionsRef}
              className="relative" 
              onMouseEnter={() => handleMouseEnter('conditions')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="flex items-center text-gray-700 hover:text-primary font-medium text-base lg:text-lg px-3 py-2 rounded-md hover:bg-gray-50 focus:outline-none"
                aria-expanded={activeDropdown === 'conditions'}
                aria-haspopup="true"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setActiveDropdown(activeDropdown === 'conditions' ? null : 'conditions'); 
                }}
              >
                <span>Conditions We Treat</span>
                <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === 'conditions' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Conditions dropdown */}
              <div 
                className={`absolute left-0 mt-1 w-80 bg-white rounded-md shadow-lg overflow-hidden transform origin-top transition-all duration-200 ${
                  activeDropdown === 'conditions'
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Conditions We Treat</h3>
                  <ul className="grid grid-cols-1 gap-y-2">
                    {conditionsData.map((condition, idx) => (
                      <li key={idx}>
                        <a 
                          href="#services" 
                          className="text-gray-700 hover:text-primary hover:underline text-base block px-2 py-1 rounded-md hover:bg-gray-50"
                          onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                        >
                          {condition}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
                  <a 
                    href="#quiz" 
                    className="flex items-center text-base font-medium text-primary hover:text-blue-700"
                    onClick={(e) => { e.preventDefault(); scrollToSection("quiz"); }}
                  >
                    Take our symptom quiz <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Therapies & Treatments dropdown */}
            <div 
              ref={therapiesRef}
              className="relative" 
              onMouseEnter={() => handleMouseEnter('therapies')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="flex items-center text-gray-700 hover:text-primary font-medium text-base lg:text-lg px-3 py-2 rounded-md hover:bg-gray-50 focus:outline-none"
                aria-expanded={activeDropdown === 'therapies'}
                aria-haspopup="true"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setActiveDropdown(activeDropdown === 'therapies' ? null : 'therapies'); 
                }}
              >
                <span>Therapies & Treatments</span>
                <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === 'therapies' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Therapies dropdown */}
              <div 
                className={`absolute right-0 mt-1 w-80 bg-white rounded-md shadow-lg overflow-hidden transform origin-top transition-all duration-200 ${
                  activeDropdown === 'therapies'
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Therapies & Treatments</h3>
                  <ul className="grid grid-cols-1 gap-y-2">
                    {therapiesData.map((therapy, idx) => (
                      <li key={idx}>
                        <a 
                          href="#services" 
                          className="text-gray-700 hover:text-primary hover:underline text-base block px-2 py-1 rounded-md hover:bg-gray-50"
                          onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                        >
                          {therapy}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-primary font-medium text-base lg:text-lg px-3 py-2 rounded-md hover:bg-gray-50" 
              onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}
            >
              Testimonials
            </a>
            <a 
              href="#blog" 
              className="text-gray-700 hover:text-primary font-medium text-base lg:text-lg px-3 py-2 rounded-md hover:bg-gray-50" 
              onClick={(e) => { e.preventDefault(); scrollToSection("blog"); }}
            >
              Blog
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-primary font-medium text-base lg:text-lg px-3 py-2 rounded-md hover:bg-gray-50" 
              onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
            >
              Contact
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              aria-label="Toggle mobile menu" 
              className="text-gray-500 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200 px-4 py-4`}>
        <div className="flex flex-col space-y-3">
          <a 
            href="#home" 
            className="text-gray-700 hover:text-primary font-medium text-lg px-3 py-2 rounded-md hover:bg-gray-50" 
            onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-gray-700 hover:text-primary font-medium text-lg px-3 py-2 rounded-md hover:bg-gray-50" 
            onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
          >
            About
          </a>
          
          {/* Mobile Conditions We Treat accordion */}
          <div className="border-b border-gray-100 pb-2">
            <button 
              className="w-full flex justify-between items-center text-gray-700 hover:text-primary font-medium text-lg px-3 py-2 rounded-md hover:bg-gray-50 focus:outline-none"
              onClick={() => toggleMobileSection('conditions')}
            >
              <span>Conditions We Treat</span>
              <ChevronDown className={`h-6 w-6 transition-transform duration-200 ${mobileSections.conditions ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile conditions list */}
            <div className={`mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
              mobileSections.conditions ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-3 py-2 space-y-2">
                {conditionsData.map((condition, idx) => (
                  <a 
                    key={idx} 
                    href="#services" 
                    className="block text-gray-600 hover:text-primary hover:bg-gray-50 text-base py-2 px-4 rounded-md"
                    onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                  >
                    {condition}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Therapies & Treatments accordion */}
          <div className="border-b border-gray-100 pb-2">
            <button 
              className="w-full flex justify-between items-center text-gray-700 hover:text-primary font-medium text-lg px-3 py-2 rounded-md hover:bg-gray-50 focus:outline-none"
              onClick={() => toggleMobileSection('therapies')}
            >
              <span>Therapies & Treatments</span>
              <ChevronDown className={`h-6 w-6 transition-transform duration-200 ${mobileSections.therapies ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile therapies list */}
            <div className={`mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
              mobileSections.therapies ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-3 py-2 space-y-2">
                {therapiesData.map((therapy, idx) => (
                  <a 
                    key={idx} 
                    href="#services" 
                    className="block text-gray-600 hover:text-primary hover:bg-gray-50 text-base py-2 px-4 rounded-md"
                    onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                  >
                    {therapy}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <a 
            href="#testimonials" 
            className="text-gray-700 hover:text-primary font-medium text-lg px-3 py-2 rounded-md hover:bg-gray-50" 
            onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}
          >
            Testimonials
          </a>
          <a 
            href="#blog" 
            className="text-gray-700 hover:text-primary font-medium text-lg px-3 py-2 rounded-md hover:bg-gray-50" 
            onClick={(e) => { e.preventDefault(); scrollToSection("blog"); }}
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-primary font-medium text-lg px-3 py-2 rounded-md hover:bg-gray-50" 
            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
