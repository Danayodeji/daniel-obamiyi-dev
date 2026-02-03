import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import StartBackgroundEffects from '@/components/StarBackgroundEffects'
import Navbar from '../components/Navbar'
import HeroSection from '@/components/HeroSection'
import HighlightsSection from '@/components/HighlightsSection'
import AboutSection from '../components/AboutSection'
import NowSection from '@/components/NowSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
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
    <HighlightsSection />
    <ProjectsSection />
    <TestimonialsSection />
    <AboutSection />
    <NowSection />
    <SkillsSection />    
    <ContactSection />
    {/* Footer */}
    <Footer />
    
    </div>
  )
}

export default Home