import { type HTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  href?: string
  hoverEffect?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, href, hoverEffect = true, children, ...props }, ref) => {
    const cardClasses = cn(
      'bg-white rounded-card shadow-card overflow-hidden',
      hoverEffect && 'transition-shadow duration-300 hover:shadow-card-hover',
      className
    )

    if (href) {
      return (
        <Link href={href} className={cardClasses}>
          {children}
        </Link>
      )
    }

    return (
      <div ref={ref} className={cardClasses} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Card sub-components
const CardImage = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { aspectRatio?: 'villa' | 'hero' | 'square' }
>(({ className, aspectRatio = 'villa', children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative overflow-hidden',
      aspectRatio === 'villa' && 'aspect-villa',
      aspectRatio === 'hero' && 'aspect-hero',
      aspectRatio === 'square' && 'aspect-square',
      className
    )}
    {...props}
  >
    {children}
  </div>
))

CardImage.displayName = 'CardImage'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-5', className)} {...props} />
  )
)

CardContent.displayName = 'CardContent'

const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-xl font-serif font-semibold text-carbon mb-2', className)}
    {...props}
  />
))

CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-gray-600 text-sm line-clamp-2', className)}
    {...props}
  />
))

CardDescription.displayName = 'CardDescription'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-5 pb-5 pt-0 flex items-center justify-between', className)}
      {...props}
    />
  )
)

CardFooter.displayName = 'CardFooter'

export { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter }
