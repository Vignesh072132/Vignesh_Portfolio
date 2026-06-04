import { motion } from 'framer-motion'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { certifications } from '../data'

const colorMap = {
  emerald: { badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', dot: 'bg-emerald-400', glow: 'group-hover:border-emerald-500/30' },
  violet:  { badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',   dot: 'bg-violet-400',  glow: 'group-hover:border-violet-500/30'  },
  blue:    { badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',         dot: 'bg-blue-400',    glow: 'group-hover:border-blue-500/30'    },
  amber:   { badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',      dot: 'bg-amber-400',   glow: 'group-hover:border-amber-500/30'   },
  accent:  { badge: 'bg-accent/10 text-accent border-accent/20',               dot: 'bg-accent',      glow: 'group-hover:border-accent/30'      },
}

export default function Certifications() {
  const regular = certifications.filter((c) => c.category !== 'Internship')
  const internship = certifications.find((c) => c.category === 'Internship')

  return (
    <section id="certifications" className="section-pad max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">Credentials</span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight">Certifications</h2>
        <p className="text-muted text-sm mt-3 max-w-lg">
          Verified credentials from recognized institutions and platforms.
        </p>
      </motion.div>

      {/* Internship Certificate — Featured */}
      {internship && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 relative rounded-2xl overflow-hidden border border-accent/20 bg-gradient-to-r from-accent/5 via-transparent to-accent2/5 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-accent/40 transition-colors duration-300"
        >
          {/* Corner label */}
          <span className="absolute top-4 right-4 font-mono text-xs text-muted">{internship.year}</span>

          <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <HiOutlineBadgeCheck size={28} className="text-accent" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <span className={`text-xs px-2.5 py-0.5 rounded-full border font-mono ${colorMap.accent.badge}`}>
                {internship.category}
              </span>
            </div>
            <h3 className="text-white font-bold text-xl leading-tight mt-1">{internship.title}</h3>
            <p className="text-muted text-sm mt-1 flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${colorMap.accent.dot}`} />
              Issued by <span className="text-accent font-semibold ml-1">{internship.issuer}</span>
            </p>
          </div>

          {/* Certificate ribbon */}
          <div className="shrink-0 text-center hidden sm:block">
            <div className="w-16 h-16 rounded-full border-2 border-accent/30 flex items-center justify-center bg-accent/5">
              <span className="text-accent text-2xl">🎓</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular Certifications Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {regular.map((cert, i) => {
          const c = colorMap[cert.color] || colorMap.blue
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className={`group glass rounded-2xl p-6 border border-border transition-all duration-300 ${c.glow} hover:bg-white/[0.02]`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${c.badge}`}>
                  {cert.category}
                </span>
                <span className="font-mono text-xs text-muted">{cert.year}</span>
              </div>

              {/* Icon + title */}
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${c.dot}`} />
                <div>
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted text-xs mt-1.5 flex items-center gap-1.5">
                    <HiOutlineBadgeCheck size={12} className="shrink-0" />
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
