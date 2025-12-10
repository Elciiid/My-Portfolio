import React from 'react';
import githubLogo from '../assets/github-mark.png';
import linkedinLogo from '../assets/InBug-Black.png';
import gmailLogo from '../assets/gmail.png';

function Footer() {
  const githubUrl = "https://github.com/Elciiid";
  const linkedinUrl = "https://www.linkedin.com/in/jonas-david-487722352/";

  return (
    <footer 
      id="contact" 
      className="relative w-full font-inter text-neutral-800"
      style={{
        background: "linear-gradient(to top, #FF6C00 85%, #000000 100%)", // black to orange fade
        fontFamily: 'Inter, sans-serif',
        minHeight: '50vh',
        padding: '4rem 2rem',
      }}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-between h-full">
        
        {/* CONTACT SECTION */}
        <div className="flex flex-col items-start text-left ml-2 md:ml-4">
          
          {/* Small tagline */}
          <p className="text-sm md:text-base font-light text-black mb-1">
            Want to hire me?
          </p>

          {/* Big non-linked call-to-action */}
          <h1 
            className="text-7xl md:text-9xl lg:text-[10rem] font-extrabold text-black hover:text-white transition-colors duration-300 leading-[1.05] cursor-default"
            style={{ letterSpacing: '-0.03em' }}
          >
            Let's Chat!
          </h1>

          {/* Address */}
          <p className="text-base md:text-lg text-black mt-10 mb-4">
            Angeles City, Pampanga, Philippines
          </p>

          {/* Placeholder Social Icons */}
          <div className="flex items-center gap-5">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="w-10 h-10" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="w-10 h-10" />

            </a>
            <a href="#hero">
              <img src={gmailLogo} alt="Gmail" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* COPYRIGHT (bottom-right) */}
        <div className="absolute bottom-6 right-8 text-sm text-black opacity-70">
          &copy; {new Date().getFullYear()} Jonas David
        </div>
      </div>
    </footer>
  );
}

export default Footer;
