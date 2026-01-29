import { Hero } from '@/components/sections/Hero'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { TrustSignals } from '@/components/sections/TrustSignals'
import { VillaGrid } from '@/components/sections/VillaGrid'
import { ContactForm } from '@/components/sections/ContactForm'
import { WhyPuntaCana } from '@/components/sections/WhyPuntaCana'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSignals />
      <ProcessTimeline />
      <WhyPuntaCana />
      <VillaGrid />
      <ContactForm />
    </main>
  )
}
