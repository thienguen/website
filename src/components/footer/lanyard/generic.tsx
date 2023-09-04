import { cn } from '@/lib/util/util'
import { Tooltip } from '@/components/common/Tooltip'

type GenericActivityProps = {
  icon        : string
  altText     : string
  text        : string
  elapsedTime?: string
  statusText ?: string
  text_color ?: string
}

const GenericActivity: React.FC<GenericActivityProps> = ({ icon, altText, text, elapsedTime, statusText, text_color }) => {
  const isGitKraken = altText === 'GitKraken'

  return (
    <>
      <img
        src={icon}
        alt={altText}
        width={24}
        height={24}
        className={cn('heartbeat', `${isGitKraken ? 'dark:invert' : ''}`)}
      />

      <code className="relative mx-auto mt-1 cursor-cell appearance-none rounded-lg bg-transparent text-center font-pixeloidMono text-sm text-black/90 dark:text-gray-400">
        <Tooltip text={statusText ?? ''}>
          <span className={`link-underline2 link-underline font-bold ${text_color ?? ''}`}>{text}</span>
        </Tooltip>
        <span>
          {": "}
        </span>
        {elapsedTime && <span>{elapsedTime}</span>}
      </code>
    </>
  )
}
export default GenericActivity
