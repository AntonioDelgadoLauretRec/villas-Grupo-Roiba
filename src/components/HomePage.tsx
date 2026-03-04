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
import Certifications from './sections/Certifications'
import PressLogos from './sections/PressLogos'
import type { Service, ProcessStep, Testimonial } from '@/types/admin'

interface HomePageProps {
  dbServices?: Service[]
  dbProcessSteps?: ProcessStep[]
  dbTestimonials?: Testimonial[]
  dbHeroImages?: string[]
  dbStats?: { value: string; label: string }[]
  dbAbout?: { title?: string; paragraph1?: string; paragraph2?: string }
}

export default function HomePage({
  dbServices,
  dbProcessSteps,
  dbTestimonials,
  dbHeroImages,
  dbStats,
  dbAbout,
}: HomePageProps) {
  useScrollReveal()

  return (
    <div className="bg-roiba-arena-light min-h-screen overflow-x-hidden">
      <HeroSection dbImages={dbHeroImages} />
      <StatsMarquee dbStats={dbStats} />
      <AboutSection dbAbout={dbAbout} />
      <ServicesGrid dbServices={dbServices} />
      <ProcessTabs dbSteps={dbProcessSteps} />
      <Certifications />
      <TestimonialsSection dbTestimonials={dbTestimonials} />
      <PressLogos />
      <BrochureSection />
      <CTASection />
    </div>
  )
}
