import React from 'react'
import LeftTimeline from './LeftTimeline'
import RightTimeline from './RightTimeline'

const Timeline: React.FC = () => {
  const sampleDescription = 'Lorem Ipsum is simply dummy text of the printing. Sometihng something holy'

  return (
    <div className="container">
      <div className="mx-auto flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 my-4 ml-auto rounded-xl bg-blue-500 p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">Lorem ipsum</h3>
            <p className="text-justify leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?
            </p>
          </div>

          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-blue-800"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 shadow">
              <div>
                2023
              </div>
            </div>
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-blue-800"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 shadow"></div>
          </div>
          <div className="col-start-6 col-end-10 my-4 mr-auto rounded-xl bg-blue-500 p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">Lorem ipsum</h3>
            <p className="text-justify leading-tight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, facilis.
            </p>
          </div>
        </div>
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 my-4 ml-auto rounded-xl bg-blue-500 p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">Lorem ipsum</h3>
            <p className="text-justify leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-blue-800"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 shadow"></div>
          </div>
        </div>
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 my-4 ml-auto rounded-xl bg-blue-500 p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">Lorem ipsum</h3>
            <p className="text-justify leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-blue-800"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 shadow"></div>
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex h-full w-6 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-blue-800"></div>
            </div>
            <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 shadow"></div>
          </div>
          <div className="col-start-6 col-end-10 my-4 mr-auto rounded-xl bg-blue-500 p-4 shadow-md">
            <h3 className="mb-1 text-lg font-semibold">Lorem ipsum</h3>
            <p className="text-justify leading-tight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, facilis.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
