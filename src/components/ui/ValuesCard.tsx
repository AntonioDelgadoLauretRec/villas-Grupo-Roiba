'use client'

import { useState } from 'react'
import ImageSkeleton from '@/components/ui/ImageSkeleton'

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
        group relative aspect-[3/2] overflow-hidden cursor-pointer select-none rounded-sm
        transition-all duration-500 ease-out
        hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.25)] hover:z-10
        ${open ? '-translate-y-1 shadow-[0_12px_36px_rgba(0,0,0,0.25)] z-10' : ''}
      `}
    >
      {/* Background photo */}
      <ImageSkeleton
        src={image}
        alt={title}
        fill
        className={`
          object-cover transition-transform duration-700 ease-out
          group-hover:scale-105
          ${open ? 'scale-105' : ''}
        `}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Dark gradient — lighter for compact card */}
      <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/90 via-roiba-verde/40 to-transparent" />

      {/* Gold top accent */}
      <div className={`
        absolute top-0 left-0 right-0 h-[2px] bg-roiba-dorado transition-opacity duration-500
        opacity-0 group-hover:opacity-60
        ${open ? 'opacity-60' : ''}
      `} />

      {/* Content at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-lg text-white leading-tight font-medium">
          {title}
        </h3>

        {/* Description — revealed on hover/tap */}
        <div
          className={`
            overflow-hidden transition-all duration-500 ease-out
            max-h-0 opacity-0
            group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2
            ${open ? 'max-h-24 !opacity-100 mt-2' : ''}
          `}
        >
          <p className="text-[13px] text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
