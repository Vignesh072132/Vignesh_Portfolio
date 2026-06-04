import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { HiArrowDownTray } from 'react-icons/hi2'
import { personal } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section-pad max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">Contact</span>
        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 tracking-tight leading-tight">
          Let's Build Something{' '}
          <span className="gradient-text">Meaningful Together</span>
        </h2>
        <p className="text-muted text-lg mb-12 leading-relaxed">
          Open to internships, collaborations, and full-time opportunities in AI, data science, and full-stack development.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`mailto:${personal.email}`}
            className="glass rounded-xl p-5 flex items-center gap-4 hover:border-accent/30 transition-colors group"
          >
            <HiOutlineMail size={20} className="text-accent shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted font-mono">Email</p>
              <p className="text-white text-sm mt-0.5">{personal.email}</p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-5 flex items-center gap-4 hover:border-blue-400/30 transition-colors group"
          >
            <FaLinkedin size={20} className="text-blue-400 shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted font-mono">LinkedIn</p>
              <p className="text-white text-sm mt-0.5"></p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-xl p-5 flex items-center gap-4 hover:border-white/20 transition-colors group"
          >
            <SiGithub size={20} className="text-white shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted font-mono">GitHub</p>
              <p className="text-white text-sm mt-0.5"></p>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={personal.resume}
            download
            className="rounded-xl p-5 flex items-center gap-4 bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors group"
          >
            <HiArrowDownTray size={20} className="text-accent shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted font-mono">Resume</p>
              <p className="text-accent text-sm mt-0.5 font-semibold">Download PDF</p>
            </div>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16 pb-8 border-t border-border pt-8"
      >
        <p className="text-muted text-sm font-mono">
          Designed & Built by{' '}
          <span className="text-accent">Vignesh P</span>
        </p>
      </motion.div>
    </section>
  )
}
