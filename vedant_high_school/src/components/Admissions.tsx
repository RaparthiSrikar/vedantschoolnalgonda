import React, { useState } from 'react';

const Admissions: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        grade: '',
        message: ''
    });

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    const getGradeLabel = (value: string) => {
        switch (value) {
            case 'nursery': return 'Nursery / LKG / UKG';
            case '1-5': return 'Grades 1 - 5';
            case '6-10': return 'Grades 6 - 10';
            default: return value;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const whatsappNumber = "919052599399";

        const message = `Hello, I would like to enquire about admission.\n\n` +
            `Admission Enquiry Details\n\n` +
            `Parent Name: ${formData.name}\n` +
            `Phone Number: ${formData.phone}\n` +
            `Email Address: ${formData.email}\n` +
            `Seeking Admission For Grade: ${getGradeLabel(formData.grade)}\n\n` +
            `Additional Message:\n` +
            `${formData.message}`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');

        setFormData({ name: '', phone: '', email: '', grade: '', message: '' });
    };

    return (
        <div className="animate-fade-in bg-white">
            {/* Header section with increased padding for touching navbar */}
            <section className="bg-brandOrange pt-32 pb-24 text-white text-center relative overflow-hidden">
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-5xl font-black font-display mb-4 text-white uppercase tracking-tight">Join Our Community</h1>
                    <p className="text-white/90 max-w-2xl mx-auto font-medium">Admissions Open for {currentYear}–{nextYear}</p>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-brandRed font-display">How to Apply?</h2>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Enquiry", desc: "Fill out the online enquiry form or visit our school campus office." },
                                    { step: "02", title: "Registration", desc: "Submit the registration form along with required documents." },
                                    { step: "03", title: "Interaction", desc: "An interaction with the child and parents to understand mutual goals." },
                                    { step: "04", title: "Confirmation", desc: "Finalize the admission by paying the requisite fees." }
                                ].map((s, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <span className="text-4xl font-bold text-brandViolet/30 font-display">{s.step}</span>
                                        <div>
                                            <h4 className="font-bold text-primary text-xl mb-1">{s.title}</h4>
                                            <p className="text-gray-500">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-softBg p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-brandRed mb-6">Required Documents</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Birth Certificate",
                                    "Previous Year Report Card",
                                    "Transfer Certificate (TC)/Record Sheet",
                                    "Aadhar Card of Student and Parent",
                                    "Passport size Photographs",
                                    "Study Conduct Certificate"
                                ].map((doc, idx) => (
                                    <li key={idx} className="flex items-center space-x-2 text-gray-600 text-sm">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        <span>{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 sticky top-28 h-fit">
                        <h3 className="text-3xl font-bold text-brandRed mb-2 font-display">Admission Enquiry</h3>
                        <p className="text-gray-500 mb-8 text-sm">Please fill the form below and it will be sent to our admissions office via WhatsApp.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-wider">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-softBg border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-wider">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-softBg border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent outline-none transition-all"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase tracking-wider">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-softBg border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase tracking-wider">Seeking Admission For Grade</label>
                                <select
                                    required
                                    value={formData.grade}
                                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                                    className="w-full bg-softBg border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option value="">Select Grade</option>
                                    <option value="nursery">Nursery / LKG / UKG</option>
                                    <option value="1-5">Grades 1 - 5</option>
                                    <option value="6-10">Grades 6 - 10</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase tracking-wider">Additional Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                    className="w-full bg-softBg border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent outline-none transition-all resize-none"
                                    placeholder="Tell us about your child..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-brandRed transition-all shadow-lg hover:shadow-xl transform active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
                            >
                                Send via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admissions;