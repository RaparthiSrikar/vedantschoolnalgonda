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
            setIsScrolled(window.scrollY > 10);
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
            className={`sticky top-0 z-[60] transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 shadow-md backdrop-blur-lg'
                    : 'bg-white border-b border-gray-100'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
                {/* Fixed height container ensures navbar size doesn't increase */}
                <div className="flex justify-between items-center h-[60px] md:h-[80px] overflow-hidden">

                    {/* Branding Section - Maximized Logo height within the fixed navbar height */}
                    <div className="flex items-center flex-shrink-0 h-full py-1">
                        <a
                            href="#home"
                            onClick={(e) => handleLinkClick(e, Page.Home)}
                            className="flex items-center h-full group cursor-pointer"
                        >
                            <div className="h-full transition-transform duration-300 group-hover:scale-[1.02]">
                                <img
                                    src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1768197701/WhatsApp_Image_2026-01-03_at_14.13.46_vxghhe.png"
                                    alt="Vedant High School Logo"
                                    className="h-full w-auto object-contain brightness-105 contrast-105"
                                />
                            </div>
                        </a>
                    </div>

                    {/* Navigation Menu (Desktop) */}
                    <div className="hidden lg:flex items-center justify-center flex-grow px-8">
                        <div className="flex items-center gap-x-8">
                            {NAVIGATION_ITEMS.map((item) => (
                                <a
                                    key={item.page}
                                    href={`#${item.page}`}
                                    onClick={(e) => handleLinkClick(e, item.page as Page)}
                                    className={`text-[10px] font-black uppercase tracking-[0.15em] transition-all py-1 relative group ${currentPage === item.page ? 'text-brandOrange' : 'text-primary/70 hover:text-primary'
                                        }`}
                                >
                                    {item.label}
                                    <span className={`absolute bottom-[-2px] left-0 h-[3px] bg-brandYellow transition-all duration-300 ${currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Action */}
                    <div className="hidden lg:flex items-center flex-shrink-0">
                        <button
                            onClick={() => onNavigate(Page.Admissions)}
                            className="bg-primary text-white px-7 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brandRed transition-all shadow-lg active:scale-95"
                        >
                            Enquire Now
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-primary p-2 hover:bg-primary/5 rounded-xl transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-t border-gray-100 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 visible shadow-2xl' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
                    }`}
            >
                <div className="px-6 py-8 space-y-4">
                    {NAVIGATION_ITEMS.map((item) => (
                        <a
                            key={item.page}
                            href={`#${item.page}`}
                            onClick={(e) => handleLinkClick(e, item.page as Page)}
                            className={`block py-2.5 text-base font-black tracking-[0.1em] uppercase transition-colors ${currentPage === item.page ? 'text-brandOrange' : 'text-primary/70'
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="pt-4">
                        <button
                            onClick={() => {
                                onNavigate(Page.Admissions);
                                setIsMenuOpen(false);
                            }}
                            className="block w-full text-center bg-primary text-white px-5 py-4 rounded-xl font-black text-sm tracking-widest uppercase shadow-2xl active:scale-95 transition-transform"
                        >
                            Admission Enquiry
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;