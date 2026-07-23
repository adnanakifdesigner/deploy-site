import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import OurBeliefSection from '@/components/our-belief-section'
import ProcessSection from '@/components/process'
import FooterSection from '@/components/footer-section'

export const metadata: Metadata = {
  title: 'Lozinr — Brand Identity Studio for Funded Startups & Ambitious Founders',
  description: 'Lozinr is a brand identity studio helping funded startups and ambitious founders build distinctive brands through strategy, visual identity systems, and timeless design.',
  keywords: [
    'brand identity studio',
    'brand identity for startups',
    'SaaS branding',
    'D2C branding',
    'startup brand identity',
  ],
  alternates: {
    canonical: 'https://lozinr.com',
  },
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurBeliefSection />
      <ProcessSection />
      <FooterSection />
    </main>
  )
}
