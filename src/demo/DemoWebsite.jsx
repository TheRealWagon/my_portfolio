import { useEffect, useState } from 'react';
import {
    FiArrowRight, FiMapPin, FiClock, FiPhone,
    FiInstagram, FiPackage, FiBriefcase, FiBook, FiCamera,
} from 'react-icons/fi';

/* ─── data ─────────────────────────────────────────────────────────────── */

const px = (id, w = 700, h = 500) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;


const FEATURED = [
    { name: 'Monstera Deliciosa', type: 'Tropical',     price: '€34', tag: 'Bestseller', img: px(3097770, 400, 533) },
    { name: 'Ficus Lyrata',       type: 'West Africa',  price: '€58', tag: 'Statement',  img: px(1400375, 400, 533) },
    { name: 'Calathea Orbifolia', type: 'Bolivia',      price: '€22', tag: 'New in',     img: px(33448605, 400, 533) },
    { name: 'Alocasia Black',     type: 'Asia Pacific', price: '€45', tag: 'Rare',       img: px(36345704, 400, 533) },
];

const COLLECTION = [
    { name: 'Urban Jungle',    desc: 'Floor plants for statement spaces',    img: px(1055379), price: 'from €48' },
    { name: 'Desk Companions', desc: 'Small wonders for your workspace',     img: px(3076899), price: 'from €14' },
    { name: 'Air Purifiers',   desc: "Nature's air filter, proven to work", img: px(1408221), price: 'from €22' },
    { name: 'Rare Collection', desc: 'Specialty plants for serious growers', img: px(5699664), price: 'from €65' },
    { name: 'Gift Sets',       desc: 'Curated plant gifts with wrapping',    img: px(776656),  price: 'from €38' },
    { name: 'Hanging Plants',  desc: 'Trailing beauties for empty corners',  img: px(1002703), price: 'from €28' },
];

const SERVICES = [
    { Icon: FiPackage,   title: 'Same-day delivery',  desc: 'Plants delivered safely, same day, across Ghent.' },
    { Icon: FiBriefcase, title: 'Workspace styling',   desc: 'We design and install your office plant setup.' },
    { Icon: FiBook,      title: 'Care workshops',      desc: 'Monthly sessions on keeping your plants healthy.' },
    { Icon: FiCamera,    title: 'Event rental',        desc: 'Transform your event with our plant collection.' },
];

/* ─── component ────────────────────────────────────────────────────────── */

