import React from 'react';
import { Page } from '../../types';

interface BestSchoolProps {
  onNavigate: (page: Page) => void;
}

const BestSchool: React.FC<BestSchoolProps> = ({ onNavigate }) => {
  return (
    <div className="bg-softBg min-h-screen pt-20 pb-10 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Best School in Nalgonda for Quality Education
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Vedant High School, recognized as the <strong>best school in Nalgonda</strong>. We are committed to nurturing young minds with a holistic educational approach, world-class infrastructure, and a future-ready curriculum. Let us guide your child towards academic and personal excellence.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">Why We Are the Top School in Nalgonda</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Choosing the right educational institution is one of the most critical decisions a parent can make. At Vedant High School, we pride ourselves on being the top school in Nalgonda by consistently delivering exceptional academic outcomes and fostering a supportive, engaging learning environment. Our approach is not just about rote learning; it's about experiential learning, critical thinking, and character building.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our campus is designed to be a safe haven for students, equipped with modern amenities, smart classrooms, and advanced laboratories. We believe that a conducive environment is key to unlocking a student's full potential. As a premier <strong>English medium school in Nalgonda</strong>, we emphasize effective communication skills, ensuring our students are confident and articulate.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are also proud to be a leading <button onClick={() => onNavigate(Page.CbseSchool)} className="text-brandRed hover:underline font-semibold">CBSE school in Nalgonda</button>, offering a curriculum that is aligned with national standards while incorporating innovative teaching methodologies.
          </p>
        </section>

        {/* Academic Excellence */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">A Legacy of Academic Excellence</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Academic rigor is at the heart of our ethos. We understand that to be the best school in Nalgonda, we must constantly innovate our pedagogical practices. Our faculty comprises highly qualified and experienced educators who are passionate about teaching. They act as facilitators, guiding students through complex concepts with ease and making learning an enjoyable process.
            </p>
            <h3 className="text-2xl font-display font-medium text-primary mt-6 mb-3">Foundational Learning</h3>
            <p>
              In our pre-primary and primary sections, we focus on building a strong foundation. Through play-way methods, interactive storytelling, and hands-on activities, we ensure that the cognitive and motor skills of our youngest learners are well-developed. This early intervention is crucial for their long-term academic journey.
            </p>
            <h3 className="text-2xl font-display font-medium text-primary mt-6 mb-3">Secondary Education and Board Preparation</h3>
            <p>
              As students transition to higher grades, our focus shifts towards comprehensive board exam preparation and competitive exam readiness. We provide specialized foundational coaching for IIT-JEE and NEET, giving our students a competitive edge. Regular assessments, personalized feedback, and remedial classes are integral parts of our academic framework, ensuring no child is left behind.
            </p>
            <p>
              Explore more about our curriculum on our <button onClick={() => onNavigate(Page.Academics)} className="text-brandRed hover:underline font-semibold">Academics</button> page.
            </p>
          </div>
        </section>

        {/* Infrastructure and Facilities */}
        <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">World-Class Infrastructure</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A school's infrastructure plays a pivotal role in the overall development of a child. Vedant High School boasts state-of-the-art facilities that rival the best institutions in the region.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Smart Classrooms:</strong> Equipped with interactive whiteboards and digital learning resources to make lessons engaging.</li>
            <li><strong>Advanced Science Labs:</strong> Fully functional Physics, Chemistry, and Biology labs that encourage hands-on experimentation.</li>
            <li><strong>Computer Lab:</strong> A modern lab with high-speed internet to foster digital literacy.</li>
            <li><strong>Library:</strong> A vast collection of books, journals, and digital media to cultivate a habit of reading.</li>
            <li><strong>Sports Facilities:</strong> Expansive playgrounds for various outdoor and indoor sports, promoting physical fitness and teamwork.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Discover more about our facilities by visiting our <button onClick={() => onNavigate(Page.LearningTools)} className="text-brandRed hover:underline font-semibold">Learning Tools</button> section.
          </p>
        </section>

        {/* Holistic Development */}
        <section className="mb-12">
          <h2 className="text-3xl font-display font-semibold text-primary mb-4">Focus on Holistic Development</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Education goes beyond textbooks. At Vedant High School, we place immense importance on the holistic development of our students. We believe in nurturing well-rounded individuals who are not just academically proficient but also socially responsible, emotionally resilient, and culturally aware.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our curriculum integrates co-curricular and extracurricular activities seamlessly. From debates, elocution, and creative writing to music, dance, and fine arts, students have ample opportunities to explore their passions. We regularly organize inter-school competitions, cultural fests, and sports meets, fostering a spirit of healthy competition and camaraderie.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By embedding core values such as integrity, discipline, respect, and empathy into our daily routine, we ensure our students grow into ethical and compassionate leaders of tomorrow. Learn more about our vision on the <button onClick={() => onNavigate(Page.About)} className="text-brandRed hover:underline font-semibold">About Us</button> page.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12 bg-primary text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-display font-semibold mb-6">Why Choose Vedant High School?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Experienced Faculty</h3>
              <p className="text-white/80">Our teachers are subject matter experts dedicated to student success and continuous improvement.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">NEP Aligned Curriculum</h3>
              <p className="text-white/80">We strictly follow the National Education Policy guidelines, focusing on experiential and competency-based learning.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Safe & Secure Campus</h3>
              <p className="text-white/80">24/7 CCTV surveillance and trained security personnel ensure a safe environment for all students.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Parent-Teacher Collaboration</h3>
              <p className="text-white/80">We believe in transparent communication and active involvement of parents in the educational journey.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">What makes Vedant High School the best school in Nalgonda?</h3>
              <p className="text-gray-600">Vedant High School offers a perfect blend of academic rigor, modern infrastructure, highly qualified teachers, and a strong focus on extracurricular activities, ensuring the holistic development of every child.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Which curriculum does the school follow?</h3>
              <p className="text-gray-600">We are a premier <button onClick={() => onNavigate(Page.CbseSchool)} className="text-brandRed hover:underline">CBSE school</button> offering an NEP-aligned curriculum that is designed to be engaging, interactive, and future-ready.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">What are the school timings?</h3>
              <p className="text-gray-600">Our standard school timings are from 9:00 AM to 5:00 PM, Monday through Saturday. The office is open from 8:30 AM to 5:00 PM.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Do you provide foundation courses for competitive exams?</h3>
              <p className="text-gray-600">Yes, we provide specialized foundational coaching for exams like IIT-JEE and NEET starting from secondary grades to give our students an early advantage.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 px-6 bg-gradient-to-r from-brandRed to-brandOrange rounded-3xl text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Secure Your Child's Future?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Admissions for the upcoming academic year are now open. Join the Vedant High School family and give your child the gift of quality education.
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

export default BestSchool;
