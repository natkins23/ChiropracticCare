import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Calendar, ChevronRight } from "lucide-react";

const SciaticaTreatment = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sciatica Treatment in Pasadena | Atlas Chiropractic</title>
        <meta 
          name="description" 
          content="Find relief from sciatic nerve pain with our specialized chiropractic treatments in Pasadena. Our non-invasive approach targets the root cause of your sciatica for lasting relief." 
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
            <span className="text-gray-700">Sciatica</span>
          </div>
          
          {/* H1 Heading */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Specialized Sciatica Treatment in Pasadena
          </motion.h1>
          
          {/* Section 1: Overview */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What Is Sciatica and How Does It Affect Your Life?</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-2/3">
                <p className="mb-4 text-gray-600">
                  Sciatica is a common condition characterized by pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg. This condition typically affects only one side of your body and can range from a mild ache to excruciating, sharp pain that feels like an electric shock.
                </p>
                <p className="mb-4 text-gray-600">
                  For residents of Pasadena and surrounding communities, sciatica can significantly impact quality of life. Simple activities like walking through Old Town Pasadena, gardening in your Altadena backyard, or even sitting at your desk job in South Lake Avenue's business district become painful challenges. Many patients tell us they've given up hobbies they love, struggled with sleep, and even experienced depression due to persistent sciatic pain.
                </p>
                <p className="text-gray-600">
                  While most people think of sciatica as a back problem, it's actually a symptom of an underlying condition, not a diagnosis itself. Common causes include herniated discs, bone spurs, spinal stenosis, or piriformis syndrome—a condition where the piriformis muscle in your buttock irritates the sciatic nerve. Understanding the true source of your sciatic pain is essential for effective treatment, which is why our Pasadena chiropractic approach begins with thorough diagnosis.
                </p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Anatomical image showing the sciatic nerve pathway]
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Section 2: Chiropractic Approach */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Chiropractic Approach to Treating Sciatica in Pasadena</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Image of doctor performing sciatic adjustment]
                  </p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="mb-4 text-gray-600">
                  At our Pasadena chiropractic clinic, we take a comprehensive, multi-faceted approach to sciatica relief that focuses on the root cause of your pain, not just the symptoms. Unlike medication that temporarily masks discomfort, our treatments address the underlying spinal misalignments, disc issues, or muscle imbalances that are compressing or irritating your sciatic nerve.
                </p>
                <p className="mb-4 text-gray-600">
                  Your personalized sciatica treatment plan typically begins with precise chiropractic adjustments to restore proper alignment to your spine, particularly the lower lumbar region and pelvis. These gentle adjustments help relieve pressure on the sciatic nerve, reduce inflammation, and create an environment for natural healing. Additionally, we incorporate specialized soft tissue techniques to release tension in muscles that may be compressing the nerve, including the piriformis and other gluteal muscles.
                </p>
                <p className="text-gray-600">
                  For Pasadena patients with chronic sciatica, we often recommend specific therapeutic exercises to strengthen supporting muscles, improve flexibility, and prevent recurrence. These exercises, combined with ergonomic and lifestyle modifications, empower you to take an active role in your recovery and long-term spinal health. Unlike surgical options that carry significant risks, our non-invasive approach has helped countless patients achieve lasting relief from sciatic pain without drugs or surgery.
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Symptoms of Sciatica</h2>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Pain radiating from lower back through buttock and down the leg</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Sharp, burning, or electric shock-like pain</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Numbness, tingling, or weakness in the affected leg</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Pain that worsens when sitting</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Difficulty standing up or walking</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Pain that increases with coughing, sneezing, or laughing</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">"Pins and needles" sensation in foot or toes</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Typically affects only one side of the body</span>
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Experienced Sciatica Chiropractor in Pasadena</h2>
            
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
                  Dr. Michael Chen is Pasadena's trusted expert in treating sciatica and other nerve compression syndromes. His specialization in neuromuscular conditions and advanced training in spinal decompression therapy make him uniquely qualified to address even the most challenging sciatic nerve cases. Over his 15-year practice in Pasadena, he has developed a reputation for helping patients find relief when other treatments have failed.
                </p>
                <p className="text-gray-600">
                  Many of Dr. Chen's sciatica patients come to his Pasadena office after trying multiple other approaches—from pain medications to injections—with limited success. His comprehensive approach, focusing on both immediate pain relief and addressing the underlying causes, has helped hundreds of local residents from Lake Avenue to East Washington Boulevard avoid surgery and return to their active California lifestyles. He takes pride in educating his patients about their condition and involving them as active participants in their recovery.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Spinal Decompression Specialist</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Neuromuscular Expert</span>
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your First Visit for Sciatica Treatment</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <ol className="space-y-4">
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Assessment</h3>
                    <p className="text-gray-600">We'll discuss your symptoms in detail and perform specialized orthopedic and neurological tests to pinpoint the exact cause of your sciatic pain.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Digital Posture Analysis</h3>
                    <p className="text-gray-600">Using advanced imaging technology, we'll evaluate your posture and spinal alignment to determine how these factors may be contributing to your sciatic nerve compression.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Personalized Treatment Plan</h3>
                    <p className="text-gray-600">Based on our findings, we'll develop a tailored sciatica treatment protocol that addresses your specific condition, lifestyle, and health goals.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Initial Relief Treatment</h3>
                    <p className="text-gray-600">Most patients receive their first treatment on the initial visit, which may include gentle adjustments, decompression therapy, and soft tissue techniques designed to provide immediate relief.</p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.section>
          
          {/* Section 6: Patient Testimonials */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sciatica Relief Success Stories in Pasadena</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    TK
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Thomas K.</h3>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"After a year of debilitating sciatic pain that made sitting at my desk nearly impossible, I was desperate for relief. Dr. Chen identified that my sedentary work in the tech industry was contributing to my problem. His treatment plan combined adjustments with specific stretches and ergonomic changes at my workstation. Within six weeks, my pain was reduced by 90%, and I can now work comfortably again."</p>
                <div className="mt-4 flex">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    AM
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Angela M.</h3>
                    <p className="text-sm text-gray-500">Retail Manager</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"The sciatic pain I developed during pregnancy was excruciating. I couldn't walk through the Paseo without stopping to rest, and sleeping was nearly impossible. Dr. Chen's gentle prenatal-safe treatments provided relief when nothing else worked. His expertise in treating sciatic pain specifically related to pregnancy was a lifesaver. I continued treatment postpartum and am now completely pain-free."</p>
                <div className="mt-4 flex">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Section 7: FAQ */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions About Sciatica</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 font-medium text-gray-800 rounded-t-lg">How long does it take to recover from sciatica with chiropractic care?</div>
                <div className="p-4 text-gray-600">
                  Recovery time varies significantly depending on the cause and severity of your sciatica, how long you've had the condition, and other individual factors. Many patients experience noticeable relief within 2-3 treatments, though complete resolution typically requires a series of visits. Acute cases may resolve within a few weeks, while chronic conditions may require more extended care. During your initial consultation, we'll provide a more specific timeline based on your unique situation.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 font-medium text-gray-800 rounded-t-lg">Is chiropractic treatment for sciatica painful?</div>
                <div className="p-4 text-gray-600">
                  Most patients find chiropractic treatment for sciatica to be gentle and relieving rather than painful. Our techniques are specifically designed to minimize discomfort while maximizing effectiveness. Some patients may experience mild soreness following their first few treatments, similar to what you might feel after exercise, but this typically resolves quickly and is often followed by significant pain relief. We always adjust our approach based on your comfort level and feedback.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 font-medium text-gray-800 rounded-t-lg">Can sciatica come back after chiropractic treatment?</div>
                <div className="p-4 text-gray-600">
                  While many patients experience long-lasting relief from sciatica with proper chiropractic care, recurrence is possible, especially if underlying contributing factors like posture, work habits, or specific activities aren't addressed. This is why our approach includes not just treatment but education about ergonomics, exercises, and lifestyle modifications to help prevent recurrence. Many patients benefit from occasional maintenance visits to ensure optimal spinal health and prevent the return of sciatic pain.
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white"
          >
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Ready to Overcome Sciatic Pain?</h2>
                <p className="text-blue-100">Schedule your comprehensive assessment today and take the first step toward lasting relief.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+16265551234" className="flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>(626) 555-1234</span>
                </a>
                <Link href="/#contact" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default SciaticaTreatment;