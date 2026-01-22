import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { Icons } from '../constants';

interface HomeProps {
    onNavigate: (p: Page) => void;
}

const HERO_IMAGES = [
    {
        url: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767506238/Screenshot_2026-01-04_at_11.26.40_AM_ld4pnj.png",
        alt: "Students in a modern classroom"
    },
    {
        url: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767522619/Screenshot_2026-01-04_at_3.57.10_PM_y4dyh4.png",
        alt: "Primary school learning environment"
    },
    {
        url: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767522557/Screenshot_2026-01-03_at_9.07.07_PM_alqg1x.png",
        alt: "Collaborative student activities"
    },
    {
        url: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767696824/Screenshot_2026-01-06_at_4.21.28_PM_iis9dq.png",
        alt: "kids playing"
    },
    {
        url: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767698660/Screenshot_2026-01-04_at_12.03.28_PM_cp3krv.png",
        alt: "Hands-on science learning"
    },
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const nextSlide = React.useCallback(() => {
        setCurrentSlide((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
    }, []);

    const startTimer = React.useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(nextSlide, 8000);
    }, [nextSlide]);

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [startTimer]);

    return (
        <div className="space-y-0 bg-white animate-fade-in">
            {/* 
          Hero Section - 16:9 Aspect Ratio 
      */}
            <section className="relative w-full aspect-video overflow-hidden group/hero shadow-2xl bg-primary">
                <div className="absolute inset-0 z-0">
                    {HERO_IMAGES.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <img
                                src={slide.url}
                                alt={slide.alt}
                                className={`w-full h-full object-cover select-none border-none outline-none ring-0 transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'
                                    }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                        </div>
                    ))}
                </div>

                {/* Left Navigation Bar */}
                <button
                    onClick={() => {
                        setCurrentSlide((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
                        startTimer();
                    }}
                    className="absolute left-0 top-0 h-full w-20 z-30 flex items-center justify-center opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-black/20 to-transparent hover:from-black/40"
                    aria-label="Previous slide"
                >
                    <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Right Navigation Bar */}
                <button
                    onClick={() => {
                        nextSlide();
                        startTimer();
                    }}
                    className="absolute right-0 top-0 h-full w-20 z-30 flex items-center justify-center opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300 bg-gradient-to-l from-black/20 to-transparent hover:from-black/40"
                    aria-label="Next slide"
                >
                    <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex items-center space-x-3">
                    {HERO_IMAGES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentSlide(index);
                                startTimer();
                            }}
                            className="relative group p-2"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <div className={`transition-all duration-500 rounded-full h-1.5 ${index === currentSlide
                                ? 'w-10 bg-brandOrange'
                                : 'w-2 bg-white/40 group-hover:bg-white/60'
                                }`} />
                        </button>
                    ))}
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3">
                                <div className="w-12 h-1 bg-brandRed"></div>
                                <div className="w-8 h-1 bg-brandOrange"></div>
                                <div className="w-4 h-1 bg-brandYellow"></div>
                                <span className="text-brandRed text-sm font-black uppercase tracking-widest ml-2">Legacy of Learning</span>
                            </div>
                            <h3 className="text-5xl font-bold font-display text-primary leading-tight">
                                A Journey of <span className="text-brandRed italic">Excellence</span> Rooted in <span className="text-brandOrange">Values</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Established in 2025, Vedant High School combines ancient values with modern vision to achieve victory in every academic and personal pursuit. Our curriculum is designed to foster critical thinking and moral integrity.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-brandOrange/5 rounded-3xl border-l-4 border-brandOrange group hover:bg-brandOrange transition-colors duration-300">
                                    <h4 className="font-bold text-brandOrange group-hover:text-white text-xl mb-1">Integrity</h4>
                                    <p className="text-xs text-gray-500 group-hover:text-white/80">Building strong moral character.</p>
                                </div>
                                <div className="p-6 bg-brandOrange/5 rounded-3xl border-l-4 border-brandOrange group hover:bg-brandOrange transition-colors duration-300">
                                    <h4 className="font-bold text-brandOrange group-hover:text-white text-xl mb-1">Innovation</h4>
                                    <p className="text-xs text-gray-500 group-hover:text-white/80">Thinking beyond boundaries.</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button onClick={() => onNavigate(Page.About)} className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-brandRed transition-all shadow-xl hover:-translate-y-1">
                                    Our Story
                                </button>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-brandRed/20 via-brandOrange/20 to-brandYellow/20 rounded-[3rem] blur-2xl group-hover:opacity-70 transition-opacity"></div>
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1767520544/Screenshot_2026-01-04_at_3.24.47_PM_bdogh4.png"
                                    alt="Students collaborating"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-brandOrange p-6 rounded-3xl shadow-xl animate-bounce">
                                <p className="text-white font-black text-2xl">100%</p>
                                <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">Dedication</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Distinction Section */}
            <section className="py-24 bg-white border-y border-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black text-primary font-display uppercase tracking-tight mb-4">Our Distinction</h2>
                        <p className="text-gray-500 text-lg">What sets Vedant High School apart in the educational landscape.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Icons.Globe />, title: "Global Vision", desc: "Curriculum designed to meet international standards while staying rooted in Indian values." },
                            { icon: <Icons.Users />, title: "Holistic Care", desc: "Individual attention with a healthy student-teacher ratio for personalized growth." },
                            { icon: <Icons.Check />, title: "Future Ready", desc: "Focused on developing 21st-century skills like critical thinking and problem solving." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-[2.5rem] bg-softBg hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-brandOrange group text-center">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brandOrange mb-6 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-3 font-display uppercase tracking-tight">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Pathways Section */}
            <section className="py-24 bg-softBg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-primary font-display uppercase tracking-tight">Academic Pathways</h2>
                        <div className="flex justify-center gap-1">
                            <div className="w-10 h-2 bg-brandOrange rounded-full"></div>
                            <div className="w-10 h-2 bg-brandOrange rounded-full"></div>
                            <div className="w-10 h-2 bg-brandOrange rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            {
                                title: "Pre-Primary",
                                grade: "Nursery - UKG",
                                desc: "Where little steps begin their journey of discovery through play and wonder.",
                                icon: <Icons.Book />
                            },
                            {
                                title: "Primary",
                                grade: "Grades 1 - 5",
                                desc: "Strong foundational learning in languages, math, and environmental sciences.",
                                icon: <Icons.Graduation />
                            },
                            {
                                title: "Secondary",
                                grade: "Grades 6 - 10",
                                desc: "Critical thinking, board exam excellence, and preparation for future careers.",
                                icon: <Icons.Users />
                            }
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="relative bg-white p-12 rounded-[2.5rem] shadow-xl transition-all duration-500 flex flex-col items-center group border-t-[10px] border-[#FFD700]"
                            >
                                <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-primary mb-10 transition-all duration-300 group-hover:bg-brandOrange group-hover:text-white group-hover:shadow-lg">
                                    {card.icon}
                                </div>

                                <h4 className="text-3xl font-black text-primary mb-2 font-display">{card.title}</h4>
                                <p className="text-gray-400 text-[11px] font-black uppercase tracking-[0.3em] mb-6">{card.grade}</p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-10 h-16">{card.desc}</p>

                                <button
                                    onClick={() => onNavigate(Page.Academics)}
                                    className="px-10 py-3 rounded-full border-[3px] border-primary text-primary font-black text-xs uppercase tracking-widest hover:bg-brandRed hover:border-brandRed hover:text-white transition-all duration-300 active:scale-95"
                                >
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Campus Facilities Overview */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 space-y-10">
                            <div className="space-y-4">
                                <h4 className="text-brandYellow font-black text-xs uppercase tracking-[0.4em]">Modern Infrastructure</h4>
                                <h2 className="text-4xl md:text-5xl font-black text-primary font-display leading-tight uppercase">Tools for Next-Gen <span className="text-brandOrange">Visionaries</span></h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our campus is more than just classrooms. We provide specialized labs for Science and Computers, a library full of wonders, and sports fields that foster teamwork and resilience.
                            </p>
                            <div className="grid grid-cols-1 gap-8">
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-brandOrange/10 text-brandOrange rounded-xl"><Icons.Sparkles /></div>
                                    <div>
                                        <p className="font-bold text-primary">Advanced Labs</p>
                                        <p className="text-sm text-gray-500">Physics, Chemistry, and Biology laboratories equipped for practical discovery.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <button
                                    onClick={() => onNavigate(Page.LearningTools)}
                                    className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brandRed transition-all flex items-center gap-3"
                                >
                                    Explore Infrastructure <Icons.Sparkles />
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1767698660/Screenshot_2026-01-04_at_12.03.28_PM_cp3krv.png"
                                    alt="Science Lab"
                                    className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                                />
                                <img
                                    src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1767697233/Screenshot_2026-01-06_at_4.29.45_PM_guljvu.png"
                                    alt="Library"
                                    className="rounded-3xl shadow-xl mt-8 hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brandYellow/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Voice of Parents Section */}
            <section className="py-24 bg-softBg overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary font-display uppercase tracking-tight mb-4">Voice of Parents</h2>
                        <div className="w-12 h-1 bg-brandRed mx-auto mb-8"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Achyuth Reddy", role: "Parent of Grade 4 Student", text: "Vedant has transformed my child's confidence. The teachers are incredibly supportive and the campus is truly world-class." },
                            { name: "Rajesh Kumar", role: "Parent of Grade 8 Student", text: "The blend of technology and traditional values is what makes this school unique. My son loves the computer labs and the library." },
                            { name: "Anita ", role: "Parent of UKG Student", text: "As a first-time school parent, I was worried, but the warmth and care at Vedant made the transition so smooth for my daughter." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-10 rounded-[2.5rem] bg-white shadow-lg relative">
                                <div className="text-brandOrange mb-6">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                </div>
                                <p className="text-gray-600 italic mb-8 leading-relaxed">"{item.text}"</p>
                                <div>
                                    <p className="font-bold text-primary font-display uppercase tracking-tight">{item.name}</p>
                                    <p className="text-xs text-brandOrange font-black tracking-widest uppercase">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Showcase Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-black text-primary font-display tracking-tight uppercase">Experience Vedant Life</h2>
                        <div className="w-24 h-2 bg-brandRed mx-auto rounded-full" />
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="relative z-10 aspect-video w-full rounded-[3rem] overflow-hidden bg-black shadow-2xl">
                            <video
                                className="w-full h-full object-cover"
                                src="https://ik.imagekit.io/s7him6spj/clideo_editor_e319f34220a643deba919abce40b5f48.mp4"
                                title="Vedant High School Campus Tour"
                                controls
                                playsInline
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;