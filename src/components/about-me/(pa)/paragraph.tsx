'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { RoughNotation } from 'react-rough-notation'

interface PAProps {
  tag          : string
  answer      ?: string
  customAnswer?: React.ReactNode
}

const Paragraph: React.FC<PAProps> = (props: PAProps) => {
  const { theme } = useTheme()
  return (
    <div className="flex h-full flex-col justify-center px-5 ">
      <p className="pb-2 font-dosis text-lg font-medium  text-black dark:text-white">
        <RoughNotation
          type="underline"
          color={`${theme !== 'light' ? `#6ACDFF` : '#D87787'}`}
          strokeWidth={2}
          order={1}
          show={true}
          animationDelay={2000}
        >
          {props.tag} {/* Something Somethinbg */}
        </RoughNotation>
      </p>
      {props.customAnswer ? (
        <p className="pb-2 font-dosis text-[13px]  tracking-wide text-black dark:text-slate-100">
          {props.customAnswer} {/* Something Somethinbg */}
        </p>
      ) : (
        <p className="pb-2 font-dosis text-[13px] text-gray-500 opacity-80 dark:text-gray-300">{props.answer}</p>
      )}
    </div>
  )
}

export default Paragraph
