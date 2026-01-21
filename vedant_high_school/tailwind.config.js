/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#313E67', // Professional Navy Blue
                secondary: '#FFFFFF', // White
                accent: '#004875', // Brand Blue
                brandRed: '#E21E26', // Vibrant Red
                brandOrange: '#F58220', // School Orange
                brandYellow: '#FFD700', // Education Yellow
                brandViolet: '#8B5CF6',
                softBg: '#F8FAFC',
                navyLight: '#4B5C8C'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Poppins', 'sans-serif'], // Updated to Poppins as per HTML
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
