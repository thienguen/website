import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react' // Updated import for lottie

type ProjectProps = {
  title: string
  description: string
  url: string
  active: boolean
  icon: string
  stats?: string
}

type FeaturedProjectProps = {
  project: ProjectProps
  index: number
}

type LottieRef = React.MutableRefObject<LottieRefCurrentProps | null> // New LottieRef definition

export default function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const iconRef: LottieRef = useRef<LottieRefCurrentProps | null>(null) // Updated the useRef

  return (
    <Link href={project.url} passHref>
      <a
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => iconRef.current?.play()} // Moved events to the 'a' tag
        onMouseLeave={() => iconRef.current?.stop()} // Moved events to the 'a' tag
        className="flex w-auto rounded-md border-0 transition-opacity duration-300 ease-in-out hover:opacity-100 lg:w-44"
      >
        <Animation index={index}>
          <Lottie
            lottieRef={iconRef}
            style={{ width: 24, height: 24, marginBottom: 10 }}
            animationData={require(`../public/static/icons/${project.icon}.json`)}
            loop={false}
            autoplay={false}
          />
          <div className="grow">
            <p className="text-lg text-primary">{project.title}</p>
            <p className="leading-6 text-secondary">{project.description}</p>
            {project.stats && (
              <p className="mt-1 inline-block text-sm font-medium uppercase tracking-wide text-primary">
                {project.stats}
              </p>
            )}
          </div>
        </Animation>
      </a>
    </Link>
  )
}

type AnimationProps = {
  index: number
  children: React.ReactNode
}

function Animation({ index, children }: AnimationProps) {
  const [hovered, setHovered] = useState<number | null>(null) // Updated useState

  const isHovered = hovered === index

  return (
    <motion.span
      className="relative w-full p-5"
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered(null)} // Updated to null when not hovered
    >
      {isHovered && (
        <motion.span
          layoutId="featuredProjects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-[-1] rounded-md"
        />
      )}

      {children}
    </motion.span>
  )
}
