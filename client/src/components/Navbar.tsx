import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// Service dropdown categories and items
const servicesData = {
  "Conditions We Treat": [
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
  ],
  "Therapies & Treatments": [
    "Chiropractic Care",
    "Massage Therapy",
    "Myofascial Release",
    "Graston Soft Tissue Release",
    "Corrective Exercises",
    "Spinal Decompression",
    "Shockwave Therapy"
  ],
  "Specialized Areas": [
    "Service Areas (Pasadena, Altadena, San Marino)",
    "Same-Day Appointments",
    "Personal Injury Cases",
    "Family Chiropractic"
  ]
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  
  const servicesRef = useRef<HTMLDivElement>(null);
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
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
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
    setIsServicesOpen(false);
    setOpenMobileCategory(null);
    
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

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const toggleMobileCategory = (category: string) => {
    if (openMobileCategory === category) {
      setOpenMobileCategory(null);
    } else {
      setOpenMobileCategory(category);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 bg-white ${isScrolled ? "shadow-md" : ""} transition-shadow`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
              <span className="text-primary font-bold text-xl">Dr. Carter Chiropractic</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
            
            {/* Services dropdown */}
            <div 
              ref={servicesRef}
              className="relative" 
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button 
                className="flex items-center text-gray-600 hover:text-primary font-medium focus:outline-none"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                onClick={(e) => { e.preventDefault(); setIsServicesOpen(!isServicesOpen); }}
              >
                <span>Services</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega menu dropdown */}
              <div 
                className={`absolute left-0 mt-1 w-screen max-w-screen-lg bg-white rounded-md shadow-lg overflow-hidden transform origin-top transition-all duration-200 ${
                  isServicesOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {Object.entries(servicesData).map(([category, services], idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{category}</h3>
                      <ul className="space-y-2">
                        {services.map((service, serviceIdx) => (
                          <li key={serviceIdx}>
                            <a 
                              href="#services" 
                              className="text-gray-600 hover:text-primary hover:underline text-sm"
                              onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                            >
                              {service}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Need personalized help?</span>
                  <a 
                    href="#quiz" 
                    className="text-sm font-medium text-primary hover:text-blue-700"
                    onClick={(e) => { e.preventDefault(); scrollToSection("quiz"); }}
                  >
                    Take our symptom quiz →
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#testimonials" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Testimonials</a>
            <a href="#blog" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("blog"); }}>Blog</a>
            <a href="#faq" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("faq"); }}>FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              aria-label="Toggle mobile menu" 
              className="text-gray-500 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200 px-2 py-4`}>
        <div className="flex flex-col space-y-3">
          <a href="#home" className="text-gray-600 hover:text-primary px-3 py-2" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a>
          <a href="#about" className="text-gray-600 hover:text-primary px-3 py-2" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
          
          {/* Mobile services accordion */}
          <div className="border-b border-gray-100 pb-2">
            <button 
              className="w-full flex justify-between items-center text-gray-600 hover:text-primary px-3 py-2 focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                openMobileCategory ? setOpenMobileCategory(null) : scrollToSection("services");
              }}
            >
              <span className="font-medium">Services</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-200`} />
            </button>
            
            {/* Mobile services categories */}
            <div className="pl-4 space-y-2 mt-1">
              {Object.entries(servicesData).map(([category, services], idx) => (
                <div key={idx} className="border-l-2 border-gray-200 pl-3">
                  <button 
                    className="w-full flex justify-between items-center text-gray-700 hover:text-primary py-1 focus:outline-none"
                    onClick={() => toggleMobileCategory(category)}
                  >
                    <span className="text-sm font-medium">{category}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${openMobileCategory === category ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {/* Services under each category */}
                  <div className={`pl-3 space-y-1 mt-1 overflow-hidden transition-all duration-200 ${openMobileCategory === category ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {services.map((service, serviceIdx) => (
                      <a 
                        key={serviceIdx} 
                        href="#services" 
                        className="block text-sm text-gray-600 hover:text-primary hover:underline py-1"
                        onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <a href="#testimonials" className="text-gray-600 hover:text-primary px-3 py-2" onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Testimonials</a>
          <a href="#blog" className="text-gray-600 hover:text-primary px-3 py-2" onClick={(e) => { e.preventDefault(); scrollToSection("blog"); }}>Blog</a>
          <a href="#faq" className="text-gray-600 hover:text-primary px-3 py-2" onClick={(e) => { e.preventDefault(); scrollToSection("faq"); }}>FAQ</a>
          <a href="#contact" className="text-gray-600 hover:text-primary px-3 py-2" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
