import React from 'react';
import { Page } from '../../types';

interface BlogProps {
  onNavigate: (page: Page) => void;
}

const BlogHowToChoose: React.FC<BlogProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softBg min-h-screen pt-20 pb-10 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        
        <header className="mb-10">
          <div className="text-brandOrange text-sm font-bold mb-4 tracking-widest uppercase flex items-center gap-2">
            <button onClick={() => onNavigate(Page.Blog)} className="hover:text-brandRed">Back to Blog</button> 
            <span>|</span> 
            <span>April 10, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            How to Choose the Best School in Nalgonda
          </h1>
        </header>

        <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Selecting the right school is a decision that shapes your child's entire future. With numerous options available, finding the <button onClick={() => onNavigate(Page.BestSchool)} className="text-brandRed hover:underline font-semibold">best school in Nalgonda</button> can seem overwhelming. This guide breaks down the essential factors every parent should consider.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">1. Curriculum and Board</h2>
            <p>
              The curriculum dictates what and how your child will learn. While state boards are good, many parents are shifting towards a <button onClick={() => onNavigate(Page.CbseSchool)} className="text-brandRed hover:underline font-semibold">CBSE school</button> because of its structured, national-level syllabus that heavily prepares students for competitive exams like JEE and NEET.
            </p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">2. Quality of Faculty</h2>
            <p>
              A school is only as good as its teachers. Look for an institution where the faculty is not only highly qualified but also passionate and continuously trained in modern pedagogical methods, such as those aligned with the NEP 2020.
            </p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">3. Medium of Instruction</h2>
            <p>
              In our globalized world, English proficiency is non-negotiable. Choosing a premier <button onClick={() => onNavigate(Page.EnglishMediumSchool)} className="text-brandRed hover:underline font-semibold">English medium school in Nalgonda</button> ensures that your child develops strong communication skills, confidence in public speaking, and a broader worldview.
            </p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">4. Infrastructure and Safety</h2>
            <p>
              Visit the campus. Check the classrooms, laboratories, library, and sports facilities. Furthermore, assess the safety measures: Are there CCTV cameras? Is the campus secure? A conducive environment is vital for focused learning.
            </p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">5. Extracurricular Activities</h2>
            <p>
              Education must be holistic. The best schools balance academics with sports, arts, and cultural activities to build well-rounded personalities, teaching teamwork, resilience, and creativity.
            </p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">Why Vedant High School Fits the Bill</h2>
            <p>
              Vedant High School checks all these boxes perfectly. With an NEP-aligned CBSE curriculum, state-of-the-art infrastructure, a dedicated faculty, and a strong emphasis on English communication and holistic development, it stands out as the optimal choice for parents in Nalgonda.
            </p>
          </div>
        </article>

        <section className="text-center py-10 px-6 bg-primary rounded-3xl text-white shadow-xl mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Take the Next Step</h2>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">
            Ready to give your child the best foundation? Admissions for 2026 are currently open.
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

export default BlogHowToChoose;
