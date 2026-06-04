import { motion } from 'framer-motion'
import { stack } from '../data'

const highlights = [
  'Built RentWise Asset Manager (MERN Stack)',
  'Developed RESTful APIs with Express.js',
  'Implemented CRUD Operations',
  'Worked with MongoDB for data persistence',
  'Built Responsive React Interfaces',
]

export default function Experience() {
  return (
    <section id="experience" className="section-pad max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">Experience</span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight">Internship</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-white font-bold text-xl">MERN Stack Development Intern</h3>
              <p className="text-accent font-mono text-sm mt-1">Infoziant</p>
            </div>
            <span className="text-xs font-mono text-muted glass px-3 py-1 rounded-full">2026</span>
          </div>

          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 text-muted text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {h}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Arsenal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h3 className="text-white font-semibold text-lg mb-6">Technical Arsenal</h3>
          {stack.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-baseline gap-4"
            >
              <span className="font-mono text-xs text-muted w-28 shrink-0 tracking-wide">{s.label}</span>
              <span className="text-white text-sm">{s.items}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
