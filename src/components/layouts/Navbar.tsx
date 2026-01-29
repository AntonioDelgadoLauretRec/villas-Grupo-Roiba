'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const NAV_LINKS = [
  { href: '/proceso', label: 'Proceso' },
  { href: '/villas', label: 'Colección' },
  { href: '/por-que-punta-cana', label: 'Destino' },
  { href: '/inversores', label: 'Inversores' },
]

export const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-roiba-arena/95 backdrop-blur-md shadow-sm py-4' 
            : 'bg-transparent py-6'
        )}
      >
        <div className="container-editorial">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative z-10"
            >
              <div className="flex items-center gap-3">
{/* Logo */}
<img 
src="/images/logo.png" 
alt="Grupo Roiba" 
className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
"h-12 w-auto transition-all duration-300",
isScrolled ? "brightness-100" : "brightness-100"
)}
/>
                
                {/* Nombre */}
                <div>
                  <span 
                    className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
                      'block text-micro font-sans tracking-widest uppercase transition-colors duration-300',
                      isScrolled ? 'text-roiba-verde/60' : 'text-roiba-arena/60'
                    )}
                  >
                    Grupo
                  </span>
                  <span 
                    className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
                      'block text-subheading font-serif -mt-1 transition-colors duration-300',
                      isScrolled ? 'text-roiba-verde' : 'text-roiba-arena'
                    )}
                  >
                    Roiba
                  </span>
                </div>
              </div>
            </Link>

            {/* Links desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
                    'text-caption font-sans font-medium tracking-wide transition-colors duration-300',
                    isScrolled 
                      ? 'text-roiba-verde/70 hover:text-roiba-verde' 
                      : 'text-roiba-arena/80 hover:text-roiba-arena'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <Link href="/contacto" className="hidden md:block">
                <Button 
                  variant={isScrolled ? 'primary' : 'secondary'} 
                  size="sm"
                  className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
                    !isScrolled && 'border-roiba-arena/50 text-roiba-arena hover:bg-roiba-arena hover:text-roiba-verde'
                  )}
                >
                  <span>Contactar</span>
                </Button>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span 
                    className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
                      'w-full h-px transition-all duration-300 origin-left',
                      isScrolled ? 'bg-roiba-verde' : 'bg-roiba-arena',
                      isMobileMenuOpen && 'rotate-45 translate-y-0.5'
                    )} 
                  />
                  <span 
                    className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
                      'w-full h-px transition-all duration-300',
                      isScrolled ? 'bg-roiba-verde' : 'bg-roiba-arena',
                      isMobileMenuOpen && 'opacity-0'
                    )} 
                  />
                  <span 
                    className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
                      'w-full h-px transition-all duration-300 origin-left',
                      isScrolled ? 'bg-roiba-verde' : 'bg-roiba-arena',
                      isMobileMenuOpen && '-rotate-45 -translate-y-0.5'
                    )} 
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
          'fixed inset-0 z-40 bg-roiba-verde transition-all duration-500 lg:hidden',
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="h-full flex flex-col justify-center items-center">
          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
                  'text-display-md font-serif text-roiba-arena hover:text-roiba-dorado-light transition-all duration-300',
                  'opacity-0 translate-y-4',
                  isMobileMenuOpen && 'opacity-100 translate-y-0'
                )}
                style={{ transitionDelay: `${0.1 + idx * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                    "mix-blend-multiply dark:mix-blend-normal",
                    !isScrolled && "invert brightness-0 invert",
                    !isScrolled && "brightness-0 invert",
                'mt-8 opacity-0 translate-y-4 transition-all duration-300',
                isMobileMenuOpen && 'opacity-100 translate-y-0'
              )}
              style={{ transitionDelay: '0.35s' }}
            >
              <Button 
                variant="secondary" 
                className="border-roiba-arena text-roiba-arena hover:bg-roiba-arena hover:text-roiba-verde"
              >
                <span>Contactar</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
