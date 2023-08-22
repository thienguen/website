'use client'

import React, { useEffect, useRef } from 'react'
import GlitchedWriter, { wait } from 'glitched-writer'

type GlitchedComponentProps = {
  initialText?: string
}

const GlitchedComponent: React.FC<GlitchedComponentProps> = ({ initialText = 'Welcome!' }) => {
  const textRef = useRef<HTMLDivElement | null>(null)
  const logsRef = useRef<HTMLDivElement | null>(null)

  function logString(string: string) {
    if (logsRef.current && !logsRef.current.innerHTML.includes(string)) {
      logsRef.current.innerHTML += `<p>${string}</p>`
    }
  }

  useEffect(() => {
    // if (!textRef.current || !logsRef.current) return
    if (!textRef.current) return

    // const Writer = new GlitchedWriter(textRef.current, { letterize: true })
    const Writer = new GlitchedWriter(textRef.current, { letterize: true }, logString)

    /* Absolutely geninus from the dev of glitchwriter */
    ;(async () => {
      try {
        await wait(3000)
        await Writer.write('my old friend.')
        await wait(1200)
        await Writer.write('This is only the beginning.')
        await wait(1200)
        await Writer.write(`Lets journey back to the 90's technologies guestbook!`)
        await wait(1200)
        await Writer.write('And please, say something in this retro digital oasis...')
      } catch (err) {
        console.error('An error occurred:', err)
      }
    })().catch((error) => console.error(error))

    console.log('GlitchedComponent mounted')
    /* For input - unused */
    // const handleInput = (e: any) => {
    //   void Writer.write(e.target.value)
    // }
    // inputRef.current.addEventListener('input', handleInput)
    // return () => {
    //   if (inputRef.current) {
    //     inputRef.current.removeEventListener('input', handleInput)
    //   }
    // }
  }, [])

  return (
    <div className="relative mx-auto flex h-12  max-w-4xl items-center justify-center overflow-hidden">
      <div
        ref={textRef}
        className="sm:balanced relative text-center font-pixeloidMono text-2xl font-light leading-6 text-lightPrimaryColor dark:text-slate-300 sm:text-left"
      >
        {/* {`Journey back to the 90's technologies guestbook! Leave your mark and let me know you were here in this retro digital oasis. `} */}
        {initialText}
      </div>
      {/* <div ref={logsRef} className="absolute left-8 top-4 flex flex-col-reverse text-sm leading-5 text-blue-200"></div> */}
    </div>
  )
}

/* Re-render for some reason */
export default GlitchedComponent
