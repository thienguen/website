'use client'

import { Transition } from '@headlessui/react'
import type { Data } from 'use-lanyard'

interface QAProps {
  question: string
  answer: string
  status: string
  data?: Data

  customAnswer?: React.ReactNode
  cols?: string
}

export const QA = (props: QAProps) => {
  return (
    <Transition
      show={props.data != undefined}
      enter="transform transition duration-50 ease-in-out"
      enterFrom="opacity-0 scale-75 h-full"
      enterTo="opacity-100 scale-100 h-full"
      leave="transform duration-50 transition ease-in-out"
      leaveFrom="opacity-100 scale-100 h-full"
      leaveTo="opacity-0 scale-75 h-full"
      className={props.cols ?? ''}
    >
      <div
        className={`min-h-[12rem] rounded-2xl border-2  bg-gradient-to-b from-slate-100 to-gray-300 font-jetbrains-mono dark:bg-gradient-to-b dark:from-slate-800 dark:to-gray-900`}
      >
        <div className="mt-10 flex h-full flex-col px-5">
          <h1 className="justify-center text-[16px] font-medium file:font-bold">{props.question}</h1>
          {props.customAnswer ? (
            props.customAnswer
          ) : (
            <p className="mt-4 justify-center font-jetbrains-mono text-slate-500 sm:text-xs md:text-[14px]">
              {props.answer}
            </p>
          )}
        </div>
      </div>
    </Transition>
  )
}
