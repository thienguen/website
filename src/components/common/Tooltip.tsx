'use client'

import React, { useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/util/util'

interface TooltipProps {
  text: string
  isThemetoogle?: boolean
  children: ReactNode
  style?: string
}

export const Tooltip: React.FC<TooltipProps> = ({ text, isThemetoogle, children, style }) => {
  const [show, setShow] = useState(false)

  const onMouseEnter = () => {
    setShow(true)
  }

  const onMouseLeave = () => {
    setShow(false)
  }

  const tooltipPosition = isThemetoogle ? 'top-full mt-2' : 'bottom-full mb-2'

  return (
    <div className="relative inline-block">
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </div>
      {show && (
        <div
          className={cn(
            `absolute left-1/2 ${tooltipPosition} z-10 -translate-x-1/2 whitespace-nowrap rounded-md p-2 font-dosis text-base`,
            `${isThemetoogle ? 'bg-red-600 text-slate-200' : 'bg-gray-800 text-white'}`,
            `${style ?? ''}`
          )}
        >
          {text}
        </div>
      )}
    </div>
  )
}
