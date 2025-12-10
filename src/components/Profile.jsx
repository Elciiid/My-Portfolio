import { motion } from 'framer-motion'
import profileImg from '../assets/jonasdavid.png'

export default function Profile() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img 
            src={profileImg} 
            alt="Jonas David"
            className="rounded-3xl w-full max-w-md mx-auto shadow-2xl border border-white/10"
            onError={(e) => e.target.src = 'https://placehold.co/600x600/1a1a2e/FF2E63?text=JD'}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I turn ideas into living digital experiences. Passionate about clean code, beautiful design, 
            and pushing the boundaries of what's possible on the web.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            From machine learning-powered browser extensions to preserving indigenous languages through mobile apps — 
            I love solving real problems with creativity and precision.
          </p>
          <div className="pt-6">
            <span className="inline-block px-6 py-3 glass rounded-full text-[#FF2E63] font-medium">
              Available for Internship & Freelance
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}