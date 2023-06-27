import Motion from '@/components/ui/motion'
import Signature from '@/components/ui/signature'

export default function Home() {
  /* Could have put stuff in here put anyway */
  return (
    <>
      <div className="h-full w-full">
        <div className="m-auto flex w-full max-w-screen-lg flex-col items-center justify-center px-5 sm:mt-36 sm:flex-row">
          {/* Left */}
          <div className="mr-0 flex min-h-[500px] flex-col justify-center sm:mr-10">
            <h2 className="shadow-effect text-center text-4xl font-bold text-slate-800 dark:text-slate-200 sm:text-4xl md:text-5xl lg:text-6xl">
              {`Dreams`}
            </h2>
            {/* Description */}
            <div className="mb-2 max-w-md space-y-3 py-5 text-center text-gray-500 dark:text-gray-500">
              <p>A person who loves story-rich RPG-Maker games.</p>
              <p>Often time coding. Sometimes drawing.</p>
              <p>✥ And always learning ✥</p>
            </div>
            {/* Signature */}
            <Signature />
          </div>

          {/* Center Bottom */}

          {/* TODO: kbar will be here Ctrk+K */}

          {/* Right */}
          <div className="mt-5 space-x-4 sm:mb-10">
            <Motion />
          </div>
        </div>
      </div>
    </>
  )
}
