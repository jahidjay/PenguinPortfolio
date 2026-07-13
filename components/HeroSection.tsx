'use client'

import { Mail, Phone, Code, Maximize2, Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="max-w-4xl w-full text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">Jahid Ahsan</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              (PenguinStream)
            </span>
          </h1>
        </div>

        {/* Role & Hook */}
        <div className="mb-8 space-y-4">
          <p className="text-xl sm:text-2xl text-cyan-400 font-semibold">
            Unreal Engine Game Developer (Generalist) & AI Integrator
          </p>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            4+ years of professional experience driving performance and architectural efficiency across PC, VR, and Mobile platforms through C++, Blueprints, and Generative AI workflows.
          </p>
        </div>

        {/* Background Context */}
        <div className="mb-12 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          <p>
            Civil Engineering background in spatial design and structural optimization, now architecting high-performance 3D runtime code pipelines for next-generation interactive experiences.
          </p>
        </div>

        {/* Social & Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
          <a
            href="mailto:jahidyasin2010@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
          >
            <Mail size={18} />
            <span className="text-sm">Email</span>
          </a>
          { /* <a
            href="tel:+8801535856876"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
          >
            <Phone size={18} />
            <span className="text-sm">+880 153 5856876</span>
          </a>*/}
          <a
            href="https://github.com/jahidjay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-400/20 text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
          >
            <Code size={18} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/penguinstream/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-400/20 text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
          >
            <Maximize2 size={18} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCuCZ43hPPIRAxShDywqYFCg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-400/20 text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
          >
            <Play size={18} />
            <span className="text-sm">YouTube</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="text-cyan-400/50 animate-bounce text-sm">Scroll to explore</div>
        </div>
      </div>
    </section>
  )
}
