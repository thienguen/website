'use client'

import React, { useEffect, useState } from 'react'
import { RPGMakerItems } from '@/lib/util/dummy'
import { Tooltip } from '../common/Tooltip'

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
      <div className="relative z-0 mx-auto flex h-auto max-w-[61rem] flex-row items-center justify-center rounded-md border-gray-300 px-5 pb-6 pt-2 opacity-90 shadow-sm shadow-slate-800 transition-transform dark:border-zinc-900 dark:shadow-gray-400 sm:pb-8 md:h-full">
        {/*  */}
        <div className="mr-3 mt-10 flex w-16 select-none flex-col items-center justify-center px-3 sm:mt-5">
          <h3 className="flex flex-col whitespace-nowrap font-pixeloidMono text-xl text-black dark:text-white">
            {['R', 'P', 'G'].map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h3>
          <Tooltip text="Must be nice">
            <div className="text-center font-pixeloidMono text-lg font-medium">Maker Games</div>
          </Tooltip>
        </div>
        {/*  */}
        <div className="carousel ml-1 mt-10 w-fit sm:mt-3">
          <div className="mt-2 flex gap-5 overflow-x-scroll sm:max-w-4xl">
            {randomizedItems.map((game: Game, index) => (
              <div key={index} className="w-fit">
                <div className="group relative h-full w-[170px]">
                  <div
                    style={{ width: 170, height: 170 }}
                    className="carousal-item absolute z-10 flex cursor-cell flex-col rounded-lg bg-transparent duration-200 group-hover:bg-white/70 dark:group-hover:bg-black/60"
                  >
                    <div className="absolute bottom-3 px-2 text-transparent transition-all duration-200 group-hover:text-black dark:group-hover:text-white">
                      <h5 className="font-pixeloidMono text-lg leading-5">{game.title}</h5>
                      {/* <p className="w-48 font-pixeloidMono text-base leading-5">{game.authors}</p> */}
                      <p className="w-[10rem] font-pixeloidMono text-sm">{game.genres}</p>
                    </div>
                  </div>
                  <div className="h-[170px] w-[170px] rounded-lg border-gray-300 shadow-sm shadow-slate-800 transition-transform dark:border-zinc-900 dark:shadow-gray-400 sm:h-[170px] sm:w-[170px]">
                    <img
                      alt={game.title}
                      src={game.image}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      className="rounded-lg"
                    />
                  </div>
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
