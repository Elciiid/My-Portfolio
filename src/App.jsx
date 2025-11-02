import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from './components/Projects';
import MoreInfo from './components/MoreInfo';
import Footer from './components/Footer.jsx';

function App() {
  return (
    // This <main> tag will hold all your page sections.
    <main>
      <Hero />
      
      {/* This div pushes the rest of the content down by 100vh (the height of the hero) */}
      <div style={{ marginTop: '100vh' }}>
        <Profile />
      
      <Projects />

      <MoreInfo />

      <Footer />
      </div>
    </main>
  );
}

export default App;
