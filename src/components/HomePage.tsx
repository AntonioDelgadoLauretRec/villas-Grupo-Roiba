'use client'

import useScrollReveal from './home/useScrollReveal'
import HeroSection from './home/HeroSection'
import StatsMarquee from './home/StatsMarquee'
import AboutSection from './home/AboutSection'
import ServicesGrid from './home/ServicesGrid'
import TestimonialsSection from './home/TestimonialsSection'
import CTASection from './home/CTASection'
import BrochureSection from './home/BrochureSection'
import BlogPreviewSection from './home/BlogPreviewSection'
import type { Service, Testimonial, BlogPost } from '@/types/admin'

interface HomePageProps {
  dbServices?: Service[]
  dbTestimonials?: Testimonial[]
  dbHeroImages?: string[]
  dbStats?: { value: string; label: string }[]
  dbAbout?: { title?: string; paragraph1?: string; paragraph2?: string }
  dbBlogPosts?: BlogPost[]
}

export default function HomePage({
  dbServices,
  dbTestimonials,
  dbHeroImages,
  dbStats,
  dbAbout,
  dbBlogPosts,
}: HomePageProps) {
  useScrollReveal()

  return (
    <div className="bg-roiba-arena-light min-h-screen overflow-x-hidden">
      <HeroSection dbImages={dbHeroImages} />
      <StatsMarquee dbStats={dbStats} />
      <AboutSection dbAbout={dbAbout} />
      <ServicesGrid dbServices={dbServices} />
      <TestimonialsSection dbTestimonials={dbTestimonials} />
      <BrochureSection />
      <BlogPreviewSection dbPosts={dbBlogPosts} />
      <CTASection />
    </div>
  )
}
