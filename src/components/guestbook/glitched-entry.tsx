'use client'

import dayjs from 'dayjs'
import React, { useEffect, useRef } from 'react'
import GlitchedWriter, { wait } from 'glitched-writer'

type GlitchedEntry = {
  initialText?: string
}

export function GlitchedEntry({ initialText = 'Welcome!' }: GlitchedEntry) {
  const textRef = useRef<HTMLDivElement | null>(null)
  const logsRef = useRef<HTMLDivElement | null>(null)
  
  function logString(string: string) {
    if (logsRef.current && !logsRef.current.innerHTML.includes(string)) {
      logsRef.current.innerHTML += `<p>${string}</p>`
    }
  }

  useEffect(() => {
    if (!textRef.current) return

    const Writer = new GlitchedWriter(textRef.current, { letterize: true }, logString)

    /* Absolutely geninus from the dev of glitchwriter */
    ;(async () => {
      try {
        await wait(2000)
        await Writer.write('my old friend.')
        await wait(1200)
        await Writer.write(`Lets journey back to the 90's technologies guestbook!`)
        await wait(1200)
        await Writer.write('And please, say something in this retro digital oasis...')
      } catch (err) {
        console.error('An error occurred:', err)
      }
    })().catch((error) => console.error(error))

    console.log('GlitchedComponent mounted')
  }, [])

  return (
    <>
      <div className="mx-auto my-3 w-11/12 rounded-md border border-gray-700 p-4 shadow-sm shadow-gray-300 dark:border-zinc-700 dark:shadow-none sm:w-full">
        <div className={`mb-2 font-dosis text-lg font-normal dark:font-light`}
          ref={textRef}
        > 
          {initialText}
        </div>

        <div className="line-clamp-1 flex flex-row justify-between">
          <p className="pr-2 font-metropolis text-sm text-slate-950 text-opacity-70 dark:text-gray-400">
            {'Thienguen'} • {dayjs(Date.now()).format('D MMM YYYY [at] h:mm A')}
          </p>
        </div>
      </div>
    </>
  )
}
