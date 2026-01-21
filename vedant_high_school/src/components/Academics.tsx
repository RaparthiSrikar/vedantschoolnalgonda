import React from 'react';
import { Icons } from '../constants';

const Academics: React.FC = () => {
    const stages = [
        {
            id: "foundational",
            title: "Foundational Stage (Nursery – UKG)",
            focus: "CBSE Early Childhood Care & Education",
            details: [
                "Play-based and activity-oriented learning",
                "Development of fine and gross motor skills",
                "Introduction to letters, phonics, numbers, shapes, and colours",
                "Storytelling, rhymes, drawing, and creative activities",
                "Social, emotional, and moral development",
                "Development of good habits, discipline, and basic communication skills"
            ],
            icon: <Icons.Book />,
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767696824/Screenshot_2026-01-06_at_4.21.28_PM_iis9dq.png",
            accent: "text-brandYellow",
            bgAccent: "bg-brandYellow"
        },
        {
            id: "preparatory",
            title: "Preparatory Stage (Grades 1 – 5)",
            focus: "CBSE Primary Curriculum",
            details: [
                "This Stage covers PP to Class V, focusing on a strong foundational base for lifelong learning.",
                "Focus on Communication skills and All round development",
                "Development of Interactive skills",
                "Well equipped Language lab and Computer lab",
                "Activity-based learning with regular assessments",
                "Art, craft, physical education, and value education",
                "Encouraging curiosity, creativity, and teamwork"
            ],
            icon: <Icons.Graduation />,
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767695916/Screenshot_2026-01-06_at_4.07.54_PM_kdfaut.png",
            accent: "text-brandOrange",
            bgAccent: "bg-brandOrange"
        },
        {
            id: "secondary",
            title: "Secondary Stage (Grades 6 – 10)",
            focus: "CBSE Middle & Secondary Curriculum",
            details: [
                "NEP-aligned experiential learning approach",
                "Strong IIT and medicine foundation",
                "Board-focused preparation for Class X examinations",
                "Our LEAD Program is specially designed to build strong career foundations for IIT-JEE and NEET preparation starting from Grade VI onwards.",
                "The program focuses on conceptual understanding, analytical thinking, and problem-solving skills to support long-term academic success.",
                "Career guidance, leadership skills, and personality development"
            ],
            icon: <Icons.Users />,
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767697233/Screenshot_2026-01-06_at_4.29.45_PM_guljvu.png",
            accent: "text-brandRed",
            bgAccent: "bg-brandRed"
        }
    ];

    const philosophySkills = [
        { name: 'Resilience', color: 'bg-primary text-white' },
        { name: 'Critical Thinking', color: 'bg-brandRed text-white' },
        { name: 'Innovation', color: 'bg-brandOrange text-white' },
        { name: 'Integrity', color: 'bg-brandYellow text-primary' }
    ];

    return (
        <div className="animate-fade-in bg-white">
            <section className="bg-brandOrange pt-32 pb-24 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black font-display mb-6 tracking-tight text-white uppercase">
                        Academic <span className="text-white">Excellence</span>
                    </h1>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        A curriculum designed for the holistic growth of the 21st-century learner.
                    </p>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-32">
                    {/* Philosophy Section */}
                    <div className="bg-softBg p-12 md:p-20 rounded-[3rem] border border-transparent relative overflow-hidden group">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-brandRed font-display mb-8">Our Educational Philosophy</h2>
                            <p className="text-gray-600 leading-relaxed mb-12 text-xl md:text-2xl max-w-4xl font-light">
                                Our approach emphasizes <span className="font-bold text-primary">discipline, values, and academic excellence</span>.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {philosophySkills.map(skill => (
                                    <span
                                        key={skill.name}
                                        className={`${skill.color} px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg transition-all hover:-translate-y-1`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Program Stages */}
                    {stages.map((stage, idx) => (
                        <div key={idx} id={`stage-${stage.id}`} className="scroll-mt-32">
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div className={`space-y-10 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <div className="flex items-center gap-6">
                                        <div className={`p-6 ${stage.bgAccent} text-white rounded-3xl shadow-lg`}>
                                            {stage.icon}
                                        </div>
                                        <div>
                                            <p className={`${stage.accent} font-black text-xs uppercase tracking-[0.4em] mb-2`}>{stage.focus}</p>
                                            <h3 className="text-3xl md:text-4xl font-black text-primary font-display leading-tight">{stage.title}</h3>
                                        </div>
                                    </div>

                                    <ul className="grid gap-6">
                                        {stage.details.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex items-start gap-4 text-gray-600">
                                                <div className={`mt-1.5 w-6 h-6 rounded-full ${stage.bgAccent}/10 flex items-center justify-center flex-shrink-0`}>
                                                    <div className={`w-2 h-2 ${stage.bgAccent} rounded-full`}></div>
                                                </div>
                                                <span className="text-lg leading-snug">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                    <div className={`absolute -inset-6 ${stage.bgAccent}/10 rounded-[3rem] -z-10`}></div>
                                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden group">
                                        <img
                                            src={stage.image}
                                            alt={stage.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Academics;