'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { PiGameControllerThin } from 'react-icons/pi'
import { RoughNotation } from 'react-rough-notation'

interface PAProps {
  tag          : string
  answer      ?: string
  customAnswer?: React.ReactNode
  dir         ?: 'ltr' | 'rtl'    // specify the expected values for dir
}

const Paragraph: React.FC<PAProps> = (props: PAProps) => {
  const { theme } = useTheme()

  // Determine the alignment based on the 'dir' prop for the tag
  const tagAlignment = props.dir === 'rtl' ? 'text-right' : 'text-left'

  return (
    <div className="flex h-full w-full flex-col items-center justify-center ">
      <div className="flex w-full max-w-3xl flex-col border-b border-slate-700 pb-2 pt-1 dark:border-slate-400">
        {/* Tag */}
        <p className={`pb-2 font-dosis text-lg text-black dark:text-white ${tagAlignment}`}>
          {props.tag === 'rpg maker games' && (
            <>
              <PiGameControllerThin
                className="mr-1.5 mt-1 inline-block h-6 w-6 animate-pulse"
              />
            </>
          )}
          <RoughNotation
            type="underline"
            color={`${theme !== 'light' ? '#b620e0' : '#D87787'}`}
            strokeWidth={2}
            order={1}
            show={true}
            animationDelay={2000}
          >
            {props.tag || 'Lorem ipsum dolor sit amet.'}
          </RoughNotation>
        </p>

        {props.customAnswer ? (
          <p
            className={`pb-2 font-dosis text-[15px] font-medium tracking-wide text-black dark:font-light  dark:text-slate-50 ${tagAlignment}`}
          >
            {props.customAnswer}
          </p>
        ) : (
          <p className="pb-2 font-dosis text-[15px] text-gray-500 opacity-80 dark:text-slate-50">
            {props.answer || 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}{' '}
          </p>
        )}
      </div>
    </div>
  )
}

export default Paragraph
