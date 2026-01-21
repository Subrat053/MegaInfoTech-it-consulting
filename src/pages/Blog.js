import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2026',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.',
      author: 'John Smith',
      date: 'January 15, 2026',
      category: 'Web Development',
      image: 'https://source.unsplash.com/1200x800/?web,development,code',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Mobile-First Design: Best Practices',
      excerpt: 'Learn how to create exceptional mobile experiences that engage users and drive conversions in today\'s mobile-first world.',
      author: 'Sarah Johnson',
      date: 'January 12, 2026',
      category: 'Design',
      image: 'https://source.unsplash.com/1200x800/?mobile,ui,design',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'SEO Strategies That Actually Work',
      excerpt: 'Proven SEO techniques to improve your search rankings and increase organic traffic to your website.',
      author: 'Michael Chen',
      date: 'January 10, 2026',
      category: 'Digital Marketing',
      image: 'https://source.unsplash.com/1200x800/?seo,analytics,marketing',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Building High-Performance React Apps',
      excerpt: 'Tips and techniques for optimizing React applications for better performance and user experience.',
      author: 'Emily Davis',
      date: 'January 8, 2026',
      category: 'Development',
      image: 'https://source.unsplash.com/1200x800/?javascript,code,performance',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'The Power of Brand Identity',
      excerpt: 'Understanding how strong brand identity can differentiate your business and create lasting customer relationships.',
      author: 'Lisa Anderson',
      date: 'January 5, 2026',
      category: 'Branding',
      image: 'https://source.unsplash.com/1200x800/?branding,design,logo',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'UI/UX Design Principles for 2026',
      excerpt: 'Essential design principles and trends that will shape user experiences in the coming year.',
      author: 'Robert Chen',
      date: 'January 3, 2026',
      category: 'Design',
      image: 'https://source.unsplash.com/1200x800/?ux,ui,design',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Web Development', 'Design', 'Digital Marketing', 'Development', 'Branding'];

  return (
    <div className="pt-24">
      <Helmet>
        <title>Blog | Digital Agency - Insights & Tips</title>
        <meta name="description" content="Stay updated with the latest insights, tips, and trends in web development, digital marketing, and design from our expert team." />
        <meta name="keywords" content="digital agency blog, web development tips, marketing insights, design trends" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-blue-100">
              Insights, tips, and updates from our team of digital experts
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full font-medium bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            <img 
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-full object-cover"
            />
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                Featured Post
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <FaUser className="mr-2" />
                <span className="mr-4">{blogPosts[0].author}</span>
                <FaCalendar className="mr-2" />
                <span>{blogPosts[0].date}</span>
              </div>
              <a
                href={`/blog/${blogPosts[0].id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
              >
                Read More <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaUser className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <FaCalendar className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                  >
                    Read More <FaArrowRight className="ml-2 text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              1
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              3
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get the latest insights, tips, and updates delivered straight to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
