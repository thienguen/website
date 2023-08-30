'use client'

import React, { useState } from 'react'

import { cn } from '@/lib/util/util'
import { useTheme } from 'next-themes'
import { useMediaHeight } from '@/hooks/useMediaHeight'

import { KBarStart }  from '@/components/ui/(kbar)/index'
import { Tooltip }    from '@/components/common/Tooltip'
import { TbCodeDots } from 'react-icons/tb'

import Presence    from '@/components/home/lanyard/presence'
import Profile     from '@/components/home/profile'

const HomeHero: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [showPresence, setShowPresence] = useState(false)

  if (theme === undefined) {
    console.log('theme is undefined, default to dark again')
    setTheme('dark')
  }

  const isTallScreen = useMediaHeight('1000px')
  const isEvenTallerScreen = useMediaHeight('1100px')

  return (
    <>
      <div
        className={cn(
          isEvenTallerScreen ? 'py-44' : isTallScreen ? 'py-20' : 'py-12',
          'flex h-full w-full flex-col items-center justify-center'
        )}
      >
        <div className="flex flex-col items-center justify-center px-10">
          {' '}
          <Profile />
          {/* Reduced space-y-3 to space-y-2 */}
          <p className="text-center font-pixeloidMono text-2xl font-light text-black opacity-75 dark:text-white">
            {`Chào, I'm`}
          </p>
          {/* Hero Title */}
          <h2 className="shadow-effect cursor-default whitespace-nowrap pb-1 text-center font-metropolis text-4xl font-bold text-slate-800 dark:text-slate-200 lg:text-6xl">
            {`Thien Nguyen`}
          </h2>
          <KBarStart />
        </div>
        
        <Tooltip text="I'm curently doing">
          <div onClick={() => setShowPresence(!showPresence)}>
            <TbCodeDots className="h-10 animate-pulse cursor-pointer text-3xl text-white invert dark:text-black" />
          </div>
          {/* <div className="equalizer" onClick={() => setShowPresence(!showPresence)}>
            <span className="left"></span>
            <span className="middle"></span>
            <span className="right"></span>
          </div> */}
        </Tooltip>

        {showPresence && <Presence />}
      </div>
    </>
  )
}

export default HomeHero
