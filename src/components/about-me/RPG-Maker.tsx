'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { RPGMakerItems } from '@/lib/util/dummy'
import { cn } from '@/lib/util/util'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Tooltip } from '@/components/common/Tooltip'

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

  const carouselRef = useRef<HTMLDivElement | null>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startScroll, setStartScroll] = useState(0)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.clientX)
    if (carouselRef.current) {
      setStartScroll(carouselRef.current.scrollLeft)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return

    const x = e.clientX
    const walk = x - startX
    carouselRef.current.scrollLeft = startScroll - walk
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const isMobileView = useMediaQuery('400px', true)
  const isWideView = useMediaQuery('75rem')

  return (
    <>
      <div
        className={cn(
          'relative z-0 mx-auto flex items-center justify-center rounded-md border-gray-300 px-5 pt-2 opacity-90 shadow-sm shadow-slate-800 transition-transform dark:border-zinc-900 dark:shadow-gray-400 sm:max-w-[73.5rem]',
          isMobileView ? 'mb-10 w-full' : isWideView ? 'flex-col' : 'flex-col sm:max-w-[73.5rem] sm:pb-4 md:h-full'
        )}
      >
        <div
          className="carousel mx-1 w-fit flex-wrap sm:mt-3 "
          ref          = {carouselRef}
          onMouseDown  = {handleMouseDown}
          onMouseLeave = {handleMouseLeave}
          onMouseUp    = {handleMouseUp}
          onMouseMove  = {handleMouseMove}
        >
          <div className="mt-2 flex overflow-x-scroll sm:max-w-[69rem]">
            {randomizedItems.map((game: Game, index) => (
              <div key={index} className="mx-3 w-fit">
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

        {!isMobileView && (
          <div className="mt-3 flex items-center justify-center text-center">
            <button className="mx-5" /* onClick={scrollLeft} */>
              <AiOutlineLeftCircle size={25} />
            </button>
            <Tooltip text="I have a glorified archive of these games, now I mentioned it, that could also be a project">
              <span className="font-pixeloidMono text-lg font-medium">RPG Maker Games</span>
            </Tooltip>
            <button className="mx-5" /* onClick={scrollRight} */>
              <AiOutlineRightCircle size={25} />
            </button>
          </div>
        )}
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
