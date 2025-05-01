import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';

const GrastonTechniquePage = () => {
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
                <span className="font-medium text-gray-900">Graston Technique</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Graston Technique in Pasadena</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized instrument-assisted soft tissue mobilization for effective scar tissue breakdown and fascial release.
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
              src="https://images.unsplash.com/photo-1598894000396-bc7e3242c9e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Graston Technique being performed at Pasadena chiropractic clinic" 
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
              <h2 className="text-3xl font-bold mb-4">What is the Graston Technique?</h2>
              <p className="text-lg text-gray-700">
                The Graston Technique is a form of instrument-assisted soft tissue mobilization (IASTM) that uses specially designed stainless steel instruments to detect and effectively treat areas exhibiting soft tissue fibrosis or chronic inflammation. At Dr. Carter Chiropractic in Pasadena, we employ this advanced technique to help patients overcome a wide range of musculoskeletal conditions.
              </p>
              
              <p className="text-lg text-gray-700">
                This innovative approach enables our practitioners to break down scar tissue and fascial restrictions, as well as stretch connective tissue and muscle fibers. The instruments are used to comb over and identify areas of restriction and adhesion, then apply a controlled amount of microtrauma to the area. This controlled microtrauma initiates an inflammation response that triggers the body's natural healing processes, resulting in remodeling of affected soft tissues.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">Benefits of Graston Technique</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Breaks Down Scar Tissue</h3>
                  <p className="text-gray-700">
                    The Graston instruments effectively break down cross-links between scar tissue and normal tissue, allowing for improved mobility and function.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Enhances Blood Flow</h3>
                  <p className="text-gray-700">
                    The technique increases blood flow to affected areas, which accelerates the healing process and helps deliver nutrients to injured tissues.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Resolves Chronic Conditions</h3>
                  <p className="text-gray-700">
                    Many Pasadena patients find that Graston Technique helps resolve stubborn conditions that haven't responded to other treatments.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Faster Rehabilitation</h3>
                  <p className="text-gray-700">
                    Patients typically experience reduced recovery time from injuries when Graston Technique is incorporated into their treatment plan.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">Conditions Treated with Graston Technique</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Tendinopathies</h3>
                  <p className="text-gray-700">
                    The Graston Technique is highly effective for various tendon disorders including tennis and golfer's elbow, Achilles tendinitis, patellar tendinitis, and rotator cuff issues. Many of our Pasadena patients who participate in sports or repetitive activities benefit from this targeted approach.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Myofascial Pain and Restrictions</h3>
                  <p className="text-gray-700">
                    For patients experiencing myofascial pain syndromes, trigger points, or fascial restrictions, Graston Technique helps release these adhesions and restore normal tissue mobility. This is particularly beneficial for chronic muscle tension in the neck, shoulders, and back.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Scar Tissue and Adhesions</h3>
                  <p className="text-gray-700">
                    Post-surgical or post-injury scar tissue can limit motion and cause pain. The Graston Technique is specifically designed to address these issues by breaking down problematic scar tissue and promoting more functional tissue remodeling.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Chronic Inflammation</h3>
                  <p className="text-gray-700">
                    Areas of chronic inflammation often respond well to Graston Technique as it helps reset the inflammatory cycle and promotes proper healing rather than ongoing irritation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Repetitive Strain Injuries</h3>
                  <p className="text-gray-700">
                    Conditions like carpal tunnel syndrome, IT band syndrome, and plantar fasciitis—which are common among our Pasadena patients due to workplace demands or active lifestyles—often show significant improvement with Graston Technique treatment.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">The Graston Technique Experience</h2>
              <p className="text-lg text-gray-700">
                When you receive Graston Technique treatment at our Pasadena clinic, here's what you can expect:
              </p>
              
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                <li>
                  <strong>Thorough assessment:</strong> Before treatment, we'll conduct a comprehensive evaluation to determine if Graston Technique is appropriate for your condition and which areas need to be addressed.
                </li>
                <li>
                  <strong>Treatment preparation:</strong> The treatment area will be warmed, often with a moist heat pack, to prepare the tissues and enhance the effectiveness of the technique.
                </li>
                <li>
                  <strong>Instrument application:</strong> Your practitioner will use one or more of the specialized stainless steel Graston instruments to scan and then treat the affected areas. You may feel a sensation similar to a deep massage, with some mild discomfort when problematic areas are addressed.
                </li>
                <li>
                  <strong>Complementary procedures:</strong> After the Graston treatment, we often incorporate stretching exercises and rehabilitative movements to maximize the benefits of the tissue mobilization.
                </li>
                <li>
                  <strong>Post-treatment care:</strong> You may experience some redness, mild bruising, or soreness after treatment—this is a normal part of the inflammatory response that promotes healing. We'll provide specific self-care instructions to optimize your results.
                </li>
              </ol>

              <p className="text-lg text-gray-700 mt-4">
                Most patients require a series of treatments (typically 6-10 sessions) for optimal results, though the exact number varies based on the specific condition and individual response to treatment.
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
                  <h3 className="text-xl font-bold mb-2">Schedule Your Treatment</h3>
                  <p>Experience the benefits of Graston Technique in Pasadena</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Great for treating:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Chronic soft tissue injuries</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Post-surgical scarring</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Tendonitis & tendinosis</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Muscle adhesions</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Range of motion restrictions</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Why choose Dr. Carter's:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Certified Graston practitioners</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Complete treatment protocols</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Integrated with other therapies</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Personalized rehabilitation plans</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button className="w-full" size="lg">Book Your Appointment</Button>
                    <Button variant="outline" className="w-full" size="lg">Contact For Questions</Button>
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
                "After a shoulder injury that wouldn't heal despite months of traditional therapy, I was referred to Dr. Carter for Graston Technique. I was amazed at how quickly I began seeing results. The treatment detected and addressed adhesions I didn't even know I had. As a Pasadena resident who enjoys hiking in the San Gabriel Mountains, regaining my full shoulder mobility has been life-changing. I'm now back to all my favorite activities without pain."
              </blockquote>
              <div className="font-medium">
                <p className="text-primary">Thomas Alvarez</p>
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
            <h2 className="text-3xl font-bold mb-6">Break Through Your Recovery Plateau</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              If you've been struggling with a soft tissue injury that just won't heal completely, Graston Technique at our Pasadena clinic might be the solution you've been looking for.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-8">Schedule Consultation</Button>
              <Button variant="outline" size="lg" className="px-8">Learn About Related Services</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default GrastonTechniquePage;