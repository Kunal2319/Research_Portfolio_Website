
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection";
import { ResearchSection } from "../components/ResearchSection";
import { ExperienceSection } from "../components/ExperienceSection";
//import { Footer } from "../components/Footer";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
         {/* <ThemeToggle /> */}

        {/* Background effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      
      </main>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-muted-foreground">© 2026 Kunal Mishra</footer>
        </div>
        )
}