import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import StartBackgroundEffects from '@/components/StarBackgroundEffects'
import Navbar from '../components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '@/components/SkillsSection'

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
    <AboutSection />
    <SkillsSection />
    {/* Footer */}
    
    </div>
  )
}

export default Home