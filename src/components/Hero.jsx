import { useEffect, useRef, useState } from 'react';

const roles = [
    'Website Builder',
    'Business Websites',
    'Local Shop Sites',
    'Online Presence',
];

function useTypewriter(words) {
    const [display, setDisplay] = useState('');
    const state = useRef({ wordIdx: 0, charIdx: 0, deleting: false });

    useEffect(() => {
        let timeout;
        const tick = () => {
            const { wordIdx, charIdx, deleting } = state.current;
            const word = words[wordIdx % words.length];

            if (!deleting) {
                const next = charIdx + 1;
                setDisplay(word.slice(0, next));
                state.current.charIdx = next;
                if (next === word.length) {
                    timeout = setTimeout(() => {
                        state.current.deleting = true;
                        tick();
                    }, 2200);
                    return;
                }
                timeout = setTimeout(tick, 80);
                return;
            }

            const next = charIdx - 1;
            setDisplay(word.slice(0, next));
            state.current.charIdx = next;
            if (next === 0) {
                state.current.deleting = false;
                state.current.wordIdx = wordIdx + 1;
                timeout = setTimeout(tick, 400);
                return;
            }
            timeout = setTimeout(tick, 45);
        };

        timeout = setTimeout(tick, 600);
        return () => clearTimeout(timeout);
    }, [words]);

    return display;
}

function RotatoPlaceholder() {
    return (
        <div className="relative flex aspect-[4/3] w-full max-w-[430px] items-center justify-center overflow-hidden rounded-[20px] border border-dashed border-brand/35 bg-card/80 p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(247,157,76,0.14),transparent_48%)]" />
            <div className="relative z-10">
                <div className="mb-3 text-[0.68rem] font-bold uppercase tracking-widest text-brand">Coming soon</div>
                <div className="text-2xl font-extrabold text-white">Rotato is coming here</div>
                <p className="mt-3 text-[0.88rem] leading-[1.75] text-text-2">
                    A polished device animation will showcase the website across desktop, laptop, and phone.
                </p>
                <a href="/demo" className="button-link mt-5 rounded-[8px] border border-brand/40 px-4 py-2 text-[0.78rem] font-bold text-brand no-underline transition-all duration-300 hover:bg-brand hover:text-darker">
                    View demo website
                </a>
            </div>
        </div>
    );
}

function Hero() {
    const typed = useTypewriter(roles);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 80);
        return () => clearTimeout(t);
    }, []);

    const anim = loaded ? 'animate-[fadeUp_0.6s_ease_forwards]' : 'opacity-0';

    return (
        <section className="flex items-center min-h-170 bg-dark relative overflow-hidden px-[10%] pt-24 pb-18 md:pt-28 md:pb-24">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
            />

            <div
                className="absolute w-[720px] h-[720px] rounded-full -top-56 -right-40 blur-[60px] pointer-events-none animate-[orb-drift_14s_ease-in-out_infinite]"
                style={{ background: 'radial-gradient(circle, rgba(247,157,76,0.14) 0%, transparent 68%)' }}
            />
            <div
                className="absolute w-[480px] h-[480px] rounded-full -bottom-30 -left-20 blur-[70px] pointer-events-none animate-[orb-drift_18s_ease-in-out_infinite_reverse]"
                style={{ background: 'radial-gradient(circle, rgba(90,100,240,0.08) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 flex w-full flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-20 xl:gap-40">
                <div className="w-full max-w-[520px] shrink-0">
                    <div
                        className={`inline-flex items-center gap-2.25 bg-surface border border-border text-text-2 text-xs px-3.5 py-1.5 rounded-full mb-5 tracking-[0.02em] ${anim}`}
                        style={{ animationDelay: '0.1s' }}
                    >
                        <span className="w-1.75 h-1.75 bg-green rounded-full animate-[pulse-green_2s_infinite] shrink-0" />
                        Open to opportunities
                    </div>

                    <h1
                        className={`text-[3.6rem] font-extrabold leading-[1.15] tracking-[-0.02em] mb-1.5 ${anim}`}
                        style={{ animationDelay: '0.22s' }}
                    >
                        Hi, I'm{' '}
                        <span style={{ background: 'linear-gradient(100deg,#f79d4c,#ffcc80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Thomas
                        </span>
                        <span className="block mt-1.5 text-[2rem] font-bold text-text-2 min-h-[1.35em]">
                            {typed}<span className="text-brand font-light animate-[blink_1s_step-end_infinite]">|</span>
                        </span>
                    </h1>

                    <p
                        className={`text-base text-muted leading-[1.75] mt-4 mb-7 max-w-[420px] ${anim}`}
                        style={{ animationDelay: '0.42s' }}
                    >
                        I build clear, modern websites for local businesses that want to look professional and make it easy for customers to get in touch.
                    </p>

                    <div className={`flex gap-3.5 flex-wrap ${anim}`} style={{ animationDelay: '0.56s' }}>
                        <a href="#about" className="button-link no-underline px-7.5 py-3.25 bg-brand border-2 border-brand text-darker font-bold text-sm rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-brand hover:shadow-[0_0_22px_rgba(247,157,76,0.3)]">
                            About me
                        </a>
                        <a href="#projects" className="button-link no-underline px-7.5 py-3.25 bg-transparent border-2 border-border-2 text-text-2 font-semibold text-sm rounded-[10px] cursor-pointer transition-all duration-300 hover:border-brand/40 hover:text-brand">
                            View work
                        </a>
                    </div>
                </div>

                <div className={`w-full max-w-[380px] ${anim}`} style={{ animationDelay: '0.28s' }}>
                    <RotatoPlaceholder />
                </div>
            </div>
        </section>
    );
}

export default Hero;
