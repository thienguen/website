import React from 'react'
import { techToIcon } from '@/components/ui/icons'

interface LeftTimelineProps {
  year?: string
  title?: string
  description?: string
  tech?: string[]
  url?: string
  since?: string
  primaryColor?: string
  secondaryColor?: string
}

const LeftTimeline: React.FC<LeftTimelineProps> = ({
  year,
  title,
  description,
  url,
  tech = [],
  since,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <div className="flex flex-none sm:flex-row-reverse md:contents ">
      {/* Container box */}
      <div className="col-start-1 col-end-5 my-4 ml-0 min-w-[20.5rem] max-w-[20.5rem] rounded-xl border p-4 font-dosis shadow-2xl transition-transform hover:translate-y-[3px] sm:ml-14">
        <a className="cursor-pointer" href={url} rel="noreferrer" target="_blank">
          <div className="mb-1 flex justify-between font-dosis text-lg text-black dark:font-light dark:text-white">
            {' '}
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${primaryColor ?? ''} 0%, ${secondaryColor ?? ''} 100%)`,
                backgroundSize: '100% 0.075em',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 92%',
                transition: 'background-size 0.25s ease-in, opacity 0.25s ease-in',
              }}
            >
              {title}
            </span>
            <div className="flex cursor-cell items-center gap-2">{tech.map((t, index) => <React.Fragment key={index}>{techToIcon[t] || null}</React.Fragment>)}</div>
          </div>
        </a>
        <p className="text-justify text-sm leading-tight text-black dark:text-white">{description}</p>
        <p className="mt-1 text-justify font-dosis text-sm leading-tight text-black dark:text-white">{since}</p>
      </div>

      {/* The vertical thingy */}
      <div className="relative col-start-5 col-end-6 md:mx-auto">
        {/* The bar itself */}
        <div className="flex h-full w-6 items-center justify-center pr-4 sm:pr-0">
          <div className="pointer-events-none h-full w-1 bg-slate-500 dark:bg-slate-300"></div>
        </div>

        {/* If year is provided, render the box. */}
        {year ? (
          <div className="animate-pulse2 animate-pulse4 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-cell  items-center justify-center rounded-md border-2 bg-slate-200 px-2 py-1 shadow-lg  hover:shadow-xl dark:bg-slate-700 sm:left-1/2 sm:pr-2">
            <div className="font-dosis text-sm font-medium text-black dark:text-white">{year}</div>
          </div>
        ) : (
          <div className="absolute top-1/2 -ml-1 -mt-2 h-4 w-4 cursor-cell rounded-full bg-slate-500 font-dosis text-sm  font-medium shadow dark:bg-slate-400 sm:ml-1"></div>
        )}
      </div>
    </div>
  )
}

export default LeftTimeline
