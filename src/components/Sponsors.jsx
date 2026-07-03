import React from 'react';

const Sponsors = () => {
    return (
        <section className="py-20 bg-[#050a05] text-center">
            <h2 className="text-4xl md:text-5xl font-mono text-white mb-16 uppercase tracking-widest">
                Our <span className="text-[#00ff41]">Partners</span>
            </h2>

            {/* Diamond Sponsor Section */}
            <div className="mb-16">
                <h3 className="text-[#00e5ff] font-mono text-xl mb-8 uppercase tracking-widest">Diamond Sponsor</h3>
                <div className="flex justify-center items-center">
                    <a
                        href="https://devfolio.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-8 border border-[#00e5ff]/30 bg-[#00e5ff]/5 hover:bg-[#00e5ff]/10 transition-all duration-300 rounded-lg"
                        aria-label="Devfolio"
                    >
                        <img
                            src="/assets/devfolio-logo.svg"
                            alt="Devfolio"
                            className="h-20 w-auto"
                        />
                    </a>
                </div>
            </div>

            {/* You can add more tiers (Gold, Silver) here later */}
        </section>
    );
};

export default Sponsors;