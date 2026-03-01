'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ValuesCardProps {
  title: string
  description: string
  image: string
}

export default function ValuesCard({ title, description, image }: ValuesCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen((o) => !o)}
      className={`
        group relative aspect-[4/5] overflow-hidden cursor-pointer select-none
        transition-all duration-500 ease-out
        hover:scale-[1.03]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        hover:z-10
        ${open ? 'scale-[1.02] shadow-[0_16px_50px_rgba(0,0,0,0.4)] z-10' : ''}
      `}
    >
      {/* Background photo */}
      <Image
        src={image}
        alt={title}
        fill
        className={`
          object-cover transition-transform duration-700 ease-out
          group-hover:scale-110
          ${open ? 'scale-110' : ''}
        `}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde via-roiba-verde/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Gold top accent */}
      <div className={`
        absolute top-0 left-0 right-0 h-[2px] bg-roiba-dorado transition-opacity duration-500
        opacity-0 group-hover:opacity-70
        ${open ? 'opacity-70' : ''}
      `} />

      {/* Content at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        {/* Title */}
        <h3 className="text-subheading font-serif text-white leading-tight">
          {title}
        </h3>

        {/* Description — revealed on hover/tap */}
        <div
          className={`
            overflow-hidden transition-all duration-500 ease-out
            max-h-0 opacity-0
            group-hover:max-h-48 group-hover:opacity-100
            group-hover:mt-3
            ${open ? 'max-h-48 !opacity-100 mt-3' : ''}
          `}
        >
          <p className="text-caption text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div
        className={`
          absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-roiba-dorado/60
          transition-all duration-500 ease-out
          w-0 group-hover:w-3/4
          ${open ? 'w-3/4' : ''}
        `}
      />
    </div>
  )
}
