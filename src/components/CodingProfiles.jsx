import { motion } from 'framer-motion'
import { SiLeetcode, SiCodechef, SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { codingProfiles } from '../data'

const iconMap = {
  LeetCode: <SiLeetcode size={24} />,
  CodeChef: <SiCodechef size={24} />,
  SkillRack: <span className="text-lg font-bold font-mono">SR</span>,
  GitHub: <SiGithub size={24} />,
  LinkedIn: <FaLinkedin size={24} />,
}

const colorMap = {
  LeetCode: 'hover:border-orange-500/30 hover:text-orange-400',
  CodeChef: 'hover:border-amber-500/30 hover:text-amber-400',
  SkillRack: 'hover:border-blue-500/30 hover:text-blue-400',
  GitHub: 'hover:border-white/20 hover:text-white',
  LinkedIn: 'hover:border-blue-500/30 hover:text-blue-400',
}

export default function CodingProfiles() {
  return (
    <section id="profiles" className="section-pad max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-mono text-accent text-xs tracking-widest uppercase">Online</span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight">Coding Profiles</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {codingProfiles.map((profile, i) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className={`glass rounded-2xl p-6 text-center border border-border transition-all duration-300 group cursor-pointer ${colorMap[profile.name]}`}
          >
            <div className="text-muted group-hover:text-current transition-colors mb-3 flex justify-center">
              {iconMap[profile.name]}
            </div>
            <p className="text-white font-semibold text-sm">{profile.name}</p>
            <p className="text-muted text-xs mt-1">{profile.handle}</p>
            <p className="text-accent text-xs mt-2 font-mono">{profile.stat}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
