'use client'

/* Framework */
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Libraries */
import Typewriter from 'typewriter-effect'

/* Src */
import NavbarContainer from '@/components/navbar/NavbarContainer'
import Navlinks from '@/components/navbar/Navlinks'
import { metadata } from '@/app/layout'

const Navbar = () => {
  const path_name = usePathname()

  return (
    <>
      {/* <ThemeTransition /> */}
      <NavbarContainer>
        <nav className="flex items-center justify-between p-5">
          <div className="flex w-full items-center justify-between space-x-4 lg:space-x-10">
            {/* Typewriter Effect -- Left */}
            <div>
              <Link href="/" aria-label={metadata.headerTitle}>
                <div className="flex items-center text-xl font-semibold dark:text-slate-200">
                  {`~${path_name}`} <Typewriter options={{ strings: [], autoStart: true, loop: true }} />
                </div>
              </Link>
            </div>

            {/* Navlinks and Profile image -- Right */}
            <div className="flex items-center space-x-4">
              {/* Navigation Links */}
              <div className="hidden space-x-4 text-sm sm:flex">
                {/* Navigation BAr */}
                {Navlinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    rel="noopener noreferrer"
                    // target="_blank" // new tab
                    className="link-underline rounded px-2 py-1 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:px-4 sm:py-2" // dark
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              {/* Profile image */}
              <Link aria-label="Home" href="/" className="hidden lg:flex">
                <Image
                  src="https://avatars.githubusercontent.com/u/94078395"
                  alt="Thien"
                  width={30}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </div>

            {/* Theme Toggle and Profile Icon -- Right -- Deprecated */}
            {/* <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div> */}
          </div>
        </nav>
      </NavbarContainer>
    </>
  )
}

export default Navbar
