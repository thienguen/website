import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <div className="mx-auto mt-20 flex w-full max-w-screen-lg flex-col items-center justify-center px-5 sm:mt-40 sm:flex-row">
          {/* Left */}
          <div className="mr-0 flex flex-col justify-center sm:mr-10">
            {/* Title */}
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 sm:text-5xl md:text-5xl lg:text-6xl">
              {`Thienguen`}
            </h2>
            {/* Description */}
            <div className="max-w-md space-y-3 py-5 text-gray-500">
              <p>A person who loves story-rich RPG-Maker games.</p>
              <p>Often time coding. Sometimes drawing.</p>
              <p>Always learning.</p>
            </div>
            <p className="font-signature text-2xl">Thien Nguyen</p>
          </div>
          {/* Center Bottom */}
          {/* TODO: kbar will be here */}

          {/* Right */}
          {/* Profile image */}
          <div className="">
            <Image
              src="/images/monika.jpg"
              alt="Definitely not me!!"
              width={150}
              height={150}
              className=" mx-auto w-full rounded-3xl"
            />
          </div>
        </div>
      </main>
    </>
  )
}
