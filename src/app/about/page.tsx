import Motion from '@/components/ui/motion'
import { QA } from '@/components/ui/qa'
import DiscordStatus from '@/components/me/DiscordStatus'
import { Technologies } from '@/components/me/Technologies'
import { Timer } from '@/components/me/Timer'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '/about',
  description: 'metadata is a funny lil concept.',
};

export default function About() {
  return (
    <>
      <div className="mx-auto my-10 grid min-h-screen max-w-3xl grid-cols-6 gap-6 px-6 ">
        {/* About me. */}
        <QA
          question="about me?"
          answer="My journey of coding started in 2021 and I have been loving it ever since. I'm still fixing some bugs here and there during free time (so many!!). Right now interested in Three.js and 3D model."
          cols="sm:col-span-4 col-span-3"
          height="min-h-[13rem]"
        />

        {/* Discord is tough 2. */}
        <DiscordStatus cols="col-span-2" />

        {/* 3. Timer. */}
        <Timer />

        {/* I'm currently a bitch 4. */}
        <QA
          question="currently?"
          answer="I am an undergraduate student at UNLV, majoring in Computer Science. Aside working as a software engineer intern at a local company."
          cols="sm:col-span-4 col-span-3"
          height="min-h-[13rem]"
        />

        {/* 5. Copi Copi */}
        <Technologies />

        {/* If I could stick an anime girl here, I FKING WOULD 6. */}
        <QA
          question="outside of coding"
          answer="I'm also fascinated with Mathematics and wish to make a career out of it someday. Things I love include: j̶a̶p̶a̶n̶, dark mode, coffee, and cats."
          cols="col-span-6 sm:col-span-3"
          height="min-h-[13rem]"
        />

        {/* 7. Full Throttle 7. */}
        <QA
          question="RPG Maker Games??"
          answer="Words can't describe what a big fan I am of this subculture, which had its heyday in the early 2010s. I'm still actively playing these games and, hopefully, one day, I will create one myself. Here are a few of my personal favorites."
          cols="col-span-6"
          height="min-h-[10rem]"
        />

        {/* TODO: RPG GAMES LIST HERE */}
        {/* 8. A TODO LIST THAT I THINK I NEED HELP THO IM STUPID */}

        {/* 9. RECTANGLE, CIRCLE, TRIANGLE GO 9. */}
        <Motion />
        <Motion />
        <Motion />
      </div>
    </>
  )
}
