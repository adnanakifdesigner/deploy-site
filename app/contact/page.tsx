import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start a Project | Lozinr Brand Identity Studio',
  description: 'Ready to build a brand worth remembering? Contact Lozinr Brand Identity Studio to discuss your startup or SaaS branding project. Let\'s create something distinctive together.',
  keywords: [
    'contact brand studio',
    'work with brand designer',
    'brand project inquiry',
    'startup branding services',
    'brand identity consultation',
  ],
  alternates: {
    canonical: 'https://lozinr.com/contact',
  },
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          The contact form component is currently being rebuilt. Please check back soon.
        </p>
      </div>
    </div>
  )
}

