import { Mail, Send } from 'lucide-react'

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen py-24 px-6 md:px-12 flex items-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a question or want to discuss a project? Reach out to me via email or Telegram!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:jahidyasin2010@gmail.com"
            className="flex items-center gap-4 p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 bg-cyan-400/5 hover:bg-cyan-400/10 transition-all group flex-1 justify-center md:justify-start"
          >
            <Mail size={32} className="text-cyan-400 group-hover:text-cyan-300" />
            <div className="text-left">
              <p className="text-sm text-slate-400">Email Me</p>
              <p className="text-xl text-white font-medium break-all">jahidyasin2010@gmail.com</p>
            </div>
          </a>

          <a
            href="https://t.me/penguinstream"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-xl border border-purple-400/20 hover:border-purple-400/50 bg-purple-400/5 hover:bg-purple-400/10 transition-all group flex-1 justify-center md:justify-start"
          >
            <Send size={32} className="text-purple-400 group-hover:text-purple-300" />
            <div className="text-left">
              <p className="text-sm text-slate-400">Telegram</p>
              <p className="text-xl text-white font-medium">@penguinstream</p>
            </div>
          </a>
        </div>

        {/* Quick Response Info */}
        <div className="mt-12 p-6 rounded-lg border border-cyan-400/20 bg-cyan-400/5 inline-block mx-auto">
          <p className="text-sm text-slate-300">
            <span className="text-cyan-400 font-semibold">Response Time:</span> I typically respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
