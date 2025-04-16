import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Stretches to Relieve Desk Job Back Pain",
      excerpt: "Simple exercises you can do at your desk to prevent and relieve back pain from prolonged sitting.",
      date: "April 12, 2025",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Exercise"
    },
    {
      id: 2,
      title: "Understanding Sciatica: Causes and Treatment Options",
      excerpt: "Learn about what causes sciatic nerve pain and how chiropractic care can help provide lasting relief.",
      date: "April 5, 2025",
      image: "https://images.unsplash.com/photo-1606202762722-81fabb0569fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Conditions"
    },
    {
      id: 3,
      title: "The Connection Between Posture and Headaches",
      excerpt: "Discover how poor posture contributes to tension headaches and migraines, plus correction techniques.",
      date: "March 28, 2025",
      image: "https://images.unsplash.com/photo-1616438805637-3602f5dda7e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Health Tips"
    }
  ];

  return (
    <section id="blog" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Health & Wellness Tips</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice and insights to help you maintain optimal health and prevent injuries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden animate-slide"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
                >
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            View all articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;