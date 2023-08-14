import React from 'react'

interface LeftTimelineProps {
  year?: string
  title?: string
  description?: string
  url?: string
  since?: string
}

const LeftTimeline: React.FC<LeftTimelineProps> = ({ year, title, description, url, since }) => {
  return (
    <div className="flex flex-row-reverse md:contents">
      {/* Container box */}
      <div className="col-start-1 col-end-5 my-4 ml-4 rounded-xl bg-blue-600 p-4 font-dosis shadow-lg transition-transform hover:translate-y-[3px]">
        <a className="cursor-pointer" /* href={url} */ rel="noreferrer" target="_blank">
          <h3 className="mb-1 font-dosis text-lg font-semibold">{title}</h3>
        </a>
        <p className="text-justify text-sm leading-tight">{description}</p>
        <p className="mt-1 text-justify font-dosis text-sm leading-tight">{since}</p>
      </div>

      {/* The vertical thingy */}
      <div className="relative col-start-5 col-end-6 md:mx-auto">
        {/* The bar itself */}
        <div className="flex h-full w-6 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-blue-800"></div>
        </div>

        {/* If year is provided, render the box. */}
        {year ? (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse cursor-pointer items-center justify-center rounded-md bg-blue-600 px-2 py-1 shadow-lg hover:shadow-xl">
            <div className="font-dosis text-sm font-medium">{year}</div>
          </div>
        ) : (
          <div className="absolute top-1/2 -mt-2 ml-1 h-4 w-4 cursor-pointer rounded-full bg-blue-500 shadow"></div>
        )}
      </div>
    </div>
  )
}

export default LeftTimeline