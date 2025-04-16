import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Calendar, ChevronRight } from "lucide-react";

const KneePainTreatment = () => {
  return (
    <Layout>
      <Helmet>
        <title>Chiropractic Treatment for Knee Pain in Pasadena | Atlas Chiropractic</title>
        <meta 
          name="description" 
          content="Experience effective knee pain treatment in Pasadena through our specialized chiropractic care. We address the root causes of knee pain to help you regain mobility and comfort." 
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
            <span className="text-gray-700">Knee Pain</span>
          </div>
          
          {/* H1 Heading */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Chiropractic Treatment for Knee Pain in Pasadena
          </motion.h1>
          
          {/* Section 1: Overview */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Knee Pain and Its Impact</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-2/3">
                <p className="mb-4 text-gray-600">
                  Knee pain affects millions of Americans and can drastically limit your mobility and quality of life. As one of the body's largest and most complex joints, the knee absorbs significant stress during everyday activities. For Pasadena residents who enjoy hiking in the San Gabriel Mountains, shopping along Lake Avenue, or simply navigating daily life, knee pain can be particularly debilitating.
                </p>
                <p className="mb-4 text-gray-600">
                  Knee pain can stem from various causes, including injuries like ACL tears or meniscus damage, degenerative conditions like osteoarthritis, overuse injuries such as runner's knee, or alignment issues that place excess stress on the joint. Many patients come to our Pasadena clinic after months or even years of managing knee discomfort, often having tried medications and other approaches that only temporarily mask symptoms.
                </p>
                <p className="text-gray-600">
                  What makes knee pain particularly challenging is that the source of discomfort isn't always located in the knee itself. Biomechanical issues originating in the spine, hips, or feet can manifest as knee pain, which is why a comprehensive assessment approach is essential for effective treatment. This whole-body perspective is where chiropractic care offers unique advantages over treatments focused solely on the knee joint.
                </p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Image of patient experiencing knee pain]
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Chiropractic Approach to Knee Pain Relief in Pasadena</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Image of doctor examining knee joint]
                  </p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="mb-4 text-gray-600">
                  At our Pasadena chiropractic clinic, we take a comprehensive approach to treating knee pain that addresses both the symptoms and the underlying causes. Unlike conventional treatments that often focus solely on the knee joint, our chiropractors evaluate your entire kinetic chain—from your feet to your spine—to identify all factors contributing to your knee discomfort.
                </p>
                <p className="mb-4 text-gray-600">
                  Your personalized knee pain treatment plan typically begins with precise adjustments to restore proper alignment not only to the knee joint itself but also to related structures like the ankles, hips, and spine. These gentle adjustments help normalize joint movement, reduce inflammation, and create an environment for natural healing. Additionally, we incorporate specialized soft tissue techniques to release tension in the muscles surrounding the knee, including the quadriceps, hamstrings, and calf muscles.
                </p>
                <p className="text-gray-600">
                  For Pasadena patients with chronic knee pain, we often recommend a combination of in-office treatments and at-home exercises designed to strengthen supporting muscles, improve joint stability, and prevent recurrence. This integrated approach has helped many patients achieve lasting relief and avoid invasive procedures like knee surgery. Most importantly, our treatment addresses pain without relying on medication, offering a sustainable solution for long-term knee health.
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Symptoms of Knee Pain</h2>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Localized pain in front, inside, or behind the knee</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Swelling or stiffness in the knee joint</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Difficulty bending or straightening the knee</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Popping, clicking, or grinding sensations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Weakness or instability when weight-bearing</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Pain when climbing stairs or standing from a sitting position</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Discomfort after prolonged sitting or activity</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Limited range of motion in the knee joint</span>
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Experienced Knee Pain Chiropractor in Pasadena</h2>
            
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
                  Dr. Michael Chen specializes in treating knee conditions for patients across Pasadena and neighboring communities like Sierra Madre and San Marino. With advanced training in lower extremity biomechanics and sports rehabilitation, he brings a unique perspective to knee pain treatment that focuses on whole-body mechanics and natural healing.
                </p>
                <p className="text-gray-600">
                  Throughout his 15-year practice in Pasadena, Dr. Chen has helped hundreds of patients avoid knee surgery through his comprehensive chiropractic approach. He regularly works with weekend warriors training at the Rose Bowl, active seniors from the Pasadena Senior Center, and office workers who experience knee pain from prolonged sitting. His commitment to patient education ensures you'll understand not just how to relieve your current knee pain but how to prevent recurrence and maintain optimal joint health.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Sports Rehabilitation Specialist</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Biomechanics Expert</span>
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your First Visit for Knee Pain Treatment</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <ol className="space-y-4">
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Assessment</h3>
                    <p className="text-gray-600">We'll discuss your knee pain history, evaluate your gait and movement patterns, and perform specific orthopedic tests to identify the exact cause of your discomfort.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Full Biomechanical Evaluation</h3>
                    <p className="text-gray-600">We'll analyze how your spine, hips, and feet may be contributing to your knee pain, as problems in these areas often manifest as knee discomfort.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Personalized Treatment Plan</h3>
                    <p className="text-gray-600">Based on our findings, we'll develop a customized knee pain treatment protocol that addresses both your symptoms and the underlying causes.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Initial Treatment</h3>
                    <p className="text-gray-600">You'll receive your first treatment during this visit, which may include gentle adjustments, soft tissue therapy, and other appropriate interventions.</p>
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
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Knee Pain Relief Success Stories in Pasadena</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    DL
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">David L.</h3>
                    <p className="text-sm text-gray-500">Recreational Runner</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"After developing runner's knee while training for the Pasadena Half Marathon, I thought I'd have to give up running altogether. Dr. Chen not only helped resolve my knee pain but identified issues with my running form and foot mechanics that were contributing to the problem. Six weeks later, I completed my race pain-free!"</p>
                <div className="mt-4 flex">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    ME
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Margaret E.</h3>
                    <p className="text-sm text-gray-500">Retired Teacher</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"I was told I needed knee replacement surgery due to osteoarthritis, but wanted to try conservative options first. The comprehensive approach at Dr. Chen's office—combining adjustments, exercises, and nutritional advice—has improved my mobility dramatically. Two years later, I'm still walking the Pasadena shops without pain and no surgery in sight!"</p>
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
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions About Knee Pain</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 font-medium text-gray-800 rounded-t-lg">Can chiropractic care really help with knee pain?</div>
                <div className="p-4 text-gray-600">
                  Yes, chiropractic care is very effective for knee pain. While many people associate chiropractic solely with back pain, our approach addresses the entire musculoskeletal system. By restoring proper alignment and function to the knee joint and surrounding structures, we can effectively reduce pain, improve mobility, and address the root causes of knee problems, not just the symptoms.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 font-medium text-gray-800 rounded-t-lg">How long will I need treatment for my knee pain?</div>
                <div className="p-4 text-gray-600">
                  Treatment duration varies depending on several factors, including the severity and cause of your knee pain, how long you've had the condition, and your overall health. Many patients experience significant improvement within 6-8 visits, though acute conditions may resolve more quickly. During your initial consultation, we'll provide a more specific treatment timeline based on your unique situation.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 font-medium text-gray-800 rounded-t-lg">Will I need X-rays or other imaging for my knee pain?</div>
                <div className="p-4 text-gray-600">
                  Not necessarily. While imaging can be helpful in certain cases, our thorough physical examination often provides the information needed to develop an effective treatment plan. If we suspect a serious underlying condition that requires imaging, or if you've had a recent injury, we may recommend X-rays or refer you for an MRI. We'll always discuss these recommendations with you and explain our rationale.
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
                <h2 className="text-2xl font-bold mb-2">Ready to Overcome Your Knee Pain?</h2>
                <p className="text-blue-100">Schedule your comprehensive assessment today and take the first step toward pain-free movement.</p>
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

export default KneePainTreatment;