'use client'

import { useLanyardWS } from 'use-lanyard'

import { QA } from '@/components/ui/qa'
import DiscordStatus from '@/components/me/DiscordStatus'

export default function About() {
  const id: `${bigint}` | undefined = process.env.DISCORD_ID ? `${BigInt(process.env.DISCORD_ID)}` : undefined
  const data = useLanyardWS(id ? [id] : [])
  const status = data?.discord_status ?? 'offline'

  return (
    <>
      <div className=" mx-auto mt-10 grid max-w-[48rem] grid-cols-6 gap-6 px-6">
        <QA
          question="about me?"
          answer="I started coding in 2021 and have been loving it ever since. I'm still fixing some bugs here and there during free time. Current interested in Three.js and 3D model."
          cols="col-span-4"
          status={status}
          data={data}
        />

        <div className="col-span-2 h-full">
          <DiscordStatus status={status} data={data} />
        </div>
      </div>
    </>
  )
}
