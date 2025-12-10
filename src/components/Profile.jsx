import React from 'react';
import profileImage from '../assets/jonasdavid.png';

function Profile() {
  const userName = "Jonas David";
  const imageUrl = profileImage;

  return (
    <section 
      id="profile" 
      className="relative w-full flex items-center justify-center font-inter overflow-x-hidden"
      style={{
        backgroundColor: "black", 
        fontFamily: 'Inter, sans-serif', 
        minHeight: '100vh',
        padding: '4rem 1rem',
        maxWidth: '100%'
      }}
    >
      {/* Content container */}
      <div className="text-white max-w-6xl w-full p-12 md:p-20 overflow-hidden">

        {/* Layout: image + name */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
          
          {/* IMAGE with glowing pulse */}
          <div className="relative mx-auto">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden 
                            border-4 border-[#FF6C00] shadow-[0_0_40px_5px_rgba(255,108,0,0.6)]
                            animate-glowPulse ">
              <img
                src={imageUrl}
                alt={userName}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = 'https://placehold.co/400x400/222222/FF6C00?text=JD'; 
                }}
              />
            </div>
          </div>

          {/* TEXT section */}
          <div className="flex flex-col justify-center text-center md:text-left md:ml-8 md:-translate-y-2">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-0">
              {userName}
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Profile;
