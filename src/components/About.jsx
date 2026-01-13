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
  const textRef = useRef(null);


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
    // Tech Shapes Animation
    gsap.to(
      auraRef.current?.querySelectorAll('.gsap-shape'),
      {
        y: 'random(-50, 50)',
        rotation: 'random(-180, 180)',
        opacity: 'random(0.3, 0.8)',
        duration: 'random(5, 10)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 2,
          from: "random"
        }
      }
    );

    // UI Animations
    gsap.fromTo('.gsap-ui-bracket',
      { scale: 2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    gsap.to('.gsap-ui-bar', {
      opacity: 0.8,
      height: 'random(10, 40)',
      duration: 0.5,
      stagger: {
        each: 0.1,
        repeat: -1,
        yoyo: true
      },
      ease: 'power1.inOut'
    });

    // Scramble Text Loop
    const phrases = ["SYSTEM_READY", "THINK_CREATE_MAKE", "INITIALIZING...", "BREACH_DETECTED", "JONAS_DAVID"];
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (textRef.current) {
      let tl = gsap.timeline({ repeat: -1 });

      phrases.forEach(phrase => {
        tl.to(textRef.current, {
          duration: 1,
          onUpdate: function () {
            const progress = this.progress();
            const len = phrase.length;
            let result = "";
            for (let i = 0; i < len; i++) {
              if (i < progress * len) {
                result += phrase[i];
              } else {
                result += chars[Math.floor(Math.random() * chars.length)];
              }
            }
            textRef.current.innerText = result + " //";
          }
        })
          .to({}, { duration: 1.5 }); // Hold text
      });
    }

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
      {/* GSAP Tech Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

        {/* New Tech Elements Container */}
        <div ref={auraRef} className="absolute inset-0 w-full h-full opacity-60">
          {/* Floating Items */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`cross-${i}`}
              className="gsap-shape gsap-cross absolute text-[#F48FB1]/20 font-light"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                fontSize: `${Math.random() * 20 + 20}px`
              }}
            >
              +
            </div>
          ))}

          {[...Array(3)].map((_, i) => (
            <div
              key={`ring-${i}`}
              className="gsap-shape gsap-ring absolute border border-[#F48FB1]/20 rounded-full"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
            />
          ))}

          <svg className="absolute w-full h-full" style={{ opacity: 0.1 }}>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F48FB1" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      {/* GSAP HUD/UI Layer */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Corners */}
        <div className="gsap-ui-bracket absolute top-4 left-4 w-12 h-12 border-t border-l border-[#F48FB1]/30 rounded-tl-lg" />
        <div className="gsap-ui-bracket absolute top-4 right-4 w-12 h-12 border-t border-r border-[#F48FB1]/30 rounded-tr-lg" />
        <div className="gsap-ui-bracket absolute bottom-4 left-4 w-12 h-12 border-b border-l border-[#F48FB1]/30 rounded-bl-lg" />
        <div className="gsap-ui-bracket absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#F48FB1]/30 rounded-br-lg" />

        {/* Side Status Bars */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="gsap-ui-bar w-1 h-6 bg-[#F48FB1]/20 rounded-full" />
          ))}
        </div>

        {/* Decorative Text */}
        <div ref={textRef} className="absolute right-8 top-12 text-[10px] font-mono text-[#F48FB1]/40 tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          SYSTEM_READY // THINK_CREATE_MAKE
        </div>
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
