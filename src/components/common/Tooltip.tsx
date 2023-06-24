import clsx from 'clsx'
import type { ReactNode } from 'react'

type TooltipProps = {
  color: 'light' | 'dark'
  position: 'top' | 'bottom' | 'right' | 'left'
  children?: ReactNode
  width?: 'parent' | 'md' | 'lg'
}

const Tooltip = ({ color, position, children, width }: TooltipProps) => {
  return (
    <div className="group relative cursor-help">
      <div
        className={clsx(
          'invisible absolute z-10 hidden h-auto min-w-min break-words rounded-md border  border-transparent px-4 py-2 opacity-0 shadow transition-opacity delay-200 ease-in-out group-hover:visible group-hover:block group-hover:opacity-95 group-focus:visible group-focus:block group-focus:opacity-95',
          {
            'w-full': width && width === 'parent',
            'w-56': width && width === 'md',
            'w-80': (width && width === 'lg') || !width,
          },
          {
            'bg-gray-50 text-black': color === 'light',
            'bg-gray-900 text-white': color === 'dark',
          },
          {
            'bottom-full left-1/2 -translate-x-1/2 -translate-y-1 transform': position === 'top',
            'left-1/2 top-full -translate-x-1/2 translate-y-1 transform': position === 'bottom',
            'left-full top-1/2 -translate-y-1/2 translate-x-1 transform': position === 'right',
            'right-full top-1/2 -translate-x-1 -translate-y-1/2 transform': position === 'left',
          }
        )}
        role="tooltip"
      >
        <span className="text-base">{children}</span>
      </div>
    </div>
  )
}

export default Tooltip
