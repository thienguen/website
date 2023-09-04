'use client'

import React, { useEffect, useState } from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

const StatAgeCard: React.FC = () => {
  const [exactTime, setExactTime] = useState<string>('')

  useEffect(() => {
    const updateAge = () => {
      const bDay = new Date(2002, 5, 31, 12)
      const ageMilliseconds = Date.now() - bDay.getTime()
      setExactTime((ageMilliseconds / 31536000000).toFixed(10))
    }

    // Update the age immediately
    updateAge()

    // Set an interval to update the age every second
    const intervalId = setInterval(updateAge, 50)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="bg-overlay mt-4 flex flex-col justify-between gap-2 rounded-sm p-4 text-slate-900 opacity-90 shadow-sm shadow-slate-700 dark:text-slate-300 dark:shadow-gray-400">
      <div className="group m-0 flex gap-1">
        {`Experiencing back pain at`}
        <a href={'/about'} target="_blank" rel="noreferrer">
          <HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
        </a>
      </div>
      <h3 className="m-0">{exactTime}</h3>
    </div>
  )
}

export default StatAgeCard
