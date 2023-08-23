'use client'

import { useState } from 'react'
import useSound from 'use-sound'
import { Tooltip } from '../common/Tooltip'

type headerTitleProps = {
  title   ?: string
  titleJP ?: string
  hanekawa?: boolean
}

function PageTitle(props: headerTitleProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [ThemeSound, { stop }]    = useSound('/sounds/bakemonogatari.mp3', { volume: 0.25 })

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
    <div className={`my-2 text-center ${props.hanekawa ? 'cursor-pointer' : 'cursor-cell'}`} onClick={toggleSound}>
      <Tooltip text={props.title ?? ''}>
        <h2 className="text-xl font-semibold">{`${props.titleJP ?? ''}`}</h2>
      </Tooltip>
    </div>
  )
}

export default PageTitle
