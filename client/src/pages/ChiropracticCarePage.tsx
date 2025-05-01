import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';

const ChiropracticCarePage = () => {
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
                <span className="font-medium text-gray-900">Chiropractic Care</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Chiropractic Care in Pasadena</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our gentle yet effective approach to spinal alignment and nervous system function.
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
              src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Chiropractor performing adjustment in Pasadena clinic" 
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
              <h2 className="text-3xl font-bold mb-4">Our Chiropractic Approach</h2>
              <p className="text-lg text-gray-700">
                At Dr. Carter Chiropractic in Pasadena, we provide state-of-the-art spinal correction utilizing gentle chiropractic techniques. Never in the history of chiropractic care have we been able to provide the level of help and expertise that now exists. Our approach to chiropractic care combines the most advanced chiropractic techniques with a thorough understanding of human biomechanics.
              </p>
              
              <p className="text-lg text-gray-700">
                Our adjustments are precise, gentle, and effective. We use a variety of techniques, tailoring our approach to each patient's specific condition, age, and comfort level. Our primary methods include Diversified Technique, Thompson Drop-Table, Activator Methods, and Gonstead Technique—all delivered with the care and attention that Pasadena residents expect from their healthcare providers.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">Benefits of Our Chiropractic Care</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Pain Relief</h3>
                  <p className="text-gray-700">
                    Our adjustments help reduce pain from back problems, neck issues, headaches, and joint discomfort by addressing the root cause rather than just masking symptoms.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Improved Function</h3>
                  <p className="text-gray-700">
                    By restoring proper alignment to the spine, we help improve nervous system function, which controls every cell and organ in your body.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Enhanced Mobility</h3>
                  <p className="text-gray-700">
                    Our patients frequently report better range of motion and flexibility after receiving our specialized chiropractic care.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Preventative Health</h3>
                  <p className="text-gray-700">
                    Regular chiropractic maintenance can help prevent future injuries and support overall wellness beyond just pain management.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">Our Specialized Techniques</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Diversified Technique</h3>
                  <p className="text-gray-700">
                    The most widely used technique among chiropractors in Pasadena and worldwide. This hands-on approach helps restore proper movement to the spine through precise manual adjustments that include a quick, gentle thrust.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Thompson Drop-Table Technique</h3>
                  <p className="text-gray-700">
                    Using a specialized table with drop-away sections, this technique allows for a gentler adjustment with minimal force. The table's sections drop a small distance when the adjustment is delivered, helping to mobilize joints effectively.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Activator Method</h3>
                  <p className="text-gray-700">
                    This technique uses a small, hand-held instrument to deliver a controlled, light, and fast thrust. It's an excellent option for patients who prefer a gentler approach without manual twisting or popping.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Gonstead Technique</h3>
                  <p className="text-gray-700">
                    Known for its precision and specificity, this comprehensive approach includes detailed analysis using X-rays, palpation, and other assessment tools to detect the exact location of misalignments before making precise adjustments.
                  </p>
                </div>
              </div>
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
                  <h3 className="text-xl font-bold mb-2">Schedule Your Appointment</h3>
                  <p>Experience the benefits of expert chiropractic care in Pasadena</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Benefits:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Drug-free pain relief</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Improved mobility</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Enhanced wellness</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Personalized treatment plans</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Common Conditions We Treat:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Back & neck pain</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Headaches & migraines</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Sports injuries</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Sciatica</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Joint pain</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button className="w-full" size="lg">Book Appointment</Button>
                    <Button variant="outline" className="w-full" size="lg">Contact Us</Button>
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
              <h3 className="text-2xl font-bold mb-6">What Our Patients Say</h3>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "After suffering from chronic back pain for years, I finally found relief through Dr. Carter's chiropractic care. Their approach is thorough, gentle, and incredibly effective. As a Pasadena resident, I'm grateful to have such exceptional care so close to home."
              </blockquote>
              <div className="font-medium">
                <p className="text-primary">Sarah Johnson</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Relief?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join the many Pasadena residents who have found relief and improved health through our specialized chiropractic care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-8">Book Your First Visit</Button>
              <Button variant="outline" size="lg" className="px-8">Learn About Our Other Services</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ChiropracticCarePage;