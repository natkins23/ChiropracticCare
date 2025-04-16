import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
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
    <header className={`fixed w-full top-0 z-50 bg-white ${isScrolled ? "shadow-md" : ""} transition-shadow`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
              <span className="text-primary font-bold text-xl">Dr. Carter Chiropractic</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
            <a href="#services" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("faq"); }}>FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-primary font-medium" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
          </div>
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
          <a href="#services" className="text-gray-600 hover:text-primary px-3 py-2" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a>
          <a href="#testimonials" className="text-gray-600 hover:text-primary px-3 py-2" onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}>Testimonials</a>
          <a href="#faq" className="text-gray-600 hover:text-primary px-3 py-2" onClick={(e) => { e.preventDefault(); scrollToSection("faq"); }}>FAQ</a>
          <a href="#contact" className="text-gray-600 hover:text-primary px-3 py-2" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
