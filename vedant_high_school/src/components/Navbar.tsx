import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { NAVIGATION_ITEMS, Icons } from '../constants';

interface NavbarProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 15);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent, page: Page) => {
        e.preventDefault();
        onNavigate(page);
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[60] w-full transition-all duration-500 ease-in-out px-6 md:px-10 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-md py-1 md:py-1.5'
                    : 'bg-transparent border-b border-transparent py-2.5 md:py-3.5'
            }`}
        >
            <div className="max-w-[1400px] mx-auto flex justify-between items-center h-[50px] md:h-[60px]">
                {/* Branding Section */}
                <div className="flex items-center flex-shrink-0 h-full py-1.5">
                    <a
                        href={Page.Home}
                        onClick={(e) => handleLinkClick(e, Page.Home)}
                        className="flex items-center h-full group cursor-pointer gap-3"
                    >
                        <div className="h-full transition-transform duration-300 group-hover:scale-[1.03]">
                            <img
                                src="/new_header_logo.png"
                                alt="Vedant High School"
                                className="h-full w-auto object-contain brightness-[1.02] contrast-105"
                            />
                        </div>
                    </a>
                </div>

                {/* Navigation Menu (Desktop) */}
                <div className="hidden lg:flex items-center justify-center flex-grow px-8 h-full">
                    <div className="flex items-center gap-x-2">
                        {NAVIGATION_ITEMS.map((item) => {
                            const isActive = currentPage === item.page;
                            return (
                                <a
                                    key={item.page}
                                    href={item.page}
                                    onClick={(e) => handleLinkClick(e, item.page as Page)}
                                    className={`relative px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 rounded-full flex items-center justify-center ${
                                        isActive
                                            ? 'text-white bg-gradient-to-r from-primary to-navyLight shadow-md shadow-primary/20 scale-105'
                                            : 'text-primary hover:text-brandOrange hover:bg-primary/5 hover:scale-105'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Action */}
                <div className="hidden lg:flex items-center flex-shrink-0">
                    <button
                        onClick={() => onNavigate(Page.Admissions)}
                        className="relative overflow-hidden group bg-gradient-to-r from-brandRed via-brandOrange to-brandYellow text-white px-7 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-brandOrange/20 hover:shadow-xl hover:shadow-brandRed/30 active:scale-95 transition-all duration-500"
                    >
                        <span className="relative z-10">Enquire Now</span>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brandOrange to-brandRed opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2.5 rounded-2xl transition-all duration-300 ${
                            isMenuOpen ? 'bg-primary/10 text-primary' : 'text-primary hover:bg-primary/5'
                        }`}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer (Elegant Card overlay) */}
            <div
                className={`lg:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-white/95 backdrop-blur-2xl border border-white/50 rounded-3xl transition-all duration-500 ease-in-out shadow-2xl p-6 space-y-3 z-50 ${
                    isMenuOpen
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-4 invisible pointer-events-none'
                }`}
            >
                <div className="flex flex-col gap-y-1">
                    {NAVIGATION_ITEMS.map((item) => {
                        const isActive = currentPage === item.page;
                        return (
                            <a
                                key={item.page}
                                href={item.page}
                                onClick={(e) => handleLinkClick(e, item.page as Page)}
                                className={`px-4 py-3 rounded-xl text-xs font-black tracking-[0.1em] uppercase transition-all duration-300 ${
                                    isActive
                                        ? 'text-white bg-gradient-to-r from-primary to-navyLight shadow-md'
                                        : 'text-primary hover:text-brandOrange hover:bg-primary/5'
                                }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>
                <div className="pt-3 border-t border-gray-100">
                    <button
                        onClick={() => {
                            onNavigate(Page.Admissions);
                            setIsMenuOpen(false);
                        }}
                        className="block w-full text-center bg-gradient-to-r from-brandRed via-brandOrange to-brandYellow text-white py-4 rounded-2xl font-black text-xs tracking-[0.2em] uppercase shadow-lg active:scale-95 transition-all duration-300"
                    >
                        Admission Enquiry
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;