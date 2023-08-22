'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  console.log('reset: ', reset)

  return (
    <div className="mx-auto flex h-full min-h-[900px] w-full items-center justify-center font-pixeloidMono text-4xl">
      <p>Oh no, something went wrong... maybe refresh? If not, then I`m doomed</p>
    </div>
  )
}
