'use client'

import { useEffect, useState, useRef } from 'react'

function useElapsedTime(startTimestamp?: number): string | null {
  const [currentTime, setCurrentTime] = useState<number>(Date.now())
  const startTimeRef = useRef<number | undefined>(startTimestamp)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!startTimeRef.current) return null

  const elapsedSecondsTotal = Math.floor((currentTime - startTimeRef.current) / 1000)
  const hours = Math.floor(elapsedSecondsTotal / 3600)
  const minutes = Math.floor((elapsedSecondsTotal % 3600) / 60)
  const seconds = elapsedSecondsTotal % 60

  // Format the elapsed time as HH:MM:SS
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} elapsed`

  return formattedTime
}

export default useElapsedTime