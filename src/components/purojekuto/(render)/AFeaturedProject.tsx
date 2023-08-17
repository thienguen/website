import { useRef } from 'react'
import { motion } from 'framer-motion'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'
import { ICONS, type ProjectProps } from './Render'

type FeaturedProjectProps = {
  index: number
  project: ProjectProps
}

type LottieRef = React.MutableRefObject<LottieRefCurrentProps | null>

export default function AFeaturedProject({ project, index }: FeaturedProjectProps) {
  const iconRef: LottieRef = useRef<LottieRefCurrentProps | null>(null)

  // A sudden light bulb on my head
  const textAlignment = index >= 2 ? 'text-right' : 'text-left'
  const flexDirection = index >= 2 ? 'flex-row-reverse' : 'flex-row'
  const textDirection = index >= 2 ? 'rtl' : 'ltr'

  return (
    <Animation>
      <a
        // href={project.url}
        rel="noreferrer"
        target="_blank"
        onMouseEnter={() => iconRef.current?.play()}
        onMouseLeave={() => iconRef.current?.stop()}
      >
        <div
          className={`max-w-[10rem] rounded-md border-0 transition-opacity duration-300 ease-in-out hover:opacity-100 lg:w-36 ${textAlignment}`}
          key={index}
        >
          <div className={`flex justify-between ${flexDirection}`}>
            <Lottie
              lottieRef={iconRef}
              animationData={ICONS[project.icon as keyof typeof ICONS]}
              loop={false}
              autoplay={false}
              className="mb-2.5 h-6 w-6 invert dark:invert-0"
            />
          </div>

          <div className="grow" dir={`${textDirection}`}>
            <p className="font-dosis text-lg font-semibold text-black dark:font-normal dark:text-white">
              {project.title}
            </p>
            <p className="font-dosis text-base leading-6 text-slate-600 opacity-90 dark:text-slate-400">
              {project.description}
            </p>
            <p className="mt-1 inline-block font-dosis text-base font-semibold tracking-wide text-primary dark:font-normal">
              {project.stats}
            </p>
          </div>
        </div>
      </a>
    </Animation>
  )
}

type AnimationProps = {
  children: React.ReactNode
}

function Animation({ children }: AnimationProps) {
  return (
    <motion.div className="relative m-2 min-w-[10.5rem] p-3 transition-all duration-200 ease-in-out hover:scale-105 hover:rounded-lg hover:bg-gray-50 hover:opacity-100  dark:hover:bg-slate-700">
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
