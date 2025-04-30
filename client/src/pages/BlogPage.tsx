import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { useState, useEffect, useMemo } from 'react';
import { Calendar, ArrowRight, ChevronLeft, Search } from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

const BlogPage = () => {
  const [location, setLocation] = useLocation();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(6);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Posts');

  const categories = [
    'All Posts',
    'Chiropractic Care',
    'Back Pain',
    'Neck Pain',
    'Sciatica',
    'Exercise',
    'Nutrition',
    'Wellness',
    'Injury Prevention'
  ];

  // Parse URL parameters (page, category, search)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    // Handle page parameter
    const page = params.get('page');
    if (page) {
      setCurrentPage(parseInt(page, 10));
    } else {
      setCurrentPage(1);
    }
    
    // Handle category parameter
    const category = params.get('category');
    if (category) {
      // Only set if it's a valid category
      if (categories.includes(category)) {
        setSelectedCategory(category);
      }
    }
    
    // Handle search parameter
    const search = params.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [location, categories]);

  const allBlogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Stretches to Relieve Desk Job Back Pain",
      excerpt: "Simple exercises you can do at your desk to prevent and relieve back pain from prolonged sitting. Learn how to incorporate these into your daily routine for better spine health.",
      date: "April 12, 2025",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Exercise",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Sciatica: Causes and Treatment Options",
      excerpt: "Learn about what causes sciatic nerve pain and how chiropractic care can help provide lasting relief. We explore the anatomy of sciatica and treatment approaches.",
      date: "April 5, 2025",
      image: "https://images.unsplash.com/photo-1606202762722-81fabb0569fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Conditions",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Connection Between Posture and Headaches",
      excerpt: "Discover how poor posture contributes to tension headaches and migraines, plus correction techniques that can help alleviate pain and prevent future episodes.",
      date: "March 28, 2025",
      image: "https://images.unsplash.com/photo-1616438805637-3602f5dda7e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Health Tips",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "How Chiropractic Care Can Boost Athletic Performance",
      excerpt: "Athletes are discovering the competitive advantage of regular chiropractic adjustments. Learn how proper spinal alignment contributes to better performance and faster recovery.",
      date: "March 21, 2025",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Sports",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "The Importance of Proper Ergonomics While Working From Home",
      excerpt: "Working from home can lead to poor ergonomic setups. Discover how to create a spine-friendly home office that prevents pain and improves productivity.",
      date: "March 14, 2025",
      image: "https://images.unsplash.com/photo-1585169188411-31ac0e349dc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Ergonomics",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Pregnancy and Chiropractic: Safe Relief for Back Pain",
      excerpt: "Expecting mothers often experience back pain. Learn how specialized prenatal chiropractic techniques can safely provide relief and support a healthy pregnancy.",
      date: "March 7, 2025",
      image: "https://images.unsplash.com/photo-1518935869742-e22c1d9d4d9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Pregnancy",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Nutrition Tips for a Healthy Spine",
      excerpt: "Your diet plays a crucial role in spine health. Discover the nutrients that support disc health, reduce inflammation, and strengthen the muscles that support your spine.",
      date: "February 28, 2025",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Nutrition",
      readTime: "7 min read"
    },
    {
      id: 8,
      title: "Tech Neck: How Modern Devices Are Affecting Your Spine",
      excerpt: "Constantly looking down at phones and tablets is creating a new type of neck strain. Learn about 'tech neck' and how to prevent this modern spine problem.",
      date: "February 21, 2025",
      image: "https://images.unsplash.com/photo-1522159698025-056d3922b094?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 9,
      title: "Children and Chiropractic: What Parents Should Know",
      excerpt: "Chiropractic care isn't just for adults. Learn how gentle adjustments can support proper development and address common childhood conditions like ear infections and growing pains.",
      date: "February 14, 2025",
      image: "https://images.unsplash.com/photo-1444015030297-c746c91ea2f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Pediatric",
      readTime: "6 min read"
    }
  ];

  // Filter posts based on search term and category
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allBlogPosts, searchTerm, selectedCategory]);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    // Update URL with page parameter
    const params = new URLSearchParams(window.location.search);
    params.set('page', pageNumber.toString());
    setLocation(`/blog?${params.toString()}`);
    window.scrollTo(0, 0);
  };

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when search changes
    
    // When search changes, we update the URL
    const params = new URLSearchParams(window.location.search);
    params.delete('page'); // Remove page parameter to start at page 1
    
    // Add or remove search parameter based on value
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    
    // Update URL with or without parameters
    if (params.toString()) {
      setLocation(`/blog?${params.toString()}`);
    } else {
      setLocation('/blog');
    }
  };

  // Handle category filter
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
    
    // When category changes, we update the URL
    const params = new URLSearchParams(window.location.search);
    params.delete('page'); // Remove page parameter to start at page 1
    
    if (category !== 'All Posts') {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    
    if (params.toString()) {
      setLocation(`/blog?${params.toString()}`);
    } else {
      setLocation('/blog');
    }
  };

  const featuredPost = allBlogPosts[0];

  return (
    <Layout>
      <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb navigation */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-1 text-sm text-gray-500">
              <li>
                <Link href="/">
                  <span className="hover:text-blue-500 cursor-pointer">Home</span>
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="font-medium text-gray-900">Blog</span>
              </li>
            </ol>
          </nav>

          {/* Page Title */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Health & Wellness Journal</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice and insights to help you maintain optimal health and prevent injuries.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="relative w-full md:w-72">
              <form onSubmit={(e) => e.preventDefault()}>
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pr-10"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none p-0 cursor-pointer"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </form>
            </div>
            <div className="flex items-center space-x-4 overflow-x-auto pb-2 w-full md:w-auto">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button 
                    key={index} 
                    variant={category === selectedCategory ? "default" : "outline"} 
                    size="sm"
                    className="whitespace-nowrap"
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Article */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Featured Article</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden lg:flex">
              <div className="lg:w-1/2 h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-5">{featuredPost.excerpt}</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                  Read Full Article <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Recent Articles */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Recent Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {allBlogPosts.slice(1, 4).map((post: BlogPost) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
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
          </motion.div>

          {/* All Articles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post: BlogPost) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-5 flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-blue-500 hover:text-blue-700 text-sm font-medium mt-auto"
                    >
                      Read more <ArrowRight className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-9 h-9 p-0 flex items-center justify-center"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Dynamic Pagination */}
                {Array.from({ length: Math.min(totalPages, 5) }).map((_, idx) => {
                  // Display first page, last page, and a few pages around current page
                  let pageNumber: number;
                  
                  if (totalPages <= 5) {
                    // If we have 5 or fewer pages, just show all pages
                    pageNumber = idx + 1;
                  } else if (currentPage <= 3) {
                    // If we're near the start, show first 5 pages
                    pageNumber = idx + 1;
                  } else if (currentPage >= totalPages - 2) {
                    // If we're near the end, show last 5 pages
                    pageNumber = totalPages - 4 + idx;
                  } else {
                    // Otherwise show 2 pages before and after current page
                    pageNumber = currentPage - 2 + idx;
                  }

                  return (
                    <Button 
                      key={idx} 
                      variant={pageNumber === currentPage ? "default" : "outline"} 
                      size="sm" 
                      className="w-9 h-9 p-0"
                      onClick={() => paginate(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  );
                })}
                
                {/* Show ellipsis and last page if there are many pages */}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="px-2 text-gray-500">...</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-9 h-9 p-0"
                      onClick={() => paginate(totalPages)}
                    >
                      {totalPages}
                    </Button>
                  </>
                )}

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-9 h-9 p-0 flex items-center justify-center"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
