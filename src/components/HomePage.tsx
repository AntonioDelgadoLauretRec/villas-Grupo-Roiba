'use client'

import useScrollReveal from './home/useScrollReveal'
import HeroSection from './home/HeroSection'
import StatsMarquee from './home/StatsMarquee'
import AboutSection from './home/AboutSection'
import ServicesGrid from './home/ServicesGrid'
import ProcessTabs from './home/ProcessTabs'
import TestimonialsSection from './home/TestimonialsSection'
import CTASection from './home/CTASection'
import BrochureSection from './home/BrochureSection'

export default function HomePage() {
  useScrollReveal()

  return (
    <div className="bg-roiba-arena-light min-h-screen overflow-x-hidden">
      <HeroSection />
      <StatsMarquee />
      <AboutSection />
      <ServicesGrid />
      <ProcessTabs />
      <TestimonialsSection />
      <BrochureSection />
      <CTASection />
    </div>
  )
}
