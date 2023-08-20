/* THIS IS A MOCK UP, BUT........EEHHHHH */

'use client'

import React, { useState } from 'react'
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti'

interface CardProps {
  title   : string
  content : string
  image  ?: string
}

const CARDS          = 10
const MAX_VISIBILITY = 2

declare module 'react' {
  interface CSSProperties {
    '--active'    ?: number
    '--offset'    ?: number
    '--direction' ?: number
    '--abs-offset'?: number
  }
}

const Card = ({ title, content, image }: CardProps) => {
  return (
    <div className="card rounded-lg bg-slate-300 p-8">
      <h2 className="mb-2 text-center text-2xl font-bold text-gray-500">{title}</h2>
      <p className="text-gray-500">{content}</p>
      {image && <img src={image} alt="Card content" />}
    </div>
  )
}

const RPGMaker: React.FC = () => {
  const [active, setActive] = useState(2)

  return (
    <div className="flex  items-center justify-center">
      <div className="relative h-48 w-48">
        {/* ==================================================================================== */}
        {/* Left */}
        {active > 0 && (
          <button
            className="absolute left-[-2rem] top-1/2 z-10 -translate-y-1/2 text-5xl text-white"
            onClick={() => setActive((prev) => prev - 1)}
          >
            <TiChevronLeftOutline />
          </button>
        )}

        {/* Cards */}
        {[...new Array(CARDS)].map((_, i) => (
          <div
            key={i}
            className={`card-container absolute h-full w-full transition-transform duration-300 ease-out ${
              Math.abs(active - i) > MAX_VISIBILITY ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
              '--active'    : i === active ? 1 : 0,
              '--offset'    : (active - i) / 3,
              '--direction' : Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'zIndex'      : CARDS - Math.abs(active - i),
            }}
          >
            <Card
              title={`Card ${i + 1}`}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
            />
          </div>
        ))}

        {/* Right */}
        {active < CARDS - 1 && (
          <button
            className="absolute right-[-6rem] top-1/2 z-10 -translate-y-1/2 text-5xl text-white"
            onClick={() => setActive((prev) => prev + 1)}
          >
            <TiChevronRightOutline />
          </button>
        )}
        {/* ==================================================================================== */}
      </div>
    </div>
  )
}

export default RPGMaker
