import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import StartBackgroundEffects from '@/components/StarBackgroundEffects'
import Navbar from '../components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">  
    {/* Theme Toggle */}
    <ThemeToggle />

    {/* Backgroung Effects */}
    <StartBackgroundEffects />

    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <HeroSection />
    <ProjectsSection />
    <AboutSection />
    <SkillsSection />    
    <ContactSection />
    {/* Footer */}
    <Footer />
    
    </div>
  )
}

export default Home