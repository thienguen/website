import React from 'react'
import { type Metadata } from 'next'
import { QA } from '@/components/ui/qa'
import ProgressBar from '@/components/common/ProgressBar'
import DiscordStatus from '@/components/me/DiscordStatus'
import { Technologies } from '@/components/me/Technologies'
import { Timer } from '@/components/me/Timer'

export const metadata: Metadata = {
  title: '/about',
  description: 'metadata is a funny lil concept.',
}

export default function About() {
  // const numComponents = 8 // specify the number of components you want
  // const ComponentList = Array(numComponents).fill(<Motion />)

  return (
    <>
      <ProgressBar
        steps={['/home', '/projects', '/about', '/guestbook']}
        currentStep={3}
        isFullWidth={false}
        key={'/about'}
      />

      {/* Header */}
      <div className="mx-auto mt-6 flex max-w-3xl flex-col font-dosis">
        <div className="space-y-1 px-10 md:space-y-3">
          <p className="bg-clip-text text-center font-dosis leading-6 text-gray-900 dark:text-gray-100">
            {`I don't know everything. I just know what I know.`}
          </p>
        </div>
      </div>

      {/* Body of About page*/}
      <div className="mx-auto my-5 flex max-w-[80rem]">
        {/* Left Side */}
        <div className="grid flex-1 grid-cols-6 gap-4 px-3">
          {/* 1. */}
          <QA
            question="currently?"
            answer="Right now i'm an undergraduate student at UNLV, majoring in Computer Science. Aside working as a software engineer intern at a local company."
            cols="sm:col-span-4 col-span-3"
            height="min-h-[13rem]"
          />
          {/* 2. */}
          <Timer cols="sm:col-span-2 col-span-3" />

          {/* 3. */}
          <QA
            question="RPG Maker Games??"
            answer="Words can't describe what a big fan I am of this subculture, which had its heyday in the early 2010s. I'm still actively playing these games and, hopefully, one day, I will create one myself. Here are a few of my personal favorites."
            cols="col-span-6"
            height="min-h-[13rem]"
          />
        </div>

        {/* Right Side */}
        <div className="grid flex-1 grid-cols-6 gap-4 px-3">
          {/* 4. */}
          <Technologies cols="col-span-6 sm:col-span-3" height="min-h-[13rem]" />

          {/* 5. */}
          <QA
            question="outside of coding"
            answer="I'm also fascinated with Mathematics and wish to make a career out of it someday. Things I love include: j̶a̶p̶a̶n̶, dark mode, coffee, and cats."
            cols="col-span-6 sm:col-span-3"
            height="min-h-[8rem]"
          />

          {/* 6. */}
          <DiscordStatus cols="col-span-3 sm:col-span-2" />

          {/* 7. */}
          <QA
            question="what?"
            answer="My journey of coding started in 2021 and I've been loving? it ever since. This is a niche introduction about a guy who barely code. Yet ended up making a website about himself."
            cols="sm:col-span-4 col-span-3"
            height="min-h-[13rem]"
          />
        </div>
      </div>

      {/* 9. RECTANGLE, CIRCLE, TRIANGLE GO 9. */}
      {/* <div>
        <div className="mx-auto mb-10 grid max-w-3xl grid-cols-8 gap-6 px-6 ">
        {ComponentList.map((Component, index) => (
            <React.Fragment key={index}>{Component}</React.Fragment>
          ))}
        </div>
      </div> */}

      <div className='flex flex-row justify-center'>
        Stuff here
      </div>
    </>
  )
}
