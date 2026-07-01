import { Footer, Header } from './components/Layout'
import {
  AboutSection,
  ContactSection,
  CurrentWorkSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  PublicationsSection,
  ResearchSection,
  SkillsSection,
} from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-650">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CurrentWorkSection />
        <ResearchSection />
        <ProjectsSection />
        <PublicationsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
