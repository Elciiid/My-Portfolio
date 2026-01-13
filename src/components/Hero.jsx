import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Hero3DBackground from './Hero3DBackground';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline();

    // Stagger text animations
    timeline.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      0
    );

    timeline.fromTo(
      titleRef.current?.querySelectorAll('span'),
      { opacity: 0, y: 50, rotationX: 90 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1, stagger: 0.15, ease: 'back.out' },
      0.2
    );

    timeline.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      0.5
    );

    timeline.fromTo(
      ctaRef.current?.querySelectorAll('button'),
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'back.out' },
      0.7
    );

    // Parallax and trailing on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 600;

      // Parallax effect - content moves slower than scroll
      gsap.to(contentRef.current, {
        y: scrollY * 0.3,
        opacity: Math.max(0, 1 - scrollY / maxScroll),
        duration: 0.3,
        overwrite: 'auto',
      });

      // Title text effect - slight scale and rotation
      gsap.to(titleRef.current, {
        scale: 1 - scrollY * 0.0002,
        duration: 0.3,
        overwrite: 'auto',
      });

      // Text blur effect at the end
      if (scrollY > 300) {
        gsap.to(contentRef.current, {
          filter: `blur(${Math.min(scrollY - 300) * 0.02}px)`,
          duration: 0.3,
          overwrite: 'auto',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle button clicks
  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetInTouch = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden px-4 pt-20">

      {/* Advanced 3D Background */}
      <Hero3DBackground />

      {/* Content with parallax wrapper */}
      <div ref={contentRef} className="relative z-10 w-full max-w-6xl mx-auto">
        <div
          ref={subtitleRef}
          className="text-sm md:text-lg font-medium text-gray-300 mb-6 tracking-widest uppercase opacity-0"
        >
          Projects, Skills, & More
        </div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-8"
          style={{ perspective: '1000px' }}
        >
          <span className="block">DESIGNS &</span>
          <span className="block text-[#F48FB1]">DEVELOPMENT</span>
        </h1>

        <p
          ref={descriptionRef}
          className="max-w-xl mx-auto text-gray-300 text-sm md:text-xl leading-relaxed mt-4 md:mt-8 px-4 opacity-0"
        >
          I love turning ideas into interactive experiences. My focus is on clean design, smooth performance, and code that tells a story.
        </p>

        <div
          ref={ctaRef}
          className="flex gap-4 justify-center mt-12 flex-wrap opacity-0"
        >
          <button
            onClick={handleViewWork}
            className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-[#F48FB1] to-pink-500 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(244,143,177,0.6)] transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={handleGetInTouch}
            className="px-8 py-3 md:px-10 md:py-4 border border-gray-400 text-white font-semibold rounded-lg hover:border-[#F48FB1] hover:text-[#F48FB1] hover:bg-[#F48FB1]/10 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-[#F48FB1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;