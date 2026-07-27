import { FiArrowUpRight } from 'react-icons/fi';

const placeholders = [
    'Bakery website example',
    'Frituur website example',
    'Clothing shop example',
];

export default function Projects() {
    return (
        <section className="bg-dark section-py overflow-hidden" id="projects">
            <div className="container-main relative">
                <div className="absolute -top-18 right-0 z-0 text-[#252525] text-[6rem] font-bold leading-none pointer-events-none select-none whitespace-nowrap max-md:hidden opacity-50">
                    <span>{'<'}</span>examples<span>{'>'}</span>
                </div>

                <div className="relative z-10 flex flex-col gap-5 mb-16 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-brand text-xl font-bold">//</span>
                            <h2 className="text-[1.45rem] font-bold">Real Examples</h2>
                        </div>
                        <p className="text-text-2 text-[0.95rem] leading-[1.85] max-w-[660px]">
                            This section will soon show finished websites and client-ready examples across desktop, laptop, and mobile.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="button-link w-fit gap-2 border border-brand/40 bg-card-2 px-4 py-2.5 text-[0.85rem] font-semibold text-brand no-underline rounded-[8px] transition-all duration-300 hover:bg-brand hover:text-darker"
                    >
                        Start a project
                        <FiArrowUpRight />
                    </a>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
                    {placeholders.map((label) => (
                        <article
                            key={label}
                            className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-[14px] border border-dashed border-brand/30 bg-card/80 p-8 text-center transition-all duration-300 hover:border-brand/50 hover:bg-card"
                        >
                            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(247,157,76,0.12),transparent_45%)]" />
                            <div className="relative z-10">
                                <div className="mb-3 text-[0.68rem] font-bold uppercase tracking-widest text-brand">Coming soon</div>
                                <h3 className="text-xl font-extrabold text-white">Real examples will show here</h3>
                                <p className="mt-3 text-[0.88rem] leading-[1.75] text-text-2">{label}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
