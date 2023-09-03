'use client'

/* Src */
import { useState, type ReactNode } from 'react'
import Link from 'next/link'

/* hooks */
import { useKBar } from 'kbar'
import useSound from 'use-sound'
import { usePathname, useRouter } from 'next/navigation'

/* Icons */
import { IoPersonCircleOutline } from 'react-icons/io5'
import { AiOutlineHome } from 'react-icons/ai'
import { GoProjectSymlink } from 'react-icons/go'
import { TbBrandAmongUs } from 'react-icons/tb'
import { BsMailbox } from 'react-icons/bs'

/* Support */
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

/* Util */
import { cn } from '@/lib/util/util'
import { NavMiddleLinks, NavMiddleSmalllinks } from '@/components/navbar/Navlinks'
import { metadata } from '@/app/api/metadata'

interface NavbarRightProps {
  path_name?: string
  isOpen: boolean
}

/**
 * <mapping for each title to its icon>
 */
const IconMapping: { [key: string]: JSX.Element } = {
  '/projects': <GoProjectSymlink />,
  '/guestbook': <TbBrandAmongUs />,
  '/dashboard': <BsMailbox />,
  '/about': <IoPersonCircleOutline />,
  '/home': <AiOutlineHome />,

  /* about to be move to footer */
  // '/kbar' : <BsCommand />,
}

/**
 * @return Left side of the navbar
 */
export const NavbarLeft = ({ path_name }: { path_name: string }) => (
  <div className="mb-1.5 w-full md:mb-0">
    <Link href="/" aria-label={metadata.headerTitle}>
      <div className="flex items-start font-dosis text-base font-semibold dark:text-slate-200">
        {`~${path_name === '/' ? '/home' : path_name}`}{' '}
        <Typewriter options={{ strings: [], autoStart: true, loop: true }} />
      </div>
    </Link>
  </div>
)

/**
 * @returns middle of the navbar
 */
export const NavbarMiddle = () => {
  const pathname = usePathname() || '/'
  const router   = useRouter()

  const [ThemeSound, { stop }]        = useSound('/sounds/page.mp3', { volume: 0.5 })
  const [hoveredPath, setHoveredPath] = useState(pathname)

  const handleLinkClick = (href: string) => {
    stop()
    ThemeSound()
    setTimeout(() => {
      router.push(href)
      setHoveredPath(href)
    }, 150) // delay of 150ms, due to the weird bug of framer
  }

  return (
    <div className=" flex justify-center space-x-4  backdrop-blur-md">
      {NavMiddleLinks.map((link, _) => (
        <a
          key={link.title}
          // href={link.href}
          className="relative flex flex-row items-center rounded text-sm tracking-wider  text-black no-underline duration-300 ease-in hover:bg-slate-50 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-3 sm:py-2"
          onClick={() => handleLinkClick(link.href)}
          onMouseOver={() => setHoveredPath(link.href)}
          onMouseLeave={() => setHoveredPath(pathname)}
        >
          {/* <div className="flex flex-row items-center font-dosis text-sm font-medium dark:font-normal dark:tracking-wider">
            {IconMapping[link.title]}
            {link.title}
          </div> */}
          {IconMapping[link.title]}
          <span>{link.title}</span>

          {link.href === hoveredPath && (
            <motion.div
              className="absolute bottom-0 left-0 -z-10 h-full rounded-md bg-slate-50 text-sm tracking-wider dark:bg-gray-700"
              layoutId="navbar"
              aria-hidden="true"
              style={{
                width: '100%',
              }}
              transition={{
                type: 'spring',
                bounce: 0.1,
                stiffness: 80,
                damping: 9,
                duration: 0.7,
              }}
            />
          )}
        </a>
      ))}
    </div>
  )
}

/**
 * @returns right side of the navbar
 */
export const NavbarRight = () => {
  const { query } = useKBar()
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 0.5 })

  return (
    <div className="flex items-end">
      <Link
        href=""
        onClick={(e) => {
          e.preventDefault()
          ThemeSound()
          query.toggle()
        }}
        className="link-underline link-underline2 rounded tracking-wider text-black hover:bg-slate-50 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-3 sm:py-2"
      >
        <div className="flex flex-row items-center font-dosis text-sm font-medium dark:font-normal dark:tracking-wider">
          {IconMapping['/kbar']}
          {'/kbar'}
        </div>
      </Link>
    </div>
  )
}

/**
 * @returns Right side of the navbar for small screens, with animation
 * hamburgor menu
 */
export function NavMiddleSmall({ isOpen }: NavbarRightProps): ReactNode {
  return (
    <div className="mb-2 min-w-[20rem] flex-col items-start space-y-2">
      {NavMiddleSmalllinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          rel="noopener noreferrer"
          className={cn(
            'nav-link link-underline rounded text-gray-900 hover:bg-slate-50 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-4 sm:py-2',
            isOpen && 'show'
          )}
        >
          {link.title}
        </Link>
      ))}
    </div>
  )
}
