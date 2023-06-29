'use client'

import {
  SiAmazonaws,
  SiBootstrap,
  SiCloudflare,
  SiCss3,
  SiDebian,
  SiDiscord,
  SiDocker,
  SiFlask,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVisualstudiocode,
} from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'

export const Technologies = () => {
  return (
    <>
      <div className="col-span-3 flex h-full min-h-[13rem] w-full flex-col items-center justify-center rounded-lg bg-[#f9f4f4] text-slate-900 dark:bg-[#1a202c] dark:text-slate-300">
        <div className="xxsm:grid-cols-8 xsm:grid-cols-9 grid h-full w-full grid-cols-7 grid-rows-4 gap-4 p-5 sm:grid-cols-6 sm:grid-rows-5 md:grid-cols-7 md:grid-rows-4">
          <SiTypescript size="28" />
          <SiNodedotjs size="28" />
          <SiReact size="28" />
          <SiGithub size="28" />
          <SiGit size="28" />
          <SiDiscord size="28" />
          <SiNextdotjs size="28" />
          <TbBrandJavascript size="28" />
          <SiVisualstudiocode size="28" />
          <SiPython size="28" />
          <SiRust size="28" />
          <SiGo size="28" />
          <SiJavascript size="28" />
          <SiHtml5 size="28" />
          <SiCss3 size="28" />
          <SiLinux size="28" />
          <SiUbuntu size="28" />
          <SiTailwindcss size="28" />
          <SiOracle size="28" />
          <SiFlask size="28" />
          <SiDebian size="28" />
          <SiBootstrap size="28" />
          <SiAmazonaws size="28" />
          <SiRedis size="28" />
          <SiMongodb size="28" />
          <SiPostgresql size="28" />
          <SiDocker size="28" />
          <SiCloudflare size="28" />
        </div>
      </div>
    </>
  )
}
