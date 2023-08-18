'use client'

import { useTheme } from 'next-themes'
import { RoughNotation } from 'react-rough-notation'
import { Tooltip } from '@/components/common/Tooltip'
import { AllProjectItems, CareerItems, FeaturedProjectItems } from '@/lib/util/dummy'

import clipboard  from '../../../../public/icons-json/clipboard.json'
import code       from '../../../../public/icons-json/code.json'
import download   from '../../../../public/icons-json/download.json'
import heart      from '../../../../public/icons-json/heart.json'
import home       from '../../../../public/icons-json/home.json'
import podcasts   from '../../../../public/icons-json/podcasts.json'
import projects   from '../../../../public/icons-json/projects.json'

/* Generative Project Cards */
import Timeline         from '../(timeline)/Timeline'
import ACareerItem      from './ACareerItem'
import AFeaturedProject from './AFeaturedProject'

export const dynamic = 'force-dynamic'

// const Career = () => {
//   const items = CareerItems
//   return items.map((item, index) => (
//     <div key={index} className="mb-5">
//       <h3 className="text-lg font-bold">{item.year}</h3>
//       <ul className="list-inside list-disc pl-5 text-base">
//         {(item.projects as ProjectProps[]).map((project, pIndex) => (
//           <ACareerItem key={pIndex} project={project} />
//         ))}
//       </ul>
//     </div>
//   ))
// }

export const ICONS = {
  home: home,
  code: code,
  heart: heart,
  projects: projects,
  podcasts: podcasts,
  clipboard: clipboard,
  download: download,
}

export type ProjectProps = {
  title: string
  url: string
  description?: string
  since?: string
  active?: boolean
  icon: string
  stats?: string
}

/**
 * Feature Project Cards
 */
const FeaturedProjects = () => {
  /* We featuring these shitty stuff */
  const featured = ['Todo? App', 'Android Apps', 'CLI Games', 'Gate Keeper']

  // Dummy text mapped
  const projects = FeaturedProjectItems.map((item) => {
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
        return <AFeaturedProject key={index} project={item as ProjectProps} index={index} />
      }
    })

  return <div className="flex w-auto flex-row flex-wrap justify-between">{projects}</div>
}

type CombinedProjects = {
  year: string
  allProjects: ProjectProps[]
  careers: ProjectProps[]
}

/**
 * Alternating Career Projects list, left and right
 * * unused *
 */
export function CareerProjectsAlternating() {
  // Create an array of combined projects for each year
  const combinedProjects: CombinedProjects[] = []

  const years = ['2023', '2022', '2021']

  years.forEach((year) => {
    const careerYears = CareerItems.find((item) => item.year === year)
    const allProjects = AllProjectItems.find((item) => item.year === year)

    combinedProjects.push({
      year: year,
      allProjects: allProjects ? allProjects.projects : [],
      careers: careerYears ? careerYears.projects : [],
    })
  })

  return (
    <div className="mt-10 max-w-2xl flex-wrap justify-between">
      {combinedProjects.map((item, index) => (
        <div key={index} className="mb-10 flex w-full justify-between">
          {/* Left */}
          <div className="w-1/2 pr-4" dir="ltr">
            {' '}
            <h3 className="font-dosis text-xl font-bold">{item.year}</h3>
            <ul className="list-inside list-disc pl-5 text-base">
              {item.allProjects.map((project, pIndex) => (
                <ACareerItem key={pIndex} project={project} />
              ))}
            </ul>
          </div>
          {/* Right */}
          <div className="w-1/2 pl-4" dir="rtl">
            {' '}
            <h3 className="font-dosis text-xl font-bold">{item.year}</h3>
            <ul className="list-inside list-disc pl-5 text-base">
              {item.careers.map((project, pIndex) => (
                <ACareerItem key={pIndex} project={project} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * What we shown in the page, due to 'use client'
 */
export function ProjectPageContent() {
  const { theme } = useTheme()

  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col">
        <div className="">{FeaturedProjects()}</div>
      </div>
      {/* <div className="mx-auto flex max-w-2xl flex-col">{CareerProjectsAlternating()}</div> */}
      <div className="mx-auto mt-2 max-w-4xl px-4">
        {/* Header Section */}

        <div className="group flex flex-row items-center justify-between font-semibold lg:flex-row">
          {/* Leftmost Career kbd */}
          <div className="flex h-8 border-l-2 border-slate-400 pl-2 dark:border-slate-700">
            <RoughNotation
              type="underline"
              color={`${theme !== 'light' ? `#6ACDFF` : '#D87787'}`}
              strokeWidth={2}
              order={1}
              show={true}
              animationDelay={2000}

            >
              <p className="translate-y-[-1rem] animate-fade-in font-dosis text-xl font-normal opacity-0 [--animation-delay:400ms] dark:font-light">
                Project
              </p>{' '}
              {/* Something Somethinbg */}
            </RoughNotation>
          </div>

          <Tooltip text="Timeline">
            <div className="divider pr-1 text-base font-semibold lg:divider-horizontal">タイムライン</div>
          </Tooltip>

          {/* Rightmost Project kbd */}
          <div className="flex h-8 border-r-2 border-slate-400 pr-2  dark:border-slate-700">
            <RoughNotation
              type="underline"
              color={`${theme !== 'light' ? `#6ACDFF` : '#D87787'}`}
              strokeWidth={2}
              order={1}
              show={true}
              animationDelay={2000}

            >
              <p className="translate-y-[-1rem] animate-fade-in font-dosis text-xl font-normal opacity-0 [--animation-delay:400ms] dark:font-light">
                Career
              </p>{' '}
              {/* Something Somethinbg */}
            </RoughNotation>
          </div>
        </div>
      </div>
      {/* ----------------- */}
      <Timeline />
      {/* ----------------- */}
    </>
  )
}
