'use client'

import { useState } from 'react'
import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/ui/progress-bar'
import HomeHero from '@/components/home/home-hero'
import NotificationModal from '@/components/home/notif'

// import Profile from '@/components/home/profile'
// import SkillIssues from '@/components/home/skill-issues'

const BarLeft = () => {
  return (
    <div className="my-6 hidden h-[3px] w-screen animate-fade-left bg-gradient-to-r from-black via-gray-700/50 to-gray-700/0 dark:bg-gradient-to-r dark:from-white dark:via-zinc-300/50 dark:to-zinc-300/0 md:block" />
  )
}

const BarRight = () => {
  return (
    <div className="my-6 hidden h-[3px] w-screen animate-fade-right bg-gradient-to-r from-gray-700/0 via-gray-700/50 to-black dark:bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-white md:block" />
  )
}

/**
 * Landing page, not the prettiest, and
 * I wish I have skills of figma, webflow
 */
export default function Home() {
  const [showModal, setShowModal] = useState(true)
  const handleModalClose = () => {
    setShowModal(false)
  }

  /* Could have put stuff in here put anyway */
  return (
    <>
      <ProgressBar
        // steps={['home', '/about', '/dashboard', '/projects', '/guestbook']}
        steps={['/dashboard', '/projects', '/guestbook', '/about']}
        currentStep={0}
        isFullWidth={false}
        key={'/home'}
      />

      {/* Notification Modal */}
      {showModal && <NotificationModal onClose={handleModalClose} />}

      <PageTitle
        title="If I could put a picture of an anime girl here, I would. &X-a-vier"
        titleJP="ホームページ。"
        hanekawa={true}
      />

      <div className="mt-10 md:mt-16"></div>
      {/* If we could implement the full usage of landyard api here <-- we did 8/22/2023 */}

      {/* Hero? Section */}
      {/* Bar */}
      {/* ------------------------------------------------------------------------------------------------- */}
      <BarLeft />
      <HomeHero />
      <BarRight />
      {/* ------------------------------------------------------------------------------------------------- */}
      {/* Bar */}
    </>
  )
}
