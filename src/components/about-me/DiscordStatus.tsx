'use client'

import { IoLogoDiscord } from 'react-icons/io5'
import { useLanyardWS } from 'use-lanyard'
import { cn } from '@/lib/util/util'

interface DiscordStatusProps {
  cols?: string
  height?: string
}

function DiscordStatus(props: DiscordStatusProps) {
  // const id: `${bigint}` | undefined = process.env.DISCORD_ID ? `${BigInt(process.env.DISCORD_ID)}` : undefined
  // const id: Snowflake | undefined = process.env.DISCORD_ID ? `${BigInt(process.env.DISCORD_ID)}` : undefined
  // const data = useLanyardWS(id ? [id] : [])
  const data = useLanyardWS('481754320778428418')
  const status = data?.discord_status ?? 'offline'

  return (
    <div>
      <div
        className={cn(
          `flex h-full w-full flex-col items-center justify-center rounded-lg pt-3`,
          `${props.height ?? ''} ${props.cols ?? ''}`,
          {
            online: 'bg-green-500 font-jetbrains-mono text-xs text-white',
            idle: 'bg-orange-400 font-jetbrains-mono text-xs text-white',
            dnd: 'bg-red-500 font-jetbrains-mono text-xs text-white',
            offline: 'bg-[#5865F2] font-jetbrains-mono text-xs text-white',
          }[status]
        )}
      >
        <div className="scale-[0.9] space-y-1 text-center sm:scale-[1.5]">
          <p className="scale-[1.6]">
            <IoLogoDiscord className="mb-1 w-full justify-end" />
          </p>
          <span className='tracking-wider'>{status}</span>
        </div>
      </div>
    </div>
  )
}

export default DiscordStatus
