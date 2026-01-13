import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="w-full bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* Global Noise Texture */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      <AnimatedBackground intensity={0.8} />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Footer />
      </div>
    </main>
  );
}