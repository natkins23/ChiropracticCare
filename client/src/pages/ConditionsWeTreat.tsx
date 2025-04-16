import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";

// Define the data structure for condition cards
interface ConditionCard {
  title: string;
  description: string;
  imagePrompt: string;
  link: string;
}

// Condition data array
const conditions: ConditionCard[] = [
  {
    title: "Back Pain",
    description: "We help relieve chronic and acute back pain using precise chiropractic techniques tailored to your body.",
    imagePrompt: "A person holding their lower back in pain, in a bright, clean clinic setting",
    link: "/services/back-pain"
  },
  {
    title: "Neck Pain",
    description: "Reduce stiffness and discomfort with gentle neck adjustments and postural correction.",
    imagePrompt: "A woman touching her neck with discomfort, side profile, soft lighting",
    link: "/services/neck-pain"
  },
  {
    title: "Hip Pain",
    description: "Targeted adjustments and therapy to improve hip joint function and mobility.",
    imagePrompt: "A person stretching their hip, side lunge position, fitness studio background",
    link: "/services/hip-pain"
  },
  {
    title: "Knee Pain",
    description: "Chiropractic care and movement correction for painful or unstable knees.",
    imagePrompt: "Close-up of a person holding their knee while sitting on an exam table",
    link: "/services/knee-pain"
  },
  {
    title: "Sciatica",
    description: "Stop radiating leg pain caused by sciatic nerve compression with personalized care.",
    imagePrompt: "An anatomical illustration of the sciatic nerve with glowing pain area",
    link: "/services/sciatica"
  },
  {
    title: "Carpal Tunnel",
    description: "Numbness, tingling, or wrist pain? We offer natural relief for carpal tunnel syndrome.",
    imagePrompt: "Hands resting on a keyboard with wrist brace, warm-toned office background",
    link: "/services/carpal-tunnel"
  },
  {
    title: "Tension Headaches",
    description: "Alleviate chronic headaches rooted in spinal tension or neck strain.",
    imagePrompt: "Person with eyes closed holding forehead, in a calming wellness space",
    link: "/services/tension-headaches"
  },
  {
    title: "Whiplash",
    description: "Post-accident recovery care for neck injuries, pain, and stiffness.",
    imagePrompt: "Rearview mirror scene showing a car accident with highlighted neck pain overlay",
    link: "/services/whiplash"
  },
  {
    title: "Pinched Nerve",
    description: "Reduce nerve pressure and restore function with safe, effective adjustments.",
    imagePrompt: "Spine model or medical rendering showing a pinched nerve in red",
    link: "/services/pinched-nerve"
  },
  {
    title: "Cervical Disc Herniation",
    description: "We treat disc bulges and herniations with non-surgical spinal decompression.",
    imagePrompt: "Cross-section illustration of a cervical disc herniation with soft background",
    link: "/services/cervical-disc-hernation"
  },
  {
    title: "Pediatric Chiropractic",
    description: "Gentle, kid-friendly care for posture issues, growing pains, and sports injuries.",
    imagePrompt: "Chiropractor smiling while gently adjusting a toddler or young child",
    link: "/services/pediatric"
  },
  {
    title: "Auto Accident Injuries",
    description: "Treat pain and mobility loss after collisions with expert recovery care.",
    imagePrompt: "Injured person holding neck while standing near a car, soft vignette style",
    link: "/services/auto-accident"
  },
  {
    title: "Sports Injury",
    description: "Get back in the game with chiropractic recovery programs for athletes.",
    imagePrompt: "Athlete on a field holding hamstring or ankle in pain, sunny outdoor shot",
    link: "/services/sports-injury"
  }
];

const ConditionsWeTreat = () => {
  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Conditions We Treat | Chiropractor in Pasadena</title>
        <meta name="description" content="Explore all conditions treated at our Pasadena chiropractic clinic. Back pain, sports injuries, neck tension, and more—personalized care that works." />
      </Helmet>
      
      <div className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Conditions We Treat</h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Pasadena chiropractic clinic specializes in treating a wide range of conditions, from back pain and sports injuries to chronic headaches. Through personalized care plans and advanced techniques, we help you overcome pain and restore optimal function.
            </p>
          </motion.div>
          
          {/* Conditions Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {conditions.map((condition, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-md shadow-md p-6 space-y-4 hover:shadow-lg transition-shadow"
                variants={cardVariants}
              >
                {/* Note: In a real implementation, we would replace this with actual images */}
                {/* Image Prompt: {condition.imagePrompt} */}
                <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center mb-4 overflow-hidden">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    {condition.imagePrompt}
                  </p>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800">{condition.title}</h2>
                <p className="text-gray-600">{condition.description}</p>
                <a 
                  href={condition.link} 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Section */}
          <motion.div 
            className="mt-16 bg-blue-50 rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Not Sure What's Causing Your Pain?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a comprehensive consultation with our expert chiropractors to diagnose your condition and develop a personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/quiz" 
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Take Our Symptom Quiz
              </a>
              <a 
                href="/contact" 
                className="inline-flex justify-center items-center px-6 py-3 border border-blue-500 text-base font-medium rounded-md shadow-sm text-blue-500 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ConditionsWeTreat;