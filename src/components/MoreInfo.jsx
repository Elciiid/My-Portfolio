import React from 'react';

function MoreInfo() {
  return (
    <section 
      id="more-info" 
      className="w-full flex flex-col items-center justify-center font-inter text-white"
      style={{
        backgroundColor: "black",
        fontFamily: 'Inter, sans-serif', 
        minHeight: '100vh',
        padding: '6rem 1rem', // Generous padding top/bottom, some side padding
      }}
    >
      <div className="max-w-7xl w-full mx-auto px-2 sm:px-4 md:px-6">

        
        {/* Main Section Title */}
        {/* UPDATED: Made text larger */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-white mb-16 text-left">
          More Info
        </h1>

        {/* Overview Section */}
        {/* UPDATED: Made border thicker */}
        <div className="flex flex-col md:flex-row mb-16 border-t-2 border-gray-700 pt-8">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-400 text-left">
              Overview
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-4 text-left">
              I love turning ideas into interactive experiences. Whether it’s crafting sleek interfaces with HTML, CSS, and React, or bringing logic to life with Python, Java, and JavaScript. I’m all about building projects that are both functional and fun. My focus is on clean design, smooth performance, and code that tells a story.
            </p>
          </div>
        </div>

        {/* Services Section */}
        {/* UPDATED: Made border thicker */}
        <div className="flex flex-col md:flex-row mb-16 border-t-2 border-gray-700 pt-8">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-400 text-left">
              What I Do
            </h2>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Added text-left to each paragraph */}
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-left">Web Design</p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-left">Web Development</p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-left">Cloud Architecture</p>
            </div>
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-left">UI/UX Prototyping</p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-left">Machine Learning</p>
            </div>
          </div>
        </div>

        {/* You can add more sections here following the same pattern */}

      </div>
    </section>
  );
}

export default MoreInfo;

