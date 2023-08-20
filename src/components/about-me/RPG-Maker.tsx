'use client'

import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

interface Song {
  id: number
  name: string
  artists: { name: string }[]
  external_urls: { spotify: string }
}

const mockData = {
  items: Array(10).fill({
    id: Date.now(),
    name: "Monika's Song",
    artists: [{ name: 'Monika' }],
    external_urls: { spotify: '' },
  }),
}

const RPGMaker: React.FC = () => {
  return (
    <>
      <div className="mx-auto flex h-full  w-fit max-w-5xl items-center justify-center overflow-x-auto rounded-md border-b-0 border-gray-300 p-8 opacity-90 shadow-sm  shadow-slate-800 transition-transform dark:border-zinc-900  dark:shadow-gray-400">
        <div className="w-fit">
          <div className=" mt-2 flex max-w-4xl gap-5">
            {mockData.items.map((song: Song, index) => (
              <div key={index} className="w-fit">
                <div className="group relative h-full w-[170px]">
                  <div
                    style={{ width: 170, height: 170 }}
                    className="absolute z-10 flex cursor-pointer flex-col rounded-lg bg-transparent duration-200 group-hover:bg-white/70 dark:group-hover:bg-black/60"
                  >
                    <div className="absolute bottom-3 px-2 text-transparent transition-all duration-200 group-hover:text-black dark:group-hover:text-white">
                      <h4 className="line-clamp-2 font-metropolis text-lg leading-5">{song.name}</h4>
                      <p className="w-48 overflow-hidden text-ellipsis whitespace-nowrap font-metropolis text-base leading-5">
                        {song.artists.map((artist) => artist.name).join(', ')}
                      </p>
                    </div>
                  </div>
                  <div className="h-[170px] w-[170px]">
                    <img
                      alt={song.name}
                      src={'images/anhbana.jpg'}
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-12 w-full cursor-move items-center justify-center text-center">
        <div className="flex items-center justify-between">
          <span className="mx-2">
            <FiArrowLeft size={30} />
          </span>
          <span className="mx-2">
            <FiArrowRight size={30} />
          </span>
        </div>
      </div>
      <style jsx>{`
        ::-webkit-scrollbar {
          height: 12px; // Adjust to your preference
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 3px;
        }
      `}</style>
    </>
  )
}

export default RPGMaker
