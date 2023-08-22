'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/util/util'
import { Tooltip } from '@/components/common/Tooltip'
import Signature from '@/components/home/signature'

function ContactMessage() {
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
    <>
      <div className=" 4xl:min-h-[900px] flex h-full w-full flex-col items-center justify-center pb-10 sm:mt-0 sm:min-h-[700px]">
        <div className="mb-10 flex flex-col items-center justify-center px-10">
          {' '}
          <h2 className="text-h2 shadow-effect cursor-default whitespace-nowrap pb-2 text-center font-metropolis text-4xl font-bold text-slate-800   dark:text-slate-200 lg:text-6xl">
            {`Contact me`}
          </h2>
          <div className="text-hi balanced relative max-w-xl cursor-cell pb-2 text-center font-pixeloidMono text-lg text-gray-600 text-opacity-20  dark:text-gray-400">
            <p>A person who loves story-rich RPG-Maker games.</p>
            <p>Often time coding. Sometimes drawing.</p>
            <p>✥ And always learning ✥</p>

            <Tooltip text="Tbh, I ran out of idea on this page">
              <div className="mx-auto flex justify-center">
                <a
                  className={cn(
                    'my-5 flex max-w-[170px] items-center justify-center rounded-lg px-5 py-2 font-pixeloidMono',
                    'text-slate-800 dark:text-slate-200',
                    'border-gray-300  opacity-90 shadow-sm shadow-slate-800 dark:border-zinc-900  dark:shadow-gray-400',
                    'hover:bg-slate-200 dark:hover:bg-slate-500'
                  )}
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL ?? ''}`}
                  target="_blank"
                >
                  Email
                </a>
              </div>
            </Tooltip>
            <p>{`If you have opportunities`}</p>
            <p>{`for collaboration or want to build`}</p>
            <p>{`something amazing, don't hesitate to contact me!`}</p>
          </div>
          <Signature />
        </div>
      </div>
    </>
  )
}

export default ContactMessage
