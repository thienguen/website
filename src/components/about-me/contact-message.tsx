'use client'

import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/util/util'
import gsap from 'gsap'

import Signature from '@/components/contact/signature'
import { Tooltip } from '@/components/common/Tooltip'

import { TbMilkshake } from 'react-icons/tb'

function ContactMessage() {
  const textRef = useRef<HTMLHeadingElement[] | null>(null)
  const [showContact, setShowContact] = React.useState(false)

  useEffect(() => {
    const textElements = gsap.utils.toArray('.text-hi')
    textRef.current = textElements as HTMLHeadingElement[]

    const autoRunAnimation = (elem: Element) => {
      return gsap.fromTo(
        elem,
        { backgroundSize: '0 0%' },
        {
          backgroundSize: '100% 100%',
          ease          : 'none',
          duration      : 3.5,           // Duration of one "forward" animation.
          yoyo          : true,          // Play the animation in reverse after playing it forward.
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
      <div className="mb-2 mt-5 flex cursor-pointer flex-row justify-center">
        <Tooltip text="Click me">
          <TbMilkshake className="heartbeat h-6 w-6 animate-pulse" onClick={() => setShowContact(!showContact)} />
        </Tooltip>
      </div>

      {showContact && (
        <div className="flex h-full w-full translate-y-[-1rem] animate-fade-in flex-col items-center justify-center opacity-0 [--animation-delay:100ms] sm:mt-0">
          <div className="flex flex-col items-center justify-center px-10">
            {' '}
            <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL ?? ''}`} target="_blank">
              <p
                className={cn(
                  'text-p cursor-pointer whitespace-nowrap rounded-md px-2 py-1  text-center font-dosis text-lg text-slate-800 dark:text-slate-200',
                  'font-semibold hover:bg-slate-200 dark:font-medium dark:hover:bg-slate-500'
                )}
              >
                {`Contact`}
              </p>
            </a>
            <div className="text-hi balanced relative max-w-xl cursor-cell pb-2 text-center font-dosis text-lg text-gray-600 text-opacity-20  dark:text-gray-400">
              <p>
                {`If you have opportunities for collaboration or want to build something amazing, don't hesitate to contact me!`}
              </p>
            </div>
            <Signature />
          </div>
        </div>
      )}
    </>
  )
}

export default ContactMessage
