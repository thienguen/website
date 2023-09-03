import { cn } from '@/lib/util/util'
import { Tooltip } from '@/components/common/Tooltip'

type GenericActivityProps = {
  icon        : string
  altText     : string
  text        : string
  elapsedTime?: string
  statusText ?: string
}

const GenericActivity: React.FC<GenericActivityProps> = ({ icon, altText, text, elapsedTime, statusText }) => {
  const isGitKraken = altText === 'GitKraken'

  return (
    <>
      <Tooltip text={statusText ?? ''}>
        <img
          src={icon}
          alt={altText}
          width={24}
          height={24}
          className={cn('heartbeat', `${isGitKraken ? 'dark:invert' : ''}`)}
        />
      </Tooltip>

      <code className="relative mx-auto cursor-cell appearance-none rounded-lg bg-transparent text-center font-pixeloidMono text-base text-black/90 dark:text-gray-400">
        {text} {elapsedTime && <span>{elapsedTime}</span>}
      </code>
    </>
  )
}
export default GenericActivity
