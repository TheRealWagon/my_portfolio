import { useEffect, useState } from 'react';
import logo from '../assets/ODY tech logo only bg_removed.png';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-100 flex max-w-[calc(100vw-16px)] items-center gap-3 px-3 py-2 rounded-full border transition-all duration-500 whitespace-nowrap sm:gap-5 sm:px-4 ${
            scrolled
                ? 'bg-black/88 backdrop-blur-2xl border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.03)]'
                : 'bg-black/30 backdrop-blur-xl border-white/8'
        }`}>

            {/* Logo */}
            <a href="#" className="no-underline">
                <img
                    height="26"
                    src={logo}
                    alt="ODY tech logo"
                    className="block h-6.5 w-6.5 object-contain shrink-0 cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(247,157,76,0.8)] hover:scale-105"
                />
            </a>

            {/* Separator */}
            <div className="w-px h-3.5 bg-white/12 shrink-0" />

            {/* Nav */}
            <nav className="flex items-center gap-3 sm:gap-5">
                <a href="#about"   className="text-[13px]">About</a>
                <a href="#projects" className="text-[13px]">Work</a>
                <a href="#contact" className="text-[13px]">Contact</a>
            </nav>

            {/* Separator */}
            <div className="w-px h-3.5 bg-white/12 shrink-0" />

            {/* CTA */}
            <a
                href="#contact"
                className="button-link group relative overflow-hidden gap-1.75 px-3.5 py-1.5 bg-transparent border border-brand/40 text-brand text-[13px] font-semibold rounded-full cursor-pointer transition-colors duration-300 hover:border-brand hover:text-darker no-underline"
            >
                <span className="absolute inset-0 bg-brand -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 w-1.5 h-1.5 bg-green rounded-full shrink-0 animate-[hdr-pulse_2.2s_ease-in-out_infinite]" />
                <span className="relative z-10">Hire me</span>
            </a>
        </header>
    );
}

export default Header;
