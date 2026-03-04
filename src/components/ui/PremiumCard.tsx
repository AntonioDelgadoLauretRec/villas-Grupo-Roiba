'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PremiumCardProps {
  image: string
  title: string
  description?: string
  href?: string
  aspect?: string
  className?: string
}

export default function PremiumCard({ image, title, description, href, aspect = 'aspect-[4/3]', className = '' }: PremiumCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setSpotlightPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }, [])

  const content = (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden cursor-pointer rounded-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(12,35,64,0.20)] hover:z-10 ${className}`}
    >
      {/* Image */}
      <div className={`relative ${aspect} overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Spotlight gradient that follows cursor */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(201,169,110,0.15) 0%, transparent 50%)`,
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/90 via-roiba-verde/40 to-transparent" />
        {/* Gold top border on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-roiba-dorado scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="font-serif text-lg md:text-xl font-medium text-white leading-tight group-hover:text-roiba-dorado-light transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2">
            <p className="text-[13px] text-white/70 leading-relaxed">{description}</p>
          </div>
        )}
      </div>
    </div>
  )

  if (href) {
    return <Link href={href} className="block">{content}</Link>
  }
  return content
}
