import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const mediaRef = useRef(null);
  const contentRef = useRef(null);
  const notificationRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    // 1. 3D Tilt & Cursor Move
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation (max 5 degrees)
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000
      });

      // Move cursor highlight
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: x,
          y: y,
          opacity: 1,
          duration: 0.2
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.out'
      });

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          opacity: 0,
          duration: 0.2
        });
      }
    };

    // 2. Media Scale on Hover
    // We can use GSAP for this or rely on CSS group-hover utility. 
    // The CSS has group-hover:scale-105 which works, but let's add the JS for smoother control if needed.
    // Actually, the CSS "group-hover:scale-105 transition-transform duration-700" in the JSX handles the image zoom nicely.
    // We will stick to the tilt/cursor logic here to avoid conflict.

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleConfidentialClick = (e) => {
    e.preventDefault();

    if (notificationRef.current) {
      gsap.killTweensOf(notificationRef.current);
      const tl = gsap.timeline();
      tl.set(notificationRef.current, { display: 'block' })
        .fromTo(notificationRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
        .to(notificationRef.current,
          { opacity: 0, y: -10, duration: 0.4, delay: 2, ease: 'power2.in' }) // Show for 2 seconds
        .set(notificationRef.current, { display: 'none' });
    }
  };

  return (
    <div
      ref={cardRef}
      className="group relative flex-none w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] md:h-[70vh] flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors duration-500"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Dynamic Cursor Highlight inside card */}
      <div
        ref={cursorRef}
        className="absolute w-[300px] h-[300px] bg-[#F48FB1]/20 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 z-0"
      />

      {/* Media Section - 65% height */}
      <div className="relative h-[65%] w-full overflow-hidden bg-black/20 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10 opacity-60" />

        {project.isVideo ? (
          <video
            ref={mediaRef}
            src={project.image}
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <img
            ref={mediaRef}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            onError={(e) => {
              e.target.src = 'https://placehold.co/600x400/222/F48FB1?text=Project';
            }}
          />
        )}
      </div>

      {/* Content Section - 35% height */}
      <div className="relative z-10 flex flex-col justify-between p-6 md:p-8 h-[35%] bg-gradient-to-t from-black/80 to-transparent">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[1px] w-8 bg-[#F48FB1]" />
            <div className="text-[#F48FB1] text-xs font-bold uppercase tracking-widest">
              {project.type}
            </div>
          </div>

          <h3 className="text-xl md:text-3xl font-bold mb-3 text-white group-hover:text-[#F48FB1] transition-colors">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 relative">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-[10px] border border-white/10 bg-white/5 rounded-md text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Notification Text */}
          <div
            ref={notificationRef}
            className="absolute right-0 -top-8 bg-[#F48FB1] text-black text-xs font-bold px-3 py-1 rounded-full pointer-events-none hidden shadow-[0_0_15px_rgba(244,143,177,0.5)]"
          >
            Owned by La Rose Noire
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={project.isConfidential ? handleConfidentialClick : undefined}
            className="flex items-center gap-2 text-sm text-white font-medium group/btn hover:text-[#F48FB1] transition-colors cursor-pointer"
          >
            Explore <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const bgRef = useRef(null);
  const shapesRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;

    // Calculate scroll based on total width
    const getScrollAmount = () => {
      return -(container.scrollWidth - window.innerWidth + 100);
    };

    // Horizontal Scroll Trigger
    const scrollTween = gsap.to(container, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + (container.scrollWidth - window.innerWidth),
        invalidateOnRefresh: true,
      }
    });

    // Floating Shapes Parallax
    gsap.utils.toArray('.floating-shape').forEach((shape, i) => {
      gsap.to(shape, {
        x: (i + 1) * -200, // Move left as we scroll right
        rotation: (i + 1) * 180,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + (container.scrollWidth - window.innerWidth),
          scrub: 2 // Looser scrub for depth effect
        }
      })
    });

    // Background Gradient Animation
    gsap.to(bgRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear"
    });

    // Clean up
    return () => {
      scrollTween.kill();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden"
    >
      {/* Rotating Background Gradeint Blob */}
      <div
        ref={bgRef}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#F48FB1]/10 to-transparent rounded-full blur-[100px] pointer-events-none opacity-50"
      />

      {/* Decorative Markers */}
      <div className="absolute top-1/4 left-10 text-white/10 text-9xl font-black opacity-10 select-none pointer-events-none overflow-hidden" aria-hidden="true">+</div>
      <div className="absolute bottom-1/4 right-10 text-white/10 text-9xl font-black opacity-10 select-none pointer-events-none overflow-hidden" aria-hidden="true">+</div>

      {/* Parallax Floating Shapes */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="floating-shape absolute top-1/4 left-1/4 w-32 h-32 border border-[#F48FB1]/20 rounded-full" />
        <div className="floating-shape absolute bottom-1/3 right-1/4 w-48 h-48 border border-purple-500/20 rounded-full" />
        <div className="floating-shape absolute top-1/2 left-2/3 w-24 h-24 bg-[#F48FB1]/5 rounded-lg rotate-45" />
      </div>

      <div className="px-6 md:px-12 mb-8 md:mb-12 max-w-7xl mx-auto w-full relative z-10">
        <h2 ref={headingRef} className="text-4xl md:text-6xl font-black text-white mb-2">
          SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F48FB1] to-rose-500">WORKS</span>
        </h2>
        <div className="w-20 h-1 bg-[#F48FB1] rounded-full" />
      </div>

      <div
        ref={containerRef}
        className="flex gap-8 px-6 md:px-12 w-fit items-center perspective-[2000px] relative z-20"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-12 flex items-center gap-4 text-white/30 text-xs tracking-widest uppercase">
        <div className="w-12 h-[1px] bg-white/20" />
        Scroll to navigate
      </div>
    </section>
  );
};

export default Projects;
