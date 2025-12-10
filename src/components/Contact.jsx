import github from '../assets/github-mark.png'
import linkedin from '../assets/InBug-Black.png'
import gmail from '../assets/gmail.png'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center">
      <h2 className="text-6xl md:text-8xl font-bold mb-12">
        Let's Build Something <span className="text-gradient">Amazing</span>
      </h2>
      <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
        Currently open for internships, freelance, or full-time opportunities.
      </p>
      <a 
        href="mailto:jonaselcid30@gmail.com"
        className="inline-block px-12 py-6 bg-gradient-to-r from-[#FF2E63] to-[#A78BFA] text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-[#FF2E63]/50 transition transform hover:-translate-y-1"
      >
        Say Hello
      </a>

      <div className="flex justify-center gap-10 mt-16">
        <a href="https://github.com/Elciiid" target="_blank"><img src={github} alt="GitHub" className="w-12 h-12 hover-scale" /></a>
        <a href="https://linkedin.com/in/jonas-david-487722352" target="_blank"><img src={linkedin} alt="LinkedIn" className="w-12 h-12 hover-scale" /></a>
        <a href="mailto:jonaselcid30@gmail.com"><img src={gmail} alt="Email" className="w-12 h-12 hover-scale" /></a>
      </div>

      <p className="mt-20 text-gray-500">© {new Date().getFullYear()} Jonas David. Made with passion.</p>
    </section>
  )
}