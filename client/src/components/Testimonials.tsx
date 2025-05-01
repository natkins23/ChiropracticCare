import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

// Star rating component
type StarRatingProps = { rating: number };
const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="w-5 h-5" fill="currentColor" />
    ))}
  </div>
);

// Testimonial data interface
interface Testimonial {
  id: number;
  text: string;
  author: string;
  rating: number;
  avatar: string;
}

// Testimonials array
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Dr. Carter helped me get back on my feet after a car accident. Kind, professional, and super effective. I highly recommend Dr. Carter to anyone seeking gentle, yet effective chiropractic care.",
    author: "Samantha M.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    text: "I've seen a lot of chiropractors. Dr. Carter is by far the best — you can feel he really cares. His personalized approach makes all the difference.",
    author: "Luis G.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 3,
    text: "After months of lower back pain, I finally found relief. Dr. Carter didn't just treat my symptoms—he fixed the underlying issue. His attention to detail and follow-up truly set him apart.",
    author: "Michael T.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=34",
  },
  {
    id: 4,
    text: "The office is clean, the staff is friendly, and Dr. Carter takes time to explain everything. Best healthcare experience I've had in years. I couldn’t be happier with the results.",
    author: "Jennifer P.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=35",
  },
];

// Framer Motion variants for slide animations
const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
};

const Testimonials: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const count = testimonials.length;
  const index = ((page % count) + count) % count;
  const paginate = (dir: number) => setPage([page + dir, dir]);

  // Auto-scroll every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <section id="testimonials" className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Hear From Our Patients</h2>
        <p className="text-gray-600">
          Don't just take our word for it. See what our patients have to say
          about their experience.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full h-96 mx-auto overflow-hidden">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 bg-gray-50 rounded-2xl p-8 shadow-lg flex flex-col justify-between"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) paginate(1);
              else if (info.offset.x > 100) paginate(-1);
            }}
          >
            {/* Avatar & Author */}
            <div className="flex items-center">
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <StarRating rating={testimonials[index].rating} />
                <div className="flex items-center text-gray-600 mt-1 text-sm">
                  <FaGoogle className="w-4 h-4 mr-1" />
                  {testimonials[index].author}
                </div>
              </div>
            </div>

            {/* Text */}
            <p className="text-lg italic my-6 flex-grow">
              “{testimonials[index].text}”
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover	bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage([idx, idx > index ? 1 : -1])}
            className={`w-3 h-3 rounded-full ${
              idx === index ? "bg-yellow-400" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>

      {/* Google Review CTA */}
      <div className="mt-8 text-center">
        <a
          href="https://g.page/your-google-review-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          <FaGoogle className="w-5 h-5 mr-2" />
          Leave a Google Review
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
