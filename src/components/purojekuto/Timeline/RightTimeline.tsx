import React from 'react'

interface RightTimelineProps {
  year?: string
  title?: string
  description?: string
}

const RightTimeline: React.FC<RightTimelineProps> = ({ year, title, description }) => {
  return (
    <div className="flex md:contents">
      {/* The vertical thingy */}
      <div className="relative col-start-5 col-end-6 md:mx-auto">
        {/* The bar itself */}
        <div className="flex h-full w-6 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-blue-900"></div>
        </div>
        {/* The box of year */}
        {year && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse cursor-pointer items-center justify-center rounded-md bg-blue-600 px-2 py-1 shadow-lg hover:shadow-xl">
            <div className="text-sm font-medium">{year}</div>
          </div>
        )}
      </div>

      {/* Container box */}
      <div className="col-start-6 col-end-10 my-4 mr-4 rounded-xl bg-blue-600 p-4 font-dosis shadow-lg transition-transform hover:translate-y-[3px]">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-justify leading-tight">{description}</p>
      </div>
    </div>
  )
}

export default RightTimeline
