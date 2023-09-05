'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Signature() {
  const originalStrings = ['Dreams', 'Thien Van Ky Nguyen']
  const alternatingStrings = originalStrings.flatMap((str) => [str, [...str].reverse().join('')])

  return (
    <div className="mt-2 h-10">
      <div className=" text-center font-signature text-lg font-light text-black opacity-70  dark:text-white">
        <Typewriter
          options={{
            strings: alternatingStrings,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  )
}
