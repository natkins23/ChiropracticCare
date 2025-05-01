import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';

const CorrectiveExercisesPage = () => {
  return (
    <Layout>
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-1 text-sm text-gray-500">
              <li>
                <Link href="/">
                  <span className="hover:text-blue-500 cursor-pointer">Home</span>
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/#services">
                  <span className="hover:text-blue-500 cursor-pointer">Services</span>
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="font-medium text-gray-900">Corrective Exercises</span>
              </li>
            </ol>
          </nav>

          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Corrective Exercises in Pasadena</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized exercises to strengthen, stabilize, and enhance your body's natural healing abilities.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg overflow-hidden mb-16 shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1599901860904-1e82e87a44be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Patient performing corrective exercises in Pasadena clinic" 
              className="w-full h-96 object-cover"
            />
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 space-y-6"
            >
              <h2 className="text-3xl font-bold mb-4">Our Approach to Corrective Exercises</h2>
              <p className="text-lg text-gray-700">
                At Dr. Carter Chiropractic in Pasadena, we believe that active participation in your own recovery is essential for long-term health. That's why we incorporate corrective exercises as a key component of our care plans. Unlike general fitness routines, our corrective exercises are precisely designed to address your specific musculoskeletal imbalances, movement dysfunctions, and postural challenges.
              </p>
              
              <p className="text-lg text-gray-700">
                We teach our patients special "blueprint" corrective exercises tailored to their unique needs. These targeted movements help strengthen weak areas, improve stability, enhance flexibility, and retrain movement patterns. What makes our approach different is the personalization—no two exercise prescriptions are exactly alike because no two patients have identical needs.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">Benefits of Corrective Exercises</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Reinforce Treatment</h3>
                  <p className="text-gray-700">
                    Corrective exercises help reinforce and prolong the benefits of chiropractic adjustments, helping your body maintain proper alignment between visits.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Active Recovery</h3>
                  <p className="text-gray-700">
                    By actively participating in your recovery, you build strength and resilience that passive treatments alone cannot provide.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Long-Term Solutions</h3>
                  <p className="text-gray-700">
                    Rather than just temporarily relieving symptoms, corrective exercises address underlying movement dysfunctions that contribute to recurring problems.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Injury Prevention</h3>
                  <p className="text-gray-700">
                    Proper movement patterns and balanced musculature significantly reduce your risk of future injuries both in daily activities and athletic endeavors.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">Our Corrective Exercise Process</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">1. Thorough Assessment</h3>
                  <p className="text-gray-700">
                    Before prescribing any exercises, we conduct a comprehensive movement assessment to identify specific dysfunctions, weaknesses, and imbalances. This might include posture analysis, movement screenings, muscle testing, and gait observation. In Pasadena, our clinic uses advanced assessment tools to ensure we capture all relevant data.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">2. Customized Exercise Plan</h3>
                  <p className="text-gray-700">
                    Based on your assessment findings, we design a personalized corrective exercise program addressing your specific needs. We carefully consider your current fitness level, available time, and any limitations to ensure the program is both effective and practical for your lifestyle.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">3. Expert Instruction</h3>
                  <p className="text-gray-700">
                    We take the time to thoroughly demonstrate each exercise, ensuring you understand proper form and technique. We'll watch you perform the movements and provide feedback to prevent any compensatory patterns that could reduce effectiveness or potentially cause injury.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">4. Progressive Advancement</h3>
                  <p className="text-gray-700">
                    As your body adapts and improves, we progressively modify your exercises to continue challenging your system appropriately. This progression ensures ongoing development and prevents plateaus in your recovery or performance.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">5. Regular Reassessment</h3>
                  <p className="text-gray-700">
                    We periodically reassess your movement patterns to track progress and make data-driven adjustments to your exercise program. This ensures that your corrective exercises evolve alongside your changing needs and capabilities.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">Types of Corrective Exercises We Prescribe</h2>
              <p className="text-lg text-gray-700">
                Our Pasadena patients benefit from a wide range of corrective exercises, including:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li><strong>Stability exercises</strong> to improve core strength and spinal support</li>
                <li><strong>Mobility drills</strong> to enhance range of motion in restricted joints</li>
                <li><strong>Neuromuscular retraining</strong> to improve movement quality and coordination</li>
                <li><strong>Postural correction exercises</strong> to address forward head posture, rounded shoulders, and other common issues</li>
                <li><strong>Balance training</strong> to improve proprioception and reduce fall risk</li>
                <li><strong>Functional movement patterns</strong> to enhance daily activities and athletic performance</li>
              </ul>
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-1"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                <div className="bg-primary p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Take Action Today</h3>
                  <p>Learn how corrective exercises can help you achieve lasting results</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Ideal for addressing:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Chronic pain issues</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Postural problems</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Sports injuries</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Movement dysfunctions</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Recovery from surgery</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">What our patients receive:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Personalized exercise plan</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Detailed instruction sheets</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Video demonstrations</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Regular progress assessment</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Expert form correction</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button className="w-full" size="lg">Schedule Assessment</Button>
                    <Button variant="outline" className="w-full" size="lg">Learn More</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Testimonial */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 bg-blue-50 p-8 rounded-lg"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">Patient Success Story</h3>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "The corrective exercises Dr. Carter prescribed for me made all the difference. After years of back pain and trying various treatments around Pasadena, these simple daily exercises have given me control over my health again. The team took time to make sure I understood exactly how to do each movement correctly, and now I rarely experience the debilitating pain that used to be a daily occurrence."
              </blockquote>
              <div className="font-medium">
                <p className="text-primary">David Rodriguez</p>
                <p className="text-sm text-gray-500">Pasadena, CA</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Start Your Recovery Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Take an active role in your health with expert-guided corrective exercises designed specifically for your body's needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-8">Book Your Assessment</Button>
              <Button variant="outline" size="lg" className="px-8">Contact Our Pasadena Office</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default CorrectiveExercisesPage;