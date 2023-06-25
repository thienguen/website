import Motion from '@/components/ui/motion'
import Signature from '@/components/ui/signature'

export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <div className="mx-auto mt-20 flex w-full max-w-screen-lg flex-col items-center justify-center px-5 sm:mt-40 sm:flex-row">
          {/* Left */}
          <div className="mr-0 flex flex-col justify-center sm:mr-10">
            {/* Title */}
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 sm:text-5xl md:text-5xl lg:text-6xl">
              {`Dreams`}
            </h2>
            {/* Description */}
            <div className="mb-2 max-w-md space-y-3 py-5 text-gray-500">
              <p>A person who loves story-rich RPG-Maker games.</p>
              <p>Often time coding. Sometimes drawing.</p>
              <p>And always learning. 💻</p>
            </div>
            <Signature />
          </div>
          {/* Center Bottom */}
          {/* TODO: kbar will be here */}

          {/* Right */}
          <div className="">
            <Motion />
          </div>
        </div>
      </main>
    </>
  )
}
