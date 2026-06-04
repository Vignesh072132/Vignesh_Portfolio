import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { achievements, awards } from '../data'

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-black gradient-text tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">Stats</span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight">Achievements</h2>
      </motion.div>

      {/* Animated counters */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-7 text-center relative overflow-hidden group hover:border-accent/20 transition-colors duration-300"
          >
            {/* subtle top glow line */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-accent/40 group-hover:w-20 transition-all duration-500" />
            <Counter target={a.value} suffix={a.suffix} />
            <p className="text-muted text-sm mt-3 leading-tight">{a.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Award certificates */}
      {awards.map((award, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          className="relative rounded-2xl overflow-hidden border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-transparent to-yellow-500/5 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-amber-500/40 transition-colors duration-300 group"
        >
          {/* Year badge */}
          <span className="absolute top-4 right-4 font-mono text-xs text-muted">{award.year}</span>

          {/* Trophy icon */}
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-2xl group-hover:bg-amber-500/15 transition-colors">
            🏆
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-xs px-2.5 py-0.5 rounded-full border font-mono bg-amber-500/10 text-amber-400 border-amber-500/20">
                Competition Award
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border font-mono bg-white/5 text-muted border-border">
                Certificate
              </span>
            </div>
            <h3 className="text-white font-bold text-xl leading-tight">
              {award.rank} Place —{' '}
              <span className="text-amber-400">{award.event}</span>
            </h3>
            <p className="text-muted text-sm mt-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              {award.org} · {award.desc}
            </p>
          </div>

          {/* Medal visual */}
          <div className="shrink-0 hidden sm:flex flex-col items-center gap-1">
            <div className="w-16 h-16 rounded-full border-2 border-amber-500/30 bg-amber-500/5 flex items-center justify-center">
              <span className="text-3xl">🥉</span>
            </div>
            <span className="font-mono text-xs text-amber-400 tracking-widest">{award.rank} PLACE</span>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
