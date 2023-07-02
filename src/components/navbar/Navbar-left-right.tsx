/* Src */
import type { ReactNode } from 'react'
import Link from 'next/link'

import { metadata } from '@/app/api/metadata'

import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { GoProjectSymlink } from 'react-icons/go'
import { IoPersonCircleOutline } from 'react-icons/io5'
import Typewriter from 'typewriter-effect'

import { cn } from '@/lib/util/util'
import Navlinks from '@/components/navbar/Navlinks'

interface NavbarRightProps {
  path_name: string
  isOpen: boolean
}

// < mapping for each title to its icon > \\
const IconMapping: { [key: string]: JSX.Element } = {
  '/home': <AiOutlineHome />,
  '/about': <IoPersonCircleOutline />,
  '/projects': <GoProjectSymlink />,
  '/guestbook': <AiOutlineMail />,
}

/**
 * @return Left side of the navbar
 */
export const NavbarLeft = ({ path_name }: { path_name: string }) => (
  <div className="mb-4 w-full md:mb-0 md:w-auto">
    <Link href="/" aria-label={metadata.headerTitle}>
      <div className="flex items-start text-xl font-semibold dark:text-slate-200">
        {`~${path_name}`} <Typewriter options={{ strings: [], autoStart: true, loop: true }} />
      </div>
    </Link>
  </div>
)


/**
 * @returns Right side of the navbar
 */
export const NavbarRight = () => (
  <div className="flex items-center space-x-4">
    <div className="hidden text-sm sm:flex">
      {Navlinks.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          rel="noopener noreferrer"
          className="link-underline rounded text-gray-900 hover:bg-slate-50 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-4 sm:py-2" // dark
        >
          {IconMapping[link.title]} {/* this will  insert the icon for each link */}
          {link.title}
        </Link>
      ))}
    </div>
  </div>
)

/**
 * @returns Right side of the navbar for small screens, with animation
 */
export function NavbarRightSmall({ path_name, isOpen }: NavbarRightProps): ReactNode {
  return (
    <div className="flex-col items-start space-y-4">
      {Navlinks.map((link, index) => (
        <Link
          key={link.title}
          href={link.href}
          rel="noopener noreferrer"
          className={cn(
            'nav-link link-underline rounded text-gray-900 hover:bg-slate-50 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-4 sm:py-2',
            path_name === link.href && 'text-gray-200',
            isOpen && 'show'
          )}
          style={{ animation: isOpen ? `slide-in 1s ease ${index * 0.1}s forwards` : 'none' }}
        >
          {link.title}
        </Link>
      ))}
    </div>
  )
}
