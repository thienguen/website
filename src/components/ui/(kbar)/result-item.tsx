import { forwardRef } from 'react'
import { type ActionImpl } from 'kbar'
import { cn } from '@/lib/util/util'

type Props = {
  action: ActionImpl 
  active: boolean
}

const ResultItem = forwardRef(({ action, active }: Props, ref: React.Ref<HTMLDivElement>) => {

  return (
    <div
      ref={ref}
      className={cn('flex cursor-pointer items-center justify-between border-l-2 px-4 py-5 font-dosis text-sm', {
        'bg-white/10 text-cardlight dark:text-primary': active,
        'bg-command text-cardlight/80 dark:text-secondary': !active,
      })}
    >
      {/* Action */}
      <div className="flex items-center gap-1">
        {action.icon && <span className="mr-4">{action.icon}</span>}
        <div className="flex flex-col">
          <span className=" dark:text-gray-200">{action.name}</span>
          {action.subtitle && <span className="text-xs dark:text-gray-200">{action.subtitle}</span>}
        </div>
      </div>

      {action.shortcut?.length ? (
        /* Shortcut, well its broken */
        <div className="grid grid-flow-col gap-1">
          {action.shortcut.map((sc) => (
            <kbd key={sc} className="rounded-lg bg-slate-900 px-2 uppercase dark:bg-slate-300 dark:text-black">
              {sc}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  )
})

ResultItem.displayName = 'ResultItem'

export default ResultItem
