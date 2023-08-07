import { Tooltip } from '@/components/common/Tooltip'
import { type ProjectProps } from './RenderProjectsPage'
import { useTheme } from 'next-themes'

interface CareerItemProps {
  project: ProjectProps
}

export default function ACareerItem({ project }: CareerItemProps) {
  const { resolvedTheme } = useTheme()
  
  // Colors for dark theme
  const darkPrimaryColor = '#84FFB8' // Light Greenish color
  const darkSecondaryColor = '#82FFDA' // Light Cyan color
  
  // Colors for light theme with a touch of yellowish hue
  const lightPrimaryColor = '#D87787' // Light Yellow color
  const lightSecondaryColor = '#861657' // Grayish White color

  // Determine colors based on theme
  const primaryColor = resolvedTheme === 'dark' ? darkPrimaryColor : lightPrimaryColor;
  const secondaryColor = resolvedTheme === 'dark' ? darkSecondaryColor : lightSecondaryColor;
  
  return (
    <li>
      <Tooltip text={project.description ?? ''}>
        <p
          className="cursor-grab hover:opacity-80"
          style={{
            backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
            backgroundSize: '100% 0.075em', // Making it thinner
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 92%', // Moving it closer to text
            transition: 'background-size 0.25s ease-in, opacity 0.25s ease-in', // Adding hover transition
          }}
        >
          {project.title}
        </p>
      </Tooltip>
    </li>
  )
}
