import { GlowBackground } from '@/components/GlowBackground'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { SkillsMatrix } from '@/components/SkillsMatrix'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ServicesSection } from '@/components/ServicesSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient Background Glow */}
      <GlowBackground />

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Fixed Navigation Sidebar */}
      <Navigation />

      {/* Content with left padding for sidebar */}
      <div className="relative z-10 ml-20">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="skills">
          <SkillsMatrix />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <Footer />
      </div>
    </main>
  )
}
