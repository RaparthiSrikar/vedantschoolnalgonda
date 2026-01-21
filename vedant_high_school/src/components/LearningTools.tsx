import React from 'react';
import { Icons } from '../constants';

const LearningTools: React.FC = () => {
    const facilities = [
        {
            title: "Science Laboratory",
            desc: "Our campus features well-equipped Physics, Chemistry, and Biology laboratories. These spaces are designed to support practical learning, allowing students to conduct experiments and gain hands-on experience that brings classroom theories to life.",
            icon: <Icons.Sparkles />,
            accentColor: "border-brandOrange",
            iconBg: "bg-brandOrange",
            iconText: "text-white"
        },
        {
            title: "Computer Laboratory",
            desc: "We provide modern computer labs with updated systems and high-speed internet access. Our goal is to promote digital literacy and ensure students are well-versed in computer education, preparing them for a technology-driven world.",
            icon: <Icons.Globe />,
            accentColor: "border-brandRed",
            iconBg: "bg-brandRed",
            iconText: "text-white"
        },
        {
            title: "School Library",
            desc: "Our library is a well-stocked hub for knowledge, containing a wide range of textbooks, reference books, and engaging storybooks. It is a quiet sanctuary designed to encourage healthy reading habits and support academic research.",
            icon: <Icons.Book />,
            accentColor: "border-brandYellow",
            iconBg: "bg-brandYellow",
            iconText: "text-white"
        },
        {
            title: "Sports & Physical Education",
            desc: "We offer both indoor and outdoor sports facilities to promote physical fitness and teamwork. Our physical education programs are designed to instill discipline, resilience, and a spirit of healthy competition in every student.",
            icon: <Icons.Safety />,
            accentColor: "border-primary",
            iconBg: "bg-primary",
            iconText: "text-white"
        }
    ];

    return (
        <div className="bg-white min-h-screen animate-fade-in">
            {/* Header Section with Orange Background */}
            <section className="bg-brandOrange pt-32 pb-24 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-5xl font-black font-display mb-4 uppercase tracking-tight">Learning Tools & Infrastructure</h1>
                    <p className="text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
                        Vedant High School is committed to providing students with the best resources to support their academic and personal growth.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

                {/* Facilities Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {facilities.map((facility, i) => (
                        <div
                            key={i}
                            className={`bg-softBg p-10 rounded-[2.5rem] shadow-sm border-t-8 ${facility.accentColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
                        >
                            <div className={`w-16 h-16 ${facility.iconBg} rounded-2xl flex items-center justify-center ${facility.iconText} mb-8 transition-colors group-hover:bg-brandOrange`}>
                                {facility.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-primary font-display mb-4">{facility.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {facility.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearningTools;