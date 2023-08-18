'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/util/util'

type Props = {
  children: React.ReactNode | string
}

const PreLoader: React.FC<Props> = ({ children }) => {
  const loadingRef = useRef(null)
  const { theme } = useTheme()
  const [animationPlayed, setAnimationPlayed] = useState(false)

  useEffect(() => {
    if (!animationPlayed) {
      const animationTimeout = setTimeout(() => {
        const q = gsap.utils.selector(loadingRef)
        const tl = gsap.timeline({ defaults: { duration: 0.7 } })
        tl.fromTo(q('.loading-text'), { y: 120, opacity: 0 }, { y: -10, opacity: 1 })
        tl.to(q('.white-bg'), { y: '-100%' })

        setAnimationPlayed(true)
      }, 600)  // Delay for 1 second

      // Cleanup function: clear the timeout
      return () => {
        clearTimeout(animationTimeout)
      }
    }
  }, [animationPlayed])

  return (
    <div ref={loadingRef} aria-hidden="true" className=''>

      <div
        className={cn(
          'bg-gradient-to-b from-slate-300 to-gray-300', // light
          'dark:bg-gradient-to-b dark:from-black dark:to-gray-900', // dark,
          'white-bg fixed left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center'
        )}
        style={{
          backgroundImage: `${theme === 'light' ? 'url(/bg/lightBg.png)' : 'url(/bg/darkBg.png)'}`,
        }}
      >
        <span className={`loading-text inline-block text-4xl tracking-widest opacity-0 sm:text-5xl lg:text-7xl`}>
          {children}
        </span>
      </div>
    </div>
  )
}

export default PreLoader
