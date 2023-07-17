'use client'

import { type Metadata } from 'next'
import { AnimateSharedLayout } from 'framer-motion'


export const metadata: Metadata = {
  title: '/projects',
  description: 'metadata is a funny lil concept.',
}

export default function Projects() {
  const description = `I'm obsessed with side projects and building in public. Here you can navigate to 12 different websites, apps, and libraries I built. Some projects are still active, others have been discontinued.`

  return (
    <>
      <div className="flex flex-col items-center justify-center self-center">
        <h1>Projects</h1>
        <p>Something Holy</p>
      </div>

        <p>
          {description}
        </p>
    </>
  )
}
