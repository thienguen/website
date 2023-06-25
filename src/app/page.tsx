import Image from 'next/image'

import { cn } from '@/lib/util/util'

export default function Home() {
  return (
    <>
      <div
        /* This use to control background theme, I really don't know how useThemes works so I gave up modify it */
        className={cn('flex flex-col items-center justify-between p-24 antialiased')}
      >
        <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center px-4">
          <div className="">
            {' '}
            {/* <-- This affect everythign, lmao */}
            <div>
              <div>
                {/* Title */}
                <h2>
                  <span>Thien Van Ky Nguyen</span>
                </h2>
                {/* Description */}
                <p>
                  A person who love story rich RPG-Maker games, and want to make one. Often time coding and now we are
                  here. Trust me I am a programmer. C/C++, Java, Kotlin
                </p>

                {/* TODO: kbar will be here */}
                <button></button>
              </div>

              {/* TODO: Profile image */}
              <div>
                <Image
                  src="/images/monika.jpg"
                  alt="Definitely not me!!"
                  width={200}
                  height={200}
                  className="mx-auto rounded-2xl"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
