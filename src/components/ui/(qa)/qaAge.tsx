'use client'

import React, { useEffect, useState } from 'react'
import QA from './qa'

interface QAClientProps {
  question: string
  cols: string
  height: string
}

/**
 * It could turn into a hook, but ultimately it has to use "useclient".
 * Nextjs 13 do be funny
 */
const QAClient: React.FC<QAClientProps> = ({ question, cols, height }) => {
  const [exactTime, setExactTime] = useState<string>('')

  useEffect(() => {
    const updateAge = () => {
      const bDay = new Date(2002, 5, 31, 12)
      const ageMilliseconds = Date.now() - bDay.getTime()
      setExactTime((ageMilliseconds / 31536000000).toFixed(8))
    }

    // Update the age immediately
    updateAge()

    // Set an interval to update the age every second
    const intervalId = setInterval(updateAge, 1250)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <QA
      question={question}
      customAnswer={
        <>
          {`Currently, I'm around `}
          <span className="font-bold text-yellow-600 dark:text-green-500" style={{ letterSpacing: '0.025em' }}>{exactTime}</span>
          {` years old, pursuing my undergraduate degree in Computer Science at `}
          <span className="font-semibold text-[#ff2c2c]">UNLV</span>
          {`. Alongside my studies, I'm also interning as a software engineer at a local firm.`}
        </>
      }
      cols={cols}
      height={height}
    />
  )
}

export default QAClient
