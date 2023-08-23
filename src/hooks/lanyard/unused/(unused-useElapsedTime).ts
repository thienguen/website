'use client'

import { useEffect, useState } from 'react'

function useElapsedTime(startTimestamp?: number): string | null {
  const [elapsedTime, setElapsedTime] = useState<string | null>(null)

  useEffect(() => {
    const updateElapsedTime = () => {
      if (!startTimestamp) return

      const currentTime = Date.now()
      const elapsedSecondsTotal = Math.floor((currentTime - startTimestamp) / 1000)

      const hours = Math.floor(elapsedSecondsTotal / 3600)
      const minutes = Math.floor((elapsedSecondsTotal % 3600) / 60)
      const seconds = elapsedSecondsTotal % 60

      // Format the elapsed time as HH:MM:SS
      const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
        seconds
      ).padStart(2, '0')} elapsed`
      setElapsedTime(formattedTime)
    }

    // Update the elapsed time immediately
    updateElapsedTime()

    // Set an interval to update the elapsed time every second
    const intervalId = setInterval(updateElapsedTime, 1000)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [startTimestamp])

  return elapsedTime
}

export default useElapsedTime

