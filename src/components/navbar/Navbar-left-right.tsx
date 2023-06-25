/* Src */
import type { ReactNode } from 'react'
import Link from 'next/link'

import Typewriter from 'typewriter-effect'

import { cn } from '@/lib/util/util'
import Navlinks from '@/components/navbar/Navlinks'
import { metadata } from '@/app/layout'

interface NavbarRightProps {
  path_name: string
  isOpen: boolean
}

export const NavbarLeft = ({ path_name }: { path_name: string }) => (
  <div className="mb-3 w-full md:mb-0 md:w-auto">
    <Link href="/" aria-label={metadata.headerTitle}>
      <div className="flex items-start text-xl font-semibold dark:text-slate-200">
        {`~${path_name}`} <Typewriter options={{ strings: [], autoStart: true, loop: true }} />
      </div>
    </Link>
  </div>
)

export const NavbarRight = () => (
  <div className="flex items-center space-x-4">
    <div className="hidden space-x-4 text-sm sm:flex">
      {Navlinks.map((link) => (
        <Link
          key={link.title}
          href={link.href}
          rel="noopener noreferrer"
          className="link-underline rounded text-gray-900 hover:bg-slate-50 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-4 sm:py-2" // dark
        >
          {link.title}
        </Link>
      ))}
    </div>
  </div>
)

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
          style={{ animation: isOpen ? `slide-in 0.8s ease ${index * 0.1}s forwards` : 'none' }}
        >
          {link.title}
        </Link>
      ))}
    </div>
  )
}
