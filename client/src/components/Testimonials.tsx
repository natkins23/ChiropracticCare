import { motion } from "framer-motion";
import { Star } from "lucide-react";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-yellow-400">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5" fill="currentColor" />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Dr. Carter helped me get back on my feet after a car accident. Kind, professional, and super effective.",
      author: "Samantha M.",
      rating: 5
    },
    {
      id: 2,
      text: "I've seen a lot of chiropractors. Dr. Carter is by far the best — you can feel he really cares.",
      author: "Luis G.",
      rating: 5
    },
    {
      id: 3,
      text: "After months of lower back pain, I finally found relief. Dr. Carter didn't just treat my symptoms—he fixed the underlying issue.",
      author: "Michael T.",
      rating: 5
    },
    {
      id: 4,
      text: "The office is clean, the staff is friendly, and Dr. Carter takes time to explain everything. Best healthcare experience I've had in years.",
      author: "Jennifer P.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Patients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our patients have to say about their experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 rounded-lg p-8 shadow-sm animate-slide"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-center mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-lg italic mb-6">{`"${testimonial.text}"`}</p>
              <div className="font-medium">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
