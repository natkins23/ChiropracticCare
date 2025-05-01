import { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import SymptomQuiz from "@/components/SymptomQuiz";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import ClinicInfo from "@/components/ClinicInfo";
import CallToAction from "@/components/CallToAction";
import Blog from "@/components/Blog";
import MidPageCTA from "@/components/MidPageCTA";
import { checkAnimatedElements } from "@/lib/animation";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
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
    <Layout>
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
    </Layout>
  );
};

export default Home;
