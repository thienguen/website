'use client'

import Typewriter from 'typewriter-effect'

export default function Signature() {
  return (
    <>
      {/* Typewriter */}
      <div className="text-center font-signature text-2xl">
        <Typewriter
          options={{
            strings: ['Thien Van Ky Nguyen'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  )
}
