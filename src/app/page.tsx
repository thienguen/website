import Image from 'next/image'

import { cn } from '@/lib/util/util'

export default function Home() {
  return (
    <>
      <div
        /* This use to control background theme, I really don't know how useThemes works so I gave up modify it */
        className="mx-auto max-w-[1235px] flex-1"
      >
        <div className="flex w-full flex-col items-center justify-center px-5 pt-20 sm:pt-40 md:flex-row">
          <div>
            {/* <-- This affect everythign, lmao */}
            <div>
              <Image
                src="/images/monika.jpg"
                alt="Definitely not me!!"
                width={200}
                height={200}
                className="mx-auto rounded-2xl"
              ></Image>
            </div>
            {/* Title */}
            <h2 className="">
              <span>Thien Van Ky Nguyen</span>
            </h2>
            {/* Description */}
            <p>
              A person who love story rich RPG-Maker games, and want to make one. Often time coding and now we are here.
              Trust me I am a programmer. C/C++, Java, Kotlin
            </p>

            {/* TODO: kbar will be here */}
          </div>
        </div>
      </div>
    </>
  )
}
