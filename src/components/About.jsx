import { createElement, useEffect, useRef, useState } from 'react';
import { FiLayout, FiServer, FiDatabase, FiEye, FiCompass, FiCode, FiZap } from 'react-icons/fi';

const stats = [
    { value: 2,   suffix: '+', label: 'Years Experience' },
    { value: 11,  suffix: '+', label: 'Helpful Features' },
    { value: 10,  suffix: '+', label: 'Projects Built' },
    { value: 100, suffix: '%', label: 'Full-Stack' },
];

const services = [
    { icon: <FiLayout />,   title: 'Websites That Sell',       items: ['Modern business websites', 'Clear menus and product pages', 'Mobile-first layouts', 'Fast contact flows'] },
    { icon: <FiServer />,   title: 'Smart Business Tools',      items: ['Booking and contact forms', 'Simple order requests', 'Admin-friendly updates', 'Workflow automation'] },
    { icon: <FiDatabase />, title: 'Launch & Support',          items: ['Domain and hosting setup', 'Speed and reliability', 'Search-friendly pages', 'Ongoing improvements'] },
];

const techCategories = [
    { label: 'Customers', tags: ['Click to call', 'WhatsApp links', 'Contact forms'] },
    { label: 'Shops',     tags: ['Menus', 'Product pages', 'Special offers'] },
    { label: 'Trust',     tags: ['Reviews', 'Opening hours', 'Location maps'] },
    { label: 'Growth',    tags: ['SEO basics', 'Analytics', 'Easy updates'] },
];

const workSteps = [
    { num: '01', icon: FiEye,     title: 'Understand', desc: 'I start by deeply understanding your business, goals, and constraints before writing a single line of code.' },
    { num: '02', icon: FiCompass, title: 'Design',     desc: 'Architecture and UI decisions made upfront - the right structure makes everything that follows easier.' },
    { num: '03', icon: FiCode,    title: 'Build',      desc: 'Clean, maintainable code across the full stack. I take ownership from day one and keep you in the loop.' },
    { num: '04', icon: FiZap,     title: 'Deploy',     desc: 'Production-ready deployments with proper pipelines, monitoring, and documentation that actually makes sense.' },
];

function useCounter(target, duration, active) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let startTime = null;
        const step = (ts) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [active, target, duration]);
    return count;
}

function StatItem({ value, suffix, label, active }) {
    const count = useCounter(value, 1400, active);
    return (
        <div className="group flex-1 py-12 px-6 text-center border-r border-border last:border-r-0 hover:bg-surface transition-colors duration-300 relative overflow-hidden max-md:min-w-[50%] max-md:border-b max-md:even:border-r-0">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand w-2/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            <div className="text-5xl font-bold text-brand leading-none mb-2.5">
                {count}<span className="text-3xl">{suffix}</span>
            </div>
            <div className="px-2 text-xs text-muted uppercase tracking-widest leading-relaxed">{label}</div>
        </div>
    );
}

