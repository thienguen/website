import Profile from '@/components/ui/profile'
import Signature from '@/components/ui/signature'
import SkillIssues from '@/components/home/skill-issues'

export default function Home() {
  /* Could have put stuff in here put anyway */
  return (
    <>
      {/* Hero Kinda Section */}
      <div className="mb-8 h-full w-full items-center justify-center sm:mt-32 sm:min-h-[500px]">
        {/* Bar */}
        <div className="hidden h-[2px] w-screen animate-fade-left bg-gradient-to-r from-blue-700/0 via-blue-700/50 to-blue-700/0 dark:bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0 md:block" />
        {/* ------------------------------------------------------------------------------------------------- */}
        <div className="m-auto flex w-full max-w-screen-lg flex-col items-center justify-center px-5 sm:flex-row">
          {/* Left side*/}
          <div className="flex flex-col justify-center sm:mr-10">
            <div className=''>
              <h2 className="shadow-effect mb-2  cursor-default whitespace-nowrap text-center font-display text-3xl font-bold text-slate-800  dark:text-slate-200 lg:text-5xl">
                {`Thien Nguyen`}
              </h2>
            </div>

            <div className="max-w-md space-y-3 py-3 text-center text-gray-500 dark:text-gray-500">
              <p>A person who loves story-rich RPG-Maker games.</p>
              <p>Often time coding. Sometimes drawing.</p>
              <p>✥ And always learning ✥</p>
            </div>

            <div className="h-8">
              <Signature />
            </div>
          </div>
          {/* Right side*/}
          <Profile />
        </div>
        {/* ------------------------------------------------------------------------------------------------- */}
        <SkillIssues /> {/* useless */}
        {/* TODO: kbar will be here Ctrk+K */}
        {/* Bar */}
        <div className=" hidden h-[2px] w-screen animate-fade-left bg-gradient-to-r from-blue-700/0 via-blue-700/50 to-blue-700/0 dark:bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0 md:block" />
      </div>
    </>
  )
}
