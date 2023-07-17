'use client'

import { type Metadata, type NextPage } from 'next'
import items from '@/lib/util/dummy'
import FeaturedProject, { type ProjectProps } from '@/components/purojekuto/FeaturedProjects'

export const metadata: Metadata = {
  title: '/projects',
  description: 'metadata is a funny lil concept.',
}

// interface ProjectItemProps {
//   project: ProjectProps
// }

// const ProjectItem: NextPage<ProjectItemProps> = ({ project }) => {
//   return (
//     <li>
//       <a href={project.url} target="_blank">
//         {project.title}
//       </a>
//     </li>
//   )
// }

export default function Projects() {
  const renderFeatured = () => {
    const featured = ['Dracula PRO', 'Clipboard.js', 'Resend', 'React Email']

    return items
      .map((item) => {
        return item.projects.filter((project) => featured.includes(project.title))
      })
      .filter((item) => {
        if (item.length > 0) {
          return item
        }
      })
      .flat()
      .map((item, index) => {
        if ('description' in item && 'icon' in item) {
          return <FeaturedProject key={index} project={item as ProjectProps} index={index} />
        }
      })
  }

  // const renderAll = () => {
  //   return items.map((item, index) => {
  //     return (
  //       <div key={index}>
  //         <h3>{item.year}</h3>
  //         <ul>
  //           {(item.projects as ProjectProps[]).map((project, pIndex) => {
  //             // Add type assertion
  //             return <ProjectItem key={pIndex} project={project} />
  //           })}
  //         </ul>
  //       </div>
  //     )
  //   })
  // }

  return (
    <>
      <div className="mx-auto mt-6 flex max-w-3xl flex-col ">
        {/* Header */}
        <div className="space-y-1 px-10 md:space-y-3">
          <h1 className="text-base font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-6 md:text-3xl">
            {`projects`}
          </h1>
        </div>

        <h2 className="mx-auto my-10">Featured Projects</h2>

        <div className="mb-0 ml-[-20px] mr-0 mt-[10px] flex flex-row flex-wrap">
          {renderFeatured()}
        </div>
      </div>
    </>
  )
}
