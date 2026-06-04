import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { personal, stats } from '../data'

export default function Hero() {
  const headRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    )
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center section-pad overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(110,231,183,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(110,231,183,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent2/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-accent" />
          <span className="font-mono text-accent text-xs tracking-widest uppercase">
            Available for opportunities
          </span>
        </motion.div>

        <h1
          ref={headRef}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-[1.0] tracking-tight max-w-4xl mb-6"
        >
          <span className="gradient-text">VIGNESH P</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-14"
        >
          {personal.subheadline}
        </motion.p>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass rounded-xl px-5 py-3 flex items-center gap-3"
            >
              <span className="text-accent font-black text-xl">{s.value}</span>
              <span className="text-muted text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-accent text-bg font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-border text-sm hover:border-accent/50 hover:text-accent transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
