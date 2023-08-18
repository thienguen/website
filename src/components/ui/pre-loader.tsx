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
  const { resolvedTheme } = useTheme()
  const [animationPlayed, setAnimationPlayed] = useState(false)

  useEffect(() => {
    if (!animationPlayed) {
      const q = gsap.utils.selector(loadingRef)

      const tl = gsap.timeline({ defaults: { duration: 0.7 } })
      tl.fromTo(q('.loading-text'), { y: 120, opacity: 0 }, { y: -10, opacity: 1 }) // Adjusted opacity here
      tl.to(q('.white-bg'), { y: '-100%' }).to(q('.dark-bg'), { y: '-100%', duration: 0.3 }, '-=0.3')

      setAnimationPlayed(true)
    }
  }, [animationPlayed])

  return (
    <div ref={loadingRef} aria-hidden="true">
      <div
        className={cn(
          'bg-gradient-to-b from-slate-300 to-gray-300', // light
          'dark:bg-gradient-to-b dark:from-black dark:to-gray-900', // dark,
          'white-bg fixed left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center'
        )}
      >
        <div className="overflow-hidden">
          <span
            className={`loading-text inline-block text-4xl tracking-widest opacity-0 ${
              resolvedTheme === 'dark' ? 'text-white' : resolvedTheme === 'light' ? 'text-black' : 'text-gray-500'
            } sm:text-5xl lg:text-7xl`}
          >
            {children}
          </span>
        </div>
      </div>
     
    </div>
  )
}

export default PreLoader
