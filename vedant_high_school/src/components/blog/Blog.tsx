import React from 'react';
import { Page } from '../../types';

interface BlogProps {
  onNavigate: (page: Page) => void;
}

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Schools in Nalgonda (2026 Guide)",
      excerpt: "Discover the best schools in Nalgonda for 2026, featuring academic excellence, state-of-the-art facilities, and holistic development programs.",
      date: "April 15, 2026",
      page: Page.BlogTop10
    },
    {
      id: 2,
      title: "How to Choose the Best School in Nalgonda",
      excerpt: "A comprehensive guide for parents on selecting the right educational institution, from evaluating curriculum to assessing school culture.",
      date: "April 10, 2026",
      page: Page.BlogHowToChoose
    },
    {
      id: 3,
      title: "CBSE vs State Board: Which is Better for Your Child?",
      excerpt: "Understanding the key differences between educational boards to make an informed decision for your child's future success.",
      date: "April 5, 2026",
      page: Page.BlogCbseVsState
    }
  ];

  return (
    <div className="bg-softBg min-h-screen pt-20 pb-10 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Educational Insights & Blog
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Stay updated with the latest trends in education, parenting tips, and news from Vedant High School.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-brandOrange text-sm font-bold mb-3 tracking-widest uppercase">{post.date}</div>
                <h2 className="text-xl font-display font-bold text-primary mb-3 leading-tight">
                  <button onClick={() => onNavigate(post.page)} className="hover:text-brandRed text-left transition-colors">
                    {post.title}
                  </button>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => onNavigate(post.page)}
                  className="text-brandRed font-black text-sm tracking-widest uppercase hover:text-primary transition-colors flex items-center mt-auto"
                >
                  Read Article <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
