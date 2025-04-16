import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Calendar, ChevronRight } from "lucide-react";

const HipPainTreatment = () => {
  return (
    <Layout>
      <Helmet>
        <title>Chiropractic Treatment for Hip Pain in Pasadena | Atlas Chiropractic</title>
        <meta 
          name="description" 
          content="Suffering from hip pain in Pasadena? Our experienced chiropractors provide non-invasive, effective hip pain treatment to help you regain mobility and live pain-free." 
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
            <span className="text-gray-700">Hip Pain</span>
          </div>
          
          {/* H1 Heading */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Chiropractic Treatment for Hip Pain in Pasadena
          </motion.h1>
          
          {/* Section 1: Overview */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What Is Hip Pain and How It Affects You</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-2/3">
                <p className="mb-4 text-gray-600">
                  Hip pain is a common condition that affects people of all ages in Pasadena and beyond, impacting every aspect of your daily life. The hip joint is one of the body's largest weight-bearing joints, and when functioning properly, it allows for fluid movement during walking, running, and other activities. Unfortunately, when hip pain strikes, even simple movements can become excruciating challenges.
                </p>
                <p className="mb-4 text-gray-600">
                  The causes of hip pain are diverse, ranging from muscle imbalances and joint dysfunction to arthritis, bursitis, tendinitis, and injuries. Many Pasadena residents develop hip pain due to prolonged sitting at desk jobs, repetitive sports movements, or even compensating for other areas of pain or dysfunction in the body. Age-related changes, previous injuries, and structural issues like leg length discrepancies can also contribute to persistent hip discomfort.
                </p>
                <p className="text-gray-600">
                  Living with hip pain means more than just physical discomfort—it can drastically limit your ability to enjoy Pasadena's beautiful hiking trails, walk through Old Town's charming streets, or even perform basic household tasks. Many patients report that hip pain disrupts their sleep, affects their mood, and gradually restricts their participation in the activities they once loved.
                </p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Image of patient experiencing hip pain discomfort]
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How Our Chiropractor Helps Patients with Hip Pain in Pasadena</h2>
            
            <div className="md:flex gap-8 items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-sm px-4 text-center">
                    [Image of doctor performing hip adjustment]
                  </p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="mb-4 text-gray-600">
                  At our Pasadena chiropractic clinic, we recognize that hip pain rarely exists in isolation. Our comprehensive approach begins with a thorough evaluation of not just your hip joint, but your entire body's biomechanics, including your spine, pelvis, knees, and feet. This holistic assessment allows us to identify the true source of your hip pain—whether it originates in the hip joint itself or stems from imbalances elsewhere in your body.
                </p>
                <p className="mb-4 text-gray-600">
                  Our hip pain treatment protocol typically includes gentle chiropractic adjustments to restore proper alignment and function to your hip joint and pelvis. These precise adjustments help normalize joint movement, reduce pressure on irritated nerves, and improve range of motion. We complement these adjustments with specialized soft tissue techniques to release tension in the muscles surrounding your hip, including the gluteals, hip flexors, and piriformis.
                </p>
                <p className="text-gray-600">
                  Many Pasadena patients experience significant hip pain relief after just a few chiropractic sessions. However, for lasting results, we often incorporate corrective exercises to strengthen supporting muscles and improve mobility. We also provide practical guidance on modifying daily activities and improving ergonomics to prevent hip pain recurrence, whether you're a downtown office worker, a weekend warrior at Brookside Park, or a senior enjoying retirement in the foothills.
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Symptoms of Hip Pain</h2>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Pain in the hip joint, groin, outer thigh, or buttocks</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Difficulty walking or limping</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Stiffness or decreased range of motion in the hip</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Pain that worsens with activity or at night</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Difficulty climbing stairs or getting in/out of vehicles</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Clicking, popping, or locking sensation in the hip</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Referred pain to the lower back or knee</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">Muscle tightness in surrounding areas</span>
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Experienced Hip Pain Chiropractor in Pasadena</h2>
            
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
                  Dr. Michael Chen has become Pasadena's trusted expert for hip pain relief, with specialized training in lower extremity biomechanics and soft tissue rehabilitation. His approach to hip pain combines traditional chiropractic adjustments with cutting-edge movement assessment techniques that identify subtle dysfunctions often missed in conventional examinations.
                </p>
                <p className="text-gray-600">
                  With over 15 years of clinical experience in the Pasadena area, Dr. Chen has helped patients from all walks of life overcome debilitating hip pain—from Caltech professors who spend long hours sitting, to active seniors who want to continue enjoying Pasadena's outdoor amenities, to competitive athletes training at the Rose Bowl. His comprehensive approach addresses not just the symptoms but the underlying causes of hip dysfunction.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Movement Pattern Specialist</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Functional Rehabilitation Expert</span>
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your First Visit for Hip Pain Chiropractic Care</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <ol className="space-y-4">
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Comprehensive Assessment</h3>
                    <p className="text-gray-600">We'll discuss your hip pain history, evaluate your gait and movement patterns, and perform specific orthopedic tests to identify the exact cause of your discomfort.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Customized Treatment Plan</h3>
                    <p className="text-gray-600">Based on our findings, we'll develop a personalized hip pain treatment protocol that may include adjustments, soft tissue therapy, and specific exercises tailored to your condition.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Initial Treatment</h3>
                    <p className="text-gray-600">You'll receive your first treatment during this visit, which may include gentle hip adjustments, myofascial release techniques, and other appropriate interventions to begin your healing process.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Home Care Instructions</h3>
                    <p className="text-gray-600">We'll provide specific exercises, stretches, and lifestyle modifications to support your recovery between visits and maximize your treatment results.</p>
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
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Hip Pain Relief Success Stories in Pasadena</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    JM
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Jennifer M.</h3>
                    <p className="text-sm text-gray-500">South Pasadena Resident</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"After months of hip pain that kept me from my morning walks in the Arroyo, I finally visited Dr. Chen. His thorough approach identified issues with my gait that other doctors had missed. After six weeks of treatments, I'm back to walking 3 miles daily with no pain!"</p>
                <div className="mt-4 flex">
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    RK
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Robert K.</h3>
                    <p className="text-sm text-gray-500">Avid Cyclist</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"As someone who regularly bikes through the San Gabriel Mountains, developing hip pain was devastating. Dr. Chen's combination of adjustments, soft tissue work, and personalized exercises not only eliminated my pain but actually improved my cycling performance!"</p>
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
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions About Hip Pain</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 font-medium text-gray-800 rounded-t-lg">How can chiropractic care help my hip pain?</div>
                <div className="p-4 text-gray-600">
                  Chiropractic care addresses hip pain by correcting misalignments in the hip joint and surrounding structures, improving joint mobility, reducing muscle tension, and enhancing overall biomechanical function. By restoring proper alignment and movement patterns, chiropractic treatment helps reduce inflammation, relieve pressure on irritated nerves, and create an environment for natural healing.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 font-medium text-gray-800 rounded-t-lg">How many treatments will I need for my hip pain?</div>
                <div className="p-4 text-gray-600">
                  The number of treatments varies depending on the cause and severity of your hip pain, as well as how long you've been experiencing symptoms. Many Pasadena patients notice improvement after 4-6 sessions, though acute conditions may resolve more quickly, while chronic conditions may require more extensive care. We'll provide you with a clear treatment timeline after your initial assessment.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 font-medium text-gray-800 rounded-t-lg">Is chiropractic treatment for hip pain covered by insurance?</div>
                <div className="p-4 text-gray-600">
                  Many insurance plans cover chiropractic care for hip pain, especially when it's medically necessary. Our Pasadena office works with most major insurance providers and can verify your coverage before treatment begins. We also offer affordable payment plans for patients without insurance coverage to ensure everyone has access to effective hip pain relief.
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
                <h2 className="text-2xl font-bold mb-2">Ready to Overcome Your Hip Pain?</h2>
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

export default HipPainTreatment;