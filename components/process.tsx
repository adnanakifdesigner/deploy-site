'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Discovery',
    description:
      'Every strong brand begins with understanding. We uncover the business, audience, market, and perception gaps before making a single design decision.',
    deliverables: [
      'Brand discovery questionnaire & deep-dive interview',
      'Competitor landscape analysis',
      'Target audience profiling',
      'Brand audit (if rebranding)',
      'Brand values & positioning workshop',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Strategy',
    description:
      "We define positioning, messaging, and brand direction to ensure every creative decision supports a business objective.",
    deliverables: [
      'Brand positioning statement',
      'Brand personality framework',
      'Voice & tone guidelines',
      'Messaging pillars',
      'Ideal buyer persona',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Visual Direction',
    description:
      'We establish the visual principles that shape how the brand should be seen, remembered, and experienced.',
    deliverables: [
      '3 distinct moodboard concepts',
      'Color palette exploration',
      'Typography direction',
      'Aesthetic & style references',
      'Feedback & approval session',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Identity',
    description:
      'We build a cohesive identity system designed for consistency, flexibility, and long-term recognition.',
    deliverables: [
      'Primary logo & variations',
      'Brand mark & icon set',
      'Color system & specifications',
      'Typography system',
      'Supporting graphics & patterns',
      'Brand mark documentation',
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Guidelines',
    description:
      'Every decision is documented into a practical system, making the brand easier to scale across teams and platforms.',
    deliverables: [
      'Brand guidelines document',
      'Logo usage rules & restrictions',
      'Color & typography standards',
      'Application examples',
      'Digital & print asset formats',
      'Full asset library',
    ],
  },
]

const DESC_TEXT_CLASS =
  'text-[16px] md:text-[22px] leading-snug font-normal tracking-tight text-foreground'

// ─── True line-by-line reveal ─────────────────────────────────────
// Measures the ACTUAL rendered line breaks (not sentences) by laying the
// words out in a hidden measuring box, grouping them by offsetTop, then
// animating each real visual line in with a stagger.
function LineReveal({ text }: { text: string }) {
  const measureRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<string[]>([])

  useLayoutEffect(() => {
    const el = measureRef.current
    if (!el) return

    const measure = () => {
      const words = text.split(' ')
      el.innerHTML = ''

      const spans = words.map((word, i) => {
        const span = document.createElement('span')
        span.textContent = word
        el.appendChild(span)
        if (i < words.length - 1) el.appendChild(document.createTextNode(' '))
        return span
      })

      const groups: string[][] = []
      let lastTop = Number.NEGATIVE_INFINITY

      spans.forEach((span, i) => {
        const top = span.offsetTop
        if (Math.abs(top - lastTop) > 1) {
          groups.push([])
          lastTop = top
        }
        groups[groups.length - 1].push(words[i])
      })

      setLines(groups.map((g) => g.join(' ')))
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [text])

  return (
    <div className="relative">
      {/* Hidden measuring box — identical typography so wraps match exactly */}
      <div
        ref={measureRef}
        aria-hidden
        className={`invisible absolute inset-0 ${DESC_TEXT_CLASS}`}
      />

      {/* Visible, animated lines */}
      <div className="flex flex-col">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.span
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-110%', opacity: 0 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`block ${DESC_TEXT_CLASS}`}
            >
              {line}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── List item with inline expanding description ─────────────────
function ProcessListItem({
  step,
  isActive,
  onSelect,
}: {
  step: (typeof processSteps)[0]
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      className="relative w-full text-left py-3 md:py-4 border-b border-foreground last:border-none focus:outline-none"
    >
      <div className="flex items-center gap-3">
        {isActive && (
          <motion.span
            layoutId="process-active-indicator"
            className="w-[10px] h-[10px] rounded-full bg-foreground shrink-0"
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
        <motion.span
          animate={{ opacity: isActive ? 1 : 0.25 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="block text-[22px] md:text-[48px] font-regular tracking-tight leading-[1.05] text-foreground"
        >
          {step.title}
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-1 pl-0 md:pl-6">
              <LineReveal text={step.description} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

// ─── Main ────────────────────────────────────────────────────────
export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full bg-background text-foreground py-20 md:py-24 px-5 lg:px-6">
      <div className="flex flex-col md:flex-row md:items-start gap-y-8 gap-x-0">
        {/* Left 50% — dot + label */}
        <div className="w-full md:w-1/2 flex items-center gap-2 md:self-start">
          <span className="w-[15px] h-[15px] bg-foreground" />
          <span className="text-[16px] font-regular text-foreground tracking-tight">
            PROCESS
          </span>
        </div>

        {/* Right 50% — list, description expands under active title */}
        <div className="w-full md:w-1/2 flex flex-col md:self-start">
          {processSteps.map((step, i) => (
            <ProcessListItem
              key={step.id}
              step={step}
              isActive={i === activeIndex}
              onSelect={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
