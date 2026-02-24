'use client'

import { FC, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = cn(
    'relative inline-flex items-center justify-center',
    'font-sans font-medium tracking-wider uppercase',
    'transition-all duration-500 ease-out-expo',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-roiba-dorado'
  )

  const variants = {
    primary: cn(
      'bg-roiba-verde text-roiba-arena overflow-hidden group',
      'hover:text-roiba-verde'
    ),
    secondary: cn(
      'border border-roiba-verde text-roiba-verde bg-transparent',
      'hover:bg-roiba-verde hover:text-roiba-arena'
    ),
    text: cn(
      'text-roiba-verde bg-transparent',
      'hover:text-roiba-dorado'
    ),
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-micro',
    md: 'px-8 py-4 text-caption',
    lg: 'px-10 py-5 text-caption',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {variant === 'primary' && (
        <span 
          className="absolute inset-0 bg-roiba-dorado transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out-expo"
          aria-hidden="true"
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {isLoading ? (
          <>
            <svg 
              className="animate-spin h-4 w-4" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>Procesando...</span>
          </>
        ) : (
          children
        )}
      </span>
    </button>
  )
}
