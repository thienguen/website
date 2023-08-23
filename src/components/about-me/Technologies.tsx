'use client'

import { SiAmazonaws, SiGithub, SiNextdotjs, SiRust } from 'react-icons/si'

type TechnologiesProps = {
  cols?: string
  height?: string
}

const icons = [
  { type: 'img', src: '/icons/typescript.png', alt: 'ts' },
  { type: 'img', src: '/icons/javascript.png', alt: 'js' },
  { type: 'img', src: '/icons/html.png', alt: 'html' },
  { type: 'img', src: '/icons/css.png', alt: 'css' },
  { type: 'img', src: '/icons/react.png', alt: 'react' },
  { type: 'img', src: '/icons/c.png', alt: 'c' },
  { type: 'img', src: '/icons/prisma.png', alt: 'prisma' },
  { type: 'img', src: '/icons/nodejs.png', alt: 'node' },
  { type: 'img', src: '/icons/vscode.png', alt: 'vscode' },
  { type: 'img', src: '/icons/ubuntu.png', alt: 'ubuntu' },
  { type: 'img', src: '/icons/tailwind.png', alt: 'tailwind' },
  { type: 'img', src: '/icons/git.png', alt: 'git' },
  { type: 'img', src: '/icons/kotlin.png', alt: 'kotlin' },
  { type: 'img', src: '/icons/python.png', alt: 'Python' },
  { type: 'img', src: '/icons/bootstrap.png', alt: 'bootstrap' },
  { type: 'img', src: '/icons/mongodb.png', alt: 'mongodb' },
  { type: 'img', src: '/icons/docker.png', alt: 'docker' },
  { type: 'icon', component: <SiRust size={22} /> },
  { type: 'icon', component: <SiGithub size={22} /> },
  { type: 'icon', component: <SiAmazonaws size={22} /> },
  { type: 'icon', component: <SiNextdotjs size={22} /> },
]

const TechnologyIcon = ({ icon }: { icon: (typeof icons)[0] }) => (
  <div className="flex items-center justify-center transition-transform duration-300 hover:scale-[1.6]">
    {icon.type === 'img' ? (
      <img src={icon.src ?? ''} alt={icon.alt ?? 'an image'} width={40} height={40} />
    ) : (
      icon.component
    )}
  </div>
)

const Technologies = (props: TechnologiesProps) => {
  return (
    <>
      <div
        className={`${props.cols ?? ''} ${
          props.height ?? ''
        } indicator flex min-h-[200px] w-full flex-col rounded-lg text-slate-900 opacity-90 shadow-sm shadow-slate-700 dark:text-slate-300 dark:shadow-gray-400`}
      >
        <span className={` badge badge-secondary badge-outline indicator-start font-dosis text-black dark:text-white`}>
          Technologies
        </span>
        <div className="grid h-full w-full grid-cols-7 grid-rows-3 gap-2 px-5 pb-5 pt-1">
          {icons.map((icon, index) => (
            <TechnologyIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Technologies
