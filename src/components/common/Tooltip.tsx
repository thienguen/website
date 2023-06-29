'use client'

import React, { useState } from 'react'
import type { ReactNode } from 'react'

interface TooltipProps {
  text: string
  children: ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [show, setShow] = useState(false)

  const onMouseEnter = () => {
    setShow(true)
  }

  const onMouseLeave = () => {
    setShow(false)
  }

  return (
    <div className="relative inline-block z-20">
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </div>
      {show && (
        <div className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 p-2 text-sm text-white">
          {text}
        </div>
      )}
    </div>
  )
}
