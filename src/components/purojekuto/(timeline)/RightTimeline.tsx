import React from 'react'
import { techToIcon } from '@/components/ui/icons'
import { type SubTimelineProps } from '@/components/purojekuto/(timeline)/timeline.type'

const RightTimeline: React.FC<SubTimelineProps> = ({
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
    <div className="flex md:contents">
      {/* The vertical thingy */}
      <div className="relative col-start-5 col-end-6 md:mx-auto">
        {/* The bar itself */}
        <div className="flex h-full w-6 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-slate-300 dark:bg-slate-300"></div>
        </div>

        {/* The box of year */}
        {/* If year is provided, render the box. */}
        {year ? (
          <div className="animate-pulse2 animate-pulse4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-cell items-center justify-center  rounded-md border-2 bg-slate-200 px-2  py-1 shadow-lg hover:shadow-xl dark:bg-slate-700">
            <div className="font-dosis text-sm text-black dark:text-white">{year}</div>
          </div>
        ) : (
          <div className="absolute top-1/2 -mt-2 ml-1 h-4 w-4 cursor-cell rounded-full bg-slate-200 shadow dark:bg-slate-400"></div>
        )}
      </div>

      {/* Container box */}
      <div className="col-start-6 col-end-10 my-4 mr-0 min-w-[20.5rem]  rounded-xl border border-[#c8c0b7] p-4  font-dosis shadow-2xl  transition-transform hover:translate-y-[3px] dark:border-slate-600 sm:mr-8">
        <a className="cursor-pointer" href={url} rel="noreferrer">
          <div className="mb-1 flex justify-between font-dosis text-lg text-black dark:font-light dark:text-white">
            <span
              style={{
                backgroundImage   : `linear-gradient(135deg, ${primaryColor ?? ''} 0%, ${secondaryColor ?? ''} 100%)`,
                backgroundSize    : '100% 0.075em',
                backgroundRepeat  : 'no-repeat',
                backgroundPosition: '0 92%',
                transition        : 'background-size 0.25s ease-in, opacity 0.25s ease-in',
              }}
            >
              {title}
            </span>
            <div className="flex cursor-cell items-center gap-2">
              {tech.map((t, index) => (
                <React.Fragment key={index}>{techToIcon[t] || null}</React.Fragment>
              ))}
            </div>
          </div>
        </a>
        <p className="text-sm leading-tight text-black dark:text-white">{description}</p>
        <p className="mt-1 font-dosis  text-xs leading-tight text-black dark:text-white">{since}</p>
      </div>
    </div>
  )
}

export default RightTimeline
