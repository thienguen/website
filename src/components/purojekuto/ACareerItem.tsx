import { Tooltip } from '@/components/common/Tooltip'
import { type ProjectProps } from './RenderProjectsPage'

interface CareerItemProps {
  project: ProjectProps
}

export default function ACareerItem({ project }: CareerItemProps) {
  const primaryColor = '#84FFB8' // Light Greenish color
  const secondaryColor = '#82FFDA' // Light Cyan color

  return (
    <li>
      <Tooltip text={project.description ?? ''}>
        <p
          className="cursor-pointer underline"
          style={{
            backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
            backgroundSize: '100% 0.2em',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 88%',
            transition: 'background-size 0.25s ease-in',
          }}
        >
          {project.title}
        </p>
      </Tooltip>
    </li>
  )
}
