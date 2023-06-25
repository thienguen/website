'use client'

/* Framework */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Libraries */
import Typewriter from 'typewriter-effect'

/* Src */
import Navlinks from '@/components/navbar/Navlinks'
import { metadata } from '@/app/layout'
import GiHamburgerMenu from 'react-icons/gi'

const Navbar = () => {
  const path_name = usePathname()

  return (
    <>
      <nav className="m-auto flex flex-wrap items-center justify-between px-5 py-3 md:min-w-[1235px] md:max-w-[1235px] md:flex-nowrap">
        {/* Typewriter Effect -- Left */}
        <div className="mb-3 w-full md:mb-0 md:w-auto">
          <Link href="/" aria-label={metadata.headerTitle}>
            <div className="flex items-start text-xl font-semibold dark:text-slate-200">
              {`~${path_name}`} <Typewriter options={{ strings: [], autoStart: true, loop: true }} />
            </div>
          </Link>
        </div>

        {/* Navlinks -- Right */}
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
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
      </nav>
    </>
  )
}

export default Navbar
