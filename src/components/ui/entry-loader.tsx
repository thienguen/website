'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/util/util'
import InitialSpin from './unused/(ununused-initial-spin)'

type Props = {
  children: React.ReactNode | string
}

const EntryLoader: React.FC<Props> = ({ children }) => {
  const loadingRef = useRef(null)
  const { theme, setTheme } = useTheme()
  const [showLoader, setShowLoader] = useState(false)
  const [animationPlayed, setAnimationPlayed] = useState(false)

  useEffect(() => {
    const loaderPlayed = sessionStorage.getItem('loaderPlayed')
    console.log('Loader played:', loaderPlayed)
    if (!loaderPlayed) {
      setShowLoader(true)
    }
  }, [])

  const playAnimation = () => {
    const q = gsap.utils.selector(loadingRef)
    const tl = gsap.timeline({
      defaults: { duration: 0.7 },
      onComplete: () => {
        setShowLoader(false)
        sessionStorage.setItem('loaderPlayed', 'true')
        setAnimationPlayed(true)
      },
    })

    tl.fromTo(q('[data-gsap-target="loading-text"]'), { y: 120, opacity: 0 }, { y: -10, opacity: 1 }).to(
      q('[data-gsap-target="white-bg"]'),
      { y: '-100%' }
    )

    setTheme(theme === undefined ? 'dark' : theme === 'dark' ? 'dark' : 'light')
  }

  if (!showLoader || animationPlayed) return null

  return (
    <div
      ref={loadingRef}
      aria-hidden="true"
      className={cn(
        'bg-gradient-to-b from-slate-300 to-gray-300',
        'dark:bg-gradient-to-b dark:from-black dark:to-gray-900',
        'h-full w-full'
      )}
    >
      <div
        className={cn(
          'bg-gradient-to-b from-slate-300 to-gray-300',
          'dark:bg-gradient-to-b dark:from-black dark:to-gray-900',
          'fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center'
        )}
        data-gsap-target="white-bg"
        style={{
          backgroundImage: `${
            theme === 'light'
              ? 'url(/bg/lightBg.png)'
              : theme === 'dark'
              ? 'url(/bg/darkBg.png)'
              : 'url(/bg/darkBg.png)'
          }`,
        }}
      >
        <span
          className="inline-block font-dosis text-5xl tracking-widest opacity-0 sm:text-5xl lg:text-7xl"
          data-gsap-target="loading-text"
        >
          {children}
        </span>

        <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center">
          <InitialSpin onClick={playAnimation} />
        </div>
      </div>
    </div>
  )
}

export default EntryLoader
