import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIALS } from '../constants';

const Footer = () => (
  <footer className="relative w-full py-16 md:py-24 px-6 text-center overflow-hidden">
    
    {/* Pink Sunrise Gradient */}
    <div 
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none opacity-20"
      style={{
        background: 'radial-gradient(ellipse at bottom, rgba(244,143,177,0.6) 0%, rgba(0,0,0,0) 70%)'
      }}
    />

    <div className="max-w-4xl mx-auto z-10 relative">
      <p className="text-sm font-light mb-4 text-white/60">Want to hire me?</p>
      
      <a 
        href={`mailto:${SOCIALS.email}`}
        className="block group"
      >
        <h2 className="text-5xl md:text-9xl font-black text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#F48FB1] mb-2">
          Let's Chat!
        </h2>
        <p className="text-lg text-white/40 group-hover:text-[#F48FB1] transition-colors mb-12">
          {SOCIALS.email}
        </p>
      </a>
      
      <div className="flex justify-center gap-6 md:gap-8 mb-12">
        <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 bg-white/10 rounded-full hover:bg-[#F48FB1] hover:scale-110 transition-all">
          <Github size={20} className="md:w-6 md:h-6" />
        </a>
        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 bg-white/10 rounded-full hover:bg-[#F48FB1] hover:scale-110 transition-all">
          <Linkedin size={20} className="md:w-6 md:h-6" />
        </a>
        <a href={`mailto:${SOCIALS.email}`} className="p-3 md:p-4 bg-white/10 rounded-full hover:bg-[#F48FB1] hover:scale-110 transition-all">
          <Mail size={20} className="md:w-6 md:h-6" />
        </a>
      </div>
      
      <p className="text-white/50 text-sm">{SOCIALS.location}</p>
      <p className="text-white/30 text-xs mt-8">&copy; {new Date().getFullYear()} Jonas David</p>
    </div>
  </footer>
);

export default Footer;