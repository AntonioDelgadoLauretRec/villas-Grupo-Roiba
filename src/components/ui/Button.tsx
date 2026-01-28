'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center font-sans font-semibold
      tracking-wide rounded-sm transition-all duration-300 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-roiba-dorado 
      focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
    `

    const variants = {
      primary: `
        bg-roiba-dorado text-roiba-verde
        hover:bg-roiba-dorado-claro hover:shadow-gold
        active:scale-[0.98]
      `,
      secondary: `
        border-2 border-roiba-dorado text-roiba-dorado bg-transparent
        hover:bg-roiba-dorado hover:text-roiba-verde
        active:scale-[0.98]
      `,
      ghost: `
        text-roiba-arena border border-roiba-arena/30 bg-transparent
        hover:bg-roiba-arena/10 hover:border-roiba-arena/50
      `,
      link: `
        text-roiba-dorado underline-offset-4 hover:underline
        bg-transparent p-0
      `,
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner className="mr-2" />
            <span>Cargando...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin h-5 w-5', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
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
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export { Button }
