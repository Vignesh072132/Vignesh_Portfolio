import { motion } from 'framer-motion'
import { expertise } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Expertise() {
  return (
    <section id="expertise" className="section-pad max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">Skills</span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight">Expertise</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {expertise.map((cat) => (
          <motion.div key={cat.category} variants={item} className="glass rounded-2xl p-6 group hover:border-accent/20 transition-colors duration-300">
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted group-hover:text-white transition-colors duration-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
