import React from 'react'

interface RightTimelineProps {
  number: string
  title: string
  description: string
}

const RightTimeline: React.FC<RightTimelineProps> = ({ number, title, description }) => {
  return (
    <div className="right-timeline mb-8 flex w-full items-center justify-between">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
        <h1 className="mx-auto text-lg font-semibold text-white">{number}</h1>
      </div>
      <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
        <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{description}</p>
      </div>
    </div>
  )
}

export default RightTimeline
