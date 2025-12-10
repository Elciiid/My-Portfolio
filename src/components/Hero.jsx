import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
        >
          Jonas <span className="text-gradient">David</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-3xl text-gray-400 mb-12 font-light"
        >
          Full-Stack Developer & UI/UX Enthusiast
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex gap-6 justify-center"
        >
          <a href="#projects" className="px-10 py-4 glass rounded-full text-white font-medium hover:bg-white/10 transition cursor-[pointer] hover-scale">
            View Work
          </a>
          <a href="#contact" className="px-10 py-4 bg-gradient-to-r from-[#FF2E63] to-[#A78BFA] rounded-full font-medium hover:shadow-2xl hover:shadow-[#FF2E63]/30 transition cursor-[pointer] hover-scale">
            Hire Me
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-4xl">Down Arrow</span>
      </div>
    </section>
  )
}