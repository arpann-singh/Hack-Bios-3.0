import React from 'react';

const Sponsors = () => {
    return (
        <section className="py-20 bg-[#050a05] text-center">
            <h2 className="text-4xl md:text-5xl font-mono text-white mb-16 uppercase tracking-widest">
                Our <span className="text-[#00ff41]">Partners</span>
            </h2>

            {/* Diamond Sponsor */}
            <div className="mb-16">
                <h3 className="text-[#00e5ff] font-mono text-xl mb-8 uppercase tracking-widest">
                    Diamond Sponsor
                </h3>

                <div className="flex justify-center">
                    <a
                        href="https://devfolio.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Devfolio"
                        className="rounded-xl border border-[#00e5ff]/30 bg-[#0b120b] px-10 py-8 shadow-[0_0_20px_rgba(0,229,255,0.08)]"
                    >
                        <img
                            src="/assets/devfolio-logo.svg"
                            alt="DEVFOLIO LOGO"
                            className="h-20 md:h-24 w-auto"
                        />
                    </a>
                </div>
            </div>

            {/* Future Sponsors */}
            {/*
      <div className="mt-20">
        <h3 className="text-[#00e5ff] font-mono text-xl mb-8 uppercase tracking-widest">
          Gold Sponsors
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          Add sponsor logos here
        </div>
      </div>
      */}
        </section>
    );
};

export default Sponsors;