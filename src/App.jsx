import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import BootAnimation from './components/BootAnimation';
import CustomCursor from './components/CustomCursor';
import StaggeredMenu from './components/StaggeredMenu';
import FloatingSocials from './components/FloatingSocials';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import Stats from './components/Stats';
import GooeyBanner from './components/GooeyBanner';
import Timeline from './components/Timeline';
import PreviousEdition from './components/PreviousEdition';
import Testimonials from './components/Testimonials';
import SponsorMarquee from './components/SponsorMarquee';
import Faq from './components/Faq';
import Contact from './components/Contact';
import { CinematicFooter } from './components/ui/motion-footer';
import RegisterModal from './components/RegisterModal';
import CallForSponsors from './components/CallForSponsors';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [booting, setBooting] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const menuItems = [
    { label: 'Timeline', link: '#timeline' },
    { label: 'Sponsors', link: '#sponsors' },
    { label: 'FAQ', link: '#faq' },
    { label: 'Contact', link: '#contact' },
    { label: 'Register', link: '#hero-section' }
  ];

  const socialItems = [
    { label: 'GitHub', link: '#' },
    { label: 'Twitter', link: '#' },
    { label: 'LinkedIn', link: '#' },
    { label: 'Discord', link: 'https://discord.gg/JbtFtYrUds' }
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.07,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (!booting) {
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        section.classList.add('section-reveal');

        ScrollTrigger.create({
          trigger: section,
          start: 'top 85%',
          onEnter: () => section.classList.add('revealed'),
          onLeaveBack: () => section.classList.remove('revealed'),
        });
      });
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [booting]);

  return (
    <div className="bg-[#050a05] text-white min-h-screen selection:bg-[#00ff41] selection:text-[#050a05]">
      <CustomCursor />
      <FloatingSocials />

      {booting ? (
        <BootAnimation onComplete={() => setBooting(false)} />
      ) : (
        <div className="animate-fade-in overflow-x-hidden">
          <StaggeredMenu items={menuItems} socialItems={socialItems} />

          <main className="relative">
            <div className="fixed inset-0 pointer-events-none z-0">
              <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-[#00ff41]/4 rounded-full blur-[140px] animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-[520px] h-[520px] bg-[#00e5ff]/4 rounded-full blur-[160px] animate-pulse"
                style={{ animationDelay: '2s' }}
              ></div>
            </div>

            <div id="hero-section">
              <Hero />
            </div>

            <div className="relative z-10">
              <Stats />
              <GooeyBanner />

              <div id="timeline">
                <Timeline />
              </div>

              <div id="sponsors">
                <Sponsors />
              </div>

              <CallForSponsors />
              <SponsorMarquee />
              <PreviousEdition />
              <Testimonials />

              <div id="faq">
                <Faq />
              </div>

              <div id="contact">
                <Contact />
              </div>
            </div>
          </main>

          <CinematicFooter />

          <RegisterModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default App;