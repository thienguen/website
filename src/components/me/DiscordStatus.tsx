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
      enter="ease-out duration-200"
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-[0.98]"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-[0.98]"
      className={`${props.cols ?? ''}`}
    >
      <div
        className={cn(
          `flex h-full min-h-[13rem]  w-full flex-col items-center justify-center rounded-2xl`,
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
            <IoLogoDiscord className="mb-2 w-full justify-end" />
          </p>
          <span>{status}</span>
        </div>
      </div>
    </Transition>
  )
}
