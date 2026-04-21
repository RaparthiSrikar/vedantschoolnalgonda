import React from 'react';
import { Page } from '../../types';

interface BlogProps {
  onNavigate: (page: Page) => void;
}

const BlogTop10: React.FC<BlogProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softBg min-h-screen pt-20 pb-10 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        
        <header className="mb-10">
          <div className="text-brandOrange text-sm font-bold mb-4 tracking-widest uppercase flex items-center gap-2">
            <button onClick={() => onNavigate(Page.Blog)} className="hover:text-brandRed">Back to Blog</button> 
            <span>|</span> 
            <span>April 15, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Top 10 Schools in Nalgonda (2026 Guide)
          </h1>
        </header>

        <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Finding the right school is a pivotal moment for any parent. In Nalgonda, the educational landscape has evolved significantly, offering excellent choices that blend traditional values with modern pedagogy. If you are looking for the <button onClick={() => onNavigate(Page.BestSchool)} className="text-brandRed hover:underline font-semibold">best school in Nalgonda</button>, this guide will help you understand what makes an institution stand out.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">What Makes a School Top-Tier?</h2>
            <p>
              Before diving into rankings, it's essential to understand the criteria. The top schools share several common attributes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Academic Rigor:</strong> Consistent excellence in board examinations and competitive test foundations.</li>
              <li><strong>Infrastructure:</strong> Modern classrooms, well-equipped science and computer labs, and expansive sports facilities.</li>
              <li><strong>Faculty:</strong> Experienced, passionate, and continuously trained teachers.</li>
              <li><strong>Holistic Approach:</strong> Equal emphasis on sports, arts, and character building.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">Vedant High School: Setting the Benchmark</h2>
            <p>
              Consistently ranking among the very best is Vedant High School. Located conveniently in Vidyanagar, Ramagiri, it has established itself as a premier <button onClick={() => onNavigate(Page.CbseSchool)} className="text-brandRed hover:underline font-semibold">CBSE school in Nalgonda</button>.
            </p>
            <p>
              <strong>Why Vedant High School leads the pack:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>NEP Aligned Curriculum:</strong> Moving away from rote learning towards critical thinking and experiential learning.</li>
              <li><strong>Advanced Facilities:</strong> Smart boards in every class, high-tech labs, and a well-curated library.</li>
              <li><strong>Foundation Courses:</strong> Specialized coaching for IIT-JEE and NEET from an early age.</li>
              <li><strong>Safety:</strong> A highly secure campus with full CCTV coverage.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">Other Notable Schools in Nalgonda</h2>
            <p>
              While Vedant High School offers an unparalleled comprehensive experience, Nalgonda hosts several other respectable institutions. When evaluating them, parents should consider proximity, specific board preferences (State vs CBSE), and individual child needs. 
            </p>
            <p>
              However, for a truly future-ready education that combines strong English communication skills (as a leading <button onClick={() => onNavigate(Page.EnglishMediumSchool)} className="text-brandRed hover:underline font-semibold">English medium school in Nalgonda</button>) with deep conceptual understanding, Vedant remains the top recommendation for 2026.
            </p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">Conclusion</h2>
            <p>
              The 2026 academic year brings new opportunities. Choosing the top school is an investment in your child's future. We invite you to visit campuses, talk to teachers, and make an informed decision. 
            </p>
          </div>
        </article>

        <section className="text-center py-10 px-6 bg-primary rounded-3xl text-white shadow-xl mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Experience the Best for Your Child</h2>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">
            Admissions for 2026 are now open at Vedant High School.
          </p>
          <button 
            onClick={() => onNavigate(Page.Admissions)}
            className="bg-brandOrange text-white font-black uppercase tracking-widest px-8 py-3 rounded-full shadow-lg hover:bg-brandRed transition-all"
          >
            Apply Now
          </button>
        </section>

      </div>
    </div>
  );
};

export default BlogTop10;
