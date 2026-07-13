'use client'

import { Mail, Phone, Code, Maximize2, Play, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-400/10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Jahid Ahsan</h3>
            <p className="text-cyan-400 font-semibold mb-4">PenguinStream</p>
            <p className="text-slate-400 text-sm">
              Unreal Engine Developer & AI Integrator crafting next-generation interactive experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 flex-wrap">
              <a
                href="mailto:jahidyasin2010@gmail.com"
                className="p-2 rounded-lg border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 transition-all hover:border-cyan-400/40"
              >
                <Mail size={18} />
              </a>
              {/*             <a
                href="tel:+8801535856876"
                className="p-2 rounded-lg border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 transition-all hover:border-cyan-400/40"
              >
                <Phone size={18} />
              </a>*/}
              <a
                href="https://github.com/jahidjay"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-purple-400/20 text-purple-400 hover:bg-purple-400/10 transition-all hover:border-purple-400/40"
              >
                <Code size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/penguinstream/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-purple-400/20 text-purple-400 hover:bg-purple-400/10 transition-all hover:border-purple-400/40"
              >
                <Maximize2 size={18} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCuCZ43hPPIRAxShDywqYFCg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-purple-400/20 text-purple-400 hover:bg-purple-400/10 transition-all hover:border-purple-400/40"
              >
                <Play size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/50">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Jahid Ahsan. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/10 hover:border-cyan-400/40 transition-all text-sm font-semibold group"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
