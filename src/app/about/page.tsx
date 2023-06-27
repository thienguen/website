'use client'

import { useLanyardWS } from 'use-lanyard'

import { QA } from '@/components/ui/qa'
import DiscordStatus from '@/components/me/DiscordStatus'

export default function About() {
  const id: `${bigint}` | undefined = process.env.DISCORD_ID ? `${BigInt(process.env.DISCORD_ID)}` : undefined
  const data = useLanyardWS("481754320778428418")
  const status = data?.discord_status ?? 'offline'

  console.log(data)
  console.log(status)

  return (
    <>
      <div className="h-fit mx-auto mt-10 grid max-h-[12rem] max-w-[48rem] grid-cols-6 gap-6 px-6">
        
        {/* 1. */}
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-4"
          status={status}
          data={data}
        />

        {/* 2. */}
        <DiscordStatus status={status} data={data} cols="col-span-2" />


        <DiscordStatus status={status} data={data} cols="col-span-3" />
        {/* 1. */}
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-3"
          status={status}
          data={data}
        />

        {/* 2. */}

        <DiscordStatus status={status} data={data} cols="col-span-1" />
        {/* 1. */}
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-5"
          status={status}
          data={data}
        />

        {/* 2. */}



        {/* 1. */}
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-6"
          status={status}
          data={data}
        />

        {/* 2. */}


      </div>
    </>
  )
}
