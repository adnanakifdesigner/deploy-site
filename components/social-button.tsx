'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface SocialButtonProps {
  name: string
  link: string
  index: number
  onClose?: () => void
}

export default function SocialButton({ name, link, index, onClose }: SocialButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const ButtonContent = ({ variant }: { variant: 'primary' | 'secondary' }) => {
    const isPrimary = variant === 'primary'
    return (
      <div className="flex items-center gap-2">
        <span
          className={`text-[18px] font-normal tracking-wide uppercase rounded-full px-5 py-2.5 whitespace-nowrap flex items-center border transition-colors ${
            isPrimary
              ? 'text-foreground border-foreground/40 bg-transparent'
              : 'text-background border-foreground bg-foreground'
          }`}
        >
          {name}
        </span>
        <span
          className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
            isPrimary
              ? 'border-foreground/40 bg-transparent'
              : 'border-foreground bg-foreground'
          }`}
        >
          <svg
            className={`w-3 h-3 ${isPrimary ? 'text-foreground' : 'text-background'}`}
            viewBox="0 0 10 10"
            fill="none"
          >
            <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    )
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex flex-shrink-0 h-12 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClose}
    >
      <motion.div
        className="flex flex-col"
        animate={{ y: isHovered ? -48 : 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="h-12 flex items-center">
          <ButtonContent variant="primary" />
        </div>
        <div className="h-12 flex items-center">
          <ButtonContent variant="secondary" />
        </div>
      </motion.div>
    </motion.a>
  )
}
