import { useTheme } from 'next-themes'
import { useMediaHeight } from '@/hooks/useMediaHeight'

import { cn } from '@/lib/util/util'
import { KBarStart } from '@/components/ui/(kbar)/index'

import Profile from '@/components/home/profile'
// import { TbCodeDots } from 'react-icons/tb'

const HomeHero: React.FC = () => {
  const { theme, setTheme } = useTheme()

  if (theme === undefined) {
    console.log('theme is undefined, default to dark again')
    setTheme('dark')
  }

  const isTallScreen = useMediaHeight('1000px')
  const isEvenTallerScreen = useMediaHeight('1100px')

  return (
    <>
      <div
        className={cn(
          isEvenTallerScreen ? 'py-44' : isTallScreen ? 'py-20' : 'py-8',
          'flex h-full w-full flex-col items-center justify-center pb-12'
        )}
      >
        <div className="flex flex-col items-center justify-center px-10">
          {' '}
          <Profile />
          {/* Reduced space-y-3 to space-y-2 */}
          <p className="text-center font-pixeloidMono text-2xl font-light text-black opacity-75 dark:text-white">
            {`Chào, I'm`}
          </p>
          {/* Hero Title */}
          <h2 className="shadow-effect cursor-default whitespace-nowrap pb-1 text-center font-metropolis text-4xl font-bold text-slate-800 dark:text-slate-200 lg:text-6xl">
            {`Thien Nguyen`}
          </h2>
          <KBarStart />
        </div>

        {/* <div>
            <TbCodeDots className="h-10 animate-pulse cursor-pointer text-3xl text-white invert dark:text-black" />
          </div> */}

        {/* For chiito w luv */}
        <div className="equalizer opacity-40 invert dark:opacity-100 dark:invert-0">
          <span className="left"></span>
          <span className="middle"></span>
          <span className="right"></span>
        </div>
      </div>
    </>
  )
}

export default HomeHero
