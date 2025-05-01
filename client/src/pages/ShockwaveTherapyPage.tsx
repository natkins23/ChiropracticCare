import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';

const ShockwaveTherapyPage = () => {
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
                <span className="font-medium text-gray-900">Shockwave Therapy</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shockwave Therapy in Pasadena</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced, non-invasive treatment for chronic pain and stubborn musculoskeletal conditions.
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
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Shockwave therapy treatment in Pasadena clinic" 
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
              <h2 className="text-3xl font-bold mb-4">What is Shockwave Therapy?</h2>
              <p className="text-lg text-gray-700">
                Shockwave therapy, or Extracorporeal Shock Wave Therapy (ESWT), is a cutting-edge, non-invasive treatment that uses acoustic pressure waves to stimulate healing in injured soft tissues, bones, and joint structures. At Dr. Carter Chiropractic in Pasadena, we're proud to offer this advanced technology as part of our comprehensive treatment options.
              </p>
              
              <p className="text-lg text-gray-700">
                The therapy works by delivering high-energy acoustic waves to damaged tissue, which triggers a cascade of beneficial biological effects. These include increased blood circulation, reversal of chronic inflammation, stimulation of collagen production, and dissolution of calcium deposits. Perhaps most importantly, shockwave therapy activates the body's self-healing mechanisms, helping to regenerate and repair damaged tissue.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">Benefits of Shockwave Therapy</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Non-Invasive Treatment</h3>
                  <p className="text-gray-700">
                    Shockwave therapy offers a non-surgical alternative for conditions that might otherwise require invasive procedures, helping many Pasadena patients avoid surgery.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Rapid Pain Relief</h3>
                  <p className="text-gray-700">
                    Many patients experience significant pain reduction within 1-2 sessions, with continued improvement throughout the treatment course.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Accelerated Healing</h3>
                  <p className="text-gray-700">
                    The therapy stimulates metabolism and enhances blood circulation to regenerate damaged tissue, significantly speeding up the healing process.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Long-Lasting Results</h3>
                  <p className="text-gray-700">
                    Rather than just masking symptoms, shockwave therapy addresses the root cause of pain, often resulting in sustained relief and improved function.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">Conditions Treated with Shockwave Therapy</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Tendinopathies</h3>
                  <p className="text-gray-700">
                    Shockwave therapy is exceptionally effective for treating tendon disorders throughout the body. This includes Achilles tendinitis, patellar tendinitis (jumper's knee), tennis and golfer's elbow, rotator cuff tendinitis, and plantar fasciitis. These conditions are common among our Pasadena patients, especially those with active lifestyles.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Calcifications</h3>
                  <p className="text-gray-700">
                    The therapy helps break down calcium deposits in tendons, particularly in the shoulder (calcific tendinitis), which can be a significant source of pain and limited mobility for many patients.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Chronic Muscle Pain</h3>
                  <p className="text-gray-700">
                    For patients suffering from persistent muscle pain and trigger points that haven't responded to other treatments, shockwave therapy can provide substantial relief by improving circulation and cellular metabolism in the affected areas.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Joint Disorders</h3>
                  <p className="text-gray-700">
                    Certain joint conditions, including early stages of arthritis, can benefit from shockwave therapy's ability to reduce inflammation and promote tissue repair within the joint structures.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Stress Fractures</h3>
                  <p className="text-gray-700">
                    By stimulating bone healing mechanisms, shockwave therapy can accelerate recovery from certain types of stress fractures, particularly those that are slow to heal through conventional methods.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">The Shockwave Therapy Experience</h2>
              <p className="text-lg text-gray-700">
                When you come to our Pasadena clinic for shockwave therapy, here's what you can expect:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li><strong>Comprehensive assessment</strong> to determine if shockwave therapy is right for your condition</li>
                <li><strong>Brief, efficient sessions</strong> typically lasting 5-15 minutes depending on the area being treated</li>
                <li><strong>Minimal discomfort</strong> during treatment—most patients experience only mild sensations during the procedure</li>
                <li><strong>No anesthesia required</strong> and no downtime after treatment—you can return to most activities immediately</li>
                <li><strong>Typically 3-5 sessions</strong> spaced about a week apart for optimal results</li>
                <li><strong>Integration with other therapies</strong> as part of a comprehensive treatment plan when appropriate</li>
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
                  <h3 className="text-xl font-bold mb-2">Is Shockwave Right For You?</h3>
                  <p>Discover if this advanced therapy can help with your condition</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Ideal for treating:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Plantar fasciitis</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Tennis/golfer's elbow</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Achilles tendinitis</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Shoulder pain</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Chronic neck & back pain</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Shockwave advantages:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Non-invasive procedure</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> No medication needed</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Quick treatment sessions</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> No downtime required</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Evidence-based results</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button className="w-full" size="lg">Schedule Consultation</Button>
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
              <h3 className="text-2xl font-bold mb-6">Recovery Story</h3>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "After six months of dealing with plantar fasciitis and trying everything from night splints to custom orthotics, I was skeptical that anything would help. Dr. Carter recommended shockwave therapy, and after just three sessions, I experienced more relief than from all other treatments combined. As someone who lives and works in Pasadena, being able to walk pain-free again has changed my life."
              </blockquote>
              <div className="font-medium">
                <p className="text-primary">Jennifer Williams</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Try Shockwave Therapy?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Don't let chronic pain hold you back any longer. Experience the benefits of this advanced therapy right here in Pasadena.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-8">Schedule Your First Session</Button>
              <Button variant="outline" size="lg" className="px-8">Contact Us With Questions</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ShockwaveTherapyPage;