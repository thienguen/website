import { FeaturedProjectItems } from "@/lib/util/dummy"
import AFeaturedProject from "../one/featured-project"
import { type ProjectCareerProps } from "../one/one.type"

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
        return <AFeaturedProject key={index} project={item as ProjectCareerProps} index={index} />
      }
    })

  return <div className="flex w-auto flex-row flex-wrap justify-between">{projects}</div>
}

export default FeaturedProjects