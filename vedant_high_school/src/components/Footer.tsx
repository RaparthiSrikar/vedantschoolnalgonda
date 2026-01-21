
import React from 'react';
import { Page } from '../types';
import { Icons } from '../constants';

const Footer: React.FC<{ onNavigate: (p: Page) => void }> = () => {
    const SCHOOL_MAP_LINK = "https://www.google.com/maps/search/Vedant+High+School+Old+Raghavendra+College+Vidyanagar+Ramagiri+Nalgonda/";
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <Icons.Facebook />,
            label: 'Facebook',
            href: 'https://www.facebook.com/Vedanthighschool',
        },
        {
            icon: <Icons.Instagram />,
            label: 'Instagram',
            href: 'https://www.instagram.com/vedanthighschoolnalgonda/',
        },
        {
            icon: <Icons.YouTube />,
            label: 'YouTube',
            href: 'https://www.youtube.com/@vedanthighschoolnalgonda',
        }
    ];

    return (
        <footer className="bg-brandRed text-white pt-6 pb-3 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                {/* Contact Info Row - Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-2 mb-6 px-2 flex-wrap">

                    {/* Address Item */}
                    <a
                        href={SCHOOL_MAP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 text-center group"
                    >
                        <div className="text-white">
                            <Icons.MapPin />
                        </div>
                        <p className="text-[12px] md:text-[14px] font-black uppercase leading-tight tracking-tight max-w-[280px]">
                            OLD RAGHAVENDRA COLLEGE,<br />VIDYANAGAR, RAMAGIRI, NALGONDA
                        </p>
                    </a>

                    {/* Phone Item */}
                    <a
                        href="tel:+919052599399"
                        className="flex flex-col items-center gap-3 text-center group"
                    >
                        <div className="text-white">
                            <Icons.Phone />
                        </div>
                        <p className="text-[16px] md:text-[20px] font-black tracking-wide">
                            +91 90525 99399
                        </p>
                    </a>

                    {/* Email Item */}
                    <a
                        href="mailto:vedanthighschoolnalgonda@gmail.com"
                        className="flex flex-col items-center gap-3 text-center group"
                    >
                        <div className="text-white">
                            <Icons.Mail />
                        </div>
                        <p className="text-[12px] md:text-[14px] font-black tracking-tight break-all max-w-[280px]">
                            vedanthighschoolnalgonda@gmail.com
                        </p>
                    </a>

                    {/* School Timings Item */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="9" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        <div>
                            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white/70">School Timings</p>
                            <p className="text-[12px] md:text-[14px] font-black">9:00 AM – 4:30 PM</p>
                        </div>
                    </div>

                    {/* Office Timings Item */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="9" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        <div>
                            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white/70">Office Timings</p>
                            <p className="text-[12px] md:text-[14px] font-black">9:00 AM – 4:30 PM</p>
                        </div>
                    </div>
                </div>

                {/* Horizontal Line Separator */}
                <div className="w-full h-px bg-white/20 mb-6"></div>

                {/* Social Links Row */}
                <div className="flex justify-center gap-4 mb-6">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-brandRed transition-all duration-300 transform hover:-translate-y-2 border border-white/10 shadow-lg"
                            aria-label={social.label}
                        >
                            <div className="scale-100">
                                {social.icon}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="flex flex-col items-center pt-3 border-t border-white/10">
                    <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-white/30 font-black text-center">
                        © {currentYear} Vedant High School. Empowering Futures, Rooted in Values.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
