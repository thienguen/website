'use client'

import { type Metadata } from 'next'
import items from '@/lib/util/dummy'

export const metadata: Metadata = {
  title: '/projects',
  description: 'metadata is a funny lil concept.',
}

export default function Projects() {
  const description = `I'm obsessed with side projects and building in public. Here you can navigate to 12 different websites, apps, and libraries I built. Some projects are still active, others have been discontinued.`

  return (
    <>
      <div className="mx-auto mb-12 mt-6 flex max-w-2xl flex-col items-center justify-center">
        {/* Header */}
        <div className="space-y-1 p-4 md:space-y-5">
          <h1 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-6 md:text-3xl">
            {`Projects`}
          </h1>
        </div>
      </div>

      <p>{description}</p>
    </>
  )
}
