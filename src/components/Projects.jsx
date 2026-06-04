import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data'

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`relative rounded-2xl overflow-hidden border border-border bg-gradient-to-br ${project.color} hover:border-white/10 transition-colors duration-300`}
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-mono text-accent tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
            {project.tag}
          </span>
          <span className="font-mono text-muted text-xs">0{index + 1}</span>
        </div>

        <h3 className="text-white font-bold text-xl md:text-2xl mb-3 leading-tight">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-6">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-accent hover:text-white transition-colors flex items-center gap-2 font-mono"
        >
          {expanded ? 'Hide Details' : 'View Case Study'}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            ↓
          </motion.span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs font-mono text-muted tracking-widest uppercase mb-4">Case Study Highlights</p>
                <div className="grid grid-cols-2 gap-2">
                  {project.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {h}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">Work</span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight">Featured Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
