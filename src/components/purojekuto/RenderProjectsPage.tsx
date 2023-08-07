import { AllProjectsItems, CareerItems, FeaturedProjectItems } from '@/lib/util/dummy'
import clipboard from '../../../public/icons-json/clipboard.json'
import code from '../../../public/icons-json/code.json'
import download from '../../../public/icons-json/download.json'
import heart from '../../../public/icons-json/heart.json'
import home from '../../../public/icons-json/home.json'
import podcasts from '../../../public/icons-json/podcasts.json'
import projects from '../../../public/icons-json/projects.json'
/* Generative Project Cards */
import ACareerItem from './ACareerItem'
import AFeaturedProject from './AFeaturedProject'

export const dynamic = 'force-dynamic'

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
  active?: boolean
  icon: string
  stats?: string
}

export const FeaturedProjects = () => {
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

  return (
    <>
      <div className="flex w-auto flex-row flex-wrap justify-between">{projects}</div>
    </>
  )
}

export const Career = () => {
  const items = CareerItems
  return items.map((item, index) => (
    <div key={index} className="mb-5">
      <h3 className="text-lg font-bold">{item.year}</h3>
      <ul className="list-inside list-disc pl-5 text-base">
        {(item.projects as ProjectProps[]).map((project, pIndex) => (
          <ACareerItem key={pIndex} project={project} />
        ))}
      </ul>
    </div>
  ))
}

type CombinedProjects = {
  year: string
  career: ProjectProps[]
  all: ProjectProps[]
}

export function CareerProjectsAlternating() {
  // Create an array of combined projects for each year
  const combinedProjects: CombinedProjects[] = []

  const years = ['2023', '2022', '2021']

  years.forEach((year) => {
    const careerYear = CareerItems.find((item) => item.year === year)
    const allYear = AllProjectsItems.find((item) => item.year === year)
    combinedProjects.push({
      year: year,
      career: careerYear ? careerYear.projects : [],
      all: allYear ? allYear.projects : [],
    })
  })

  return (
    <div className="mt-10 max-w-2xl flex-wrap justify-between">
      {combinedProjects.map((item, index) => (
        <div key={index} className="mb-10 flex w-full justify-between">
          <div className="w-1/2 pr-4">
            <h3 className="text-lg font-bold">{item.year}</h3>
            <div className="pl-5 text-base">
              <div className="pl-5 text-base">
                <ul>
                  {item.career.map((project, pIndex) => (
                    <ACareerItem key={pIndex} project={project} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h3 className="text-lg font-bold">{item.year}</h3>
            <div className="pl-5 text-base">
              <ul>
                {item.all.map((project, pIndex) => (
                  <ACareerItem key={pIndex} project={project} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
