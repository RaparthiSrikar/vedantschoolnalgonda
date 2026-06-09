import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Phone, MapPin } from 'lucide-react';
import { Page } from '../types';

interface MessageAction {
    label: string;
    type: 'navigate' | 'call' | 'whatsapp' | 'text';
    value: string;
}

interface Message {
    id: string;
    sender: 'user' | 'bot';
    text: string;
    timestamp: Date;
    actions?: MessageAction[];
}

interface AIChatbotProps {
    onNavigate: (p: Page) => void;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasUnread, setHasUnread] = useState(true);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Initial greeting
    useEffect(() => {
        setMessages([
            {
                id: 'welcome',
                sender: 'bot',
                text: "Hello! Welcome to Vedant High School's Admission Assistant. 🏫\n\nHow can I help you today? Feel free to ask me anything about our admission process, required documents, fee enquiries, or facilities!",
                timestamp: new Date(),
                actions: [
                    { label: 'How to Apply?', type: 'text', value: 'Admission Process' },
                    { label: 'Documents Required', type: 'text', value: 'Required Documents' },
                    { label: 'School Timings', type: 'text', value: 'Timings' },
                    { label: 'Contact Details', type: 'text', value: 'Contact Info' }
                ]
            }
        ]);
    }, []);

    // Scroll to bottom whenever messages or typing state changes
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && chatContainerRef.current && !chatContainerRef.current.contains(event.target as Node)) {
                // Check if target is the toggle button
                const toggleBtn = document.getElementById('chatbot-toggle-button');
                if (toggleBtn && !toggleBtn.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setHasUnread(false);
        }
    };

    const getBotResponse = (userInput: string): { text: string; actions?: Message['actions'] } => {
        const input = userInput.toLowerCase().trim();

        // GREETING
        if (/\b(hi|hello|hey|greetings|hola|good morning|good afternoon|good evening)\b/.test(input)) {
            return {
                text: "Hi there! Glad you reached out. I'm here to answer any questions about admissions, facilities, and academic pathways at Vedant High School.\n\nWhat would you like to know?",
                actions: [
                    { label: 'Admissions Open', type: 'text', value: 'Admission Process' },
                    { label: 'School Facilities', type: 'text', value: 'Facilities' },
                    { label: 'Academic Grades', type: 'text', value: 'Grades Offered' }
                ]
            };
        }

        // ADMISSIONS / HOW TO APPLY
        if (/\b(admission|admissions|apply|application|enroll|registration|register|enquiry|enquire|join)\b/.test(input)) {
            return {
                text: "Admissions are currently open for the academic year 2026–2027! The steps to join our school are simple:\n\n1. **Enquiry**: Submit the online admission enquiry form or visit the school office.\n2. **Registration**: Fill out the official form and attach the required documents.\n3. **Interaction**: A short, friendly assessment and parents interaction to understand goals.\n4. **Confirmation**: Finalize the registration by paying the fees.\n\nWould you like to open our admissions form now?",
                actions: [
                    { label: 'Fill Enquiry Form', type: 'navigate', value: Page.Admissions },
                    { label: 'Required Documents', type: 'text', value: 'Documents' },
                    { label: 'Contact Admissions Office', type: 'call', value: '+919052599399' }
                ]
            };
        }

        // DOCUMENTS
        if (/\b(document|documents|certificate|certificates|paper|papers|required|aadhar|tc|record sheet|photos)\b/.test(input)) {
            return {
                text: "For the admission process, please ensure you have the following documents ready:\n\n• **Birth Certificate** of the student\n• **Previous Year Report Card/Marksheet**\n• **Transfer Certificate (TC)** or Record Sheet\n• **Aadhar Card** of both student and parent\n• **Study & Conduct Certificate**\n• **Passport-size Photographs** (Recent)\n\nWe accept scans/copies during registration. Would you like to proceed to the Admissions page?",
                actions: [
                    { label: 'Go to Admissions Page', type: 'navigate', value: Page.Admissions },
                    { label: 'Enquiry via WhatsApp', type: 'whatsapp', value: 'Hi, I would like to inquire about required documents for admissions.' }
                ]
            };
        }

        // CONTACT / LOCATION / MAP
        if (/\b(contact|phone|number|mobile|email|mail|address|location|map|where|directions|situated|ramagiri|vidyanagar)\b/.test(input)) {
            return {
                text: "Here is how you can connect with us:\n\n📍 **Campus Address**: Old Raghavendra College, Vidyanagar, Ramagiri, Nalgonda, Telangana.\n📞 **Phone**: +91 90525 99399\n✉️ **Email**: vedanthighschoolnalgonda@gmail.com\n\nYou can click the actions below to call us directly or view our location on Google Maps!",
                actions: [
                    { label: 'Call Office Now', type: 'call', value: '+919052599399' },
                    { label: 'Google Maps Directions', type: 'navigate', value: Page.Contact },
                    { label: 'Chat on WhatsApp', type: 'whatsapp', value: 'Hello, I have a query about Vedant High School.' }
                ]
            };
        }

        // TIMINGS / DAYS
        if (/\b(time|timings|hours|duration|working|days|sunday|saturday|open|close|schedule)\b/.test(input)) {
            return {
                text: "Our school operational hours are:\n\n🕒 **School Timings**: 9:00 AM – 5:00 PM\n🏢 **Office / Enquiry Hours**: 8:30 AM – 5:00 PM\n📅 **Working Days**: Monday to Saturday\n❌ **Sunday**: Holiday\n\nVisitors are highly recommended to visit the campus during office hours for admissions.",
                actions: [
                    { label: 'Schedule Campus Visit', type: 'whatsapp', value: 'Hello, I would like to schedule a campus visit for admission enquiry.' },
                    { label: 'Call Office', type: 'call', value: '+919052599399' }
                ]
            };
        }

        // CURRICULUM / CBSE / STATE / GRADES / CLASSES
        if (/\b(cbse|state|board|curriculum|syllabus|grade|grades|class|classes|nursery|lkg|ukg|primary|secondary|teach|medium|english)\b/.test(input)) {
            return {
                text: "Vedant High School is a premier **English Medium school** offering a robust curriculum from Nursery up to Grade 10:\n\n• **Pre-Primary**: Nursery, LKG, UKG (Focused on play-based learning and cognitive/motor skill development).\n• **Primary (Grades 1 to 5)**: Foundational subjects with active learning formats.\n• **Secondary (Grades 6 to 10)**: Strong academic focus, critical thinking, practical labs, and board exam preparation.\n\nWe integrate modern CBSE pedagogy standards with practical real-world skills.",
                actions: [
                    { label: 'View Academics Page', type: 'navigate', value: Page.Academics },
                    { label: 'Explore Learning Tools', type: 'navigate', value: Page.LearningTools }
                ]
            };
        }

        // FEES / COST
        if (/\b(fee|fees|cost|charge|charges|payment|price|money|amount|pay)\b/.test(input)) {
            return {
                text: "Our fee structure is affordable and varies based on the grade level (Pre-Primary, Primary, or Secondary). \n\nTo give you the exact details, options, and sibling discounts, we recommend talking with our counselor or filling out our quick online enquiry form.",
                actions: [
                    { label: 'Request Call Back', type: 'whatsapp', value: 'Hi, I would like to get details about the fee structure for my child.' },
                    { label: 'Fill Online Enquiry', type: 'navigate', value: Page.Admissions }
                ]
            };
        }

        // FACILITIES / INFRASTRUCTURE / LABS / SPORTS / LIBRARY
        if (/\b(facilities|facility|lab|labs|computer|computers|science|library|classroom|classrooms|sports|playground|bus|transport)\b/.test(input)) {
            return {
                text: "Vedant High School is equipped with modern infrastructure to ensure all-round student development:\n\n• **Advanced Science Labs** (Physics, Chemistry & Biology for practical learning)\n• **Modern Computer Lab** (Hands-on digital learning and coding basics)\n• **Rich Library** (Wide range of books, reference materials, and reading corners)\n• **Playground & Sports** (Activities promoting physical health, team play, and leadership)\n\nWould you like to view our infrastructure catalog?",
                actions: [
                    { label: 'View Facilities', type: 'navigate', value: Page.LearningTools },
                    { label: 'Schedule Tour', type: 'whatsapp', value: 'Hi, I would like to schedule a tour of the school facilities.' }
                ]
            };
        }

        // DEFAULT FALLBACK
        return {
            text: "I want to make sure you get the right information! I can answer questions about:\n\n• How to apply & admissions steps\n• Documents required for enrollment\n• Fee structure enquiries\n• School and office timings\n• Campus location & contact numbers\n\nWhat would you like to explore?",
            actions: [
                { label: 'Admissions Process', type: 'text', value: 'How to apply?' },
                { label: 'Required Documents', type: 'text', value: 'Required documents' },
                { label: 'Contact Details', type: 'text', value: 'Where is the school located?' }
            ]
        };
    };

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        // Add user message
        const userMsg: Message = {
            id: `user-${Date.now()}`,
            sender: 'user',
            text: text,
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            const botReply = getBotResponse(text);
            const botMsg: Message = {
                id: `bot-${Date.now()}`,
                sender: 'bot',
                text: botReply.text,
                timestamp: new Date(),
                actions: botReply.actions
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 800);
    };

    const handleActionClick = (action: MessageAction) => {
        if (action.type === 'navigate') {
            onNavigate(action.value as Page);
            setIsOpen(false); // Close chatbot upon navigation
        } else if (action.type === 'call') {
            window.open(`tel:${action.value}`, '_self');
        } else if (action.type === 'whatsapp') {
            const whatsappUrl = `https://wa.me/919052599399?text=${encodeURIComponent(action.value)}`;
            window.open(whatsappUrl, '_blank');
        } else if (action.type === 'text') {
            handleSendMessage(action.value);
        }
    };

    return (
        <>
            {/* Inline CSS Animations for Chatbot Avatar */}
            <style>{`
                @keyframes bot-floating {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }
                @keyframes bot-wiggle {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-8deg); }
                    75% { transform: rotate(8deg); }
                }
                .bot-avatar-container {
                    animation: bot-floating 3s ease-in-out infinite;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .bot-avatar-container:hover {
                    transform: scale(1.08) translateY(-4px) !important;
                    box-shadow: 0 12px 30px rgba(30, 58, 138, 0.3) !important;
                }
                .bot-avatar-container:hover .bot-img {
                    animation: bot-wiggle 0.8s ease-in-out infinite;
                }
            `}</style>

            {/* Toggle Button */}
            <button
                id="chatbot-toggle-button"
                onClick={handleToggle}
                className={`fixed bottom-[90px] right-6 z-50 transition-all duration-300 ${
                    isOpen 
                        ? 'p-4 rounded-full bg-primary text-white shadow-2xl hover:scale-110' 
                        : 'bg-transparent border-none p-0'
                }`}
                style={isOpen ? {
                    backgroundColor: '#1E3A8A',
                    color: 'white',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                } : undefined}
                aria-label="Toggle AI Admissions Assistant"
            >
                {/* Unread indicator */}
                {hasUnread && !isOpen && (
                    <span className="absolute top-0 right-0 z-50 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandRed opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-brandRed text-[9px] font-black items-center justify-center text-white">1</span>
                    </span>
                )}
                {isOpen ? (
                    <X size={28} />
                ) : (
                    <div className="bot-avatar-container relative w-[70px] h-[70px] rounded-full bg-white border-4 border-primary shadow-2xl flex items-center justify-center overflow-hidden">
                        <img 
                            src="/images/chatbot_agent.png" 
                            alt="AI Chatbot Agent" 
                            className="bot-img w-[88%] h-[88%] object-contain mt-0.5 transition-transform"
                        />
                    </div>
                )}
            </button>

            {/* Chatbot Window */}
            {isOpen && (
                <div
                    ref={chatContainerRef}
                    className="fixed bottom-28 right-6 z-50 w-[92vw] sm:w-[400px] h-[550px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fade-in"
                >
                    {/* Header */}
                    <div className="bg-primary text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-white/20 overflow-hidden flex items-center justify-center">
                                <img 
                                    src="/images/chatbot_agent.png" 
                                    alt="AI Assistant" 
                                    className="w-[90%] h-[90%] object-contain mt-0.5"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm leading-tight">Admissions AI Assistant</h3>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    <span className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Online & Ready</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
                            aria-label="Close chat"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                                        msg.sender === 'user'
                                            ? 'bg-brandOrange text-white rounded-tr-none'
                                            : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                                    }`}
                                >
                                    <p className="text-sm whitespace-pre-line leading-relaxed font-medium">
                                        {msg.text}
                                    </p>

                                    {/* Sub-actions rendering */}
                                    {msg.actions && msg.actions.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                                            {msg.actions.map((act, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleActionClick(act)}
                                                    className="bg-primary/5 hover:bg-primary hover:text-white text-primary text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-300 border border-primary/20 flex items-center gap-1.5"
                                                >
                                                    {act.type === 'call' && <Phone size={12} />}
                                                    {act.type === 'navigate' && <MapPin size={12} />}
                                                    {act.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    <span
                                        className={`text-[9px] block text-right mt-1.5 font-bold ${
                                            msg.sender === 'user' ? 'text-white/60' : 'text-gray-400'
                                        }`}
                                    >
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Typing Animation */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3.5 shadow-sm flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Pre-defined Chips for quick typing */}
                    <div className="px-4 py-2 bg-slate-50 border-t border-gray-100 overflow-x-auto whitespace-nowrap flex gap-2 no-scrollbar">
                        {[
                            'Admission Steps',
                            'Documents Required',
                            'School Timings',
                            'School Fees',
                            'Classes Offered',
                            'Contact Info'
                        ].map((chip) => (
                            <button
                                key={chip}
                                onClick={() => handleSendMessage(chip)}
                                className="bg-white hover:bg-brandOrange hover:text-white text-gray-600 text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200 shadow-sm transition-all duration-300"
                            >
                                {chip}
                            </button>
                        ))}
                    </div>

                    {/* Form Footer */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSendMessage(inputValue);
                        }}
                        className="p-3 border-t border-gray-100 bg-white flex items-center gap-2"
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your question..."
                            className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="bg-primary text-white p-2.5 rounded-xl hover:bg-brandRed transition-all shadow-md active:scale-95 disabled:opacity-40 disabled:hover:bg-primary disabled:active:scale-100"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default AIChatbot;
