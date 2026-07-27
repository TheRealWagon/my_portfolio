import { useRef, useState } from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import Linkedin from '../assets/linkedin.png';
import Github from '../assets/githublogo.png';
import Facebook from '../assets/facebooklogo.png';
import Whatsapp from '../assets/whatsapplogo.png';

const socials = [
    { href: 'https://www.linkedin.com/in/thomas-odvart-aa9464179', img: Linkedin, width: 15, alt: 'LinkedIn' },
    { href: 'https://github.com/TheRealWagon', img: Github, width: 20, alt: 'GitHub' },
    { href: 'https://www.facebook.com/thomas.odvart/', img: Facebook, width: 15, alt: 'Facebook' },
    {
        href: 'https://wa.me/32478258204?text=Hi%20Thomas%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk!',
        img: Whatsapp,
        width: 25,
        alt: 'WhatsApp',
    },
];

const fields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
    { id: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: '+32470123456', required: false },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', comment: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const formRef = useRef(null);

    const validate = () => {
        const nextErrors = {};

        if (!formData.name.trim()) nextErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            nextErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            nextErrors.email = 'Invalid email address';
        }

        const phone = formData.phone.trim();
        if (phone && !/^\+?[1-9]\d{7,14}$/i.test(phone)) {
            nextErrors.phone = 'Use 8-15 digits, optionally starting with +';
        }

        if (!formData.comment.trim()) nextErrors.comment = 'Message is required';

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSending(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', comment: '' });
        } catch (err) {
            console.error('Email failed', err);
            alert('Sorry, something went wrong. Please try again later.');
        } finally {
            setIsSending(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const inputClass = 'form-field w-full bg-card-2 border border-border rounded-[10px] px-4 py-3.5 text-[0.9rem] text-white outline-none transition-all duration-200 focus:border-brand/60 placeholder-[#505050]';

    return (
        <section className="bg-darker section-py overflow-hidden" id="contact">
            <div className="container-main relative">
                <div className="absolute -right-10 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-90 z-0 text-[#2a2a2a] text-[5.5rem] font-bold leading-none pointer-events-none select-none whitespace-nowrap max-md:hidden opacity-50">
                    <span>{'<'}</span>contact me<span>{'>'}</span>
                </div>

                <div className="relative z-10 flex items-center gap-3 mb-14">
                    <span className="text-brand text-xl font-bold">//</span>
                    <h2 className="text-[1.45rem] font-bold">Get in touch</h2>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-12 items-start lg:grid-cols-[1fr_1.3fr] lg:gap-20">
                    <div>
                        <h3 className="text-[2.1rem] font-bold leading-[1.2] mb-5">
                            <span className="block">Let's build something</span>
                            <span className="block text-brand">great together.</span>
                        </h3>
                        <p className="text-text-2 text-[0.95rem] leading-[1.85] mb-10 max-w-95">
                            Have a project in mind, need a specific feature, or want a reliable developer in your corner? Drop a message and let's talk.
                        </p>

                        <div className="flex flex-col gap-5 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-card border border-border-2 flex items-center justify-center text-brand text-base shrink-0">
                                    <FiMail />
                                </div>
                                <div>
                                    <div className="text-[0.68rem] text-muted uppercase tracking-widest mb-0.5">Email</div>
                                    <a href="mailto:thomas.odvart@gmail.com" className="text-[0.88rem] text-text-2 no-underline hover:text-brand transition-colors duration-200">
                                        thomas.odvart@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-9 h-9 rounded-full bg-card border border-border-2 flex items-center justify-center text-brand text-base shrink-0">
                                    <FiMapPin />
                                </div>
                                <div>
                                    <div className="text-[0.68rem] text-muted uppercase tracking-widest mb-0.5">Based in</div>
                                    <div className="text-[0.88rem] text-text-2">Belgium, Europe</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {socials.map(({ href, img, width, alt }) => (
                                <a
                                    key={alt}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={alt}
                                    className="w-9 h-9 rounded-full bg-card border border-border-2 flex items-center justify-center transition-all duration-200 hover:border-brand/50 hover:bg-brand/10"
                                >
                                    <img width={width} src={img} alt="" className="block brightness-0 invert" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-[18px] p-6 md:p-10">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                                <div className="w-14 h-14 rounded-full bg-green/10 border border-green/30 flex items-center justify-center text-green text-sm font-bold uppercase">OK</div>
                                <h3 className="text-xl font-bold">Message sent!</h3>
                                <p className="text-text-2 text-[0.9rem]">I'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                                <h3 className="text-[1.15rem] font-bold mb-1">Send a message</h3>

                                {fields.map(({ id, label, type, placeholder, required }) => (
                                    <div key={id} className="flex flex-col gap-1.5">
                                        <label htmlFor={id} className="text-[0.7rem] text-muted uppercase tracking-widest font-semibold">{label}</label>
                                        <input
                                            id={id}
                                            name={id}
                                            type={type}
                                            placeholder={placeholder}
                                            value={formData[id]}
                                            onChange={handleChange}
                                            required={required}
                                            aria-invalid={Boolean(errors[id])}
                                            aria-describedby={errors[id] ? `${id}-error` : undefined}
                                            className={inputClass}
                                        />
                                        {errors[id] && <p id={`${id}-error`} className="text-red-400 text-[0.8rem] mt-0.5">{errors[id]}</p>}
                                    </div>
                                ))}

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="comment" className="text-[0.7rem] text-muted uppercase tracking-widest font-semibold">Message</label>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        value={formData.comment}
                                        onChange={handleChange}
                                        required
                                        aria-invalid={Boolean(errors.comment)}
                                        aria-describedby={errors.comment ? 'comment-error' : undefined}
                                        className={`${inputClass} resize-none`}
                                    />
                                    {errors.comment && <p id="comment-error" className="text-red-400 text-[0.8rem] mt-0.5">{errors.comment}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="mt-2 px-7 py-3.5 bg-brand text-darker font-bold text-[0.9rem] rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-brand-lt hover:shadow-[0_0_24px_rgba(247,157,76,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSending ? 'Sending...' : 'Send Message ->'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
