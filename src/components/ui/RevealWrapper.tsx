'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'clip-reveal' | 'line-grow'

interface RevealWrapperProps {
  children: React.ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
  threshold?: number
}

const variantStyles: Record<RevealVariant, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  'slide-left': {
    hidden: 'opacity-0 -translate-x-6',
    visible: 'opacity-100 translate-x-0',
  },
  'clip-reveal': {
    hidden: 'opacity-0 [clip-path:inset(0_100%_0_0)]',
    visible: 'opacity-100 [clip-path:inset(0_0%_0_0)]',
  },
  'line-grow': {
    hidden: 'scale-x-0 origin-left',
    visible: 'scale-x-100 origin-left',
  },
}

export function RevealWrapper({
  children,
  variant = 'fade-up',
  delay = 0,
  className,
  threshold = 0.15,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay)
          } else {
            setIsVisible(true)
          }
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-[900ms] ease-luxury',
        isVisible ? variantStyles[variant].visible : variantStyles[variant].hidden,
        className
      )}
    >
      {children}
    </div>
  )
}
