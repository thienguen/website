'use client'

import { Transition } from '@headlessui/react'
import { IoLogoDiscord } from 'react-icons/io5'
import { useLanyardWS } from 'use-lanyard'

import { cn } from '@/lib/util/util'

interface DiscordStatusProps {
  cols?: string
}

export default function DiscordStatus(props: DiscordStatusProps) {
  
  const id: `${bigint}` | undefined = process.env.DISCORD_ID ? `${BigInt(process.env.DISCORD_ID)}` : undefined
  const data = useLanyardWS(id ? [id] : [])
  const status = data?.discord_status ?? 'offline'

  return (
    <Transition
      show={data != undefined}
      enter="transform transition duration-75 ease-in-out"
      enterFrom="opacity-0 scale-75"
      enterTo="opacity-100 scale-100"
      leave="transform duration-75 transition ease-in-out"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-75"
      className={props.cols ?? '' }
    >
      <div
        className={cn(
          'flex min-h-[12rem] w-full items-center justify-center rounded-2xl',
          {
            online: 'bg-green-500 font-jetbrains-mono text-white',
            idle: 'bg-orange-400 font-jetbrains-mono text-white',
            dnd: 'bg-red-500 font-jetbrains-mono text-white',
            offline: 'bg-[#5865F2] font-jetbrains-mono text-white',
          }[status]
        )}
      >
        <div className="scale-[0.9] space-y-1 text-center sm:scale-[1.5]">
          <p className="scale-[1.6]">
            <IoLogoDiscord className="mb-2 w-full justify-end"/>
          </p>
          <span>{status}</span>
        </div>
      </div>
    </Transition>
  )
}
