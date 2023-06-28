import { QA } from '@/components/ui/qa'
import DiscordStatus from '@/components/me/DiscordStatus'

export default function About() {
  return (
    <>
      <div className="mx-auto mt-10 grid max-w-[46rem] grid-cols-6 gap-6 px-6">
        {/* 1. */}
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-4"
        />

        {/* 2. */}
        <DiscordStatus cols="col-span-2" />

        {/* 1. */}
        <DiscordStatus cols="col-span-3" />
        {/* 2. */}
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-3"
        />

        {/* 1. */}
        <DiscordStatus cols="col-span-1" />

        {/* 2. */}
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-5"
        />

        {/* 1. */}
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-6 mb-10"
        />
      </div>
    </>
  )
}
