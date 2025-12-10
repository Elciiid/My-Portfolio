import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="group relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:bg-white/10 transition-colors duration-500"
  >
    {/* Image Section */}
    <div className="relative overflow-hidden rounded-2xl aspect-video md:aspect-[4/3] w-full">
      <div className="absolute inset-0 bg-[#FF6C00]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        onError={(e) => { e.target.src = 'https://placehold.co/600x400/222/FF6C00?text=Project'; }}
      />
    </div>

    {/* Content Section */}
    <div className="text-left w-full">
      <div className="text-[#FF6C00] text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
        {project.type}
      </div>
      <h3 className="text-2xl md:text-4xl font-bold mb-4">{project.title}</h3>
      <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-xs border border-white/20 rounded-full text-white/80">
            {tag}
          </span>
        ))}
      </div>

      {/* NEW COMPLEMENTARY BUTTON DESIGN: Glass to Orange */}
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-[#FF6C00] hover:border-[#FF6C00] hover:shadow-[0_0_30px_rgba(255,108,0,0.4)] hover:-translate-y-1"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

const Projects = () => (
  <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
    <div className="flex items-end justify-between mb-12 md:mb-16 border-b border-white/10 pb-4">
      <h2 className="text-3xl md:text-4xl font-bold">Selected Works</h2>
    </div>
    <div className="flex flex-col gap-12 md:gap-24">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  </section>
);

export default Projects;