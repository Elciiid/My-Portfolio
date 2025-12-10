import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/jonasdavid.png';
import { SKILLS } from '../constants';

const About = () => (
  <section className="relative py-24 px-6 max-w-7xl mx-auto overflow-visible">
    
    {/* PINK AURA */}
    <div 
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[1000px] h-[200%] pointer-events-none opacity-20"
      style={{
        background: 'radial-gradient(circle at center, rgba(244,143,177,0.5) 0%, rgba(0,0,0,0) 50%)'
      }}
    />

    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/3">
        {/* Glow Pulse Animation - Updated Border and Shadow to Pink */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto border-4 border-[#F48FB1] overflow-hidden shadow-[0_0_40px_rgba(244,143,177,0.4)] animate-glowPulse">
          <img 
            src={profileImage} 
            alt="Jonas David" 
            className="w-full h-full object-cover" 
            onError={(e) => { e.target.src = 'https://placehold.co/400x400/222222/F48FB1?text=JD'; }}
          />
        </div>
      </div>
      
      <div className="w-full md:w-2/3">
        <h2 className="text-5xl font-bold mb-8">What I Do</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILLS.map((skill, index) => (
             <motion.div 
               key={skill}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
               className="flex items-center gap-4 p-4 px-6 bg-white/5 rounded-full border border-white/5 hover:border-[#F48FB1]/50 transition-colors cursor-default"
             >
               <div className="w-2 h-2 bg-[#F48FB1] rounded-full shadow-[0_0_10px_#F48FB1]" />
               <span className="text-lg font-medium">{skill}</span>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;