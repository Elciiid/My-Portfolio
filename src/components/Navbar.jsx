import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIALS } from '../constants'; // Assuming you might want social links in nav too
import ResumeModal from './ResumeModal';

const Navbar = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const resumeRef = useRef(null);
  const linksRef = useRef(null);
  const basePath = import.meta.env.BASE_URL;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useGSAP(() => {
    // Initial entrance animation
    const tl = gsap.timeline();

    tl.fromTo(containerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    )
      .fromTo(logoRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        "-=0.5"
      )
      .fromTo(linksRef.current?.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'back.out' },
        "-=0.6"
      );

    // Magnetic effect for Resume Button
    const btn = resumeRef.current;

    const mouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const mouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    };

    btn.addEventListener('mousemove', mouseMove);
    btn.addEventListener('mouseleave', mouseLeave);

    // Scroll Logic for "Island" mode
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (!navRef.current.classList.contains('island-mode')) {
          navRef.current.classList.add('island-mode');

          gsap.to(navRef.current, {
            width: 'auto',
            maxWidth: '600px',
            borderRadius: '9999px',
            top: '20px',
            backgroundColor: 'rgba(20, 20, 20, 0.8)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)',
            paddingLeft: '30px',
            paddingRight: '10px',
            paddingTop: '10px',
            paddingBottom: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            duration: 0.5,
            ease: 'power3.out'
          });
          setIsScrolled(true);
        }
      } else {
        if (navRef.current.classList.contains('island-mode')) {
          navRef.current.classList.remove('island-mode');

          gsap.to(navRef.current, {
            width: '100%',
            maxWidth: '100%', // Reset max-width
            borderRadius: '0px',
            top: '0px',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            border: '1px solid transparent',
            borderBottom: '1px solid rgba(255,255,255,0.1)', // Restore original border
            paddingLeft: '24px', // Restore standard padding
            paddingRight: '24px',
            paddingTop: '16px',
            paddingBottom: '16px',
            boxShadow: 'none',
            duration: 0.5,
            ease: 'power3.out'
          });
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      btn.removeEventListener('mousemove', mouseMove);
      btn.removeEventListener('mouseleave', mouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <nav
        ref={navRef}
        className="relative w-full flex justify-between items-center px-6 py-4 gap-4 transition-all duration-300 pointer-events-auto border-b border-white/10 bg-black/50 backdrop-blur-sm"
      >
        {/* Logo */}
        <div ref={logoRef} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F48FB1] to-rose-500 flex items-center justify-center font-bold text-black text-xs shadow-[0_0_15px_rgba(244,143,177,0.5)]">
            JD
          </div>
          <span className={`font-bold tracking-wider text-sm transition-opacity duration-300 ${isScrolled ? 'hidden md:block' : 'block'}`}>
            JONAS DAVID
          </span>
        </div>

        {/* Center Links (Optional - could add nav links here) */}
        <div ref={linksRef} className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {/* You could add anchor links here if desired */}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Status Indicator */}
          <div className={`hidden sm:flex items-center gap-2 transition-opacity duration-300 ${isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-white/50">
              OPEN TO WORK
            </span>
          </div>

          <button
            ref={resumeRef}
            onClick={() => setIsResumeOpen(true)}
            className="group relative flex items-center gap-2 px-5 py-2 bg-white/10 overflow-hidden rounded-full transition-all duration-300 hover:bg-[#F48FB1] hover:text-black cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <FileText size={14} className="relative z-10" />
            <span className="text-xs font-bold relative z-10">RESUME</span>
          </button>
        </div>
      </nav>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default Navbar;
