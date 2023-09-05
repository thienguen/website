'use client'

import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'

// type Level = 0 | 1 | 2 | 3 | 4;
// interface Activity {
// 	date: string;
// 	count: number;
// 	level: Level;
// }

const GithubCal = () => {
  const { theme } = useTheme()

  // const selectLastHalfYear = (contributions: Activity[]): Activity[] => {
  //   const currentYear = new Date().getFullYear()
  //   const currentMonth = new Date().getMonth()
  //   const shownMonths = 6

  //   return contributions.filter((activity) => {
  //     const date = new Date(activity.date)
  //     const monthOfDay = date.getMonth()

  //     return date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth
  //   })
  // }

  return (
    <>
      <div className="col-span-2 mt-4 translate-y-[-1rem] animate-fade-in font-dosis opacity-0 [--animation-delay:1000ms]">
        <GitHubCalendar
          username="thienguen"
          colorScheme={theme === 'dark' ? 'dark' : 'light'}
          showWeekdayLabels
          hideColorLegend
          // transformData={selectLastHalfYear}
        />
      </div>
    </>
  )
}

export default GithubCal
