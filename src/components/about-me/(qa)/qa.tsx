'use client'

import React, { useRef } from 'react'
import { useTheme } from 'next-themes'
import { RoughNotation } from 'react-rough-notation'
// import useOnScreen from '@/hooks/useOnScreen'

interface QAProps {
  question: string
  answer?: string
  customAnswer?: React.ReactNode
  height?: string
  cols?: string
}

const QA: React.FC<QAProps> = (props: QAProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  // const isSecOnScreen = useOnScreen(sectionRef);

  const { resolvedTheme } = useTheme()
  return (
    <div
      className={`${props.height ?? ''} ${
        props.cols ?? ''
      } rounded-md border-gray-300  opacity-90 shadow-sm shadow-slate-800 dark:border-zinc-900  dark:shadow-gray-400`}
    >
      <div className="flex h-full flex-col justify-center px-5 ">
        <h1 className="pb-2 font-dosis text-xl font-medium  text-black dark:text-white">
          <RoughNotation
            type="underline"
            color={`${resolvedTheme !== 'light' ? `#6ACDFF` : '#D87787'}`}
            strokeWidth={2}
            order={1}
            show={true}
            animationDelay={1300}
          >
            {props.question} {/* Something Somethinbg */}
          </RoughNotation>
        </h1>
        {props.customAnswer ? (
          <p className="pb-2 font-dosis text-sm  tracking-wide text-black dark:text-slate-100">
            {props.customAnswer} {/* Something Somethinbg */}
          </p>
        ) : (
          <p className="pb-2 font-dosis text-sm text-gray-500 opacity-80 dark:text-gray-300">{props.answer}</p>
        )}
      </div>
    </div>
  )
}

export default QA
