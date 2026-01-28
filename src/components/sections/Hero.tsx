import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui'

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071"
          alt="Villa de lujo en Punta Cana con vista al mar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-dorado rounded-full animate-pulse" />
            <span className="text-sm font-medium">Inversión Patrimonial Premium</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Villas de Lujo en{' '}
            <span className="text-gradient-gold">Punta Cana</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
            Más de 400 propiedades exclusivas para inversores de alto patrimonio. 
            Rentabilidad proyectada del 8-12% anual en el destino más demandado del Caribe.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-3xl font-bold text-dorado">400+</div>
              <div className="text-sm text-white/70">Villas Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-dorado">8-12%</div>
              <div className="text-sm text-white/70">ROI Proyectado</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-dorado">$500K+</div>
              <div className="text-sm text-white/70">Inversión Mínima</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Ver Propiedades
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/30 hover:bg-white/10"
            >
              <Play className="mr-2 w-5 h-5" />
              Ver Video Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
