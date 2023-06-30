import Profile from '@/components/ui/profile'
import Signature from '@/components/ui/signature'
import SkillIssues from '@/components/home/skill-issues'

export default function Home() {
  /* Could have put stuff in here put anyway */
  return (
    <>
      {/* Hero Kinda Section */}
      <div className="3xl:mt-72 4xl:mt-72 5xl:mt-72 mb-8 h-full w-full sm:mt-32 sm:min-h-[500px]">
        {/* Bar */}
        <div className="hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
        {/* ------------------------------------------------------------------------------------------------- */}
        <div className="m-auto flex w-full max-w-screen-lg flex-col items-center justify-center px-5 sm:flex-row">
          {/* Left side*/}
          <div className="flex flex-col justify-center sm:mr-10">
            <h2 className="text-edge-outline animate-title cursor-default whitespace-nowrap text-center font-display text-4xl font-bold text-slate-800  dark:text-slate-200   lg:text-6xl">
              {`Thien Nguyen`}
            </h2>
            <div className="mb-2 max-w-md animate-fade-in-2 space-y-3 py-5 text-center text-gray-500 dark:text-gray-500">
              <p>A person who loves story-rich RPG-Maker games.</p>
              <p>Often time coding. Sometimes drawing.</p>
              <p>✥ And always learning ✥</p>
            </div>
            <Signature />
          </div>
          {/* Right side*/}
          <Profile />
        </div>
        {/* ------------------------------------------------------------------------------------------------- */}
        <SkillIssues /> {/* useless */}
        {/* Bar */}
        <div className="hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      </div>

      {/* TODO: kbar will be here Ctrk+K */}
    </>
  )
}
