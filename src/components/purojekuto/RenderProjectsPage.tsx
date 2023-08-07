import home      from '../../../public/icons-json/home.json'
import code      from '../../../public/icons-json/code.json'
import heart     from '../../../public/icons-json/heart.json'
import clipboard from '../../../public/icons-json/clipboard.json'

/* Generative Project Cards */
import items from '@/lib/util/dummy'
import AFeaturedProject from './AFeaturedProject'

export const ICONS = {
  clipboard: clipboard,
  home: home,
  heart: heart,
  code: code,
}

export type ProjectProps = {
  title: string
  url: string
  description?: string
  active?: boolean
  icon: string
  stats?: string
}

export const renderFeatured = () => {
  const featured = ['Todo? App', 'Android Apps', 'CLI Games', 'Gate Keeper']

  // Dummy text mapped
  const projects = items
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
