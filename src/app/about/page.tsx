import React from 'react'
import { type Metadata } from 'next'
import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/ui/progress-bar'

export const metadata: Metadata = {
  title      : '/about',
  description: 'metadata is a funny lil concept.',
}

/**
 * @returns Under re-work...idk when tho, 8/24/2023
 * @see re-work: 9/3/2023
 */
export default function About() {
  return (
    <>
      <ProgressBar
        // steps={['home', '/about', '/dashboard', '/projects', '/guestbook']}
        steps={['/dashboard', '/projects', '/guestbook', '/about']}
        currentStep={4}
        isFullWidth={false}
        key={'/about'}
      />

      {/* Header */}
      {/* Nandemo wa shiranai wa yo, shitte ru koto dake. */}
      <PageTitle
        title={`I don't know everything. I just know what I know. - Hanekawa Tsubasa`}
        titleJP="何でもは知らないわよ、知ってることだけ。"
        hanekawa={true}
      />

      {/* Body of About page*/}
      

    </>
  )
}
