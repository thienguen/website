'use client'

import { useEffect, useState } from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { IoLogoDiscord } from 'react-icons/io5/'
import { useLanyardWS } from 'use-lanyard'
import { cn } from '@/lib/util/util'
import Solar from './solar'
import { metadata } from '@/app/api/metadata'

function DiscordStatus() {
  const data = useLanyardWS(process.env.NEXT_PUBLIC_DISCORD_ID as `${bigint}`)
  const status = data?.discord_status ?? 'offline'

  const [isBlurred, setIsBlurred] = useState(true)

  const statusTextColor = {
    online: 'text-green-500 font-pixeloidMono',
    idle: 'text-orange-400 font-pixeloidMono',
    dnd: 'text-red-500 font-pixeloidMono',
    offline: 'text-[#5865F2] font-pixeloidMono',
  }[status]

  useEffect(() => {
    // This will run once the component is mounted
    const timer = setTimeout(() => {
      setIsBlurred(false)
    }, 50) // A small delay ensures the CSS transition is triggered

    return () => clearTimeout(timer) // Clean up the timer on unmount
  }, [])

  return (
    <div
      className={cn(
        `bg-overlay flex justify-between gap-2 rounded-sm p-4`,
        'border-gray-300 opacity-90 shadow-sm shadow-slate-800 dark:border-zinc-900 dark:shadow-gray-400'
      )}
    >
      <div className="flex flex-col justify-between gap-2">
        {/* icon, dnd */}
        <div className={cn('m-0 text-base sm:text-sm', statusTextColor, 'flex flex-row justify-start')}>
          <IoLogoDiscord className="mr-2 inline-block h-6 w-6" />
          <p className="items-center text-base">{status}</p>
        </div>

        {/* user name */}
        <div className="flex w-full gap-1 text-sm md:text-base lg:text-base">
          {/* <p className="link-underline3 link-underline2 m-0 text-sm text-lightSecondaryColor dark:text-gold">{`@blank_dreams`}</p> */}
          <p>{`@blank_dreams`}</p>
          <a href={`${metadata.discord}`} target="_blank" rel="noreferrer">
            <HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 hover:opacity-100" />
          </a>
        </div>
      </div>

      <div className="mr-10 flex flex-row items-center justify-center">
        <Solar />
      </div>

      {/* image rhs */}
      <div className="flex h-20 w-20 items-center justify-center md:h-20 md:w-20 lg:h-20 lg:w-20">
        <div className="overflow-hidden rounded-lg object-center shadow-lg">
          <img
            alt={data?.discord_user?.username}
            loading="lazy"
            className={`my-0 object-contain object-center transition-[scale,filter] duration-700 ${
              isBlurred ? 'blur-[5px]' : ''
            }`}
            src={`/images/justthe2ofus.jpg`}
          />
        </div>
      </div>
    </div>
  )
}

export default DiscordStatus
