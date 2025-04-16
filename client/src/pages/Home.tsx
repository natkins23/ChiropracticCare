import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import SymptomQuiz from "@/components/SymptomQuiz";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import ClinicInfo from "@/components/ClinicInfo";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import LiveChat from "@/components/LiveChat";
import MidPageCTA from "@/components/MidPageCTA";
import { checkAnimatedElements } from "@/lib/animation";

const Home = () => {
  useEffect(() => {
    // Initial check for animations
    checkAnimatedElements();

    // Add scroll event listener for animations
    window.addEventListener("scroll", checkAnimatedElements);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", checkAnimatedElements);
    };
  }, []);

  return (
    <div className="font-sans text-text-dark bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MidPageCTA />
      <Testimonials />
      <SymptomQuiz />
      <Blog />
      <FAQ />
      <TrustBadges />
      <ClinicInfo />
      <CallToAction />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Home;
