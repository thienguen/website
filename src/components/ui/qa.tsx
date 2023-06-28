'use client'

import { Transition } from '@headlessui/react'
import { useLanyardWS } from 'use-lanyard'

interface QAProps {
  question: string
  answer: string

  customAnswer?: React.ReactNode
  cols?: string
}

export const QA = (props: QAProps) => {
  /* Intentional, making it feel sequential pops up */
  const id: `${bigint}` | undefined = process.env.DISCORD_ID ? `${BigInt(process.env.DISCORD_ID)}` : undefined
  const data = useLanyardWS(id ? [id] : [])

  return (
    <Transition
      show={data != undefined}
      enter="transform transition duration-75 ease-in-out"
      enterFrom="opacity-0 scale-75"
      enterTo="opacity-100 scale-100"
      leave="transform duration-75 transition ease-in-out"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-75"
      className={props.cols ?? ''}
    >
      <div className={`min-h-[12rem] rounded-lg bg-[#1a202c]`}>
        <div className="flex h-full flex-col justify-center p-5">
          <h1 className="text-[14px] font-bold sm:text-lg">{props.question}</h1>
          {props.customAnswer ? props.customAnswer : <p className="mt-2 font-metropolis">{props.answer}</p>}
        </div>
      </div>
    </Transition>
  )
}
