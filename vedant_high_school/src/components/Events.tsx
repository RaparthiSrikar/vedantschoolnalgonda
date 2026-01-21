import React from 'react';

const Events: React.FC = () => {
    const events = [
        {
            id: 1,
            title: "Parent-Teacher Meeting",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767599813/Screenshot_2026-01-05_at_1.25.59_PM_jfvh87.png",
            desc: "An essential interactive session for parents and teachers to discuss student progress, academic roadmaps, and collaborative goals for the term."
        },
        {
            id: 2,
            title: "Inter-School Sports Competition",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767600210/Screenshot_2026-01-05_at_1.33.03_PM_iawizk.png",
            desc: "Our students will compete in various athletic events, fostering sportsmanship and physical excellence. Get ready to cheer for our champions!"
        },
        {
            id: 3,
            title: "Cultural Extravaganza",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767606646/Screenshot_2026-01-05_at_3.20.00_PM_qypx5c.png",
            desc: "A vibrant showcase of dance, music, and theatrical performances. Witness the creative spirit of Vedant as students celebrate our rich heritage."
        },
        {
            id: 4,
            title: "Annual Day Celebration",
            image: "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767606904/Screenshot_2026-01-05_at_3.24.05_PM_wx4i8e.png",
            desc: "The pinnacle of our academic year! Join us for a grand evening of awards, performances, and celebrating the collective success of our school."
        }
    ];

    return (
        <div className="animate-fade-in bg-white">
            {/* Header section with increased padding for touching navbar */}
            <section className="bg-brandOrange pt-32 pb-24 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-5xl font-black font-display mb-4 uppercase tracking-tight">Events</h1>
                    <p className="text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
                        Stay updated with our important school activities and celebrations.
                    </p>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Simple Section Title */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold text-brandRed font-display uppercase tracking-tight">Calendar of Activities</h2>
                    <div className="w-20 h-1.5 bg-brandYellow mx-auto rounded-full" />
                    <p className="text-gray-500">Join us in celebrating our students' journey through these planned events.</p>
                </div>

                {/* Content Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
                    {events.map(event => (
                        <div key={event.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col h-full transform hover:-translate-y-1">
                            <div className="h-64 overflow-hidden relative">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h4 className="text-2xl font-bold text-brandRed mb-3 font-display">{event.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                    {event.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {events.length === 0 && (
                    <div className="text-center py-24 bg-softBg rounded-[3rem] border-2 border-dashed border-gray-200">
                        <p className="text-lg text-gray-400 font-medium">No new events scheduled yet. Stay tuned!</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Events;