/* Generative Project Cards */
import OneCareerItem    from '@/components/purojekuto/(render)/one/career-item'

/* types */
import { ProjectItems, CareerItems } from '@/lib/util/dummy'
import { type CombinedProjectCareerProps } from '@/components/purojekuto/(render)/many/many.type'

/**
 * Alternating Career Projects list, left and right
 * * unused *, version 2.0 has been implemented
 */
function CareerProjectsAlternating() {
  // Create an array of combined projects for each year
  const combined: CombinedProjectCareerProps[] = []

  const years = ['2023', '2022', '2021']

  years.forEach((year) => {
    const careerYears = CareerItems.find((item) => item.year === year)
    const allProjects = ProjectItems.find((item) => item.year === year)

    combined.push({
      year       : year,
      allProjects: allProjects ? allProjects.projects: [],
      careers    : careerYears ? careerYears.projects: [],
    })
  })

  return (
    <div className="mt-10 max-w-2xl flex-wrap justify-between">
      {combined.map((item, index) => (
        <div key={index} className="mb-10 flex w-full justify-between">
          {/* Left */}
          <div className="w-1/2 pr-4" dir="ltr">
            {' '}
            <h3 className="font-dosis text-xl font-bold">{item.year}</h3>
            <ul className="list-inside list-disc pl-5 text-base">
              {item.allProjects.map((project, pIndex) => (
                <OneCareerItem key={pIndex} career={project} />
              ))}
            </ul>
          </div>
          {/* Right */}
          <div className="w-1/2 pl-4" dir="rtl">
            {' '}
            <h3 className="font-dosis text-xl font-bold">{item.year}</h3>
            <ul className="list-inside list-disc pl-5 text-base">
              {item.careers.map((project, pIndex) => (
                <OneCareerItem key={pIndex} career={project} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CareerProjectsAlternating












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
