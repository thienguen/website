'use client'

import Image from 'next/image'
import { SiAmazonaws, SiGithub, SiNextdotjs, SiRust } from 'react-icons/si'

type TechnologiesProps = {
  cols  ?: string
  height?: string
}

const Technologies = (props: TechnologiesProps) => {
  return (
    <>
      {/* I can't believe I have to hard code icons */}
      <div
        className={`${props.cols ?? ''} ${
          props.height ?? ''
        } flex w-full flex-col items-center justify-center rounded-lg bg-[#fef8f8] text-slate-900 opacity-90 shadow-sm shadow-slate-700 dark:bg-[#1a202c] dark:text-slate-300 dark:shadow-gray-400`}
      >
        <div         className = "grid h-full w-full grid-cols-7 grid-rows-3 gap-2 p-5">
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/typescript.png" alt = "ts" sizes        = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/javascript.png" alt = "js" sizes        = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/html.png" alt       = "html" sizes      = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/css.png" alt        = "css" sizes       = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/react.png" alt      = "react" sizes     = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/c.png" alt          = "c" sizes         = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/prisma.png" alt     = "prisma" sizes    = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/nodejs.png" alt     = "node" sizes      = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/vscode.png" alt     = "vscode" sizes    = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/ubuntu.png" alt     = "ubuntu" sizes    = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/tailwind.png" alt   = "tailwind" sizes  = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/git.png" alt        = "git" sizes       = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/kotlin.png" alt     = "kotlin" sizes    = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/python.png" alt     = "Python" sizes    = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/bootstrap.png" alt  = "bootstrap" sizes = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/mongodb.png" alt    = "mongodb" sizes   = "40" width = {40} height = {40} />
        <Image       className = "transition-transform duration-300 hover:scale-[1.6]" src              = "/icons/docker.png" alt     = "docker" sizes    = "40" width = {40} height = {40} />
        <SiRust      className = "scale-[0.9] transition-transform duration-300 hover:scale-[1.6]" size = "22" width                  = {22} height       = {22} />
        <SiGithub    className = "scale-[0.9] transition-transform duration-300 hover:scale-[1.5]" size = "21" width                  = {21} height       = {21} />
        <SiAmazonaws className = "scale-[0.9] transition-transform duration-300 hover:scale-[1.6]" size = "21" width                  = {21} height       = {21} />
        <SiNextdotjs className = "scale-[0.9] transition-transform duration-300 hover:scale-[1.5]" size = "21" width                  = {21} height       = {21} />
        </div>
      </div>
    </>
  )
}

export default Technologies
