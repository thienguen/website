'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import KBarStart from '@/components/home/kbar-start'
import Profile from '@/components/home/profile'
import Presence from './lanyard/presence'

const HomeHero: React.FC = () => {
  const { theme, setTheme } = useTheme()

  if (theme === undefined) {
    console.log('theme is undefined')
    setTheme('dark')
  }

  return (
    <>
      <div className="5xl:min-h-[900px] flex h-full min-h-[500px] w-full flex-col items-center justify-center pb-10 sm:mt-0 sm:pb-16">
        <div className="mb-10 flex flex-col items-center justify-center px-10">
          {' '}
          <Profile />
          {/* Reduced space-y-3 to space-y-2 */}
          <p className=" translate-y-[-2rem] animate-fade-in text-center font-pixeloidMono text-2xl font-light text-black opacity-0 [--animation-delay:200ms]  dark:text-white">
            {`Chào, I'm`}
          </p>
          {/* Hero Title */}
          <h2 className=" shadow-effect translate-y-[-2rem] animate-fade-in cursor-default whitespace-nowrap pb-2 text-center font-metropolis text-4xl font-bold text-slate-800 opacity-0 [--animation-delay:200ms]   dark:text-slate-200 lg:text-6xl">
            {`Thien Nguyen`}
          </h2>
          <KBarStart />
        </div>
        <Presence />
      </div>
    </>
  )
}

export default HomeHero
