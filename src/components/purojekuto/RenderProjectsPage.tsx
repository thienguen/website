import { CareerItems, projectItems } from '@/lib/util/dummy'
import clipboard from '../../../public/icons-json/clipboard.json'
import podcasts from '../../../public/icons-json/podcasts.json'
import code from '../../../public/icons-json/code.json'
import heart from '../../../public/icons-json/heart.json'
import home from '../../../public/icons-json/home.json'
import projects from '../../../public/icons-json/projects.json'

/* Generative Project Cards */
import ACareerItem from './ACareerItem'
import AFeaturedProject from './AFeaturedProject'

export const ICONS = {
  home: home,
  code: code,
  heart: heart,
  projects: projects,
  podcasts: podcasts,
  clipboard: clipboard,
}

export type ProjectProps = {
  title: string
  url: string
  description?: string
  active?: boolean
  icon: string
  stats?: string
}

export const renderFeaturedProjects = () => {
  const featured = ['Todo? App', 'Android Apps', 'CLI Games', 'Gate Keeper']

  // Dummy text mapped
  const projects = projectItems
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
        return <AFeaturedProject key={index} project={item as ProjectProps} index={index} />
      }
    })

  return (
    <>
      <div className="flex w-auto flex-row flex-wrap justify-between">{projects}</div>
    </>
  )
}

export const renderCareer = () => {
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
