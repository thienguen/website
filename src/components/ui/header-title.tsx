'use client'

import { useState } from 'react'
import useSound from 'use-sound'
import { Tooltip } from '../common/Tooltip'

type headerTitleProps = {
  title   ?: string
  titleJP ?: string
  hanekawa?: boolean
  subTitle?: string
}

function PageTitle(props: headerTitleProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [ThemeSound, { stop }] = useSound('/sounds/bakemonogatari.mp3', { volume: 0.25 })

  const toggleSound = () => {
    if (!props.hanekawa) return

    if (isPlaying) {
      stop()
      setIsPlaying(false)
    } else {
      ThemeSound()
      setIsPlaying(true)
    }
  }

  return (
    <>
      <div
        className={`my-3 text-center ${props.hanekawa ? 'cursor-pointer' : 'cursor-cell'}`}
        onClick={toggleSound}
      >
        <Tooltip text={props.title ?? ''}>
          <h2 className="text-xl font-semibold">{`${props.titleJP ?? ''}`}</h2>
        </Tooltip>
      </div>
      {props.subTitle && (
        <div className="mb-3 flex flex-row justify-center font-dosis">
          {props.subTitle}
        </div>
      )}
    </>
  )
}

export default PageTitle
