'use client'

import React, { useEffect, useRef, useState } from 'react'
import { RPGMakerItems } from '@/lib/util/dummy'
import { cn } from '@/lib/util/util'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface Game {
  title: string
  authors: string
  genres: string
  image: string
}

const RPGMaker: React.FC = () => {
  const [randomizedItems, setRandomizedItems] = useState<Game[]>([])

  useEffect(() => {
    // Remove the item that always needs to be last
    const remainingItems = RPGMakerItems.filter((item) => item.title !== "There's more...")

    // Randomize the order of the items
    remainingItems.sort(() => Math.random() - 0.5)

    // Append the fixed item at the end
    remainingItems.push({
      title: "There's more...",
      authors: 'TBD',
      genres: 'A lot more',
      image: '/images/anhbana.jpg',
    })

    setRandomizedItems(remainingItems)
  }, [])

  return (
    <>
      <div
        className={cn(
          'col-span-1 h-full  overflow-x-auto rounded-sm md:col-span-2 lg:col-span-2',
          'bg-overlay mt-4 flex flex-col justify-between gap-2 px-4 pt-4 text-slate-900 opacity-90 shadow-sm shadow-slate-700 dark:text-slate-300 dark:shadow-gray-400'
        )}
      >
        <div className="w-fit">
          <div className="">
            <h1 className="mx-auto w-auto font-pixeloidMono text-lg">Personal favorites </h1>
          </div>
          <div className="mt-2 flex w-fit gap-4">
            {randomizedItems.map((game: Game, index) => (
              <div className="group relative h-full w-[130px]" key={index}>
                <div
                  style={{ width: 130, height: 130 }}
                  className="carousal-item absolute z-10 flex cursor-cell flex-col rounded-lg bg-transparent duration-200 group-hover:bg-white/70 dark:group-hover:bg-black/60"
                >
                  <div className="absolute bottom-3 px-2 text-transparent transition-all duration-200 group-hover:text-black dark:group-hover:text-white">
                    <h5 className="font-pixeloidMono text-sm leading-5">{game.title}</h5>
                    <p className="w-[7.5rem] font-pixeloidMono text-xs">{game.genres}</p>
                  </div>
                </div>
                <div className="h-[130px] w-[130px] rounded-lg border-gray-300 shadow-sm shadow-slate-800 transition-transform dark:border-zinc-900 dark:shadow-gray-400 sm:h-[130px] sm:w-[130px]">
                  <img
                    alt={game.title}
                    src={game.image}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* smoll down the scroll bar */}
      <style jsx>{`
        ::-webkit-scrollbar {
          height: 10px;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 3px;
          background-color: #d2e3ee;
        }
      `}</style>
    </>
  )
}

export default RPGMaker
