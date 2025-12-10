import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden px-4">
    
    {/* FIX: 
       1. Removed '-z-10' (which hid it behind the page background).
       2. Added 'z-0' to keep it visible but behind the text.
       3. Added 'mix-blend-screen' to make the glow interact nicely with the black bg.
    */}
    <motion.div 
      className="absolute top-1/2 left-1/2 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-[#F48FB1] rounded-full blur-[100px] md:blur-[140px] pointer-events-none z-0 mix-blend-screen"
      initial={{ x: "-50%", y: "-50%", scale: 0.8, opacity: 0.4 }} 
      animate={{ 
        x: "-50%",              
        y: "-50%",              
        scale: [0.8, 1.1, 0.8], 
        opacity: [0.4, 0.7, 0.4] 
      }}
      transition={{
        duration: 4,          
        repeat: Infinity,     
        ease: "easeInOut"     
      }}
    />

    {/* CONTENT WRAPPER - Kept at z-10 to stay on top of the glow */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full max-w-6xl mx-auto"
    >
      <h2 className="text-sm md:text-2xl font-medium text-gray-400 mb-4 tracking-wide uppercase">
        Projects, Certifications, & More
      </h2>
      
      <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-6">
        DESIGNS & <br />
        <span className="text-[#F48FB1]">DEVELOPMENT</span>
      </h1>
      
      <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-xl leading-relaxed mt-4 md:mt-8 px-4">
        I love turning ideas into interactive experiences. My focus is on clean design, smooth performance, and code that tells a story.
      </p>

    </motion.div>
  </section>
);

export default Hero;