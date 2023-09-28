import React from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/util/util'

interface TooltipProps {
  text          : string
  isThemetoogle?: boolean
  children      : ReactNode
  style        ?: string | undefined
}

export const Tooltip: React.FC<TooltipProps> = ({ text, isThemetoogle, children, style }) => {
  const tooltipPosition = isThemetoogle ? 'top-full mt-2' : 'bottom-full mb-2'

  return (
    <div className="group relative inline-block">
      <div className="cursor-pointer">{children}</div>
      <div
        className={cn(
          `absolute left-1/2 ${tooltipPosition} pointer-events-none z-10 -translate-x-1/2 scale-0 whitespace-nowrap rounded-md p-2.5 font-dosis text-base transition-transform duration-150 group-hover:scale-100`,
          `${isThemetoogle ? 'bg-red-600 text-slate-200' : 'bg-gray-600 text-white'}`,
          `${style ?? ''}`
        )}
      >
        {text}
      </div>
    </div>
  )
}
