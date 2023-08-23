'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { AllProjectItems, CareerItems } from '@/lib/util/dummy'
import LeftTimeline from '@/components/purojekuto/(timeline)/LeftTimeline'
import RightTimeline from '@/components/purojekuto/(timeline)/RightTimeline'

type TimelineProps = {
  title       : string
  url         : string
  description?: string
  since      ?: string
  active     ?: boolean
  icon        : string
  stats      ?: string
  tech       ?: string[]
}

type CombinedTimeline = {
  year       : string
  allProjects: TimelineProps[]
  careers    : TimelineProps[]
}

const Timeline: React.FC = () => {
  const sampleDescription = 'Lorem Ipsum is simply dummy text of the printing. Something something holy'

  let firstItemOfYear = true
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

  const { theme }           = useTheme()
  const darkPrimaryColor    = '#6ACDFF'
  const darkSecondaryColor  = '#57BFFF'
  const lightPrimaryColor   = '#D87787'
  const lightSecondaryColor = '#861657'

  const [primaryColor, setPrimaryColor]     = useState(darkPrimaryColor)
  const [secondaryColor, setSecondaryColor] = useState(darkSecondaryColor)

  useEffect(() => {
    if (theme === 'dark') {
      setPrimaryColor(darkPrimaryColor)
      setSecondaryColor(darkSecondaryColor)
    } else {
      setPrimaryColor(lightPrimaryColor)
      setSecondaryColor(lightSecondaryColor)
    }
  }, [theme])

  return (
    <div className="container mx-auto  mb-5 mt-3 px-[0.5rem] sm:max-w-4xl">
      <div className="flex flex-col p-2 text-blue-50 sm:grid-cols-9 md:grid">
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
                  tech={project.tech}
                  title={project.title}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
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
                  tech={career.tech}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
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
