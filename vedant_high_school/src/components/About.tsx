import React, { useState, useEffect, useRef } from 'react';
import { Icons } from '../constants';

interface Member {
    name: string;
    role: string;
    image: string;
    desc: string;
    detailedBio?: string;
}

const About: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const coreValues = [
        { name: "Integrity", desc: "Upholding the highest moral and ethical standards in all educational and personal pursuits.", icon: <Icons.Check /> },
        { name: "Discipline", desc: "Instilling self-control and a dedicated approach to academic and life-long learning.", icon: <Icons.Safety /> },
        { name: "Respect", desc: "Fostering an environment where every individual is valued and treated with dignity.", icon: <Icons.Users /> },
        { name: "Excellence", desc: "Striving for the highest quality in academics, character development, and creativity.", icon: <Icons.Sparkles /> },
        { name: "Responsibility", desc: "Encouraging students to take ownership of their actions and contribute to society.", icon: <Icons.Globe /> },
        { name: "Compassion", desc: "Cultivating empathy and kindness towards all living beings in our global community.", icon: <Icons.Users /> }
    ];

    const leadership: Member[] = [
        {
            name: "S. SHANKAR GOUD",
            role: "Founder & Chairman",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767511893/Screenshot_2026-01-04_at_1.01.07_PM_oradp9.png",
            desc: "Visionary founder with over 40 years in education, transforming rural learning landscapes.",
            detailedBio: "Coming from a humble village background, our founder pursued higher education and earned an M.A. in Political Science from Osmania University. A dedicated sportsperson, he proudly represented India in ball badminton and served in several sports administration roles. Although he secured a government position with Indian Railways, his passion for education inspired him to establish Nalgonda’s first private Junior College in 1982. He later expanded his vision by founding a Degree College in 1989, followed by B.Ed and D.El.Ed institutions in 2007 and 2012. His lifelong mission has been to provide quality, value-based education, particularly to students from rural backgrounds. Rooted in social responsibility, ethical values, and equal access to education, his vision has transformed countless lives and continues to inspire and guide Vedant High School."
        },
        {
            name: "Gutta Gopal Reddy",
            role: "Correspondent",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1768893009/Screenshot_2026-01-04_at_1.01.46_PM_raf0wl.png",
            desc: "Expert in administration and community engagement, ensuring harmony between home and school.",
            detailedBio: "G. Gopal Reddy, the esteemed Correspondent of Vedant High School, brings over 20 years of dedicated experience in the field of education. His journey reflects a strong commitment to nurturing young minds, with extensive work among students in rural India and valuable international exposure at the prestigious Fayerweather Street School in Cambridge. Combining grassroots experience with global perspectives, he has fostered a supportive and inclusive learning environment at Vedant High School, focused on delivering quality, value-based education. Under his visionary leadership, the school has grown into an institution known for academic excellence, character development, and holistic growth. Guided by empathy, innovation, and a deep belief in the transformative power of education, he continues to inspire educators and students while remaining committed to making quality education accessible to all."
        },
        {
            name: "R. Shobhan",
            role: "Principal and Director",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1766157519/Screenshot_2025-12-19_at_8.48.22_PM_kvh7po.png",
            desc: "Strategist behind the school's state-of-the-art infrastructure and digital integration.",
            detailedBio: "Dear Parents, Students, and Well-Wishers, Welcome to Vedant High School, where young minds are inspired and futures are carefully shaped. With over two decades of experience in education, I firmly believe that every child’s learning journey deserves encouragement, guidance, and celebration. At Vedant, we combine academic excellence with holistic development, enabling students to thrive academically while discovering their strengths in sports, arts, and leadership. Our balanced approach ensures the overall growth of each learner. We view education as a shared partnership, where active parent involvement and open communication play a vital role in a child’s success. Together, let us motivate and empower every student to achieve their fullest potential."
        },
        {
            name: "S. Aditya Samrat",
            role: "Director",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1768893139/Screenshot_2026-01-04_at_1.23.37_PM_yxca6m.png",
            desc: "Secretary & Director, Sri Raghavendra Educational Society MIT (Abroad) | 15+ years of leadership in technology-driven education",
            detailedBio: "S. Aditya Samrat serves as the Secretary of Sri Raghavendra Educational Society, overseeing Junior, Degree, P.G., B.Ed, and D.El.Ed institutions, and also holds the position of Director of the Society. He has completed his Master’s in Information Technology (MIT) abroad and brings over 15 years of experience as the Principal of a Degree College. With strong expertise in the implementation of technology and modern teaching methodologies, he plays a key role in integrating innovative and digital practices into everyday educational institutions."
        },
        {
            name: "Shyam Prasad",
            role: "Director",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767513741/Screenshot_2026-01-04_at_1.17.23_PM_se3buw.png",
            desc: "Passionate about nurturing curiosity, values, and holistic growth in every student",
            detailedBio: "Welcome to Vedant High School, where education extends beyond textbooks to become a meaningful journey of discovery, growth, and excellence. As an experienced educator and founder of multiple institutions, I am deeply committed to providing quality education that truly transforms lives. At Vedant, we nurture curiosity, creativity, and strong moral values, enabling students to excel both academically and personally. Our balanced approach blends rigorous academics with holistic development, preparing learners to confidently face a rapidly changing world. Recognizing the aspirations of parents in Nalgonda, we work in close partnership with families to shape confident, compassionate, and responsible individuals. Join us at Vedant High School and become part of an inspiring educational experience."
        },

    ];

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setSelectedMember(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedMember]);

    const handleOutsideClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setSelectedMember(null);
        }
    };

    return (
        <div className="animate-fade-in bg-white relative">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-white overflow-hidden border-b border-gray-100">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-[0.3em]">
                                <span className="w-8 h-[2px] bg-accent"></span>
                                Institutional Overview
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-brandOrange font-display leading-tight">
                                Academic Excellence from <span className="text-accent">Nursery to 10th Standard</span>
                            </h1>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Established in 2025, Vedant High School is a premier educational institution dedicated to providing a high-quality foundation for young learners.
                                </p>
                                <p>
                                    Our campus serves as a stimulating environment where students are encouraged to explore their potential and develop into responsible global citizens.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1767591118/Screenshot_2026-01-04_at_12.03.28_PM_cp3krv.jpg"
                                alt="Vedant School Campus"
                                className="relative rounded-[2rem] object-cover w-full h-[500px] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-24 bg-softBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-12 rounded-[3rem] shadow-xl border-t-8 border-brandRed group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-brandRed/10 rounded-2xl flex items-center justify-center text-brandRed mb-8 group-hover:bg-brandRed group-hover:text-white transition-colors">
                                <Icons.Sparkles />
                            </div>
                            <h2 className="text-3xl font-bold text-primary font-display mb-6">Our Vision</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To be a global leader in education, nurturing students who are academically proficient, ethically grounded, and socially responsible individuals capable of shaping a better future.
                            </p>
                        </div>
                        <div className="bg-white p-12 rounded-[3rem] shadow-xl border-t-8 border-brandOrange group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-brandOrange/10 rounded-2xl flex items-center justify-center text-brandOrange mb-8 group-hover:bg-brandOrange group-hover:text-white transition-colors">
                                <Icons.Globe />
                            </div>
                            <h2 className="text-3xl font-bold text-primary font-display mb-6">Our Mission</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To provide a holistic learning environment that blends traditional values with modern technology, fostering curiosity, creativity, and critical thinking in every child.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: The Vedant Triad - Values, Victory, Vision */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-bold text-primary font-display uppercase tracking-tight">Our Core Philosophy</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">The three pillars that define the Vedant experience and guide our students' growth.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* VALUES Card */}
                        <div className="relative group p-10 rounded-[3rem] bg-brandOrange/5 border border-brandOrange/10 hover:bg-brandOrange hover:border-brandOrange transition-all duration-500 overflow-hidden">
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-brandOrange/10 rounded-full group-hover:bg-white/20 transition-all"></div>
                            <div className="relative z-10 space-y-6">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brandOrange font-black text-xl">01</div>
                                <h3 className="text-3xl font-black text-brandOrange group-hover:text-white font-display uppercase tracking-tighter">Values</h3>
                                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed font-medium">
                                    Values are the foundation of good character.
                                    At Vedant, we teach students honesty, discipline, and kindness.
                                    We believe good values are as important as academics, helping students grow into responsible and caring leaders of the future.
                                </p>
                            </div>
                        </div>

                        {/* VISION Card */}
                        <div className="relative group p-10 rounded-[3rem] bg-primary/5 border border-primary/10 hover:bg-primary hover:border-primary transition-all duration-500 overflow-hidden">
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full group-hover:bg-white/20 transition-all"></div>
                            <div className="relative z-10 space-y-6">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary font-black text-xl">02</div>
                                <h3 className="text-3xl font-black text-primary group-hover:text-white font-display uppercase tracking-tighter">Vision</h3>
                                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed font-medium">
                                    Vision is our forward-looking approach. We empower our students with 21st-century skills, critical thinking, and a global perspective. Our goal is to expand their horizons while keeping them firmly rooted in our rich cultural heritage.
                                </p>
                            </div>
                        </div>

                        {/* VICTORY Card */}
                        <div className="relative group p-10 rounded-[3rem] bg-brandRed/5 border border-brandRed/10 hover:bg-brandRed hover:border-brandRed transition-all duration-500 overflow-hidden">
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-brandRed/10 rounded-full group-hover:bg-white/20 transition-all"></div>
                            <div className="relative z-10 space-y-6">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brandRed font-black text-xl">03</div>
                                <h3 className="text-3xl font-black text-brandRed group-hover:text-white font-display uppercase tracking-tighter">Victory</h3>
                                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed font-medium">
                                    Victory represents the spirit of achievement. We celebrate every milestone, from academic success to triumphs in sports and arts. We teach our students to embrace challenges, learn from failures, and cultivate the resilience needed to win in all walks of life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Values Section */}
            <section className="py-24 bg-softBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 space-y-4">
                        <h4 className="text-brandOrange font-black text-xs uppercase tracking-[0.4em]">The Vedant Way</h4>
                        <h2 className="text-4xl font-bold text-primary font-display uppercase tracking-tight">Guiding Principles</h2>
                        <div className="w-24 h-1.5 bg-brandYellow mx-auto rounded-full" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-white border border-gray-100 hover:shadow-2xl hover:border-brandOrange transition-all duration-300 group">
                                <div className="w-12 h-12 bg-softBg rounded-xl flex items-center justify-center text-brandOrange mb-6 shadow-sm group-hover:bg-brandOrange group-hover:text-white transition-colors">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-3 font-display">{value.name}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management & Leadership */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl font-bold text-brandOrange font-display uppercase tracking-tight">Management & Leadership</h2>
                        <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
                        <p className="text-gray-500 max-w-2xl mx-auto">The dedicated visionaries behind Vedant High School's pursuit of excellence.</p>
                    </div>

                    <div className="space-y-10">
                        {/* First row - 3 cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
                            {leadership.slice(0, 3).map((member, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedMember(member)}
                                    className="bg-softBg rounded-3xl overflow-hidden border border-gray-50 flex flex-col hover:shadow-2xl transition-all duration-500 group h-full cursor-pointer transform hover:-translate-y-2"
                                >
                                    <div className="aspect-square bg-white overflow-hidden relative flex items-center justify-center">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-95 group-hover:scale-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="p-10 flex-grow flex flex-col relative">
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold text-primary font-display leading-tight mb-2 group-hover:text-brandOrange transition-colors">{member.name}</h3>
                                            <p className="text-accent font-black text-[10px] uppercase tracking-[0.25em]">{member.role}</p>
                                            <div className="w-10 h-[2px] bg-brandYellow mx-auto mt-4"></div>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed text-center flex-grow">
                                            {member.desc}
                                        </p>
                                        <div className="mt-6 text-center">
                                            <span className="text-brandOrange font-bold text-xs uppercase tracking-widest border-b border-brandOrange/30 pb-1 group-hover:border-brandOrange transition-colors">Read Bio</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second row - 2 cards centered */}
                        <div className="flex justify-center gap-10">
                            {leadership.slice(3, 5).map((member, i) => (
                                <div
                                    key={i + 3}
                                    onClick={() => setSelectedMember(member)}
                                    className="bg-softBg rounded-3xl overflow-hidden border border-gray-50 flex flex-col hover:shadow-2xl transition-all duration-500 group h-full cursor-pointer transform hover:-translate-y-2 w-full md:w-1/2 lg:w-1/3"
                                >
                                    <div className="aspect-square bg-white overflow-hidden relative flex items-center justify-center">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-95 group-hover:scale-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="p-10 flex-grow flex flex-col relative">
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold text-primary font-display leading-tight mb-2 group-hover:text-brandOrange transition-colors">{member.name}</h3>
                                            <p className="text-accent font-black text-[10px] uppercase tracking-[0.25em]">{member.role}</p>
                                            <div className="w-10 h-[2px] bg-brandYellow mx-auto mt-4"></div>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed text-center flex-grow">
                                            {member.desc}
                                        </p>
                                        <div className="mt-6 text-center">
                                            <span className="text-brandOrange font-bold text-xs uppercase tracking-widest border-b border-brandOrange/30 pb-1 group-hover:border-brandOrange transition-colors">Read Bio</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Vedant Section */}
            <section className="py-24 bg-softBg overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-10">
                            <div className="space-y-4">
                                <h4 className="text-brandRed font-black text-xs uppercase tracking-[0.4em]">The Difference</h4>
                                <h2 className="text-4xl md:text-5xl font-bold text-primary font-display leading-tight uppercase">Why Parents Choose <span className="text-brandOrange">Vedant</span></h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We go beyond standard education to provide an environment where your child feels safe, inspired, and challenged to grow every single day.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { title: "Safety First", desc: "24/7 CCTV monitoring and secure campus protocols." },
                                    { title: "Expert Educators", desc: "Passionate mentors with deep domain expertise." },
                                    { title: "Holistic Growth", desc: "Equal focus on sports, arts, and core academics." },
                                    { title: "Modern Labs", desc: "Hands-on learning with the latest equipment." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 bg-brandOrange rounded-full flex items-center justify-center text-white">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17l-5-5" /></svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-primary text-lg">{item.title}</h5>
                                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                                <img src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1767697233/Screenshot_2026-01-06_at_4.29.45_PM_guljvu.png" alt="Library Learning" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brandYellow/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brandRed/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEADERSHIP MODAL */}
            {selectedMember && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/80 backdrop-blur-sm animate-fade-in"
                    onClick={handleOutsideClick}
                >
                    <div
                        ref={modalRef}
                        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-6 right-6 z-20 bg-softBg shadow-lg p-3 rounded-full text-primary hover:bg-accent hover:text-white transition-all transform active:scale-90"
                        >
                            <Icons.Close />
                        </button>

                        <div className="w-full md:w-2/5 bg-softBg flex items-center justify-center p-10 border-b md:border-b-0 md:border-r border-gray-100">
                            <div className="w-full h-full flex items-center">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-full h-auto object-contain relative z-10"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                            <div className="mb-8">
                                <p className="text-accent font-black text-xs uppercase tracking-[0.3em] mb-3">{selectedMember.role}</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-brandOrange font-display leading-tight">{selectedMember.name}</h2>
                            </div>
                            <div className="prose prose-sm md:prose-base prose-primary max-w-none">
                                <p className="text-gray-600 leading-relaxed text-lg italic mb-6">
                                    {selectedMember.desc}
                                </p>
                                <div className="h-px bg-gray-100 w-full mb-8"></div>
                                <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                                    {selectedMember.detailedBio || selectedMember.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;