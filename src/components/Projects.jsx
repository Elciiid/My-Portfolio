import { motion } from 'framer-motion'
import extensionImg from '../assets/Extension.png'
import sulyapImg from '../assets/sulyap.png'

const projects = [
  {
    title: "Facebook Phishing Detector",
    desc: "Real-time phishing detection browser extension using Autoencoders + GCNs",
    tech: ["Python", "JavaScript", "Firebase", "Machine Learning"],
    img: extensionImg,
    link: "#"
  },
  {
    title: "Sulyap Kapampangan",
    desc: "Gamified language learning app preserving the Kapampangan dialect",
    tech: ["Flutter", "Dart", "Firebase"],
    img: sulyapImg,
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-6xl md:text-8xl font-bold text-center mb-20"
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3 }}
            className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:grid-cols-2-reverse' : ''}`}
          >
            <div className={`${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <img 
                src={p.img} 
                alt={p.title}
                className="rounded-3xl shadow-2xl hover-scale transition"
                onError={(e) => e.target.src = 'https://placehold.co/800x600/16213e/FF2E63?text=Project'}
              />
            </div>
            <div className={`${i % 2 === 0 ? 'md:order-2' : 'md:order-1'} space-y-6`}>
              <h3 className="text-4xl md:text-6xl font-bold">{p.title}</h3>
              <p className="text-xl text-gray-300">{p.desc}</p>
              <div className="flex flex-wrap gap-3">
                {p.tech.map(t => (
                  <span key={t} className="px-4 py-2 glass rounded-full text-sm">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}