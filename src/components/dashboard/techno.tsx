'use client'

import { BiLogoMongodb, BiLogoPython, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { RiJavascriptLine, RiUbuntuFill } from 'react-icons/ri'
import { SiAmazonaws /* SiGithub, */, SiDocker, SiNextdotjs, SiRust } from 'react-icons/si'
import { TbBrandCpp, TbBrandGolang, TbBrandPrisma, TbBrandTypescript } from 'react-icons/tb'

const techno_icons = [
  // { type: 'img', src: '/icons/typescript.png', description: 'ts' },
  // { type: 'img', src: '/icons/javascript.png', description: 'js' },
  // { type: 'img', src: '/icons/html.png',       description: 'html' },
  // { type: 'img', src: '/icons/css.png',        description: 'css' },
  // { type: 'img', src: '/icons/react.png', description: 'react' },
  // { type: 'img', src: '/icons/c.png', description: 'c' },
  // { type: 'img', src: '/icons/prisma.png', description: 'prisma' },
  // { type: 'img', src: '/icons/nodejs.png',     description: 'node' },
  // { type: 'img', src: '/icons/vscode.png', description: 'vscode' },
  // { type: 'img', src: '/icons/ubuntu.png',     description: 'ubuntu' },
  // { type: 'img', src: '/icons/tailwind.png', description: 'tailwind' },
  // { type: 'img', src: '/icons/git.png',        description: 'git' },
  // { type: 'img', src: '/icons/kotlin.png', description: 'kotlin' },
  // { type: 'img', src: '/icons/python.png', description: 'python' },
  // { type: 'img', src: '/icons/bootstrap.png',  description: 'bootstrap' },
  // { type: 'img', src: '/icons/mongodb.png', description: 'mongodb' },
  // { type: 'img', src: '/icons/docker.png', description: 'docker' },

  { type: 'icon', component: <RiJavascriptLine size={24} />, description: 'js' },
  { type: 'icon', component: <TbBrandTypescript size={24} />, description: 'ts' },
  { type: 'icon', component: <SiNextdotjs size={24} />, description: 'next.js' },
  { type: 'icon', component: <BiLogoPython size={24} />, description: 'python' },
  { type: 'icon', component: <BiLogoTailwindCss size={24} />, description: 'tailwind' },
  { type: 'icon', component: <RiUbuntuFill size={24} />, description: 'ubuntu' },
  { type: 'icon', component: <TbBrandPrisma size={24} />, description: 'prisma' },
  { type: 'icon', component: <TbBrandGolang size={24} />, description: 'golang' },
  { type: 'icon', component: <TbBrandCpp size={24} />, description: 'c++' },
  { type: 'icon', component: <BiLogoReact size={24} />, description: 'react' },
  { type: 'icon', component: <SiDocker size={24} />, description: 'docker' },
  { type: 'icon', component: <BiLogoMongodb size={24} />, description: 'mongodb' },
  { type: 'icon', component: <SiAmazonaws size={24} />, description: 'aws' },
  { type: 'icon', component: <SiRust size={24} />, description: 'rust' },
  // { type: 'icon', component: <SiGithub size={25} />,    description: 'gitHub' },
]

const TechnologyIcon = ({ icon }: { icon: (typeof techno_icons)[0] }) => (
  <div className="flex flex-col items-center gap-2">
    {icon.component}
    <span className="text-center text-sm">{icon.description}</span>
  </div>
)

const Technologies = () => {
  return (
    <div className="col-span-2 mt-4 flex  cursor-cell select-none flex-col rounded-sm text-slate-900 opacity-90 shadow-sm shadow-slate-700 dark:text-slate-300 dark:shadow-gray-400 md:mt-0 lg:col-span-1 lg:mt-0">
      <div className="grid grid-cols-5 gap-x-2 gap-y-3 p-3">
        <div className="flex flex-row items-center justify-center self-center text-center">
          <p className="link-underline3 link-underline2 m-0 font-dosis text-base font-semibold text-lightSecondaryColor dark:text-gold">
            STACK
          </p>
        </div>
        {techno_icons.map((icon, index) => (
          <TechnologyIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  )
}

export default Technologies
