import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Magnetic Cursor */}
      <div 
        className="cursor"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      <Hero />
      <Profile />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App