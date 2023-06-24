import { cn } from '@/lib/util/util'

export default function Home() {
  return (
    <>
      <div
        className={cn(
          'min-h-screen antialiased',
          'light:bg-gradient-to-b light:from-white light:to-gray-200',
          'dark:bg-gradient-to-b dark:from-black dark:to-gray-800'
        )}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="h-screen w-full ">
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

                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
