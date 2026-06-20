import React from 'react';
import { Calendar, Users, Trophy, Theater, ChevronDown, ChevronUp } from 'lucide-react';

import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';
import video6 from '../assets/video6.mp4';
import video7 from '../assets/video7.mp4';
import video8 from '../assets/video8.mp4';

interface EventItem {
    id: number;
    title: string;
    image: string;
    video: string;
}

const Events: React.FC = () => {
    const [isExpanded2526, setIsExpanded2526] = React.useState<boolean>(false);
    const [isExpanded2627, setIsExpanded2627] = React.useState<boolean>(false);

    const events2025_2026: EventItem[] = [
        {
            id: 1,
            title: "Summer Camp",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767599813/Screenshot_2026-01-05_at_1.25.59_PM_jfvh87.png",
            video: video1
        },
        {
            id: 2,
            title: "Cultural Fest-Practise",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767600210/Screenshot_2026-01-05_at_1.33.03_PM_iawizk.png",
            video: video2
        },
        {
            id: 3,
            title: "Mobile Awareness Programme",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767606646/Screenshot_2026-01-05_at_3.20.00_PM_qypx5c.png",
            video: video3
        },
        {
            id: 4,
            title: "Admission Announcement",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767606904/Screenshot_2026-01-05_at_3.24.05_PM_wx4i8e.png",
            video: video4
        }
    ];

    const events2026_2027: EventItem[] = [
        {
            id: 5,
            title: "Parent-Teacher Meeting (PTM - 1)",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767599813/Screenshot_2026-01-05_at_1.25.59_PM_jfvh87.png",
            video: video5
        },
        {
            id: 6,
            title: "Annual Day Date Announcement",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767698660/Screenshot_2026-01-04_at_12.03.28_PM_cp3krv.png",
            video: video6
        },
        {
            id: 7,
            title: "Graduation Day Celebration",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767696824/Screenshot_2026-01-06_at_4.21.28_PM_iis9dq.png",
            video: video7
        },
        {
            id: 8,
            title: "Parent-Teacher Meeting (PTM - 1)",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767522557/Screenshot_2026-01-03_at_9.07.07_PM_alqg1x.png",
            video: video8
        }
    ];

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

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Year 2026-2027 Main Card (Clickable/Expandable) */}
                <div
                    onClick={() => setIsExpanded2627(!isExpanded2627)}
                    className={`bg-softBg rounded-[3.5rem] p-6 md:p-10 border transition-all duration-500 space-y-8 cursor-pointer select-none group/main ${isExpanded2627
                        ? 'border-brandOrange/60 shadow-lg'
                        : 'border-gray-100 hover:border-brandOrange/40 shadow-md hover:shadow-xl hover:-translate-y-0.5'
                        }`}
                >
                    {/* Year Card Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200/60 relative">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-green-100 text-green-600 border border-green-200">
                                    Active Gallery
                                </span>
                                <span className="text-xs font-bold text-gray-400">4 Video Highlights</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-primary font-display uppercase tracking-tight group-hover/main:text-brandOrange transition-colors duration-300">
                                Academic Year 2026 - 2027
                            </h2>
                        </div>

                        <div className="flex items-center gap-6">
                            <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed hidden md:block">
                                Click card to {isExpanded2627 ? 'hide' : 'view'} school event videos.
                            </p>

                            {/* Chevron Expand/Collapse Indicator */}
                            <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover/main:text-brandOrange group-hover/main:border-brandOrange group-hover/main:shadow-md transition-all duration-300">
                                {isExpanded2627 ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                            </div>
                        </div>
                    </div>

                    {/* Direct Video Grid */}
                    {isExpanded2627 && (
                        <div
                            onClick={(e) => e.stopPropagation()} // Stops event bubbling so playing/controlling videos does not collapse the parent card
                            className="grid md:grid-cols-2 gap-8 animate-fade-in"
                        >
                            {events2026_2027.map(event => (
                                <div
                                    key={event.id}
                                    className="bg-black rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-800 relative aspect-video"
                                >
                                    <video
                                        src={event.video}
                                        controls
                                        preload="metadata"
                                        className={`w-full h-full object-cover ${event.id === 7 ? 'rotate-360' : ''}`}
                                    />
                                    {/* Subtle hover title overlay for context */}
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10 opacity-85 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        {event.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Year 2025-2026 Main Card (Clickable/Expandable) */}
                <div
                    onClick={() => setIsExpanded2526(!isExpanded2526)}
                    className={`bg-softBg rounded-[3.5rem] p-6 md:p-10 border transition-all duration-500 space-y-8 cursor-pointer select-none group/main ${isExpanded2526
                        ? 'border-brandOrange/60 shadow-lg'
                        : 'border-gray-100 hover:border-brandOrange/40 shadow-md hover:shadow-xl hover:-translate-y-0.5'
                        }`}
                >
                    {/* Year Card Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-200/60 relative">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-brandOrange/10 text-brandOrange border border-brandOrange/25">
                                    Archived Gallery
                                </span>
                                <span className="text-xs font-bold text-gray-400">4 Video Highlights</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-primary font-display uppercase tracking-tight group-hover/main:text-brandOrange transition-colors duration-300">
                                Academic Year 2025 - 2026
                            </h2>
                        </div>

                        <div className="flex items-center gap-6">
                            <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed hidden md:block">
                                Click card to {isExpanded2526 ? 'hide' : 'view'} school event videos.
                            </p>

                            {/* Chevron Expand/Collapse Indicator */}
                            <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover/main:text-brandOrange group-hover/main:border-brandOrange group-hover/main:shadow-md transition-all duration-300">
                                {isExpanded2526 ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                            </div>
                        </div>
                    </div>

                    {/* Direct Video Grid */}
                    {isExpanded2526 && (
                        <div
                            onClick={(e) => e.stopPropagation()} // Stops event bubbling so playing/controlling videos does not collapse the parent card
                            className="grid md:grid-cols-2 gap-8 animate-fade-in"
                        >
                            {events2025_2026.map(event => (
                                <div
                                    key={event.id}
                                    className="bg-black rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-800 relative aspect-video"
                                >
                                    <video
                                        src={event.video}
                                        controls
                                        preload="metadata"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Subtle hover title overlay for context */}
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10 opacity-85 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        {event.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </section>
        </div>
    );
};

export default Events;