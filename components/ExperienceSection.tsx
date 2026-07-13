'use client'

import { Briefcase, MapPin, Calendar } from 'lucide-react'

interface Experience {
  company: string
  role: string
  location: string
  period: string
  achievements: string[]
}

const experiences: Experience[] = [
  {
    company: 'Artzee Animation',
    role: 'Full Stack Game Developer',
    location: 'Singapore, Remote',
    period: 'July 2024 - Present',
    achievements: [
      'Engineered over 50 optimized visual effects and advanced VR gameplay mechanics for Meta Quest 2 and PCVR',
      'Architected modular VR interaction system using C++ reducing feature deployment iteration times by 30%',
      'Integrated local AI/ML agents to optimize asset production workflows and automate gameplay logic loops',
      'Achieved 25% reduction in CPU/GPU overhead through aggressive optimization strategies',
    ],
  },
  {
    company: 'Segritude Games',
    role: 'Gameplay Programmer',
    location: 'UK, Remote Contract',
    period: '2024',
    achievements: [
      'Engineered core multiplayer PC mechanics natively in C++ for maximum performance and memory efficiency',
      'Developed native death/respawn state-machine system handling player state serialization and pawn re-possession',
      'Implemented dynamic game map marker system translating 3D world coordinates into scalable UI space',
    ],
  },
  {
    company: 'Vidribute',
    role: 'Full Stack Game Developer',
    location: 'Germany, Remote',
    period: 'July 2022 - 2024',
    achievements: [
      'Built modular C++ architecture and reusable asset pipelines for Mobile and VR platforms',
      'Optimized production operational costs by 20% through streamlined deployment processes',
      'Implemented cross-platform compatibility layers for seamless multi-platform releases',
    ],
  },
  {
    company: 'EnglishRights',
    role: 'Gameplay Programmer & QA Engineer',
    location: 'Rome, Remote',
    period: '2022',
    achievements: [
      'Programmed core educational PC mechanics centered on custom text parsing and string validation',
      'Implemented root-word language progression system with advanced parsing algorithms',
      'Conducted comprehensive QA testing ensuring pedagogical accuracy and gameplay balance',
    ],
  },
  {
    company: 'Illusive',
    role: 'Senior Game Developer',
    location: 'Bangladesh, Remote',
    period: '2022',
    achievements: [
      'Led technical level optimization of massive open-world city environment achieving stable 60+ FPS',
      'Profiled draw calls and refactored expensive tick functions in C++',
      'Implemented advanced culling and LOD systems for seamless world streaming',
    ],
  },
  {
    company: 'Kaleidosoft',
    role: 'Junior Game Developer',
    location: 'Croatia, Remote',
    period: 'June 2021 - Dec 2021',
    achievements: [
      'Solved critical mobile/VR bottlenecks through World Partitioning and HLOD optimization',
      'Achieved aggressive draw call reduction and resolved texture streaming pool budget overages',
      'Implemented performance profiling systems for continuous optimization monitoring',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          <span className="text-white">Professional </span>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-slate-400 mb-16 text-lg">Career timeline and key accomplishments</p>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative pl-8 border-l-2 border-cyan-400/20 hover:border-cyan-400/50 transition-colors pb-8 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 border-4 border-slate-900 group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-slate-900/20 group-hover:border-cyan-400/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{exp.role}</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-purple-400" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-purple-400" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIdx) => (
                    <div
                      key={achIdx}
                      className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors flex gap-3"
                    >
                      <span className="text-purple-400 flex-shrink-0 font-bold">●</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
