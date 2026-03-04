'use client'

import { useState } from 'react'

interface ValueFlipCardProps {
  title: string
  description: string
}

export default function ValueFlipCard({ title, description }: ValueFlipCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-[200px] cursor-pointer overflow-hidden border border-white/[0.08] rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]"
    >
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-roiba-dorado opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" style={{ opacity: hovered ? 1 : 0 }} />

      {/* Default state: title only */}
      <div
        className="absolute inset-0 flex items-center justify-center p-7 bg-white/[0.06] backdrop-blur-sm transition-all duration-500"
        style={{ opacity: hovered ? 0 : 1, transform: hovered ? 'scale(0.95)' : 'scale(1)' }}
      >
        <h3 className="font-serif text-xl text-white font-medium text-center">{title}</h3>
      </div>

      {/* Hover state: description with blue bg */}
      <div
        className="absolute inset-0 flex items-center justify-center p-7 bg-roiba-verde transition-all duration-500"
        style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1)' : 'scale(1.05)' }}
      >
        <p className="text-[13px] text-white/80 leading-relaxed text-center">{description}</p>
      </div>
    </div>
  )
}
