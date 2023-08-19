import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/common/ProgressBar'
import HomeHi from '@/components/home/hi'
// import Profile from '@/components/home/profile'
import Signature from '@/components/home/signature'
import SkillIssues from '@/components/home/skill-issues'

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
  /* Could have put stuff in here put anyway */
  return (
    <>
      <ProgressBar
        steps={['/home', '/projects', '/about', '/guestbook']}
        currentStep={1}
        isFullWidth={false}
        key={'/home'}
      />

      <PageTitle title="If I could put a picture of an anime girl here, I would. &X-a-vier" titleJP="ホームページ。" />

      {/* If we could implement the full usage of landyard api here */}

      {/* Hero Kinda Section */}
      <div className="mb-4 mt-12 h-full w-full items-center justify-center sm:mt-20 sm:min-h-[500px]">
        {/* Bar */}
        <BarLeft />
        {/* ------------------------------------------------------------------------------------------------- */}
        <HomeHi />

        <div className="h-16 pb-3 pt-5">
          <Signature />
        </div>
        <SkillIssues />
        {/* ------------------------------------------------------------------------------------------------- */}

        {/* TODO: kbar will be here Ctrk+K */}

        {/* Bar */}
        <BarRight />
      </div>
    </>
  )
}
