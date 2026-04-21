import React from 'react';
import { Page } from '../../types';

interface EnglishMediumSchoolProps {
  onNavigate: (page: Page) => void;
}

const EnglishMediumSchool: React.FC<EnglishMediumSchoolProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softBg min-h-screen pt-20 pb-10 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Premier English Medium School in Nalgonda
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Vedant High School, the leading <strong>English medium school in Nalgonda</strong>. We empower students with excellent communication skills, global awareness, and a robust academic foundation to succeed in an increasingly interconnected world.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">The Importance of English Medium Education</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In today's globalized economy, fluency in English is no longer just an advantage; it is a necessity. English is the language of international business, science, technology, and diplomacy. As a premier English medium school in Nalgonda, Vedant High School is dedicated to ensuring that every student becomes highly proficient in reading, writing, and speaking the language.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our approach to language acquisition goes beyond grammar drills. We immerse our students in an English-rich environment from the very beginning. Our dedicated language labs, interactive sessions, debates, and public speaking programs are designed to build confidence and articulate expression.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By combining this linguistic focus with our rigorous curriculum, we reinforce our reputation as the <button onClick={() => onNavigate(Page.BestSchool)} className="text-brandRed hover:underline font-semibold">best school in Nalgonda</button>.
          </p>
        </section>

        {/* Language Development Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">Comprehensive Language Development</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Developing fluency requires consistent practice and expert guidance. Our highly qualified faculty members employ modern communicative language teaching (CLT) methods to make learning engaging and effective.
            </p>
            <h3 className="text-2xl font-display font-medium text-primary mt-6 mb-3">Phonics and Early Reading</h3>
            <p>
              In our pre-primary sections, we use structured phonics programs to help children understand the relationship between sounds and letters. This early intervention is critical for developing strong reading and spelling skills. We also have a well-stocked library with a vast collection of age-appropriate books to cultivate a lifelong love for reading.
            </p>
            <h3 className="text-2xl font-display font-medium text-primary mt-6 mb-3">Creative Writing and Oratory Skills</h3>
            <p>
              As students progress, we encourage them to express their thoughts creatively through essays, poetry, and stories. We regularly host elocution competitions, model united nations (MUN), and debate clubs. These platforms not only improve English proficiency but also enhance critical thinking and leadership skills.
            </p>
          </div>
        </section>

        {/* Beyond English: A Holistic Approach */}
        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">A Balanced Education System</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While we emphasize English proficiency, we also respect and promote our rich cultural heritage. Students learn local and national languages as part of the curriculum, ensuring they are well-rooted in their culture while preparing for global opportunities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Furthermore, as a leading <button onClick={() => onNavigate(Page.CbseSchool)} className="text-brandRed hover:underline font-semibold">CBSE school in Nalgonda</button>, we ensure that our language training perfectly complements the rigorous demands of science, mathematics, and social studies subjects taught under the CBSE framework.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How do you support students from non-English speaking backgrounds?</h3>
              <p className="text-gray-600">We offer specialized bridge courses and personalized attention to help students from diverse linguistic backgrounds comfortably transition into our English medium environment. Our teachers are trained to be patient and encouraging.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">What is the role of the language lab?</h3>
              <p className="text-gray-600">Our language lab is equipped with advanced software that helps students improve their pronunciation, intonation, and listening skills through interactive exercises.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Are parents expected to speak English at home?</h3>
              <p className="text-gray-600">While practicing English at home is beneficial, it is not mandatory. Our immersive school environment provides ample exposure for the child to become fluent.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">When do admissions start?</h3>
              <p className="text-gray-600">Admissions for the upcoming academic year 2026 are currently open. Please contact the school office for more details.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 px-6 bg-gradient-to-r from-brandRed to-brandOrange rounded-3xl text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Empower Your Child with Global Skills</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Give your child the gift of fluent English and a world-class education. Secure their future by joining Vedant High School.
          </p>
          <button 
            onClick={() => onNavigate(Page.Admissions)}
            className="bg-white text-brandRed font-black uppercase tracking-widest px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Admissions Open - Apply Now
          </button>
        </section>

      </div>
    </div>
  );
};

export default EnglishMediumSchool;