export default function DemoWebsite() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', h, { passive: true });
        return () => window.removeEventListener('scroll', h);
    }, []);

    return (
        <main style={{ fontFamily: 'Poppins, sans-serif' }} className="min-h-screen bg-[#f5f8f4] text-[#1a2e1f]">

            {/* ── Header ─────────────────────────────────────────────── */}
            <header className={`fixed left-1/2 top-4 z-50 flex w-[min(1200px,calc(100%-20px))] -translate-x-1/2 items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-6 ${
                scrolled
                    ? 'border border-white/60 bg-white/88 shadow-[0_12px_40px_rgba(26,46,31,0.12)] backdrop-blur-xl'
                    : 'bg-white/30 backdrop-blur-sm border border-white/20'
            }`}>
                <a href="/" className="text-sm font-black tracking-tight text-[#1a2e1f] no-underline">Botanica</a>
                <nav className="hidden items-center gap-7 text-[0.8rem] font-semibold text-[#4a6a50] md:flex">
                    {['Collection', 'Services', 'About', 'Visit'].map(l => (
                        <a key={l} href={`#${l.toLowerCase()}`} className="no-underline transition-colors hover:text-[#1a2e1f]">{l}</a>
                    ))}
                </nav>
                <a href="#visit" className="button-link rounded-full bg-[#1a2e1f] px-4 py-2 text-[0.78rem] font-bold text-white no-underline transition-colors hover:bg-[#2d4a35]">
                    Visit shop
                </a>
            </header>

            {/* ── Hero ───────────────────────────────────────────────── */}
            <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 md:px-10 lg:px-16">
                <div className="pointer-events-none absolute right-[-5%] top-[5%] h-[40vw] w-[40vw] max-h-120 max-w-120 rounded-full bg-[#4a8c5c]/10 blur-[70px]" />
                <div className="pointer-events-none absolute bottom-[10%] left-[-5%] h-[25vw] w-[25vw] max-h-70 max-w-70 rounded-full bg-[#c47f3a]/8 blur-[60px]" />

                <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

                    {/* Text */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4a8c5c]/25 bg-[#4a8c5c]/8 px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-widest text-[#4a8c5c]">
                            <span className="block h-1.5 w-1.5 animate-pulse rounded-full bg-[#4a8c5c]" />
                            Ghent's premium plant atelier
                        </div>
                        <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tight text-[#1a2e1f]" style={{ textWrap: 'balance' }}>
                            Bring your space to life.
                        </h1>
                        <p className="mt-6 max-w-lg text-[1.02rem] leading-[1.85] text-[#5a7060]">
                            Premium houseplants, bespoke workspace styling, and same-day delivery across Ghent. Find the right plant for any space.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#collection" className="button-link gap-2 rounded-full bg-[#1a2e1f] px-7 py-3.5 text-sm font-bold text-white no-underline shadow-[0_12px_32px_rgba(26,46,31,0.22)] transition-colors hover:bg-[#2d4a35]">
                                Browse plants <FiArrowRight />
                            </a>
                            <a href="#visit" className="button-link rounded-full border border-[#1a2e1f]/12 bg-white px-7 py-3.5 text-sm font-bold text-[#1a2e1f] no-underline shadow-[0_4px_16px_rgba(26,46,31,0.06)] transition-colors hover:border-[#4a8c5c]/35">
                                Visit us
                            </a>
                        </div>
                        <div className="mt-10 flex gap-8 border-t border-[#1a2e1f]/8 pt-8">
                            {[['500+', 'Happy customers'], ['8 yrs', 'In Ghent'], ['120+', 'Plant varieties']].map(([v, l]) => (
                                <div key={l}>
                                    <div className="text-2xl font-black text-[#1a2e1f]">{v}</div>
                                    <div className="mt-0.5 text-[0.75rem] font-medium text-[#6a7a6e]">{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botanical visual */}
                    <div className="relative flex min-h-90 items-center justify-center lg:min-h-130">
                        {/* Soft halo */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <div className="h-65 w-65 rounded-full bg-[#1a2e1f]/5 lg:h-90 lg:w-90" />
                        </div>

                        {/* Main plant "photo card" */}
                        <div className="relative z-10 mx-auto w-50 lg:w-66.25">
                            <div
                                className="relative w-full overflow-hidden rounded-[28px] shadow-[0_32px_72px_rgba(26,46,31,0.28)]"
                                style={{ aspectRatio: '2/3' }}
                            >
                                <img
                                    src={px(3097770, 600, 800)}
                                    alt="Monstera Thai Constellation"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement.style.background='linear-gradient(160deg,#2d5a3a,#1a3d24)'; }}
                                />
                                {/* Bottom label */}
                                <div className="absolute inset-x-0 bottom-0 flex items-end p-4 pt-16" style={{ background: 'linear-gradient(to top, rgba(10,26,12,0.75), transparent)' }}>
                                    <div className="text-[0.75rem] font-bold text-white/90">Monstera Thai Constellation</div>
                                </div>
                            </div>
                            {/* SALE badge */}
                            <div className="absolute -right-3 -top-3 rounded-full bg-[#c47f3a] px-3 py-1 text-[0.7rem] font-black text-white shadow-[0_8px_20px_rgba(196,127,58,0.45)]">
                                SALE
                            </div>
                        </div>

                        {/* Floating: today's pick */}
                        <div className="absolute bottom-4 right-0 z-20 max-w-45 rounded-[18px] border border-[#1a2e1f]/5 bg-white p-4 shadow-[0_18px_50px_rgba(26,46,31,0.14)]">
                            <div className="mb-1 text-[0.62rem] font-bold uppercase tracking-widest text-[#4a8c5c]">Today's pick</div>
                            <div className="text-[0.9rem] font-black leading-tight text-[#1a2e1f]">Thai Constellation</div>
                            <div className="mt-1 text-[0.75rem] text-[#6a7a6e]">Last 2 · €124</div>
                        </div>

                        {/* Floating: rating */}
                        <div className="absolute left-0 top-6 z-20 flex items-center gap-2.5 rounded-[14px] border border-[#1a2e1f]/5 bg-white p-3 shadow-[0_12px_35px_rgba(26,46,31,0.1)]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4a8c5c]/15 text-sm text-[#4a8c5c]">★</div>
                            <div>
                                <div className="text-sm font-black leading-none text-[#1a2e1f]">4.9</div>
                                <div className="mt-0.5 text-[0.65rem] text-[#6a7a6e]">500+ reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Featured plants ─────────────────────────────────────── */}
            <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 flex items-end justify-between gap-4">
                        <div>
                            <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-widest text-[#4a8c5c]">In season now</div>
                            <h2 className="text-3xl font-black md:text-4xl">Currently our favourites.</h2>
                        </div>
                        <a href="#collection" className="button-link hidden gap-1.5 text-sm font-bold text-[#1a2e1f] no-underline transition-colors hover:text-[#4a8c5c] md:flex">
                            All plants <FiArrowRight />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {FEATURED.map(({ name, type, price, tag, img }) => (
                            <article key={name} className="group cursor-pointer">
                                <div
                                    className="relative mb-3 overflow-hidden rounded-[20px] shadow-[0_8px_24px_rgba(26,46,31,0.1)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_rgba(26,46,31,0.16)]"
                                    style={{ aspectRatio: '3/4' }}
                                >
                                    <img src={img} alt={name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onLoad={(e) => { e.currentTarget.style.opacity='1'; e.currentTarget.parentElement.style.background=''; }}
                                        onError={(e) => { e.currentTarget.style.opacity='0'; e.currentTarget.parentElement.style.background='linear-gradient(160deg,#2d5a3a,#1a3d24)'; }} />
                                    <div className="absolute inset-x-0 bottom-0 h-2/5" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)' }} />
                                    <div className="absolute bottom-3 left-3 text-sm font-bold text-white">{price}</div>
                                    <div className="absolute right-3 top-3 rounded-full bg-white/20 px-2 py-0.5 text-[0.62rem] font-bold text-white backdrop-blur-sm">{tag}</div>
                                </div>
                                <div className="text-[0.9rem] font-bold leading-snug text-[#1a2e1f]">{name}</div>
                                <div className="mt-0.5 text-[0.78rem] text-[#6a7a6e]">{type}</div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Collection grid ─────────────────────────────────────── */}
            <section id="collection" className="px-6 py-20 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12">
                        <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-widest text-[#4a8c5c]">Shop by category</div>
                        <h2 className="text-3xl font-black md:text-4xl" style={{ textWrap: 'balance' }}>Every plant, a perfect match.</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {COLLECTION.map(({ name, desc, img, price }) => (
                            <article key={name} className="group cursor-pointer overflow-hidden rounded-[22px] bg-white shadow-[0_6px_24px_rgba(26,46,31,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(26,46,31,0.12)]">
                                <div className="relative h-44 overflow-hidden">
                                    <img src={img} alt={name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        onLoad={(e) => { e.currentTarget.style.opacity='1'; e.currentTarget.parentElement.style.background=''; }}
                                        onError={(e) => { e.currentTarget.style.opacity='0'; e.currentTarget.parentElement.style.background='linear-gradient(160deg,#2d5a3a,#1a3d24)'; }} />
                                    <div className="absolute inset-x-0 bottom-0 h-3/5" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)' }} />
                                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                        <div className="text-sm font-black text-white">{name}</div>
                                        <div className="rounded-full bg-white/22 px-2.5 py-1 text-[0.7rem] font-bold text-white backdrop-blur-sm">{price}</div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-[0.85rem] leading-[1.7] text-[#5a7060]">{desc}</p>
                                    <div className="mt-4 flex items-center gap-1.5 text-[0.8rem] font-bold text-[#1a2e1f] transition-colors group-hover:text-[#4a8c5c]">
                                        Browse <FiArrowRight size={13} />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Services ────────────────────────────────────────────── */}
            <section id="services" className="bg-[#1a2e1f] px-6 py-20 text-white md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
                        <div>
                            <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-widest text-[#6aae7a]">What we offer</div>
                            <h2 className="text-3xl font-black md:text-4xl" style={{ textWrap: 'balance' }}>More than just plants.</h2>
                        </div>
                        <p className="text-[0.95rem] leading-[1.85] text-white/55 lg:ml-auto lg:max-w-sm">
                            From a single desk plant to a full office transformation — we handle it all, and we make it easy.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {SERVICES.map(({ Icon, title, desc }) => (
                            <div key={title} className="rounded-[20px] border border-white/8 bg-white/5 p-6 transition-colors hover:bg-white/8">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#4a8c5c]/20 text-[#6aae7a]">
                                    <Icon size={18} />
                                </div>
                                <div className="mb-2 text-base font-bold text-white">{title}</div>
                                <p className="text-[0.82rem] leading-[1.75] text-white/52">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── About ───────────────────────────────────────────────── */}
            <section id="about" className="px-6 py-20 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_10px_40px_rgba(26,46,31,0.08)]">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="flex flex-col justify-center p-8 md:p-12">
                                <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-widest text-[#4a8c5c]">Our story</div>
                                <h2 className="mb-5 text-3xl font-black md:text-4xl" style={{ textWrap: 'balance' }}>Grown in Belgium, arranged with care.</h2>
                                <p className="mb-8 text-[0.95rem] leading-[1.9] text-[#5a7060]">
                                    Botanica opened its doors in Ghent in 2016 with one simple idea: make it easy for people and businesses to bring nature indoors. Eight years on, we stock over 120 varieties and deliver to homes, offices, and events across East Flanders.
                                </p>
                                <div className="flex gap-8 border-t border-[#1a2e1f]/8 pt-8">
                                    {[['2016', 'Founded'], ['4.9 ★', 'Google rating'], ['Ghent', 'Based in']].map(([v, l]) => (
                                        <div key={l}>
                                            <div className="text-xl font-black text-[#1a2e1f]">{v}</div>
                                            <div className="mt-0.5 text-[0.72rem] font-medium text-[#6a7a6e]">{l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative min-h-70 overflow-hidden lg:min-h-0">
                                <img
                                    src={px(26699508, 800, 600)}
                                    alt="Botanica shop interior"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement.style.background='linear-gradient(160deg,#1a3d24,#0f2718)'; }}
                                />
                                <div className="absolute inset-0" style={{ background: 'rgba(15,32,18,0.38)' }} />
                                <div className="absolute bottom-8 left-8 rounded-2xl bg-white/15 px-4 py-3 backdrop-blur-sm">
                                    <div className="mb-1 text-[0.65rem] font-bold uppercase tracking-widest text-white/65">Shop location</div>
                                    <div className="text-lg font-black text-white">Sint-Pietersnieuwstraat</div>
                                    <div className="text-[0.75rem] text-white/55">Open Tue – Sat, 09:00 – 18:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Visit / Contact ─────────────────────────────────────── */}
            <section id="visit" className="px-6 pb-20 md:px-10 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_0.6fr]">

                        {/* CTA card */}
                        <div className="rounded-[28px] bg-[#1a2e1f] p-8 text-white md:p-12">
                            <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-widest text-[#6aae7a]">Come and see us</div>
                            <h2 className="mb-4 text-3xl font-black md:text-4xl" style={{ textWrap: 'balance' }}>Visit us in the heart of Ghent.</h2>
                            <p className="mb-8 max-w-md text-[0.95rem] leading-[1.85] text-white/55">
                                Walk in, browse freely, and take your time. Our team helps you find exactly the right plant — no pressure, just good advice.
                            </p>
                            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                {[
                                    [FiMapPin, 'Sint-Pietersnieuwstraat 18, Ghent'],
                                    [FiClock,  'Tue–Sat, 09:00–18:00'],
                                    [FiPhone,  '+32 9 234 56 78'],
                                ].map(([Icon, text]) => (
                                    <div key={text} className="rounded-[14px] bg-white/8 p-4">
                                        <Icon className="mb-2 text-[#6aae7a]" size={16} />
                                        <div className="text-[0.82rem] font-semibold leading-snug text-white/85">{text}</div>
                                    </div>
                                ))}
                            </div>
                            <a href="mailto:hello@botanica.be" className="button-link gap-2 rounded-full bg-[#4a8c5c] px-7 py-3.5 text-sm font-bold text-white no-underline transition-colors hover:bg-[#5a9e6c]">
                                Send us a message <FiArrowRight />
                            </a>
                        </div>

                        {/* Map */}
                        <div className="relative min-h-70 overflow-hidden rounded-[28px] lg:min-h-0">
                            <iframe
                                title="Botanica location"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=3.712%2C51.042%2C3.728%2C51.051&layer=mapnik&marker=51.0464%2C3.7202"
                                className="absolute inset-0 h-full w-full border-0"
                                loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-x-4 bottom-5 rounded-xl bg-white/92 p-3 shadow-[0_4px_16px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                                <div className="text-[0.85rem] font-bold text-[#1a2e1f]">Botanica Ghent</div>
                                <div className="text-[0.75rem] text-[#5a7060]">Sint-Pietersnieuwstraat 18</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <footer className="border-t border-[#1a2e1f]/8 px-6 py-10 md:px-10 lg:px-16">
                <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <div className="text-base font-black text-[#1a2e1f]">Botanica</div>
                        <div className="mt-0.5 text-[0.8rem] text-[#6a7a6e]">Sint-Pietersnieuwstraat 18, Ghent</div>
                    </div>
                    <div className="flex flex-wrap gap-5 text-[0.8rem] font-semibold text-[#6a7a6e]">
                        {['Collection', 'Services', 'About', 'Contact', 'Privacy'].map(l => (
                            <a key={l} href="#" className="no-underline transition-colors hover:text-[#1a2e1f]">{l}</a>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a2e1f]/5 text-[#4a8c5c] no-underline transition-colors hover:bg-[#1a2e1f]/10">
                            <FiInstagram size={16} />
                        </a>
                        <div className="text-[0.75rem] text-[#9aaa9e]">© 2025 Botanica. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
