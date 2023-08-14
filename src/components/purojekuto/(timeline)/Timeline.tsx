import React from 'react'
import { AllProjectItems, CareerItems } from '@/lib/util/dummy'
import LeftTimeline from './LeftTimeline'
import RightTimeline from './RightTimeline'

type ProjectProps = {
  title: string
  url: string
  description?: string
  since?: string
  active?: boolean
  icon: string
  stats?: string
}

type CombinedTimeline = {
  year: string
  allProjects: ProjectProps[]
  careers: ProjectProps[]
}

const Timeline: React.FC = () => {
  const sampleDescription = 'Lorem Ipsum is simply dummy text of the printing. Something something holy'

  const years = ['2023', '2022', '2021']
  const combinedTimeline: CombinedTimeline[] = []

  years.forEach((year) => {
    const careerOfThisYear = CareerItems.find((item) => item.year === year)
    const projectsOfThisYear = AllProjectItems.find((item) => item.year === year)

    combinedTimeline.push({
      year: year,
      careers: careerOfThisYear ? careerOfThisYear.projects : [],
      allProjects: projectsOfThisYear ? projectsOfThisYear.projects : [],
    })
  })

  let firstItemOfYear = true

  return (
    <div className="container mx-auto mb-8 max-w-4xl px-4">
      <div className="flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
        {combinedTimeline.map((item, index) => (
          <React.Fragment key={index}>
            {/* Left timeline for project of this year */}
            {item.allProjects.map((project, pIndex) => {
              const yearForItem = firstItemOfYear ? item.year : ''
              firstItemOfYear = false
              return (
                <LeftTimeline
                  key={pIndex}
                  year={yearForItem}
                  url={project.url}
                  since={project.since}
                  title={project.title}
                  description={project.description || sampleDescription}
                />
              )
            })}

            {/* Resetting firstItemOfYear for careers */}
            {(firstItemOfYear = true)}

            {/* Right timeline for career of this year */}
            {item.careers.map((career, cIndex) => {
              const yearForItem = firstItemOfYear ? item.year : ''
              firstItemOfYear = false
              return (
                <RightTimeline
                  key={cIndex}
                  year={yearForItem}
                  url={career.url}
                  since={career.since}
                  title={career.title}
                  description={career.description || sampleDescription}
                />
              )
            })}

            {/* Resetting firstItemOfYear for careers */}
            {(firstItemOfYear = true)}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Timeline
