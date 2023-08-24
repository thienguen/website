/* Src */
import type { ReactNode } from 'react'
import Link from 'next/link'
import { useKBar } from 'kbar'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCommand, BsMailbox } from 'react-icons/bs'
import { GoProjectSymlink } from 'react-icons/go'
import { LuSwords } from 'react-icons/lu'
import Typewriter from 'typewriter-effect'
import useSound from 'use-sound'
import { cn } from '@/lib/util/util'
import { metadata } from '@/app/api/metadata'
import { Navlinks, NavMiddleLinks } from '@/components/navbar/Navlinks'


interface NavbarRightProps {
  path_name?: string
  isOpen: boolean
}

/**
 * <mapping for each title to its icon>
 */
const IconMapping: { [key: string]: JSX.Element } = {
  '/home': <AiOutlineHome />,
  '/projects': <GoProjectSymlink />,

  'guestbook/': <LuSwords />,
  'contact/': <BsMailbox />,

  '/kbar': <BsCommand />,
  // 'about/'    : <IoPersonCircleOutline />,
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
  const [ThemeSound, { stop }] = useSound('/sounds/page.mp3', { volume: 0.5 })

  return (
    <div className="flex justify-center space-x-4">
      {NavMiddleLinks.map((link, index) => (
        <Link
          key={link.title}
          href={link.href}
          className="link-underline link-underline2 rounded tracking-wider text-black hover:bg-slate-50 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-3 sm:py-2"
          onClick={() => {
            stop()
            ThemeSound()
          }}
        >
          <div className="flex flex-row items-center font-dosis text-sm font-medium dark:font-normal dark:tracking-wider">
            {index < 2 ? (
              <>
                {IconMapping[link.title]}
                {link.title}
              </>
            ) : (
              <>
                {link.title}
                {IconMapping[link.title]}
              </>
            )}
          </div>
        </Link>
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
        href="#"
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
export function NavbarRightSmall({ isOpen }: NavbarRightProps): ReactNode {
  return (
    <div className="mb-2 min-w-[20rem] flex-col items-start space-y-2">
      {Navlinks.map((link, index) => (
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
