import React from 'react';
import extensionImage from '../assets/Extension.png';
import reactLogo from '../assets/react.svg';
import genericLogo from '../assets/logo.png';
import pythonLogo from '../assets/python.png';
import jsLogo from '../assets/js.png';
import firebaseLogo from '../assets/firebase.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import dartLogo from '../assets/dart.png';
import flutterLogo from '../assets/flutter.png';
import sulyapImage from '../assets/sulyap.png';

const userProjects = [
  {
    title: "Facebook Phishing Detector",
    type: "Facebook Browser Extension",
    description: [
      "Engineered a browser extension using a hybrid machine learning model (Autoencoders and GCNs) for real-time phishing link detection and user safety enhancement on Facebook.",
    ],
    skills: ["Python", "Javascript", "Firebase"],
    mockupImage: extensionImage,
  },
  {
    title: "Sulyap Kapampangan",
    type: "Mobile Application",
    description: [
      "Developed a gamified, Duolingo-inspired language-learning mobile application to promote and preserve the Kapampangan language."
    ],
    skills: ["Dart", "Firebase", "Flutter"],
    mockupImage: sulyapImage,
  }
];

function Projects() {
  const logoMap = {
    React: reactLogo,
    'React Native': reactLogo,
    Python: pythonLogo,
    Javascript: jsLogo,
    JavaScript: jsLogo,
    js: jsLogo,
    JS: jsLogo,
    Firebase: firebaseLogo,
    HTML: htmlLogo,
    CSS: cssLogo,
    Dart: dartLogo,
    Flutter: flutterLogo,
  };
  const genericLogo = "https://placehold.co/64x64/222222/999999?text=Skill";

  return (
    <section 
      id="projects" 
      className="relative w-full flex flex-col items-center justify-center font-inter overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #FF6C00 15%, #FF6C00 85%, #000000 100%)",
        fontFamily: 'Inter, sans-serif',
        minHeight: '100vh',
        padding: '4rem 1rem',
      }}
    >
      {/* Optional subtle gradient overlay for smoother top fade */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-10"></div>

      <div className="relative max-w-7xl w-full p-8 md:p-12 overflow-hidden z-10">
        {userProjects.map((project, index) => (
          <div 
            key={project.title} 
            className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 
                        mb-24 md:mb-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image Column */}
            <div className="w-full md:w-1/2 flex justify-center p-4">
              <div className={`${index === 0 ? 'max-w-2xl' : 'max-w-md'} w-full ${index === 0 ? 'h-[28rem] md:h-[34rem]' : 'h-64 md:h-[24rem]'} 
                              overflow-hidden rounded-3xl shadow-2xl border border-white/5 relative group transform 
                              transition-transform duration-700 group-hover:-translate-y-2`}>
                <div className="absolute -inset-6 rounded-3xl bg-[#FF6C00]/30 filter blur-3xl opacity-80 scale-95 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />
                
                <img
                  src={project.mockupImage}
                  alt={`${project.title} Mockup`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl ring-2 ring-black/40"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/800x800/FF6C00/000000?text=Mockup+Error';
                  }}
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full md:w-1/2 text-center md:text-left text-black">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-2">
                {project.type}
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                {project.title}
              </h2>
              {project.description.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-base leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              
              {/* Skills */}
              <div className="mt-6">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  {project.skills.map((skill, sIdx) => {
                    const src = logoMap[skill] || genericLogo;
                    return (
                      <div key={sIdx} className="group relative w-10 h-10">
                        <img
                          src={src}
                          alt={skill}
                          className="w-full h-full object-contain rounded"
                          onError={(e) => { e.target.onerror = null; e.target.src = genericLogo; }}
                        />
                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
