import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';

const SpinalDecompressionPage = () => {
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
                <span className="font-medium text-gray-900">Spinal Decompression</span>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Spinal Decompression in Pasadena</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced, non-surgical treatment for disc-related conditions and spinal pain.
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
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Spinal decompression therapy at Pasadena chiropractic clinic" 
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
              <h2 className="text-3xl font-bold mb-4">What is Spinal Decompression?</h2>
              <p className="text-lg text-gray-700">
                Spinal decompression therapy is a gentle, non-surgical treatment that effectively alleviates many forms of neck and back pain. At Dr. Carter Chiropractic in Pasadena, we offer this advanced therapy as part of our comprehensive approach to spinal health and pain management.
              </p>
              
              <p className="text-lg text-gray-700">
                The treatment works by using a specialized table that gently stretches the spine, creating negative pressure within the discs. This negative pressure has two primary benefits: it pulls bulging or herniated disc material back toward the center of the disc, and it promotes the influx of healing nutrients into the disc area. This process helps relieve pressure on pinched nerves and facilitates the body's natural healing mechanisms.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">Benefits of Spinal Decompression</h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Non-Surgical Relief</h3>
                  <p className="text-gray-700">
                    Spinal decompression offers a non-invasive alternative to surgery for many disc-related conditions, eliminating the risks, recovery time, and costs associated with surgical interventions.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Disc Regeneration</h3>
                  <p className="text-gray-700">
                    The treatment helps create an optimal healing environment for damaged discs by improving circulation and nutrient exchange to injured areas.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Nerve Decompression</h3>
                  <p className="text-gray-700">
                    By relieving pressure on compressed nerves, spinal decompression can effectively address radiating pain, numbness, and tingling in the arms or legs.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Long-Term Relief</h3>
                  <p className="text-gray-700">
                    Many Pasadena patients experience lasting relief from chronic back and neck pain after completing a full course of spinal decompression therapy.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">Conditions Treated with Spinal Decompression</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Herniated or Bulging Discs</h3>
                  <p className="text-gray-700">
                    Spinal decompression is particularly effective for treating herniated or bulging discs by creating negative pressure that helps retract protruding disc material. Many Pasadena patients who were told surgery was their only option have found significant relief through this non-invasive approach.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Degenerative Disc Disease</h3>
                  <p className="text-gray-700">
                    This treatment helps manage the pain associated with degenerative disc disease by promoting improved disc hydration and nutrition, which can slow the degenerative process and alleviate symptoms.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Sciatica</h3>
                  <p className="text-gray-700">
                    By relieving pressure on the sciatic nerve, spinal decompression can significantly reduce the radiating leg pain, numbness, and tingling characteristic of sciatica. This condition is surprisingly common among our Pasadena patients who have desk jobs or long commutes.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Spinal Stenosis</h3>
                  <p className="text-gray-700">
                    The gentle stretching of the spine can help create more space for nerve roots affected by spinal stenosis, offering relief from the associated pain and neurological symptoms.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Failed Back Surgery</h3>
                  <p className="text-gray-700">
                    Patients who have not experienced satisfactory results from previous spine surgery may find relief with spinal decompression as it addresses issues in a completely different, non-invasive manner.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4">The Spinal Decompression Experience</h2>
              <p className="text-lg text-gray-700">
                When you receive spinal decompression therapy at our Pasadena clinic, you can expect a comfortable, relaxing experience. Here's what happens during treatment:
              </p>
              
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                <li>
                  <strong>Initial Assessment:</strong> Before beginning spinal decompression, we conduct a thorough examination, which may include imaging studies, to determine if this therapy is appropriate for your specific condition.
                </li>
                <li>
                  <strong>Personalized Setup:</strong> You'll lie on our specialized decompression table, and the practitioner will apply a comfortable harness system that stabilizes your body in the optimal position for treatment.
                </li>
                <li>
                  <strong>Customized Treatment:</strong> The table is programmed to deliver gentle, intermittent stretching forces to the target area based on your specific needs. The computer-controlled system ensures precision and safety throughout the session.
                </li>
                <li>
                  <strong>Relaxation Period:</strong> Each session typically lasts 20-45 minutes, during which most patients experience a sense of relief and relaxation. Many even fall asleep during treatment.
                </li>
                <li>
                  <strong>Complementary Therapies:</strong> We often combine spinal decompression with other treatments such as therapeutic exercises, electrical stimulation, or heat/cold therapy to enhance results.
                </li>
              </ol>

              <p className="text-lg text-gray-700 mt-4">
                A full course of treatment typically consists of 15-20 sessions over 4-6 weeks, though this varies based on individual conditions and responses. Many patients begin experiencing relief within the first few sessions, with continued improvement throughout the treatment series.
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
                  <h3 className="text-xl font-bold mb-2">Is Spinal Decompression Right For You?</h3>
                  <p>Schedule a consultation at our Pasadena clinic today</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Ideal for treating:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Herniated discs</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Bulging discs</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Degenerative disc disease</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Sciatica</li>
                      <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Spinal stenosis</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Treatment features:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Non-surgical approach</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Comfortable procedure</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Precisely controlled traction</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Individually tailored protocols</li>
                      <li className="flex items-center"><span className="mr-2 text-blue-500">•</span> Comprehensive care approach</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <Button className="w-full" size="lg">Schedule Consultation</Button>
                    <Button variant="outline" className="w-full" size="lg">Call Our Office</Button>
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
                "After being diagnosed with two herniated discs, I was desperate to avoid surgery. Dr. Carter suggested spinal decompression therapy, and I'm so glad they did. The treatment was comfortable, and by my eighth session, I was experiencing significant pain relief. Now I can enjoy walking through the Pasadena gardens and playing with my grandchildren without the debilitating pain I had before. This treatment gave me my life back."
              </blockquote>
              <div className="font-medium">
                <p className="text-primary">Eleanor Kim</p>
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
            <h2 className="text-3xl font-bold mb-6">Avoid Surgery, Choose Decompression</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Experience the benefits of advanced spinal decompression therapy at our Pasadena clinic. Take the first step toward a pain-free life without invasive procedures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-8">Book Your Consultation</Button>
              <Button variant="outline" size="lg" className="px-8">Learn About Insurance Coverage</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default SpinalDecompressionPage;