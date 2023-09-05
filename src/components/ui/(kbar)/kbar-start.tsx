'use client'

import { useKBar } from 'kbar'
import useSound from 'use-sound'
import { isMac } from '@/lib/util/util'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const KBarStart: React.FC = () => {
  const { query } = useKBar()
  const isBreakingPoint = useMediaQuery('400px', true)
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 0.5 })

  return (
    <>
      <p
        className="relative mx-auto flex max-w-2xl cursor-pointer appearance-none flex-row items-center justify-center rounded-lg bg-transparent px-2 py-1 text-center font-dosis text-2xl text-black text-opacity-70 transition-all duration-200 hover:bg-slate-400 hover:text-black dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white"
        onClick={() => {
          ThemeSound()
          query.toggle()
        }}
      >
        Press
        {isMac ? (
          isBreakingPoint ? (
            ' Cmd '
          ) : (
            <img src="/icons/command.png" alt="cmd-button" width={40} height={40} className="mx-2 opacity-70 dark:invert" />
          )
        ) : isBreakingPoint ? (
          ' Ctrl '
        ) : (
          <img src="/icons/ctrl.png" alt="ctrl-button" width={40} height={40} className="mx-2 opacity-70 dark:invert" />
        )}
        + K to start 
      </p>
    </>
  )
}

export default KBarStart
