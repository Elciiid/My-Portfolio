import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Navbar = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md bg-black/50 border-b border-white/10 overflow-hidden"
    >
      {/* REMOVED: The Background Aura Blob is gone. */}

      {/* LOGO - NEW LIQUID SHIMMER EFFECT 
          - Uses 'bg-clip-text' to put the color INSIDE the letters.
          - Animates a gradient moving across to look like light reflection.
      */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <motion.span 
          className="font-black text-xl tracking-widest inline-block"
          style={{
            // Gradient: White -> Pink -> White
            backgroundImage: "linear-gradient(90deg, #ffffff 0%, #ffffff 40%, #F48FB1 50%, #ffffff 60%, #ffffff 100%)",
            backgroundSize: "200% auto", // Make it wide enough to slide
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent"
          }}
          animate={{ 
            backgroundPosition: ["200% center", "-200% center"] // Moves the shine across
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          JONAS DAVID
        </motion.span>
      </div>

      <div className="flex justify-between items-center max-w-7xl mx-auto w-full px-6 relative z-30">
        
        {/* Left: Status */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-white/70">OPEN TO WORK</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 ml-auto">
          <a 
            href={`${basePath}Resume.pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
          >
            <FileText size={14} />
            <span className="hidden sm:inline">RESUME</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;