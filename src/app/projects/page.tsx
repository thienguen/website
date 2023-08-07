'use client'

// import { type Metadata, type NextPage } from 'next'
import { renderCareer, renderFeatured } from '@/components/purojekuto/RenderProjectsPage'

// export const metadata: Metadata = {
// title: '/projects',
// description: 'metadata is a funny lil concept.',
// }

export default function Projects() {
  // <div className="space-y-1 px-10 md:space-y-3">
  //   {/* <h1 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:leading-6">
  //     {`projects`}
  //   </h1> */}
  // </div>

  return (
    <>
      <div className="mx-auto mt-6 flex max-w-3xl flex-col ">
        <h2 className="mx-auto my-10">Featured Projects</h2>

        <div>{renderFeatured()}</div>

        <h2 className="my-5 text-xl">Career</h2>
        {renderCareer()}
      </div>
    </>
  )
}
