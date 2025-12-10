import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden px-4">
    
    {/* CONTENT WRAPPER */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full max-w-6xl mx-auto"
    >
      
      {/* BACKGROUND GLOW ANIMATION */}
      {/* FIX: We added x: "-50%" and y: "-50%" to the animate prop so centering is not deleted */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[150px] bg-[#FF6C00] rounded-full blur-[100px] md:blur-[120px] pointer-events-none -z-10"
        initial={{ x: "-48%", y: "-50%" }} 
        animate={{ 
          x: "-48%",              // Keep horizontal centering
          y: "-50%",              // Keep vertical centering
          opacity: [0.2, 0.5, 0.2], 
          scale: [1, 1.1, 1],       
        }}
        transition={{
          duration: 4,          
          repeat: Infinity,     
          ease: "easeInOut"     
        }}
      />

      {/* Sub-Headline */}
      <h2 className="text-sm md:text-2xl font-medium text-gray-400 mb-4 tracking-wide uppercase relative z-10">
        Projects, Certifications, & More
      </h2>
      
      {/* Main Title */}
      <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-6 relative z-10">
        DESIGNS & <br />
        <span className="text-[#FF6C00]">DEVELOPMENT</span>
      </h1>
      
      {/* Description */}
      <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-xl leading-relaxed mt-4 md:mt-8 px-4 relative z-10">
        I love turning ideas into interactive experiences. My focus is on clean design, smooth performance, and code that tells a story.
      </p>

    </motion.div>
  </section>
);

export default Hero;