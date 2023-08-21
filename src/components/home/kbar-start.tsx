'use client'

import { useKBar } from 'kbar'
import { BsCommand } from 'react-icons/bs'

const KBarStart: React.FC = () => {
  const { query } = useKBar()

  return (
    <>
      <button
        className=" relative mx-auto mb-4 flex max-w-lg cursor-cell appearance-none flex-row items-center justify-center rounded-lg bg-transparent px-3 py-1 text-center font-pixeloidMono text-xl text-black text-opacity-70 transition-all duration-200 hover:bg-slate-400 hover:text-black dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white"
        onClick={query.toggle}
      >
        ← Press Ctrl/Cmd + K to start →
      </button>
      <BsCommand className="mx-auto justify-center text-5xl text-slate-700 opacity-70 dark:text-gray-700" />
    </>
  )
}

export default KBarStart
