import PageTitle from '@/components/ui/header-title'
import Profile from '@/components/ui/profile'
import Signature from '@/components/ui/signature'
import ProgressBar from '@/components/common/ProgressBar'
import SkillIssues from '@/components/home/skill-issues'

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
      <div className="mb-4 h-full w-full items-center justify-center sm:mt-10 sm:min-h-[500px]">
        {/* Bar */}
        <div className="hidden h-[3px] w-screen animate-fade-left bg-gradient-to-r from-black via-gray-700/50 to-gray-700/0 dark:bg-gradient-to-r dark:from-white dark:via-zinc-300/50 dark:to-zinc-300/0 md:block" />
        {/* ------------------------------------------------------------------------------------------------- */}
        <div className="m-auto flex w-full max-w-screen-lg flex-col items-center justify-center px-5 sm:flex-col">
          <div className="flex flex-col justify-center">
            {/* Hero Title */}
            <div className="mt-2">
              <h2 className="shadow-effect  mb-2 translate-y-[-1rem] animate-fade-in cursor-default  whitespace-nowrap text-center text-2xl font-bold text-slate-800 opacity-0 [--animation-delay:200ms]  dark:text-slate-200 lg:text-5xl">
                {`Thien Nguyen`}
              </h2>
            </div>

            {/* Hero subtitle */}
            <div className="balanced max-w-md translate-y-[-1rem] animate-fade-in space-y-3 py-3 text-center text-base text-gray-500 opacity-0 [--animation-delay:400ms] dark:text-gray-500">
              <p>A person who loves story-rich RPG-Maker games.</p>
              <p>Often time coding. Sometimes drawing.</p>
              <p>✥ And always learning ✥</p>
            </div>

            {/* Hero Signature */}
            <div className="h-8">
              <Signature />
            </div>
          </div>

          <Profile />
        </div>
        {/* ------------------------------------------------------------------------------------------------- */}
        <SkillIssues /> {/* useless */}
        {/* TODO: kbar will be here Ctrk+K */}
        {/* Bar */}
        <div className="hidden h-[3px] w-screen animate-fade-right bg-gradient-to-r from-gray-700/0 via-gray-700/50 to-black dark:bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-white md:block" />
      </div>
    </>
  )
}
