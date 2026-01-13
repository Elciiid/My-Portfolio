import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { SOCIALS } from '../constants';
import Footer3D from './Footer3D';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const circleRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // 1. Clip Path Reveal Animation (Iris Effect)
    gsap.fromTo(footerRef.current,
      { clipPath: "circle(0% at 50% 50%)" },
      {
        clipPath: "circle(150% at 50% 50%)",
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "top 20%",
          scrub: 1,
        }
      }
    );

    // 2. Magnetic + Glitch Effect for Large Circle
    const circle = circleRef.current;

    // Circle reveal scale
    gsap.fromTo(circle,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      }
    );

    let shakeTween;

    const handleMouseMove = (e) => {
      const rect = circle.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Smooth Magnetic Move
      gsap.to(circle, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(circle.querySelector('.inner-content'), {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      // Start Glitch/Shake
      shakeTween = gsap.to(circle.querySelector('.inner-content'), {
        x: "random(-5, 5)",
        y: "random(-5, 5)",
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false })"
      });

      gsap.to(circle, { borderColor: "#F48FB1", borderWidth: 2, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      // Stop Glitch
      if (shakeTween) shakeTween.kill();

      // Reset Position
      gsap.to(circle, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)", borderColor: "transparent" });
      gsap.to(circle.querySelector('.inner-content'), { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    };

    circle.addEventListener('mousemove', handleMouseMove);
    circle.addEventListener('mouseenter', handleMouseEnter);
    circle.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      circle.removeEventListener('mousemove', handleMouseMove);
      circle.removeEventListener('mouseenter', handleMouseEnter);
      circle.removeEventListener('mouseleave', handleMouseLeave);
      if (shakeTween) shakeTween.kill();
    };

  }, []);

  return (
    <footer ref={footerRef} id="footer" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-20 pb-10">

      {/* 3D Background */}
      <Footer3D />

      {/* Top Fade Gradient */}
      <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      {/* Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#F48FB1]/5 to-transparent pointer-events-none" />

      {/* Main Content Center */}
      <div ref={contentRef} className="flex-1 flex flex-col items-center justify-center relative z-10 px-6">
        <p className="text-gray-400 text-sm md:text-base tracking-widest uppercase mb-8">Have an idea?</p>

        <a
          href={SOCIALS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          ref={circleRef}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-[#F48FB1] to-rose-600 flex items-center justify-center group cursor-pointer border border-transparent transition-colors"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
          <div className="inner-content flex flex-col items-center text-black">
            <span className="text-3xl md:text-5xl font-black tracking-tighter group-hover:text-white transition-colors duration-300">SAY HI</span>
            <ArrowUpRight size={40} className="mt-2 group-hover:rotate-45 group-hover:text-white transition-all duration-300" />
          </div>

          {/* Pulsing ring */}
          <div className="absolute -inset-4 border border-[#F48FB1]/30 rounded-full animate-ping opacity-20 pointer-events-none" />
        </a>
      </div>

      {/* Bottom Bar - Absolute Center Layout */}
      <div className="w-full px-6 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between mt-12 mb-4">

        {/* Left: Name & Location (Variable Width) */}
        <div className="text-center md:text-left md:flex-1">
          <h4 className="text-white text-lg font-bold">Jonas David</h4>
          <p className="text-gray-500 text-xs mt-1 opacity-70">{SOCIALS.location}</p>
        </div>

        {/* Center: Social Icons (Strictly Absolute Center) */}
        {/* This div is constrained using absolute positioning on MD+ screens to ensure perfect centering regardless of sibling width */}
        <div className="my-6 md:my-0 flex gap-4 justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          {[
            { icon: Github, link: SOCIALS.github },
            { icon: Linkedin, link: SOCIALS.linkedin },
            { icon: Mail, link: `mailto:${SOCIALS.email}` }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
            >
              <item.icon size={18} />
            </a>
          ))}
        </div>

        {/* Right: Copyright (Variable Width) */}
        <div className="text-gray-600 text-[10px] uppercase tracking-widest text-center md:text-right md:flex-1">
          © {new Date().getFullYear()} Jonas David<br />
          All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
