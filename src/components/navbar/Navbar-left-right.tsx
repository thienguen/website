/* Src */
import type { ReactNode } from 'react'
import Link from 'next/link'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { GoProjectSymlink } from 'react-icons/go'
import { IoPersonCircleOutline } from 'react-icons/io5'
import Typewriter from 'typewriter-effect'
import { cn } from '@/lib/util/util'
import Navlinks from '@/components/navbar/Navlinks'
import { metadata } from '@/app/api/metadata'

interface NavbarRightProps {
  path_name: string
  isOpen: boolean
}

/**
 * <mapping for each title to its icon>
 */
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
  <div className="mb-1.5 w-full md:mb-0 md:w-auto">
    <Link href="/" aria-label={metadata.headerTitle}>
      <div className="flex items-start font-dosis text-base font-semibold dark:text-slate-200">
        {`~${path_name === '/' ? '/home' : path_name}`}{' '}
        <Typewriter options={{ strings: [], autoStart: true, loop: true }} />
      </div>
    </Link>
  </div>
)

/**
 * @returns Right side of the navbar
 */
export const NavbarRight = () => (
  <div className="flex">
    <div className="hidden text-sm sm:flex">
      {Navlinks.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          rel="noopener noreferrer"
          className="link-underline rounded tracking-wider text-gray-950 hover:bg-slate-50 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-5 sm:py-2" // dark
        >
          <div className="flex flex-row items-center font-dosis text-sm">
            {IconMapping[link.title]} {/* this will  insert the icon for each link */}
            {link.title}
          </div>
        </Link>
      ))}
    </div>
  </div>
)

/**
 * @returns Right side of the navbar for small screens, with animation
 */
export function NavbarRightSmall({ path_name, isOpen }: NavbarRightProps): ReactNode {
  console.log('path_name: ', path_name)
  return (
    <div className="flex-col items-start space-y-4">
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
