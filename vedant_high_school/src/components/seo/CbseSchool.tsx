import React from 'react';
import { Page } from '../../types';

interface CbseSchoolProps {
  onNavigate: (page: Page) => void;
}

const CbseSchool: React.FC<CbseSchoolProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softBg min-h-screen pt-20 pb-10 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Top CBSE School in Nalgonda
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Vedant High School, widely recognized as a premier <strong>CBSE school in Nalgonda</strong>. We offer an integrated, NEP-aligned curriculum designed to foster critical thinking, creativity, and a deep understanding of core subjects. Our goal is to prepare students for national and global challenges.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">Why Choose a CBSE Curriculum?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Central Board of Secondary Education (CBSE) is one of the most prestigious and widely recognized educational boards in India. Its curriculum is scientifically designed to be robust, comprehensive, and student-friendly. As a top CBSE school in Nalgonda, Vedant High School seamlessly integrates these guidelines into our daily teaching methodologies.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The CBSE syllabus is highly favored for its focus on Science and Mathematics, making it an excellent choice for students aspiring to crack competitive exams like IIT-JEE, NEET, and AIIMS. By choosing our school, you are ensuring that your child receives an education that is standardized across the country, making transitions easier if you ever relocate.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Furthermore, our status as the <button onClick={() => onNavigate(Page.BestSchool)} className="text-brandRed hover:underline font-semibold">best school in Nalgonda</button> ensures that we deliver this curriculum using the best pedagogical practices available today.
          </p>
        </section>

        {/* NEP Alignment */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">NEP 2020 Aligned Education</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              At Vedant High School, we are fully committed to implementing the National Education Policy (NEP) 2020. This means a shift from rote memorization to experiential learning. We focus on conceptual clarity, analytical skills, and real-world application of knowledge.
            </p>
            <h3 className="text-2xl font-display font-medium text-primary mt-6 mb-3">Foundational & Preparatory Stages</h3>
            <p>
              In alignment with the 5+3+3+4 structure, our foundational and preparatory stages emphasize play-based, activity-based, and discovery-based learning. We focus heavily on foundational literacy and numeracy, ensuring every child develops a strong base before moving to more complex subjects.
            </p>
            <h3 className="text-2xl font-display font-medium text-primary mt-6 mb-3">Middle & Secondary Stages</h3>
            <p>
              In higher grades, we introduce multidimensional learning. Students are encouraged to take up projects, participate in group discussions, and engage in cross-curricular activities. We also integrate vocational education and 21st-century skills like coding, artificial intelligence, and digital literacy into our syllabus.
            </p>
          </div>
        </section>

        {/* State-of-the-art Infrastructure */}
        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">Infrastructure that Supports CBSE Learning</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            To effectively deliver the CBSE curriculum, a school requires excellent infrastructure. Our campus is equipped with everything a student needs to excel academically and practically.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Well-Equipped Science Labs:</strong> Our Physics, Chemistry, and Biology labs meet all CBSE standards, allowing students to conduct experiments safely and effectively.</li>
            <li><strong>Digital Classrooms:</strong> Interactive boards and audio-visual aids make complex concepts easier to understand.</li>
            <li><strong>Comprehensive Library:</strong> A vast repository of reference books, NCERT textbooks, and journals.</li>
            <li><strong>Language Labs:</strong> Dedicated spaces to improve English proficiency, making us a leading <button onClick={() => onNavigate(Page.EnglishMediumSchool)} className="text-brandRed hover:underline font-semibold">English medium school in Nalgonda</button>.</li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-primary mb-8 text-center">Frequently Asked Questions about CBSE</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Why is CBSE considered better for competitive exams?</h3>
              <p className="text-gray-600">The CBSE syllabus is the foundation for major national level entrance exams like JEE and NEET. The curriculum is concise, logical, and emphasizes scientific methodologies, giving students a significant advantage.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How does Vedant High School support students in board exams?</h3>
              <p className="text-gray-600">We conduct regular mock tests, provide comprehensive study materials, and offer personalized doubt-clearing sessions to ensure our students are fully prepared and confident for their board examinations.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Is the CBSE curriculum stressful for children?</h3>
              <p className="text-gray-600">No, the CBSE curriculum is designed to be student-friendly. At Vedant High School, we balance academics with sports and extracurricular activities to ensure learning is stress-free and enjoyable.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How can I admit my child to Vedant High School?</h3>
              <p className="text-gray-600">You can visit our admissions office or apply online through our website. Our admissions team will guide you through the process.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 px-6 bg-gradient-to-r from-brandRed to-brandOrange rounded-3xl text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Give Your Child the CBSE Advantage</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Enroll your child at Vedant High School today and watch them excel in an engaging, supportive, and world-class educational environment.
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

export default CbseSchool;
