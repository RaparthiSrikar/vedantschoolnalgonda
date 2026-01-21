import React, { useState } from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const SCHOOL_MAP_LINK = "https://www.google.com/maps/search/Vedant+High+School+Old+Raghavendra+College+Vidyanagar+Ramagiri+Nalgonda/";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const whatsappNumber = '919052599399';

        const message = `Hello, I would like to get in touch regarding a query.\n\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Subject: ${formData.subject}\n` +
            `Message: ${formData.message}`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');

        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <Icons.MapPin />,
            title: 'Our Address',
            desc: 'OLD RAGHAVENDRA COLLEGE,\nVIDYANAGAR, RAMAGIRI, NALGONDA',
            link: SCHOOL_MAP_LINK,
            hoverBg: 'hover:bg-brandYellow',
            iconHoverText: 'group-hover:text-brandYellow',
            textContrast: 'light' // Yellow is light, keeps dark text
        },
        {
            icon: <Icons.Phone />,
            title: 'Call Us',
            desc: '+91 90525 99399',
            link: 'tel:+919052599399',
            hoverBg: 'hover:bg-brandRed',
            iconHoverText: 'group-hover:text-brandRed',
            textContrast: 'dark' // Red is dark, needs white text
        },
        {
            icon: <Icons.Mail />,
            title: 'Email Us',
            desc: 'vedanthighschoolnalgonda@gmail.com',
            link: 'mailto:vedanthighschoolnalgonda@gmail.com',
            hoverBg: 'hover:bg-primary',
            iconHoverText: 'group-hover:text-primary',
            textContrast: 'dark' // Navy is dark, needs white text
        }
    ];

    return (
        <div className="animate-fade-in bg-white">
            {/* Hero section updated with increased top padding for touching navbar */}
            <section className="bg-brandOrange pt-32 pb-24 text-white text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold font-display mb-4">Contact Us</h1>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Have questions? We're here to help you.
                    </p>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contact Info Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {contactInfo.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target={item.link.startsWith('http') ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={`bg-softBg p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group ${item.hoverBg} transition-all duration-500 cursor-pointer overflow-hidden relative transform hover:-translate-y-2 hover:shadow-2xl`}
                        >
                            {/* Decorative inner circle that appears on hover */}
                            <div className={`absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700`}></div>

                            {/* Icon Container - Always white, icon changes color on hover */}
                            <div className={`bg-primary p-6 rounded-[1.5rem] text-white mb-8 shadow-sm transition-all duration-300 relative z-10 group-hover:shadow-lg`}>
                                {item.icon}
                            </div>

                            <h4 className={`text-2xl font-black mb-3 transition-colors duration-300 relative z-10 font-display ${item.textContrast === 'light' ? 'text-primary' : 'text-primary group-hover:text-white'
                                }`}>
                                {item.title}
                            </h4>

                            <p className={`text-base font-medium whitespace-pre-line leading-relaxed transition-colors duration-300 relative z-10 ${item.textContrast === 'light' ? 'text-gray-500 group-hover:text-primary/70' : 'text-gray-500 group-hover:text-white/80'
                                }`}>
                                {item.desc}
                            </p>
                        </a>
                    ))}
                </div>

                {/* Contact Form & Map Container */}
                <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
                    {/* Form */}
                    <div className="p-12 md:p-16 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-brandRed font-display tracking-tight uppercase">Send a Message</h2>
                            <p className="text-gray-500 text-lg">
                                Reach out to us for any queries related to admissions, academics, or events.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/50 ml-1">Your Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="bg-softBg border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandOrange outline-none w-full transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/50 ml-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="bg-softBg border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandOrange outline-none w-full transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary/50 ml-1">Subject</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="How can we help?"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="bg-softBg border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandOrange outline-none w-full transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary/50 ml-1">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="Your message here..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="bg-softBg border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brandOrange outline-none w-full transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-primary text-white font-black text-xs uppercase tracking-[0.2em] py-5 px-10 rounded-2xl hover:bg-brandRed transition-all shadow-xl active:scale-95 w-full flex items-center justify-center gap-3 mt-4"
                            >
                                Send Message via WhatsApp
                            </button>
                        </form>
                    </div>

                    {/* Map Container - Keeping it placeholder or generic search embed */}
                    <div className="relative h-[600px] lg:h-auto bg-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.741235339247!2d79.2730779252445!3d17.05995679252448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAzJzM1LjkiTiA3OcKwMTYnMzIuNCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                            loading="lazy"
                            title="Vedant High School Location"
                        />
                        {/* Map Overlay Button */}
                        <a
                            href={SCHOOL_MAP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-primary font-black text-[10px] uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl hover:bg-brandYellow transition-colors flex items-center gap-2"
                        >
                            <Icons.MapPin />
                            Open in Google Maps
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;