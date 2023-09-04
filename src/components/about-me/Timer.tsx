'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/util/util'

interface TimerProps {
  cols  ?: string
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

  const hour = parseInt(timeInLV.split(':')[0] ?? '')
  let bgImage = ''

  if (hour >= 6 && hour < 12) {
    bgImage = '/bg/morning.png'
  } else if (hour >= 12 && hour < 18) {
    bgImage = '/bg/noon.png'
  } else {
    bgImage = '/bg/night.png'
  }

  return (
    <>
      <div className="my-4 flex justify-center">
        <div
          className={cn(
            `${
              props.cols ?? ''
            } relative flex h-40  w-full max-w-3xl translate-y-[-1rem] animate-fade-in flex-row items-center justify-center rounded-lg opacity-0 [--animation-delay:1000ms]`,
            `object-center`
          )}
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            imageResolution: 'from-image',
          }}
        >
          {/* Overlay to make the background darker */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Timer Content */}
          <div
            className={cn(
              'relative z-10 flex h-full w-full flex-col items-center justify-center rounded-lg text-center text-white',
              `${props.height ?? ''} ${props.cols ?? ''}`
            )}
          >
            <h1 className="font-dosis font-bold shadow-lg sm:text-lg md:text-xl lg:text-4xl">{timeInLV}</h1>
            <p className="font-dosis shadow-lg sm:text-xs lg:text-lg">in Las Vegas, Nevada</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timer
