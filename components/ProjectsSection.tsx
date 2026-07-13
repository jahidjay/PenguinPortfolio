'use client'

import { ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  achievements: string[]
}

const projects: Project[] = [
  {
    title: 'Sanam',
    description: 'AI-powered game architecture generation and automation platform',
    technologies: ['Unity', 'Claude 4.5/3.5', 'MongoDB', 'Firebase'],
    achievements: [
      'Automated generation pipeline leveraging Claude 4.5 models to program complete game architectures',
      'Integrated asynchronous full-stack data architecture using Firebase and MongoDB for low-latency cross-talk',
      'AI-generated frontend scripts with secure backend integration',
    ],
  },
  {
    title: 'Celestial',
    description: 'Multiplayer space simulation with advanced networking and VR optimization',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'Perforce', 'PC/VR'],
    achievements: [
      'Engineered multiplayer systems and network prediction loops for interactive space simulation',
      'Implemented aggressive level optimization strategies for stable VR frame rates',
      'Optimized rendering pipeline for comfortable immersive gameplay experiences',
    ],
  },
  {
    title: 'Cryptex (2022)',
    description: 'Time-travel narrative adventure with complex quest progression systems',
    technologies: ['Unreal Engine', 'C++', 'Git', 'PC Platform'],
    achievements: [
      'Time-travel narrative adventure game with branching story pathways',
      'Engineered quest progression logic and text-parsing mechanics',
      'Implemented historical milestone tracking and string-validation systems',
    ],
  },
]

export function ProjectsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          <span className="text-white">Featured </span>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-400 mb-16 text-lg">Technical breakdowns of shipped titles and systems</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-xl border border-cyan-400/10 bg-gradient-to-br from-slate-900/60 to-slate-900/40 hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400">{project.description}</p>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/40 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Key Achievements</p>
                {project.achievements.map((achievement, achIdx) => (
                  <div
                    key={achIdx}
                    className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors flex gap-3"
                  >
                    <span className="text-cyan-400 flex-shrink-0 mt-1">→</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              {/* View Project Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-purple-400 transition-colors text-sm font-semibold group/link"
              >
                View Project
                <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
