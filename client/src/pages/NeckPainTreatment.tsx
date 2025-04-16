import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Calendar, ChevronRight } from "lucide-react";

const NeckPainTreatment = () => {
  return (
    <Layout>
      <Helmet>
        <title>Chiropractic Treatment for Neck Pain in Pasadena | Atlas Chiropractic</title>
        <meta 
          name="description" 
          content="Suffering from neck pain in Pasadena? Our chiropractors provide specialized neck pain treatment to reduce stiffness, improve mobility, and restore comfort." 
        />
      </Helmet>
      
      <div className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link href="/">
              <span className="hover:text-blue-600 transition-colors cursor-pointer">Home</span>
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/conditions">
              <span className="hover:text-blue-600 transition-colors cursor-pointer">Conditions We Treat</span>
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-700">Neck Pain</span>
          </div>
          
          {/* H1 Heading */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Chiropractic Treatment for Neck Pain in Pasadena
          </motion.h1>
          
          {/* Section 1: Overview */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What Is Neck Pain and How It Affects You</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-2/3">
                <p className="mb-4 text-gray-600">
                  Neck pain is a common complaint that affects countless adults in Pasadena and beyond. It can range from mild discomfort to severe, debilitating pain that radiates into the shoulders, upper back, and arms. Your neck (cervical spine) supports the full weight of your head—about 11 pounds on average—so it's particularly vulnerable to injury, strain, and degenerative conditions. Many of our Pasadena patients come to us after spending months living with chronic neck discomfort that medication only temporarily masks.
                </p>
                <p className="mb-4 text-gray-600">
                  The causes of neck pain are diverse, including poor posture (particularly with increased screen time and "tech neck"), whiplash from auto accidents, workplace strain from desk setups in Pasadena offices, stress-related muscle tension, and degenerative conditions like cervical arthritis or disc issues. This pain doesn't just affect your neck—it can impact every aspect of your daily life, making it difficult to drive, work at your computer, sleep comfortably, or even turn your head in conversation.
                </p>
                <p className="text-gray-600">
                  While many people resort to pain relievers or simply try to ignore their neck pain, these approaches fail to address the underlying structural or muscular issues causing your discomfort. This is why chiropractic care offers an effective alternative—identifying and treating the root causes rather than just managing symptoms.
                </p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Image of patient experiencing neck pain discomfort]
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Section 2: Find Relief */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How Our Chiropractor Helps Patients with Neck Pain in Pasadena</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Image of doctor performing neck adjustment]
                  </p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="mb-4 text-gray-600">
                  At our Pasadena chiropractic clinic, we take a comprehensive approach to treating neck pain that begins with a thorough examination. Using both physical assessment and, when necessary, diagnostic imaging, we identify the precise source of your discomfort—whether it's misaligned vertebrae, muscle tension, nerve impingement, or a combination of factors. This thorough evaluation ensures your treatment targets the specific causes of your neck pain.
                </p>
                <p className="mb-4 text-gray-600">
                  Pasadena chiropractic care for neck pain typically includes gentle cervical adjustments to restore proper alignment and mobility to the neck vertebrae. These precise manipulations help relieve pressure on nerves, reduce muscle tension, and improve range of motion. We combine these adjustments with complementary therapies such as myofascial release, therapeutic exercises, and postural education to provide complete care for your neck condition.
                </p>
                <p className="text-gray-600">
                  Our patients frequently report not just pain relief but improved sleep, increased energy, better concentration, and enhanced overall well-being after treatment. Unlike pain medications, our approach addresses the structural issues causing your discomfort while supporting your body's natural healing processes—providing longer-lasting results without the side effects of medication.
                </p>
              </div>
            </div>
          </motion.section>
          
          {/* Section 3: Symptoms */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Symptoms of Neck Pain</h2>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Pain that worsens with movement or when holding your head in one position</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Stiffness and limited range of motion in your neck</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Muscle tightness, spasms, or knots in the neck and shoulders</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Headaches that start at the base of the skull and radiate upward</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Radiating pain, tingling, or numbness in shoulders, arms, or hands</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Grinding or popping sounds when turning your head</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Difficulty sleeping due to neck discomfort</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Fatigue or irritability from chronic pain</span>
                </li>
              </ul>
            </div>
          </motion.section>
          
          {/* Section 4: Meet the Doctor */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Experienced Neck Pain Chiropractor in Pasadena</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/4 mb-6 md:mb-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Image of chiropractor headshot]
                  </p>
                </div>
              </div>
              <div className="md:w-3/4">
                <p className="mb-4 text-gray-600">
                  Dr. Michael Chen brings over 15 years of specialized experience in neck pain treatment to our Pasadena chiropractic clinic. As a graduate of Southern California University of Health Sciences with advanced certification in cervical spine care and rehabilitation, Dr. Chen has successfully treated thousands of neck pain cases, ranging from minor strains to complex post-surgical conditions.
                </p>
                <p className="text-gray-600">
                  With a patient-centered approach, Dr. Chen is known for his gentle and precise adjustment techniques that are especially beneficial for neck conditions where comfort and careful handling are paramount. His expertise in cervical biomechanics and comprehensive understanding of the nervous system's relationship to neck health has made him a sought-after specialist for Pasadena residents dealing with acute and chronic neck issues.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Certified in Cervical Rehabilitation</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Neck Pain Specialist</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Advanced Soft Tissue Techniques</span>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Section 5: What to Expect */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your First Visit for Neck Pain Chiropractic Care</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <ol className="space-y-4">
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Detailed Neck Pain Evaluation</h3>
                    <p className="text-gray-600">We'll discuss your neck pain history, when it started, what makes it better or worse, and perform specific orthopedic and neurological tests to identify the exact source of your discomfort.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Posture and Movement Analysis</h3>
                    <p className="text-gray-600">We assess your posture, how you move your neck, and check for alignment issues, muscle imbalances, or restricted motion that contribute to your pain.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Customized Treatment Plan</h3>
                    <p className="text-gray-600">Based on our findings, we'll develop a personalized care plan specifically for your neck condition, outlining recommended treatments, frequency, and expected timeline for improvement.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Initial Gentle Treatment</h3>
                    <p className="text-gray-600">Most patients receive their first neck adjustment during the initial visit, carefully performed to ensure comfort while beginning the process of restoring proper alignment and mobility.</p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.section>
          
          {/* Section 6: Schedule */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-blue-600 text-white rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Start Your Neck Pain Recovery in Pasadena Today</h2>
            
            <p className="mb-6 max-w-2xl mx-auto">
              You don't have to let neck pain limit your life any longer. Our Pasadena chiropractic clinic has helped thousands of patients just like you regain comfort, mobility, and quality of life through effective, non-invasive neck pain treatment. Take the first step toward a life free from neck discomfort today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/booking" 
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-colors"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Online
              </a>
              <a 
                href="tel:+16265551234" 
                className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (626) 555-1234
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default NeckPainTreatment;