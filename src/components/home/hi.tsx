'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const HomeHi: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement[] | null>(null)

  useEffect(() => {
    const textElements = gsap.utils.toArray('.text-hi')
    textRef.current = textElements as HTMLHeadingElement[]

    const autoRunAnimation = (elem: Element) => {
      return gsap.fromTo(
        elem,
        { backgroundSize: '0 0%' },
        // {
        //   backgroundSize: '100% 100%',
        //   ease: 'none',
        //   scrollTrigger: {
        //     trigger: text as HTMLElement,
        //     start: 'top 80%',
        //     end: 'bottom 20%',
        //     scrub: true,
        //   },
        // }
        {
          backgroundSize: '100% 100%',
          ease: 'none',
          duration: 1.5, // Duration of one "forward" animation.
          yoyo: true, // Play the animation in reverse after playing it forward.
          // repeat: 1,                  // Infinite repetition -1. but 3 times when moutned.
          // repeatDelay: 0.5            // A delay before starting the animation again (optional, can be adjusted or removed).
        }
      )
    }
    const animations: gsap.core.Tween[] = (textRef.current || []).map(autoRunAnimation)

    const startHoverAnimation = (e: Event) => {
      const idx = (textRef.current || []).indexOf(e.currentTarget as HTMLHeadingElement)
      if (idx > -1 && animations[idx]) {
        animations[idx]?.pause()
        gsap.to(e.currentTarget, { backgroundSize: '0 0%', duration: 0.5 })
      }
    }

    const stopHoverAnimation = (e: Event) => {
      gsap.to(e.currentTarget, { backgroundSize: '100% 100%', duration: 0.5 })
    }

    ;(textRef.current || []).forEach((text) => {
      text.addEventListener('mouseenter', startHoverAnimation)
      text.addEventListener('mouseleave', stopHoverAnimation)
    })

    return () => {
      if (textRef.current) {
        textRef.current.forEach((text) => {
          text.removeEventListener('mouseenter', startHoverAnimation)
          text.removeEventListener('mouseleave', stopHoverAnimation)
        })
      }
    }
  }, [])

  return (
    <div className="m-auto flex w-full max-w-screen-xl flex-col items-center justify-center sm:flex-row sm:justify-center">
      {/* Left section */}

      {/* Right section */}
      <div className="flex flex-col justify-center px-10">
        {' '}
        {/* Reduced space-y-3 to space-y-2 */}
        <p className="  text-center font-metropolis text-2xl font-light text-black opacity-70  dark:text-white">
          {`Xin chào, I'm`}
        </p>
        {/* Hero Title */}
        <h2 className="text-h2 shadow-effect cursor-default whitespace-nowrap pb-2 text-center font-metropolis text-4xl font-bold text-slate-800   dark:text-slate-200 lg:text-6xl">
          {`Thien Nguyen`}
          {/* <span
            className={cn(
              'dark:bg-gradient-to-b dark:from-slate-300 dark:to-gray-300 dark:text-[#0D0D0D]', // light
              'bg-gradient-to-b from-slate-500 to-gray-900 text-slate-200', // dark
              'span-h2 absolute flex h-full w-full origin-center flex-col justify-center '
            )}
          >
            Dreams
          </span> */}
        </h2>
        {/* Hero subtitle */}
        <div className="text-hi balanced relative  max-w-lg cursor-cell space-y-2 pb-2 text-center font-metropolis text-xl text-gray-600 text-opacity-20   dark:text-gray-400">
          <p>A person who loves story-rich RPG-Maker games.</p>
          <p>Often time coding. Sometimes drawing.</p>
          <p>✥ And always learning ✥</p>
        </div>
        {/* <div className="text-center">K-bar, a bar that you can play with .</div> */}
      </div>
    </div>
  )
}

export default HomeHi
