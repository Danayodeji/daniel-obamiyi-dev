import React from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import StartBackgroundEffects from '@/components/StarBackgroundEffects'
import Navbar from '../components/Navbar'
import HeroSection from '@/components/HeroSection'

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
    {/* Footer */}
    
    </div>
  )
}

export default Home