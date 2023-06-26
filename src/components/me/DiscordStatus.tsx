'use client'

import { Transition } from '@headlessui/react'
import { IoLogoDiscord } from 'react-icons/io5'
import type { Data } from 'use-lanyard'

import { cn } from '@/lib/util/util'

interface DiscordStatusProps {
  status: string
  data: Data | undefined
}

export default function DiscordStatus(props: DiscordStatusProps) {
  
  return (
    <>
      <Transition
        show={props.data != undefined}
        enter="transform transition duration-50 ease-in-out"
        enterFrom="opacity-0 scale-75 h-full"
        enterTo="opacity-100 scale-100 h-full"
        leave="transform duration-50 transition ease-in-out"
        leaveFrom="opacity-100 scale-100 h-full"
        leaveTo="opacity-0 scale-75 h-full"
      >
        <div
          className={cn(
            'flex h-full w-full items-center justify-center rounded-2xl',
            {
              online: 'bg-green-500 font-jetbrains-mono text-white',
              idle: 'bg-orange-400 font-jetbrains-mono text-white',
              dnd: 'bg-red-500 font-jetbrains-mono text-white',
              offline: 'bg-[#5865F2] font-jetbrains-mono text-white',
            }[props.status]
          )}
        >
          <div className="scale-[0.9] space-y-1 text-center sm:scale-[1.5]">
            <p className="scale-[1.6]">
              <IoLogoDiscord className="mb-2 w-full justify-end" />
            </p>
            <span>{props.status}</span>
          </div>
        </div>
      </Transition>
    </>
  )
}
