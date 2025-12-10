import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="w-full bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}