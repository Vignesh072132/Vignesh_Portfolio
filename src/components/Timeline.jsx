import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { timeline } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Timeline() {
  const itemsRef = useRef([])

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      )
    })
  }, [])

  return (
    <section id="timeline" className="section-pad max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">Journey</span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight">Career Timeline</h2>
      </motion.div>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-bg md:-translate-x-1.5 translate-y-1" />

              {/* year badge */}
              <div className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <span className="font-mono text-accent text-2xl font-bold">{item.year}</span>
              </div>

              {/* content */}
              <div className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="glass rounded-xl p-5">
                  <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
