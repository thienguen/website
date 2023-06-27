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
      enterFrom="opacity-0 scale-75"
      enterTo="opacity-100 scale-100"
      leave="transform duration-50 transition ease-in-out"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-75"
      className={props.cols ?? '' + 'h-full'}
    >
      <div className={`text-text-color min-h-[12rem] rounded-lg bg-[#1a202c]`}>
        <div className="flex h-full flex-col justify-center px-5 py-5">
          <h1 className="text-[14px] font-bold sm:text-lg">{props.question}</h1>
          {props.customAnswer ? (
            props.customAnswer
          ) : (
            <p className="text-text-darker mt-2 font-metropolis">{props.answer}</p>
          )}
        </div>
      </div>
    </Transition>
  )
}
