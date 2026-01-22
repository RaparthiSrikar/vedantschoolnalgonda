import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible] = useState(() => window.matchMedia('(pointer: fine)').matches);

    useEffect(() => {

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over a clickable element
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(!!isClickable);
        };

        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none z-[9999] select-none"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                willChange: 'transform',
            }}
        >
            {/* The Pencil Cursor - Flipped so the Tip (Lid) is at the top as the hotspot */}
            <div
                className={`relative transition-all duration-300 ease-out ${isPointer ? 'scale-110 -rotate-[15deg]' : '-rotate-[45deg]'
                    }`}
                style={{
                    left: '-4px', // Align the tip horizontally with the mouse
                    top: '-4px'   // Align the tip vertically with the mouse
                }}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                    className="drop-shadow-md"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Pencil Point (Graphite) - Now at the top */}
                    <path d="M48,14 L50,8 L52,14 Z" fill="#313E67" />

                    {/* Wood Tip */}
                    <path d="M40,30 L50,10 L60,30 Z" fill="#F3E5AB" />

                    {/* Pencil Body (Yellow/Orange) */}
                    <rect x="40" y="30" width="20" height="50" fill="#F58220" />
                    <rect x="46" y="30" width="8" height="50" fill="#FFD700" opacity="0.4" />

                    {/* Metal Band (Silver) */}
                    <rect x="40" y="80" width="20" height="6" fill="#C0C0C0" />
                    <rect x="40" y="82" width="20" height="1" fill="#A0A0A0" />

                    {/* Eraser (Pink) - Now at the bottom */}
                    <path d="M40,86 L40,92 C40,96 60,96 60,92 L60,86 Z" fill="#FFB6C1" />
                </svg>
            </div>
        </div>
    );
};

export default CustomCursor;