import { motion } from 'framer-motion'

const skills = ["React", "TypeScript", "Python", "Flutter", "Firebase", "Tailwind", "Figma", "Node.js", "Machine Learning"]

export default function Skills() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent via-[#4B2E83]/10 to-transparent">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-5xl md:text-7xl font-bold text-center mb-20"
      >
        Skills & Tools
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-3xl text-center cursor-default hover:bg-white/5 transition"
          >
            <p className="text-xl font-medium">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}