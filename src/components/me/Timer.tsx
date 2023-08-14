'use client'

import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { cn } from '@/lib/util/util'

interface TimerProps {
  cols?: string
  height?: string
}

const Timer = (props: TimerProps) => {
  const [timeInLV, setTimeInLV] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const LVTimeFormatter = new Intl.DateTimeFormat(undefined, {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      })
      const currentTime = LVTimeFormatter.format(new Date())
      setTimeInLV(currentTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const pastSix = parseInt(timeInLV.split(':')[0] ?? '') >= 18

  return (
    <>
      <Transition
        show={timeInLV != ''}
        enter="ease-out duration-200"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-[0.98]"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-[0.98]"
        className={`${props.cols ?? ''} `}
      >
        <div
          className={cn(
            'flex h-full w-full flex-col items-center justify-center rounded-lg text-center text-white',
            pastSix ? 'bg-violet-700 dark:bg-sky-900' : 'bg-fuchsia-400 dark:bg-teal-700',
            `${props.height ?? ''}`
          )}
        >
          <h1 className="sm:text-base md:text-lg lg:text-xl">{timeInLV}</h1>
          <p className="font-metropolis sm:text-xs lg:text-sm">in Las Vegas, Nevada</p>
        </div>
      </Transition>
    </>
  )
}

export default Timer
