'use client'

import React from 'react'
import { motion } from 'framer-motion'

const OUR_BELIEF_TEXT = "OUR BELIEF"
const BELIEF_DESCRIPTION = `Great brands aren't built by decoration.
They're built through clear thinking, intentional systems, and decisions that serve the business—not trends.
That's the standard we hold ourselves to on every project.`

export default function OurBeliefSection() {
  return (
    <div className="w-full bg-background text-foreground py-20 md:py-28 px-5 lg:px-6">
      <div className="flex flex-col md:flex-row items-start">
        {/* Left Column: 50% */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="w-[15px] h-[15px] bg-foreground flex-shrink-0" />
            <h2 className="text-[22px] font-regular text-foreground tracking-tight">
              {OUR_BELIEF_TEXT}
            </h2>
          </div>
        </motion.div>

        {/* Right Column: 50% — description + image below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <p className="text-[22px] leading-tight tracking-tight text-foreground font-regular">
            {BELIEF_DESCRIPTION}
          </p>

          {/* YouTube thumbnail ratio (16:9), covers full right column width */}
          <div className="w-full aspect-video relative overflow-hidden bg-foreground/10">
            <img
              src="https://v7korlxmmmpzjkj8.private.blob.vercel-storage.com/faizur-rehman-aLq9KNZ4rjo-unsplash.jpg?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfdjdrb3JseG1NbXB6amtqOCIsIm93bmVySWQiOiJ0ZWFtX0doVHRRN3AxMjdJcmxkTnNvTGVDbkxhZSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg0ODY1MzE5OTc1LCJpYXQiOjE3ODQ4MjIxMjAxOTF9.AQMzk3BXm7gBB5Ttxi6BxgTUwRyOvq8duipag3RFvVA&vercel-blob-signature=0ehQXd08tcVwxNnqVopz0tlCiQ0ww_sg4TPvd6b0CbA"
              alt="OUR BELIEF"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}