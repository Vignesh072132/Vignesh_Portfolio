import { motion } from 'framer-motion'
import { personal } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function About() {
  return (
    <section id="about" className="section-pad max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">About</span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 mb-8 tracking-tight">
          Who I Am
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-muted text-lg leading-relaxed"
        >
          {personal.about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 space-y-4"
        >
          <div>
            <p className="text-xs text-muted font-mono tracking-widest uppercase mb-1">Education</p>
            <p className="text-white font-semibold">B.Tech AI & Data Science</p>
            <p className="text-muted text-sm">Sri Eshwar College of Engineering</p>
          </div>
          <div className="w-full h-px bg-border" />
          <div>
            <p className="text-xs text-muted font-mono tracking-widest uppercase mb-1">Focus Areas</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Full Stack Dev', 'Machine Learning', 'Data Analysis', 'Competitive Programming'].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
