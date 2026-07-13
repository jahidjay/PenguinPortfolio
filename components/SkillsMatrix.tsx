'use client'

import { Code, Gamepad2, Zap, Database, GitBranch, Cpu } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Game Engines',
    icon: <Gamepad2 className="w-5 h-5" />,
    skills: ['Unreal Engine 5', 'C++ / Blueprint', 'Unity'],
  },
  {
    title: 'Languages',
    icon: <Code className="w-5 h-5" />,
    skills: ['C++', 'Python', 'C#', 'HTML/CSS'],
  },
  {
    title: 'AI Integration',
    icon: <Zap className="w-5 h-5" />,
    skills: ['Prompt Engineering', 'Claude 3.5/4.5', 'Local LLM Deployment'],
  },
  {
    title: 'Backend & Databases',
    icon: <Database className="w-5 h-5" />,
    skills: ['MongoDB', 'Firebase', 'PlayFab'],
  },
  {
    title: 'Version Control',
    icon: <GitBranch className="w-5 h-5" />,
    skills: ['Perforce Client', 'Git/GitHub'],
  },
  {
    title: 'Target Platforms',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['PC', 'VR (Meta Quest/PCVR)', 'Mobile'],
  },
]

export function SkillsMatrix() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          <span className="text-white">Tech </span>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Matrix
          </span>
        </h2>
        <p className="text-slate-400 mb-16 text-lg">Core technical capabilities and specializations</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl border border-cyan-400/10 bg-slate-900/40 hover:bg-slate-900/60 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-cyan-400 group-hover:text-purple-400 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors pl-8 relative"
                  >
                    <span className="absolute left-0 text-cyan-400/50 group-hover:text-purple-400">•</span>
                    {skill}
                  </div>
                ))}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/0 via-transparent to-purple-400/0 opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
