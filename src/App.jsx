import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'

function CursorDot() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 6)
      cursorY.set(e.clientY - 6)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      className="fixed w-3 h-3 rounded-full bg-accent/60 pointer-events-none z-[9999] hidden md:block mix-blend-screen"
    />
  )
}

export default function App() {
  return (
    <>
      <CursorDot />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Expertise />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>
    </>
  )
}
