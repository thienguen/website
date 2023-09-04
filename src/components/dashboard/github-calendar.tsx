'use client'

import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'

const GithubCal = () => {
  const { theme } = useTheme()

  return (
    <>
      <div className="col-span-2 mt-4 font-pixeloidMono">
        <GitHubCalendar username="thienguen" colorScheme={theme === 'dark' ? 'dark' : 'light'} />
      </div>
    </>
  )
}

export default GithubCal
