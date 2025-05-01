import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';

const MassageTherapyPage = () => {
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
                <span className="font-medium text-gray-900">Massage Therapy</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Massage Therapy in Pasadena</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert therapeutic massage to relieve pain, reduce stress, and promote healing and wellness.
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
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Therapeutic massage therapy session in Pasadena" 
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
              <h2 className="text-3xl font-bold mb-4">Our Massage Therapy Approach</h2>
              <p className="text-lg text-gray-700">
                At Dr. Carter Chiropractic in Pasadena, our massage therapy services go far beyond relaxation. While our treatments certainly help you unwind, they're primarily designed as therapeutic interventions to address specific health concerns, support your chiropractic care, and enhance your overall wellbeing.
              </p>
              
              <p className="text-lg text-gray-700">
                Our licensed massage therapists are highly trained professionals who understand the complex interplay between muscles, fascia, nerves, and joints. They work closely with our chiropractors to develop integrated treatment plans that address your unique needs. Whether you're recovering from an injury, managing chronic pain, or simply seeking to maintain optimal health, our massage therapists have the expertise to help.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">Benefits of Massage Therapy</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Pain Reduction</h3>
                  <p className="text-gray-700">
                    Therapeutic massage helps alleviate muscle tension, reduce inflammation, and relieve pain throughout the body—particularly effective for back pain, neck issues, and headaches.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Improved Circulation</h3>
                  <p className="text-gray-700">
                    The pressure applied during massage helps improve blood flow and lymphatic drainage, supporting better delivery of oxygen and nutrients while removing metabolic waste.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Stress Reduction</h3>
                  <p className="text-gray-700">
                    Massage therapy lowers cortisol levels and triggers the release of endorphins, helping counteract the physical effects of stress on your body and mind.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Enhanced Recovery</h3>
                  <p className="text-gray-700">
                    Regular massage can accelerate recovery from injury or intense physical activity by reducing muscle tension and improving tissue health and flexibility.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">Our Massage Techniques</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Deep Tissue Massage</h3>
                  <p className="text-gray-700">
                    This technique uses firm pressure and slow strokes to reach deeper layers of muscle and fascia. It's especially effective for chronic pain, limited mobility, and recovery from injuries. Our Pasadena clients often choose this option for persistent muscle tension and sports injuries.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Swedish Massage</h3>
                  <p className="text-gray-700">
                    A gentler approach using long, flowing strokes, kneading, and circular movements to promote relaxation, improve circulation, and relieve muscle tension. This is an excellent option for first-time massage clients or those looking for stress relief alongside therapeutic benefits.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Sports Massage</h3>
                  <p className="text-gray-700">
                    Specifically designed for athletes and active individuals, sports massage helps prepare the body for optimal performance, recover from events, and address sport-specific concerns. Our therapists understand the unique demands placed on athletes' bodies and tailor treatments accordingly.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Trigger Point Therapy</h3>
                  <p className="text-gray-700">
                    This focused technique identifies and releases tight, painful points in muscles that can refer pain to other areas of the body. By applying sustained pressure to these trigger points, our therapists can help resolve pain patterns that other approaches might miss.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">Integrating with Chiropractic Care</h2>
              <p className="text-lg text-gray-700">
                At our Pasadena practice, massage therapy works hand-in-hand with chiropractic adjustments for optimal results. When muscles are relaxed through massage, chiropractic adjustments become more effective and tend to hold longer. Likewise, proper spinal alignment from chiropractic care helps prevent the muscle tension that massage addresses. Many of our patients experience the greatest benefits when these complementary approaches are used together as part of a comprehensive treatment plan.
              </p>
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
                  <h3 className="text-xl font-bold mb-2">Book Your Massage</h3>
                  <p>Experience expert therapeutic massage therapy in Pasadena</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Our massage therapy helps with:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Chronic pain relief</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Stress & anxiety reduction</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Improved mobility</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Better sleep quality</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Enhanced athletic performance</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Massage Session Options:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> 30-minute targeted relief</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> 60-minute standard session</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> 90-minute deep therapeutic work</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Massage & adjustment packages</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button className="w-full" size="lg">Schedule Massage</Button>
                    <Button variant="outline" className="w-full" size="lg">View Pricing</Button>
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
              <h3 className="text-2xl font-bold mb-6">What Our Clients Say</h3>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "I've tried massage therapy at several places in Pasadena, but the team at Dr. Carter's office is exceptional. Their therapists truly understand the body and how to target specific issues. My weekly massage has become an essential part of managing my chronic neck pain, and I notice a huge difference when I miss a session."
              </blockquote>
              <div className="font-medium">
                <p className="text-primary">Michael Chen</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Feel Better?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Experience the therapeutic benefits of professional massage therapy at our Pasadena clinic. Your body deserves this care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-8">Book Your Massage</Button>
              <Button variant="outline" size="lg" className="px-8">Contact Us With Questions</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default MassageTherapyPage;