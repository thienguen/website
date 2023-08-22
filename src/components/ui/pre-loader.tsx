'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/util/util'

type Props = {
  children: React.ReactNode | string
}

const PreLoader: React.FC<Props> = ({ children }) => {
  let isClient = typeof window !== 'undefined'
  const loadingRef = useRef(null)
  const [animationPlayed, setAnimationPlayed] = useState(false)
  const { theme } = useTheme()

  function useIsClient() {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
      setIsClient(true)
    }, [])
    return isClient
  }

  isClient = useIsClient()

  useEffect(() => {
    if (!animationPlayed) {
      const animationTimeout = setTimeout(() => {
        const q = gsap.utils.selector(loadingRef)
        const tl = gsap.timeline({ defaults: { duration: 0.7 } })
        tl.fromTo(q('[data-gsap-target="loading-text"]'), { y: 120, opacity: 0 }, { y: -10, opacity: 1 })
        tl.to(q('[data-gsap-target="white-bg"]'), { y: '-100%' })

        setAnimationPlayed(true)
      }, 800) // Delay for 1 second

      // Cleanup function: clear the timeout
      return () => {
        clearTimeout(animationTimeout)
      }
    }
  }, [animationPlayed, theme])

  if (!isClient) return null

  return (
    <div
      ref={loadingRef}
      aria-hidden="true"
      className={cn(
        'bg-gradient-to-b from-slate-300 to-gray-300', // light
        'dark:bg-gradient-to-b dark:from-black dark:to-gray-900', // dark,
        'h-full w-full'
      )}
    >
      <div
        className={cn(
          'bg-gradient-to-b from-slate-300 to-gray-300', // light
          'dark:bg-gradient-to-b dark:from-black dark:to-gray-900', // dark,
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
          className={`inline-block font-dosis text-5xl tracking-widest opacity-0 sm:text-5xl lg:text-7xl`}
          data-gsap-target="loading-text"
        >
          {children}
        </span>
      </div>
    </div>
  )
}

export default PreLoader
