import React from 'react';
import { Page } from '../../types';

interface BlogProps {
  onNavigate: (page: Page) => void;
}

const BlogCbseVsState: React.FC<BlogProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softBg min-h-screen pt-20 pb-10 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        
        <header className="mb-10">
          <div className="text-brandOrange text-sm font-bold mb-4 tracking-widest uppercase flex items-center gap-2">
            <button onClick={() => onNavigate(Page.Blog)} className="hover:text-brandRed">Back to Blog</button> 
            <span>|</span> 
            <span>April 5, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            CBSE vs State Board: Which is Better for Your Child?
          </h1>
        </header>

        <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              One of the most common dilemmas parents face is choosing the right educational board. In Telangana, the choice often boils down to the State Board or CBSE. Understanding the nuances can help you decide which is better suited for your child's aspirations.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">The CBSE Advantage</h2>
            <p>
              The Central Board of Secondary Education (CBSE) offers a nationalized curriculum. If you are looking for a top <button onClick={() => onNavigate(Page.CbseSchool)} className="text-brandRed hover:underline font-semibold">CBSE school in Nalgonda</button>, it's important to know the benefits:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Competitive Exam Focus:</strong> The CBSE syllabus is closely aligned with major entrance exams like IIT-JEE and NEET. It heavily emphasizes Science and Mathematics.</li>
              <li><strong>Uniformity:</strong> It's ideal for parents with transferable jobs, as the curriculum is the same across India.</li>
              <li><strong>Logical Approach:</strong> CBSE focuses more on application-based learning and critical thinking rather than rote memorization.</li>
              <li><strong>NEP Integration:</strong> CBSE is quick to adopt national educational reforms, currently leading the implementation of NEP 2020.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">The State Board Perspective</h2>
            <p>
              The State Board curriculum is tailored by the state government.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Regional Focus:</strong> It places a strong emphasis on the state's culture, history, and local languages.</li>
              <li><strong>Accessibility:</strong> The syllabus is generally perceived to be slightly less rigorous, which can be less stressful for some students.</li>
              <li><strong>State-Level Exams:</strong> It can be beneficial if a student's primary goal is to excel in state-level entrance examinations.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">Making the Decision</h2>
            <p>
              If your goal is to prepare your child for national-level competitions, higher studies outside the state, and to develop strong analytical skills, CBSE is generally the preferred choice. 
            </p>
            <p>
              At Vedant High School, we combine the rigorous CBSE curriculum with excellent language training, making us a premier <button onClick={() => onNavigate(Page.EnglishMediumSchool)} className="text-brandRed hover:underline font-semibold">English medium school in Nalgonda</button>. We ensure our students enjoy the best of national standards while remaining rooted in core values, solidifying our position as the <button onClick={() => onNavigate(Page.BestSchool)} className="text-brandRed hover:underline font-semibold">best school in Nalgonda</button>.
            </p>
          </div>
        </article>

        <section className="text-center py-10 px-6 bg-primary rounded-3xl text-white shadow-xl mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Join the CBSE Excellence</h2>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">
            Give your child the national advantage. Enroll them at Vedant High School for the 2026 academic year.
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

export default BlogCbseVsState;
