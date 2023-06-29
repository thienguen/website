import { QA } from '@/components/ui/qa'
import DiscordStatus from '@/components/me/DiscordStatus'
import Motion from '@/components/ui/motion'

export default function About() {
  return (
    <>
      <div className="mx-auto my-10 grid max-w-3xl grid-cols-6 gap-6 px-6">
        {/* About me. */}
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-4"
          height='min-h-[13rem]'
        />

        {/* Discord is tough 2. */}
        <DiscordStatus cols="col-span-2" />

        {/* 3. Timer. */}
        <Motion />

        {/* What is this 4. */}
        <QA
          question="currently?"
          answer="I'm curretly an undergraduate student at UNLV, majoring in Computer Science. I'm also working as a software engineer intern at a local company."
          cols="col-span-4"
          height='min-h-[13rem]'
        />



        {/* 1. */}
        <DiscordStatus cols="col-span-1" />

        {/* 2. */}
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-5"
          height='min-h-[13rem]'
        />


        {/* 1. */}
        <QA
          question="RPG Maker Games??"
          answer="The Lost Art of RPG Maker Games is something that I will never came to fathom. I still actively playing and hopefully I will... make one. Here are a couple of my personal favorites"
          cols="col-span-6"
          height='min-h-[10rem]'
        />

        {/* TODO: RPG GAMES LIST HERE */}
      </div>
    </>
  )
}
