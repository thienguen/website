'use client'

// import { type Metadata } from 'next'
import ProgressBar from '@/components/common/ProgressBar'
import * as render from '@/components/purojekuto/RenderProjectsPage'

// export const metadata: Metadata = {
//   title: '/projects',
//   description: 'metadata is a funny lil concept.',
// }

export default function Projects() {
  // <div className="space-y-1 px-10 md:space-y-3">
  //   {/* <h1 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:leading-6">
  //     {`projects`}
  //   </h1> */}
  // </div>

  return (
    <>
      <ProgressBar
        steps={['/home', '/projects', '/about', '/guestbook']}
        currentStep={2}
        isFullWidth={false}
        key={'/projects'}
      />

      <h2 className="my-6 text-center font-dosis text-xl">Featured Projects</h2>

      {/* Featured Projecst */}
      <div className="mx-auto mt-6 flex max-w-3xl flex-col ">
        <div className="">{render.FeaturedProjects()}</div>
      </div>

      {/* Career */}
      <div className="mx-auto flex max-w-2xl flex-col">{render.CareerProjectsAlternating()}</div>
    </>
  )
}
