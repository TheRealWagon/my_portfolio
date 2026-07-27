export default function Footer() {
    return (
        <footer className="bg-darker border-t border-border">
            <div className="container-main py-14">

                <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">

                    {/* Brand */}
                    <div className="flex flex-col gap-3 max-w-65">
                        <div className="text-[1.1rem] font-bold tracking-tight">
                            Thomas <span className="text-brand">Odvart</span>
                        </div>
                        <p className="text-text-2 text-[0.82rem] leading-[1.8]">
                            Full-stack developer building scalable software - from Belgium to wherever your project needs to go.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-2.5">
                        <div className="text-[0.68rem] text-muted uppercase tracking-widest font-semibold mb-1">Navigate</div>
                        {[['#about', 'About'], ['#projects', 'Work'], ['#contact', 'Contact']].map(([href, label]) => (
                            <a key={href} href={href}
                               className="text-text-2 text-[0.85rem] hover:text-brand transition-colors duration-200 no-underline w-fit">
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Status */}
                    <div className="flex flex-col gap-2.5">
                        <div className="text-[0.68rem] text-muted uppercase tracking-widest font-semibold mb-1">Status</div>
                        <div className="flex items-center gap-2 text-[0.85rem] text-text-2">
                            <span className="w-1.5 h-1.5 bg-green rounded-full animate-[pulse-green_2s_infinite] shrink-0" />
                            Open to freelance work
                        </div>
                        <p className="text-[0.82rem] text-muted">Based in Belgium, EU</p>
                    </div>

                </div>

                {/* Bottom row */}
                <div className="flex flex-col gap-1.5 mt-12 pt-6 border-t border-border md:flex-row md:justify-between md:items-center">
                    <p className="text-muted text-[0.78rem]">&copy; 2026 Thomas Odvart. All rights reserved.</p>
                    <p className="text-muted text-[0.78rem]">Built with React & Tailwind CSS</p>
                </div>

            </div>
        </footer>
    );
}
