import React from 'react';
import { Calendar, Clock, Users, Trophy, Theater } from 'lucide-react';

interface EventItem {
    id: number;
    title: string;
    date: string;
    image: string;
    category: 'Academic' | 'Sports' | 'Cultural' | 'Meeting';
    desc: string;
    time?: string;
}

const Events: React.FC = () => {

    const events2025_2026: EventItem[] = [
        {
            id: 1,
            title: "Parent-Teacher Meeting (Term 1)",
            date: "September 14, 2025",
            time: "9:30 AM - 1:00 PM",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767599813/Screenshot_2026-01-05_at_1.25.59_PM_jfvh87.png",
            category: "Meeting",
            desc: "An essential interactive session for parents and teachers to discuss student progress, academic roadmaps, and collaborative goals for the 2025-2026 term."
        },
        {
            id: 2,
            title: "Inter-School Sports Competition",
            date: "November 20, 2025",
            time: "8:00 AM - 4:00 PM",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767600210/Screenshot_2026-01-05_at_1.33.03_PM_iawizk.png",
            category: "Sports",
            desc: "Our students will compete in various athletic events, fostering sportsmanship and physical excellence. Get ready to cheer for our champions!"
        },
        {
            id: 3,
            title: "Cultural Extravaganza",
            date: "December 18, 2025",
            time: "5:00 PM - 8:30 PM",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767606646/Screenshot_2026-01-05_at_3.20.00_PM_qypx5c.png",
            category: "Cultural",
            desc: "A vibrant showcase of dance, music, and theatrical performances. Witness the creative spirit of Vedant as students celebrate our rich heritage."
        },
        {
            id: 4,
            title: "Annual Day Celebration",
            date: "February 12, 2026",
            time: "4:00 PM - 9:00 PM",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767606904/Screenshot_2026-01-05_at_3.24.05_PM_wx4i8e.png",
            category: "Cultural",
            desc: "The pinnacle of our 2025-2026 academic year! Join us for a grand evening of awards, performances, and celebrating the collective success of our school."
        }
    ];

    const events2026_2027: EventItem[] = [
        {
            id: 5,
            title: "Parent-Teacher Meeting (PTM - 1)",
            date: "June 25, 2026",
            time: "9:00 AM - 1:00 PM",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767599813/Screenshot_2026-01-05_at_1.25.59_PM_jfvh87.png",
            category: "Meeting",
            desc: "Opening Parent-Teacher Meeting of the year to align on goals, curriculum changes, and student development plans for the new 2026-2027 academic session."
        },
        {
            id: 6,
            title: "Science & Technology Exhibition",
            date: "October 10, 2026",
            time: "10:00 AM - 4:00 PM",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767698660/Screenshot_2026-01-04_at_12.03.28_PM_cp3krv.png",
            category: "Academic",
            desc: "Explore creative science models, robotics innovations, and environmental projects presented by our talented students of Grades 1-10."
        },
        {
            id: 7,
            title: "Annual Sports Meet",
            date: "November 15, 2026",
            time: "8:00 AM - 3:00 PM",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767696824/Screenshot_2026-01-06_at_4.21.28_PM_iis9dq.png",
            category: "Sports",
            desc: "Annual track and field championship promoting team spirit, physical health, and sportsmanship across all school houses."
        },
        {
            id: 8,
            title: "Heritage & Cultural Fest",
            date: "December 22, 2026",
            time: "4:30 PM - 8:30 PM",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767522557/Screenshot_2026-01-03_at_9.07.07_PM_alqg1x.png",
            category: "Cultural",
            desc: "A colorful presentation of regional arts, folklore dances, and dramatic plays honoring the legacy of Indian history and traditions."
        }
    ];

    const getCategoryStyles = (category: EventItem['category']) => {
        switch (category) {
            case 'Academic': return 'bg-brandBlue/10 text-brandBlue border-brandBlue/20';
            case 'Sports': return 'bg-brandOrange/10 text-brandOrange border-brandOrange/20';
            case 'Cultural': return 'bg-brandViolet/10 text-brandViolet border-brandViolet/20';
            case 'Meeting': return 'bg-brandRed/10 text-brandRed border-brandRed/20';
            default: return 'bg-gray-100 text-gray-600 border-gray-200';
        }
    };

    return (
        <div className="animate-fade-in bg-white min-h-screen">
            {/* Header section with background image and dynamic overlays */}
            <section 
                className="pt-32 pb-24 text-white text-center relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/images/events_ai_bg.png')" }}
            >
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-slate-950/60 z-0"></div>
                
                <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
                    {/* Big title */}
                    <h1 className="text-5xl md:text-7xl font-black font-display mb-4 uppercase tracking-tight text-white">
                        School Events
                    </h1>
                    
                    {/* Golden divider with a small icon */}
                    <div className="flex items-center gap-4 w-full max-w-xs justify-center mb-6">
                        <div className="h-[2px] bg-brandYellow/60 flex-grow"></div>
                        <Calendar className="w-6 h-6 text-brandYellow" />
                        <div className="h-[2px] bg-brandYellow/60 flex-grow"></div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/90 max-w-2xl mx-auto font-medium leading-relaxed text-lg mb-12">
                        Explore our comprehensive events logs, PTM schedules, sports achievements, and cultural calendars organized by academic year.
                    </p>

                    {/* Features/Categories Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mt-2">
                        {[
                            { icon: <Calendar className="w-6 h-6" />, label: "Event Logs" },
                            { icon: <Users className="w-6 h-6" />, label: "PTM Schedules" },
                            { icon: <Trophy className="w-6 h-6" />, label: "Sports Achievements" },
                            { icon: <Theater className="w-6 h-6" />, label: "Cultural Calendars" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 group">
                                <div className="w-14 h-14 rounded-full border-2 border-brandYellow/70 flex items-center justify-center text-brandYellow bg-black/30 group-hover:scale-110 group-hover:bg-brandYellow group-hover:text-primary transition-all duration-300 shadow-lg">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-black uppercase tracking-wider text-white/90 group-hover:text-brandYellow transition-colors duration-300">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                
                {/* Year 2026-2027 Main Card (Active Session First for Relevance) */}
                <div className="bg-softBg rounded-[3.5rem] p-6 md:p-10 border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-500 space-y-8">
                    {/* Year Card Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200/60">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-green-100 text-green-600 border border-green-200">
                                    Active Session
                                </span>
                                <span className="text-xs font-bold text-gray-400">4 Scheduled Events</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-primary font-display uppercase tracking-tight">
                                Academic Year 2026 - 2027
                            </h2>
                        </div>
                        <p className="text-gray-500 text-sm max-w-md md:text-right leading-relaxed">
                            Explore upcoming schedules, parent-teacher meetings, science fairs, and school celebrations planned for this ongoing session.
                        </p>
                    </div>

                    {/* Nested Events Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {events2026_2027.map(event => (
                            <div
                                key={event.id}
                                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/80 group flex flex-col h-full transform hover:-translate-y-1"
                            >
                                {/* Image Header with Badge Overlay */}
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-85"></div>
                                    <span className={`absolute top-6 left-6 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl border ${getCategoryStyles(event.category)} shadow-lg backdrop-blur-md`}>
                                        {event.category}
                                    </span>
                                </div>

                                {/* Details Body */}
                                <div className="p-8 flex-grow flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-black text-primary font-display group-hover:text-brandRed transition-colors duration-300">
                                            {event.title}
                                        </h4>
                                        
                                        {/* Date & Time Info */}
                                        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-brandOrange" />
                                                <span>{event.date}</span>
                                            </div>
                                            {event.time && (
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={14} className="text-brandOrange" />
                                                    <span>{event.time}</span>
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                            {event.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Year 2025-2026 Main Card (Archived Term) */}
                <div className="bg-softBg rounded-[3.5rem] p-6 md:p-10 border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-500 space-y-8">
                    {/* Year Card Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200/60">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-brandOrange/10 text-brandOrange border border-brandOrange/25">
                                    Archived Term
                                </span>
                                <span className="text-xs font-bold text-gray-400">4 Completed Events</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-primary font-display uppercase tracking-tight">
                                Academic Year 2025 - 2026
                            </h2>
                        </div>
                        <p className="text-gray-500 text-sm max-w-md md:text-right leading-relaxed">
                            Review historical diaries containing interactive sessions, progress reviews, and sports milestones accomplished during the past term.
                        </p>
                    </div>

                    {/* Nested Events Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {events2025_2026.map(event => (
                            <div
                                key={event.id}
                                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/80 group flex flex-col h-full transform hover:-translate-y-1"
                            >
                                {/* Image Header with Badge Overlay */}
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-85"></div>
                                    <span className={`absolute top-6 left-6 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl border ${getCategoryStyles(event.category)} shadow-lg backdrop-blur-md`}>
                                        {event.category}
                                    </span>
                                </div>

                                {/* Details Body */}
                                <div className="p-8 flex-grow flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-black text-primary font-display group-hover:text-brandRed transition-colors duration-300">
                                            {event.title}
                                        </h4>
                                        
                                        {/* Date & Time Info */}
                                        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-brandOrange" />
                                                <span>{event.date}</span>
                                            </div>
                                            {event.time && (
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={14} className="text-brandOrange" />
                                                    <span>{event.time}</span>
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                            {event.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Events;