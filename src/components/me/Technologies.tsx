'use client'

import Image from 'next/image'
import { SiAmazonaws, SiGithub, SiGoland, SiNextdotjs, SiRust } from 'react-icons/si'

type TechnologiesProps = {
  cols?: string
  height?: string
}

export const Technologies = (props: TechnologiesProps) => {
  return (
    <>
      <div
        className={`${props.cols ?? ''} ${
          props.height ?? ''
        } flex w-full flex-col items-center justify-center rounded-lg bg-[#fef8f8] text-slate-900 opacity-90 shadow-sm shadow-slate-700 dark:bg-[#1a202c] dark:text-slate-300 dark:shadow-gray-400`}
      >
        <div className="xxsm:grid-cols-8 xsm:grid-cols-9 grid h-full w-full grid-cols-7 grid-rows-4 gap-4 p-5 sm:grid-cols-6 sm:grid-rows-5 md:grid-cols-7 md:grid-rows-4">
          <Image src="/icons/typescript.png" alt="ts" sizes="40" width={40} height={40} />
          <Image src="/icons/javascript.png" alt="js" sizes="40" width={40} height={40} />
          <Image src="/icons/html.png" alt="html" sizes="40" width={40} height={40} />
          <Image src="/icons/css.png" alt="css" sizes="40" width={40} height={40} />
          <Image src="/icons/react.png" alt="react" sizes="40" width={40} height={40} />
          <Image src="/icons/c.png" alt="c" sizes="40" width={40} height={40} />
          <Image src="/icons/prisma.png" alt="prisma" sizes="40" width={40} height={40} />
          <Image src="/icons/nodejs.png" alt="node" sizes="40" width={40} height={40} />
          <Image src="/icons/vscode.png" alt="vscode" sizes="40" width={40} height={40} />
          <Image src="/icons/ubuntu.png" alt="ubuntu" sizes="40" width={40} height={40} />
          <Image src="/icons/tailwind.png" alt="tailwind" sizes="40" width={40} height={40} />
          <Image src="/icons/git.png" alt="git" sizes="40" width={40} height={40} />
          <Image src="/icons/golang.png" alt="golang" sizes="40" width={40} height={40} />
          <Image src="/icons/kotlin.png" alt="kotlin" sizes="40" width={40} height={40} />
          <Image src="/icons/python.png" alt="Python" sizes="40" width={40} height={40} />
          <Image src="/icons/linux.png" alt="linux" sizes="40" width={40} height={40} />
          <Image src="/icons/debian.png" alt="debian" sizes="40" width={40} height={40} />
          <Image src="/icons/bootstrap.png" alt="bootstrap" sizes="40" width={40} height={40} />
          <Image src="/icons/redis.png" alt="redis" sizes="40" width={40} height={40} />
          <Image src="/icons/mongodb.png" alt="mongodb" sizes="40" width={40} height={40} />
          <Image src="/icons/docker.png" alt="docker" sizes="40" width={40} height={40} />

          <Image src="/icons/flask.png" alt="flask" sizes="40" width={40} height={40} />
          <Image src="/icons/discord.png" alt="discord" sizes="40" width={40} height={40} />

          <SiRust size="22" width={22} height={22} />
          <SiAmazonaws size="22" width={22} height={22} />
          <SiNextdotjs size="22" width={22} height={22} />
          <SiGithub size="22" width={22} height={22} />
          <SiGoland size="22" width={22} height={22} />
        </div>
      </div>
    </>
  )
}
