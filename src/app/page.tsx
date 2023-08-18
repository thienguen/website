import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/common/ProgressBar'
// import Profile from '@/components/home/profile'
import Signature from '@/components/home/signature'
import SkillIssues from '@/components/home/skill-issues'
import HomeHi from '@/components/home/hi'

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
        <div className="m-auto flex w-full max-w-screen-xl flex-col items-center justify-center sm:flex-row sm:justify-center">
          {/* Left section */}

          {/* Right section */}
          <div className="flex flex-col justify-center px-10 pb-3">
            {' '}
            {/* Reduced space-y-3 to space-y-2 */}
            <p className="mb-2 translate-y-[-1rem] animate-fade-in text-center font-metropolis text-xl font-light text-black opacity-70 [--animation-delay:200ms] dark:text-white">
              {`Hello, I'm`}
            </p>
            {/* Hero Title */}
            <h2 className="shadow-effect mb-2 translate-y-[-1rem] animate-fade-in cursor-default whitespace-nowrap text-center font-metropolis text-3xl font-bold text-slate-800 opacity-0 [--animation-delay:200ms] dark:text-slate-200 lg:text-6xl">
              {`Thien Nguyen`}
            </h2>
            {/* Hero subtitle */}
            <div className="balanced max-w-lg translate-y-[-1rem] animate-fade-in space-y-2 py-2 text-center font-metropolis text-lg text-gray-600 opacity-0 [--animation-delay:400ms] dark:text-gray-400">
              <p>A person who loves story-rich RPG-Maker games.</p>
              <p>Often time coding. Sometimes drawing.</p>
              <p>✥ And always learning ✥</p>
            </div>
            <div className="text-center">K-bar, a bar that you can play with .</div>
          </div>
        </div>

        <div className="h-16 pb-3 pt-5">
          <Signature />
        </div>
        <SkillIssues />
        {/* ------------------------------------------------------------------------------------------------- */}

        <HomeHi />

        {/* TODO: kbar will be here Ctrk+K */}

        {/* Bar */}
        <BarRight />
      </div>
    </>
  )
}
