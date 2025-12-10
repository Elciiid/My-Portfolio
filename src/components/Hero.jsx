function Hero() {
  return (
    // 1. Main container: 
    // - CHANGED: Set to `absolute` positioning to fill the viewport
    //   and float over other content.
    <section 
      id="hero" 
      className="absolute top-0 left-0 w-full text-white flex flex-col font-inter overflow-x-hidden" 
      style={{ 
        fontFamily: 'Inter, sans-serif',
        height: '100vh', 
        backgroundColor: 'black',
        maxWidth: '100%'
      }}
    >
      
      {/* 2. Top Navigation/Header Bar */}
      <div className="flex justify-between items-center w-full text-sm font-semibold uppercase opacity-90 z-10 py-4 px-4 sm:px-8">
        
        {/* Left: Project Status & Logo */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-xs font-bold tracking-widest text-white/70">
            <div className="inline-grid [&>*]:[grid-area:1/1]">
              <div className="status status-success animate-ping"></div>
              <div className="status status-success"></div>
            </div>
            <span className="ml-2">AVAILABLE FOR INTERNSHIP</span>
          </span>
        </div>

        {/* Center: Studio Name */}
        <div className="text-xl font-extrabold tracking-widest">
          Jonas David
        </div>
        
        {/* Right: Contact Link (as plain text) */}
        <span className="text-white font-normal hidden sm:block text-sm">
          jonaselcid30@gmail.com
        </span>
      </div>

      {/* 3. Main Hero Content - Massive Text */}
      <div className="flex flex-col justify-center flex-grow pb-16 pt-8 sm:pt-0 px-4 sm:px-8">
        
        {/* Sub-Headline */}
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-2 sm:mb-4">
          Projects, Certifications, and much more
        </h1>

        {/* Main Orange Headline */}
        <h2 
          className="leading-none font-black tracking-tighter text-[#FF6C00] break-words
                     text-[5.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[16rem]"
          style={{ lineHeight: 0.85 }}
        >
          Designs & <br />Development
        </h2>
        
      </div>

    </section>
  );
}


export default Hero;