'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HomeHi: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const textElements = gsap.utils.toArray('.text-hi')

    textElements.forEach((text) => {
      gsap.fromTo(text as Element, 
        { backgroundSize: '0 100%' }, 
        {
          backgroundSize: '100% 100%',
          ease: 'none',
          scrollTrigger: {
            trigger: text as HTMLElement,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      )
    })
  }, [])
  
  return (
    <div className="container flex h-[200vh] w-full max-w-screen-xl flex-col items-center justify-center p-4">
      <h1 className="text-hi group relative mb-4 bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-center text-xl font-light text-black opacity-70 dark:text-white">
        {`Hello, I'm`}
        <span className="absolute inset-0 flex scale-x-0 items-center justify-center bg-blue-500 text-black transition-transform group-hover:scale-x-100">
          Lorem ipsum dolor sit amet
        </span>
      </h1>

      <h1 className="text-hi group relative mb-4 bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-center text-3xl font-bold text-slate-800 dark:text-slate-200 lg:text-6xl">
        Thien Nguyen
        <span className="absolute inset-0 flex scale-x-0 items-center justify-center bg-blue-500 text-black transition-transform group-hover:scale-x-100">
          Consectetur adipiscing elit
        </span>
      </h1>

      {/* <div className="text-hi group relative mb-4 max-w-lg bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-center text-lg text-gray-600 dark:text-gray-400">
        A person who loves story-rich RPG-Maker games.
        <span className="absolute inset-0 flex scale-x-0 items-center justify-center bg-blue-500 text-black transition-transform group-hover:scale-x-100">
          Sed do eiusmod tempor incididunt
        </span>
      </div>

      <div className="text-hi group relative mb-4 max-w-lg bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-center text-lg text-gray-600 dark:text-gray-400">
        Often time coding. Sometimes drawing.
        <span className="absolute inset-0 flex scale-x-0 items-center justify-center bg-blue-500 text-black transition-transform group-hover:scale-x-100">
          Ut labore et dolore magna aliqua
        </span>
      </div>

      <div className="text-hi group relative mb-4 max-w-lg bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-center text-lg text-gray-600 dark:text-gray-400">
        ✥ And always learning ✥
        <span className="absolute inset-0 flex scale-x-0 items-center justify-center bg-blue-500 text-black transition-transform group-hover:scale-x-100">
          Ut enim ad minim veniam
        </span>
      </div>

      <div className="text-hi group relative mb-4 max-w-lg bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-center text-lg text-gray-600 dark:text-gray-400">
        K-bar, a bar that you can play with.
        <span className="absolute inset-0 flex scale-x-0 items-center justify-center bg-blue-500 text-black transition-transform group-hover:scale-x-100">
          Quis nostrud exercitation ullamco
        </span>
      </div> */}
    </div>
  )
}

export default HomeHi
