import React from 'react'
import { type Metadata } from 'next'

import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/ui/progress-bar'

import Paragraph from '@/components/about-me/(pa)/paragraph'
import { ContactMessage, Timer } from '@/components/about-me/index'
import { PiGameControllerThin } from 'react-icons/pi'

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
        subTitle="I often soliloquize to myself."
      />
      
      {/* Body of About page*/}
      <div className="mx-auto max-w-3xl px-6 sm:px-8 md:px-12 lg:px-0">
        <Timer height="h-24" />

        <Paragraph
          tag="chào, or hi there"
          customAnswer={
            <>
              {`Started coding in `}
              <span className="font-semibold text-pink-600 dark:text-yellow-500">{`2021`}</span>
              {` and I've been kinda like? it. While I may not be deeply curious about how "computer" works
                but I do want to see how they come together and literally create dark magic, and
                I ended up making a website about myself. 🐧`}
            </>
          }
          dir="ltr"
        />

        <Paragraph
          tag="outside of coding"
          customAnswer={
            <>
              {`I'm also fascinated with `}
              <span className="font-semibold text-[#2AAAF3]">{`mathematics`}</span>
              {` and wish to make a career out of it someday. Things I love include: j̶a̶p̶a̶n̶, coffee, dark mode, and cats.`}
            </>
          }
          dir="rtl"
        />

        <Paragraph
          tag="currently?"
          customAnswer={
            <>
              {`An undergraduate student majoring in Computer Science at `}
              <span className="font-semibold text-[#ff2c2c]">UNLV</span>
              {`. Alongside my studies, I'm also interning as a software engineer at a local firm focusing in Web3, Big Data.`}
            </>
          }
          dir="ltr"
        />

        <Paragraph
          tag="rpg maker games"
          customAnswer={
            <>
              {`Words can't describe how big of a fan I am of this subculture, which had its heyday in the early 2010s. 
            I'm still actively playing these games and, hopefully, one day, `}
              <span className="???">{`I will create one myself`}</span>
              {` Some of my personal favorites is in the dashboard.`}
            </>
          }
          dir="rtl"
        />

        <Paragraph
          tag="thank you"
          customAnswer={
            <>
              {`I hope you enjoy your stay. The source code for this website is available at `}
              <a
                target="_blank"
                className="link-underline3 link-underline2 font-semibold text-pink-800 dark:text-gold"
                href={`https://github.com/Thienguen/thien-porfolio`}
              >{`@thienguen/website`}</a>
            </>
          }
          dir="ltr"
        />

        <ContactMessage />
      </div>
    </>
  )
}
