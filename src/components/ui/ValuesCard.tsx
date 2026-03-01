'use client'

import { useState, type ReactNode } from 'react'

interface ValuesCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function ValuesCard({ title, description, icon }: ValuesCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen((o) => !o)}
      className={`
        group relative bg-white/[0.04] border border-white/10 rounded-sm
        p-8 cursor-pointer select-none
        transition-all duration-500 ease-out
        hover:scale-[1.05] hover:bg-white/[0.09]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_30px_rgba(201,169,110,0.12)]
        hover:border-roiba-dorado/30
        hover:z-10
        ${open ? 'scale-[1.03] bg-white/[0.09] shadow-[0_16px_50px_rgba(0,0,0,0.4)] border-roiba-dorado/25 z-10' : ''}
      `}
    >
      {/* Icon */}
      <div className="text-roiba-dorado mb-5 transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-heading font-serif text-white mb-0 transition-all duration-300">
        {title}
      </h3>

      {/* Description — desktop: CSS hover, mobile: state toggle */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-out

          max-h-0 opacity-0
          group-hover:max-h-48 group-hover:opacity-100
          group-hover:mt-4

          ${open ? 'max-h-48 !opacity-100 mt-4' : ''}
        `}
      >
        <p className="text-body text-white/60 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle gold bottom accent on hover */}
      <div
        className={`
          absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-roiba-dorado/50
          transition-all duration-500 ease-out
          w-0 group-hover:w-3/4
          ${open ? 'w-3/4' : ''}
        `}
      />
    </div>
  )
}
