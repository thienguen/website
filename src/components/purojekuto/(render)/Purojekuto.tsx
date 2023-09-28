'use client'

import { useTheme } from 'next-themes'
import { RoughNotation } from 'react-rough-notation'
import { Tooltip } from '@/components/common/Tooltip'
/* Generative Project Cards */
import { FeaturedProjects } from '@/components/purojekuto/(render)/index'
import { Timeline } from '@/components/purojekuto/(timeline)/index'

export const dynamic = 'force-dynamic'

/**
 * What we shown in the page, due to 'use client'
 * now I'm confused af the server component def, as well as
 * why nextjs is so slow...or I'm imagining things
 */
function Purojekuto() {
  const { theme } = useTheme()

  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col">
        <div className="">{FeaturedProjects()}</div>
      </div>
      {/* <div className="mx-auto flex max-w-2xl flex-col">{CareerProjectsAlternating()}</div> */}
      <div className="mx-auto mt-2 max-w-4xl px-4">
        {/* Header Section */}

        <div className="group flex flex-row items-center justify-between  lg:flex-row">
          {/* Leftmost Career kbd */}
          <div className="flex h-8 border-l-2 border-slate-400 pl-2 dark:border-slate-700">
            <RoughNotation
              type="underline"
              color={`${theme !== 'light' ? '#b620e0' : '#D87787'}`}
              strokeWidth={2}
              order={1}
              show={true}
              animationDelay={1000}
            >
              <p className="translate-y-[-1rem] animate-fade-in font-dosis text-xl font-normal opacity-0 [--animation-delay:1000ms] dark:font-light">
                Project
              </p>{' '}
              {/* Something Somethinbg */}
            </RoughNotation>
          </div>

          <Tooltip text="Timeline">
            <div className="pr-1 text-base font-semibold">タイムライン</div>
          </Tooltip>

          {/* Rightmost Project kbd */}
          <div className="flex h-8 border-r-2 border-slate-400 pr-2  dark:border-slate-700">
            <RoughNotation
              type="underline"
              color={`${theme !== 'light' ? '#b620e0' : '#D87787'}`}
              strokeWidth={2}
              order={1}
              show={true}
              animationDelay={1000}
            >
              <p className="translate-y-[-1rem] animate-fade-in font-dosis text-xl font-normal opacity-0 [--animation-delay:1000ms] dark:font-light">
                Career
              </p>{' '}
              {/* Something Somethinbg */}
            </RoughNotation>
          </div>
        </div>
      </div>
      {/* ----------------- */}
      <Timeline />
      {/* ----------------- */}
    </>
  )
}

export default Purojekuto
