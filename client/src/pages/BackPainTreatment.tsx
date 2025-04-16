import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Calendar, ChevronRight } from "lucide-react";

const BackPainTreatment = () => {
  return (
    <Layout>
      <Helmet>
        <title>Chiropractic Treatment for Back Pain in Pasadena | Atlas Chiropractic</title>
        <meta 
          name="description" 
          content="Suffering from back pain in Pasadena? Our experienced chiropractors provide non-invasive, effective back pain treatment to help you regain mobility and live pain-free." 
        />
      </Helmet>
      
      <div className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link href="/">
              <a className="hover:text-blue-600 transition-colors">Home</a>
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/conditions">
              <a className="hover:text-blue-600 transition-colors">Conditions We Treat</a>
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-700">Back Pain</span>
          </div>
          
          {/* H1 Heading */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Chiropractic Treatment for Back Pain in Pasadena
          </motion.h1>
          
          {/* Section 1: Overview */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What Is Back Pain and How It Affects You</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-2/3">
                <p className="mb-4 text-gray-600">
                  Back pain is one of the most common musculoskeletal conditions affecting adults in the United States, with nearly 80% of people experiencing it at some point in their lives. It ranges from a dull, constant ache to sudden, sharp sensations that can leave you immobilized. Many of our Pasadena patients come to us after months or even years of living with chronic back discomfort that medication only temporarily masks.
                </p>
                <p className="mb-4 text-gray-600">
                  Back pain can stem from various causes including injuries, poor posture, repetitive movements, degenerative conditions, spinal misalignments, or even stress. Whether you're experiencing pain from sitting at a desk all day in downtown Pasadena offices, from gardening in your Altadena home, or from a sports injury at the Rose Bowl, the impact on your quality of life is significant. Simple activities like picking up groceries, playing with your children, or even getting a good night's sleep can become challenging.
                </p>
                <p className="text-gray-600">
                  While many people turn to pain medication as their first option, these treatments often address only the symptoms and not the underlying cause of back pain. This is where chiropractic care offers a different approach—targeting the root causes of discomfort to provide lasting relief and improved function.
                </p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Image of patient experiencing back pain discomfort]
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How Our Chiropractor Helps Patients with Back Pain in Pasadena</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Image of doctor performing spinal adjustment]
                  </p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="mb-4 text-gray-600">
                  At our Pasadena chiropractic clinic, we take a comprehensive approach to back pain relief that addresses not just your symptoms but the underlying issues causing your discomfort. Our treatment begins with a thorough examination to identify spinal misalignments, muscle imbalances, and movement patterns that contribute to your specific back pain.
                </p>
                <p className="mb-4 text-gray-600">
                  Pasadena chiropractic care for back pain typically includes a personalized combination of gentle spinal adjustments to restore proper alignment, decompression therapy to relieve pressure on discs and nerves, and soft tissue techniques to release tight muscles. We may also incorporate therapeutic exercises that strengthen your core and stabilize your spine, helping to prevent future episodes of back pain.
                </p>
                <p className="text-gray-600">
                  Unlike medication that masks symptoms, our chiropractic approach corrects the biomechanical issues causing your pain while improving your body's natural healing capabilities. Many patients experience significant relief after just a few sessions, though the exact treatment plan depends on your specific condition and health goals.
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Symptoms of Back Pain</h2>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Aching or stabbing pain in the lower, middle, or upper back</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Radiating pain into the hips, buttocks, or legs (sciatica)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Stiffness or reduced range of motion</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Muscle spasms or tightness</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Numbness or tingling in back, legs, or feet</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Difficulty standing straight or sitting for long periods</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Sleep disturbances due to pain</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Pain that worsens with certain movements</span>
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Experienced Back Pain Chiropractor in Pasadena</h2>
            
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
                  Dr. Michael Chen has been practicing chiropractic care in Pasadena for over 15 years, with specialized training in treating complex back pain cases. A graduate of Southern California University of Health Sciences, Dr. Chen holds additional certifications in spinal decompression therapy and sports rehabilitation. He has helped thousands of Pasadena residents find relief from chronic back pain when other treatments failed.
                </p>
                <p className="text-gray-600">
                  Dr. Chen takes pride in his patient-centered approach, spending ample time to understand each person's unique pain patterns and lifestyle factors. His expertise in biomechanics and spinal health has made him a trusted resource for back pain sufferers throughout the Pasadena area, from Lake Avenue to Colorado Boulevard and beyond.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Certified in Spinal Decompression</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Sports Rehabilitation Specialist</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">15+ Years Experience</span>
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your First Visit for Back Pain Chiropractic Care</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <ol className="space-y-4">
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Assessment</h3>
                    <p className="text-gray-600">We'll discuss your pain history, perform physical tests, and evaluate your posture and movement patterns to identify the root causes of your back pain.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Personalized Treatment Plan</h3>
                    <p className="text-gray-600">Based on your assessment, we'll create a customized care plan addressing your specific type of back pain, with clear goals and timeline for improvement.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Initial Treatment</h3>
                    <p className="text-gray-600">If appropriate, we'll perform your first gentle adjustment during this visit to begin your healing process immediately and provide initial relief.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">At-Home Care Instructions</h3>
                    <p className="text-gray-600">You'll leave with specific exercises, posture recommendations, and lifestyle adjustments to support your healing between appointments.</p>
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
            <h2 className="text-2xl font-semibold mb-4">Start Your Back Pain Recovery in Pasadena Today</h2>
            
            <p className="mb-6 max-w-2xl mx-auto">
              You don't have to live with back pain any longer. Our Pasadena chiropractic clinic has helped thousands of patients just like you return to a pain-free, active lifestyle. Take the first step toward lasting relief today.
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

export default BackPainTreatment;