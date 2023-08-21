'use client'

import React, { useState } from 'react'
import type { ReactNode } from 'react'

interface TooltipProps {
  text: string
  isThemetoogle?: boolean
  children: ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ text, isThemetoogle, children }) => {
  const [show, setShow] = useState(false)

  const onMouseEnter = () => {
    setShow(true)
  }

  const onMouseLeave = () => {
    setShow(false)
  }

  return (
    <div className="relative inline-block">
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </div>
      {show && (
        <div
          className={`absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md ${
            isThemetoogle ? 'bg-red-600 text-slate-200' : 'bg-gray-800 text-white'
          } p-2 font-dosis text-base`}
        >
          {text}
        </div>
      )}
    </div>
  )
}