export default function About() {
    const statsRef = useRef(null);
    const [statsActive, setStatsActive] = useState(false);
    const workRef = useRef(null);
    const [workActive, setWorkActive] = useState(false);

    useEffect(() => {
        const statsObserver = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStatsActive(true); },
            { threshold: 0.4 }
        );
        if (statsRef.current) statsObserver.observe(statsRef.current);

        const workObserver = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setWorkActive(true); },
            { threshold: 0.3 }
        );
        if (workRef.current) workObserver.observe(workRef.current);

        return () => { statsObserver.disconnect(); workObserver.disconnect(); };
    }, []);

    return (
        <section className="w-full bg-darker section-py overflow-hidden pb-0" id="about">
            <div className="container-main relative">

                {/* Watermark - anchored to container, sits behind content via z-0 */}
                <div className="absolute -top-25 left-0 z-0 text-[#2a2a2a] text-[7rem] font-bold leading-none pointer-events-none select-none whitespace-nowrap max-md:hidden opacity-50">
                    <span>{'<'}</span>about me<span>{'>'}</span>
                </div>

                {/* ── Bio ── */}
                <div className="relative z-10 flex flex-col gap-10 mb-26 md:flex-row md:justify-between md:gap-16">
                    <div className="shrink-0">
                        <div className="font-bold text-[2rem] leading-[1.2] mb-7.5">
                            My <br className="hidden md:block" />Biography
                        </div>
                    </div>
                    <div className="flex flex-col gap-7 text-[0.95rem] text-text-2 leading-[1.95] md:w-[68%]">
                        <p>
                            I'm <strong className="text-white font-semibold">Thomas Odvart</strong> - a Belgian full-stack software developer
                            with a passion for building software that solves real-world problems. I currently work as a Software Developer at{' '}
                            <span className="text-brand font-semibold">Wattina</span>, building energy management systems and industrial monitoring platforms.
                        </p>
                        <p>
                            My work spans the entire stack - backend architecture, databases, intuitive dashboards, IoT integrations, and cloud deployments.
                            I take ownership from concept to production and enjoy every step along the way.
                        </p>
                        <p>
                            What drives me most is <span className="text-brand font-semibold">curiosity</span>. I love understanding how systems work,
                            finding smarter ways to solve problems, and shipping products people genuinely enjoy using.
                        </p>
                    </div>
                </div>

                {/* ── Animated stats ── */}
                <div ref={statsRef} className="relative z-10 flex mb-28 border border-border rounded-[14px] overflow-hidden bg-card max-md:flex-wrap">
                    {stats.map((s, i) => <StatItem key={i} {...s} active={statsActive} />)}
                </div>

                {/* ── Services ── */}
                <div className="relative z-10 mb-28">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="text-brand text-xl font-bold">//</span>
                        <h3 className="text-[1.45rem] font-bold">What I Can Build For You</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
                        {services.map((cat, i) => (
                            <div key={i} className="group relative bg-card border border-border rounded-[14px] px-7.5 py-10 overflow-hidden transition-all duration-300 hover:border-brand/30 hover:-translate-y-1.25 hover:shadow-[0_16px_48px_rgba(247,157,76,0.07)]">
                                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="text-[1.7rem] text-brand mb-4 flex items-center">{cat.icon}</div>
                                <div className="text-[1.05rem] font-bold mb-4.5 text-white">{cat.title}</div>
                                <ul className="flex flex-col gap-2.5 list-none">
                                    {cat.items.map((item, j) => (
                                        <li key={j} className="text-[0.85rem] text-text-2 pl-4 relative transition-colors duration-200 group-hover:text-white/80">
                                            <span className="absolute left-0 text-brand text-[0.75rem] leading-[1.6]">-&gt;</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Tech stack ── */}
                <div className="relative z-10 mb-28">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="text-brand text-xl font-bold">//</span>
                        <h3 className="text-[1.45rem] font-bold">Useful Website Features</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-4">
                        {techCategories.map((cat, i) => (
                            <div key={i}>
                                <div className="text-[0.72rem] text-brand uppercase tracking-widest font-bold mb-3.5">{cat.label}</div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.tags.map(tag => (
                                        <span key={tag} className="bg-card-2 border border-border-2 text-text-2 px-3.5 py-1.5 rounded-[6px] text-[0.82rem] cursor-default transition-all duration-200 hover:border-brand/70 hover:text-brand hover:bg-brand/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── How I work ── */}
                <div ref={workRef} className="relative z-10">
                    <div className="flex items-center gap-3 mb-14">
                        <span className="text-brand text-xl font-bold">//</span>
                        <h3 className="text-[1.45rem] font-bold">How I Work</h3>
                    </div>

                    {/* Desktop: single track line + icon row + cards */}
                    <div className="hidden lg:block">
                        {/* Icon row - track line runs behind icons from center-of-1 to center-of-4 */}
                        <div className="relative flex mb-8">
                            <div className="absolute inset-x-[12.5%] top-6 h-px bg-brand/25 origin-left"
                                 style={workActive ? {
                                     animationName: 'wf-line-x',
                                     animationDuration: '0.9s',
                                     animationTimingFunction: 'ease-out',
                                     animationFillMode: 'both',
                                 } : { transform: 'scaleX(0)' }} />
                            <div
                                className="absolute inset-x-[12.5%] top-6 h-px"
                                style={workActive ? {
                                    animationName: 'wf-fade',
                                    animationDuration: '0.2s',
                                    animationFillMode: 'both',
                                } : { opacity: 0 }}
                            >
                                <span
                                    className="block h-full origin-left rounded-full bg-linear-to-r from-brand/40 via-brand to-brand/50 shadow-[0_0_10px_rgba(247,157,76,0.35)]"
                                    style={workActive ? {
                                        animationName: 'wf-comet-x',
                                        animationDuration: '1.35s',
                                        animationTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                                        animationDelay: '0.25s',
                                        animationFillMode: 'both',
                                    } : undefined}
                                />
                                <span
                                    className="absolute -top-[3px] left-0 h-2 w-2 rounded-full bg-brand shadow-[0_0_14px_rgba(247,157,76,0.55)]"
                                    style={workActive ? {
                                        animationName: 'wf-dot-x',
                                        animationDuration: '1.35s',
                                        animationTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                                        animationDelay: '0.25s',
                                        animationFillMode: 'both',
                                    } : undefined}
                                />
                            </div>
                            {workSteps.map(({ num, icon }, i) => (
                                <div key={num} className="flex-1 flex flex-col items-center gap-2 px-2">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-card border border-brand/40 flex items-center justify-center text-brand transition-all duration-300 hover:border-brand hover:bg-brand/10 hover:shadow-[0_0_18px_rgba(247,157,76,0.22)]"
                                         style={workActive ? {
                                             animationName: 'wf-icon-pop',
                                             animationDuration: '0.55s',
                                             animationTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)',
                                             animationDelay: `${i * 0.2}s`,
                                             animationFillMode: 'both',
                                         } : { opacity: 0 }}>
                                        {createElement(icon, { size: 16 })}
                                    </div>
                                    <div className="text-[0.62rem] text-brand uppercase tracking-widest font-bold"
                                         style={workActive ? {
                                             animationName: 'wf-fade',
                                             animationDuration: '0.4s',
                                             animationDelay: `${i * 0.2 + 0.15}s`,
                                             animationFillMode: 'both',
                                         } : { opacity: 0 }}>
                                        {num}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Card row - same flex-1 px-2 columns so cards align under icons */}
                        <div className="flex">
                            {workSteps.map(({ num, title, desc }, i) => (
                                <div key={num} className="flex-1 px-2"
                                     style={workActive ? {
                                         animationName: 'wf-card-up',
                                         animationDuration: '0.55s',
                                         animationTimingFunction: 'ease',
                                         animationDelay: `${i * 0.2 + 0.15}s`,
                                         animationFillMode: 'both',
                                    } : { opacity: 0 }}>
                                    <div className="group relative overflow-hidden bg-card border border-border rounded-[14px] px-4 py-4 transition-colors duration-300 hover:border-border-2">
                                        <div
                                            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-linear-to-r from-transparent via-white/8 to-transparent"
                                            style={workActive ? {
                                                animationName: 'wf-card-sheen',
                                                animationDuration: '1.2s',
                                                animationDelay: `${i * 0.2 + 0.45}s`,
                                                animationFillMode: 'both',
                                            } : undefined}
                                        />
                                        <div className="font-bold text-white mb-2">{title}</div>
                                        <p className="text-[0.78rem] text-text-2 leading-[1.8]">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile: vertical timeline */}
                    <div className="lg:hidden relative pl-12">
                        <div className="absolute left-5 top-5 bottom-5 w-px bg-linear-to-b from-brand/50 via-brand/20 to-transparent origin-top"
                             style={workActive ? {
                                 animationName: 'wf-line-y',
                                 animationDuration: '0.9s',
                                 animationTimingFunction: 'ease-out',
                                 animationFillMode: 'both',
                             } : { transform: 'scaleY(0)' }} />
                        <div
                            className="absolute left-5 top-5 bottom-5 w-px"
                            style={workActive ? {
                                animationName: 'wf-fade',
                                animationDuration: '0.2s',
                                animationFillMode: 'both',
                            } : { opacity: 0 }}
                        >
                            <span
                                className="block h-full w-full origin-top rounded-full bg-linear-to-b from-brand/40 via-brand to-brand/50 shadow-[0_0_10px_rgba(247,157,76,0.35)]"
                                style={workActive ? {
                                    animationName: 'wf-comet-y',
                                    animationDuration: '1.35s',
                                    animationTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                                    animationDelay: '0.25s',
                                    animationFillMode: 'both',
                                } : undefined}
                            />
                            <span
                                className="absolute -left-[3px] top-0 h-2 w-2 rounded-full bg-brand shadow-[0_0_14px_rgba(247,157,76,0.55)]"
                                style={workActive ? {
                                    animationName: 'wf-dot-y',
                                    animationDuration: '1.35s',
                                    animationTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                                    animationDelay: '0.25s',
                                    animationFillMode: 'both',
                                } : undefined}
                            />
                        </div>
                        {workSteps.map(({ num, icon, title, desc }, i) => (
                            <div key={num}
                                 className={`relative ${i < workSteps.length - 1 ? 'mb-10' : ''}`}
                                 style={workActive ? {
                                     animationName: 'wf-card-up',
                                     animationDuration: '0.5s',
                                     animationTimingFunction: 'ease',
                                     animationDelay: `${i * 0.2}s`,
                                     animationFillMode: 'both',
                                 } : { opacity: 0 }}>
                                <div className="absolute -left-12 top-0 w-10 h-10 rounded-full bg-card border border-brand/40 flex items-center justify-center text-brand shrink-0"
                                     style={workActive ? {
                                         animationName: 'wf-icon-pop',
                                         animationDuration: '0.45s',
                                         animationTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)',
                                         animationDelay: `${i * 0.2 + 0.05}s`,
                                         animationFillMode: 'both',
                                     } : { opacity: 0 }}>
                                    {createElement(icon, { size: 15 })}
                                </div>
                                <div className="relative overflow-hidden bg-card border border-border rounded-[14px] px-5 py-4">
                                    <div
                                        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-linear-to-r from-transparent via-white/8 to-transparent"
                                        style={workActive ? {
                                            animationName: 'wf-card-sheen',
                                            animationDuration: '1.2s',
                                            animationDelay: `${i * 0.2 + 0.45}s`,
                                            animationFillMode: 'both',
                                        } : undefined}
                                    />
                                    <div className="text-[0.65rem] text-brand uppercase tracking-widest font-bold mb-1">{num}</div>
                                    <div className="font-bold text-white mb-2">{title}</div>
                                    <p className="text-[0.82rem] text-text-2 leading-[1.8]">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
