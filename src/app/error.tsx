'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto h-full w-full">
      <p>Oh no, something went wrong... maybe refresh? If not, then I`m doomed</p>
    </div>
  )
}
