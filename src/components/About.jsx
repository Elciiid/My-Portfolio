import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import profileImage from '../assets/jonasdavid.png';
import { SKILLS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const skillsRef = useRef(null);
  const containerRef = useRef(null);
  const auraRef = useRef(null);


  useGSAP(() => {
    // ... (keep section entrance)



    // Scroll-driven Path Drawing
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );

    // Image animation with advanced effects
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.6, rotationY: 120, rotationX: 30 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          once: true,
        },
        ease: 'back.out',
      }
    );

    // Aura animation
    gsap.fromTo(
      auraRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 0.2,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          once: true,
        },
      }
    );

    // Heading animation with letter stagger effect
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -80, rotationZ: -5 },
      {
        opacity: 1,
        x: 0,
        rotationZ: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          once: true,
        },
        ease: 'power3.out',
      }
    );

    // Skills animation with advanced stagger
    gsap.fromTo(
      skillsRef.current?.querySelectorAll('.skill-item'),
      { opacity: 0, y: 40, scale: 0.7, rotationZ: 10 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationZ: 0,
        duration: 0.7,
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          once: true,
        },
        ease: 'back.out',
      }
    );



    // Scroll-driven Path Drawing
    const path = document.querySelector('.draw-path');
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      });
    }

    // Tech Ring Animation
    gsap.to(".gsap-tech-ring", {
      rotation: 360,
      transformOrigin: "800px 150px", // spin around its center
      duration: 30,
      repeat: -1,
      ease: "linear"
    });

    // SVG Decorations Animation
    gsap.to(".gsap-line-path", {
      strokeDashoffset: -100, // Assumes we set dasharray in CSS or here, but straightforward path movement works better with x/y usually
      x: 10,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Animate the path shape itself using attribute modification if we wanted, 
    // but here we'll just float them
    gsap.to(".bg-path-2", {
      attr: { d: "M0,75 Q40,80 60,65 T100,75" },
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".gsap-float-circle", {
      y: -15,
      x: 5,
      duration: 6,
      repeat: -1,
      yoyo: true,
      stagger: 2,
      ease: "sine.inOut"
    });

    // Skill item hover animations
    const handleSkillHover = (el) => {
      gsap.to(el, {
        scale: 1.1,
        x: 10,
        boxShadow: '0 10px 30px rgba(244,143,177,0.3)',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(el.querySelector('.dot'), {
        scale: 1.5,
        boxShadow: '0 0 20px rgba(244,143,177,1)',
        duration: 0.3,
      });
    };

    const handleSkillLeave = (el) => {
      gsap.to(el, {
        scale: 1,
        x: 0,
        boxShadow: '0 0 0 rgba(244,143,177,0)',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(el.querySelector('.dot'), {
        scale: 1,
        boxShadow: '0 0 10px rgba(244,143,177,0.6)',
        duration: 0.3,
      });
    };

    skillsRef.current?.querySelectorAll('.skill-item').forEach((el) => {
      el.addEventListener('mouseenter', () => handleSkillHover(el));
      el.addEventListener('mouseleave', () => handleSkillLeave(el));
    });

    return () => {
      skillsRef.current?.querySelectorAll('.skill-item').forEach((el) => {
        el.removeEventListener('mouseenter', () => handleSkillHover(el));
        el.removeEventListener('mouseleave', () => handleSkillLeave(el));
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 max-w-7xl mx-auto overflow-visible"
    >
      {/* Animated PINK AURA */}
      <div
        ref={auraRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[1000px] h-[200%] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(244,143,177,0.5) 0%, rgba(0,0,0,0) 50%)',
        }}
      />

      {/* Floating Animated SVG Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {/* Draw Path SVG */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <path
            className="draw-path"
            d="M-50,300 C200,500 400,100 600,300 S1050,100 1200,300"
            fill="none"
            stroke="#F48FB1"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            opacity="0.5"
          />
          {/* Rotating Tech Ring */}
          <g className="gsap-tech-ring" opacity="0.2">
            <circle cx="800" cy="150" r="70" fill="none" stroke="#F48FB1" strokeWidth="2" strokeDasharray="20,10" />
            <circle cx="800" cy="150" r="100" fill="none" stroke="#F48FB1" strokeWidth="1" strokeDasharray="5,15" opacity="0.5" />
          </g>
        </svg>

        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            className="gsap-line-path"
            d="M0,50 Q25,30 50,50 T100,50"
            fill="none"
            stroke="#F48FB1"
            strokeWidth="0.5"
          />
          <path
            className="gsap-line-path bg-path-2"
            d="M0,70 Q40,90 60,60 T100,80"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.3"
          />
          <circle className="gsap-float-circle" cx="10" cy="20" r="2" fill="none" stroke="#F48FB1" strokeWidth="0.2" />
          <circle className="gsap-float-circle" cx="90" cy="80" r="3" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.2" />
        </svg>
      </div>

      <div ref={containerRef} className="relative z-10 flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/3">
          {/* Image with 3D effect */}
          <div
            ref={imageRef}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto border-4 border-[#F48FB1] overflow-hidden shadow-[0_0_40px_rgba(244,143,177,0.4)] opacity-0"
            style={{ perspective: '1000px' }}
          >
            <img
              src={profileImage}
              alt="Jonas David"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  'https://placehold.co/400x400/222222/F48FB1?text=JD';
              }}
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h2
            ref={headingRef}
            className="text-5xl font-bold mb-8 opacity-0"
          >
            What I Do
          </h2>

          <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="skill-item group relative flex items-center gap-4 p-4 px-6 bg-white/5 rounded-full border border-white/5 hover:border-[#F48FB1]/50 hover:bg-white/10 transition-all duration-300 cursor-default opacity-0 overflow-hidden"
              >
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#F48FB1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transform: 'translateX(-100%)' }}
                />
                <div className="dot w-2 h-2 bg-[#F48FB1] rounded-full shadow-[0_0_10px_#F48FB1] relative z-10 transition-all" />
                <span className="text-lg font-medium relative z-10">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
