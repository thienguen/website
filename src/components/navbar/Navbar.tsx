'use client'

/* Framework */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Libraries */
import Typewriter from 'typewriter-effect'

/* Src */
import { Icons } from '@/components/ui/icons'
import NavbarContainer from '@/components/navbar/NavbarContainer'
import Navlinks from '@/components/navbar/Navlinks'
import { ThemeToggle } from '@/components/navbar/ThemeToggle'
import { metadata } from '@/app/layout'

// import { ThemeTransition } from '@/components/navbar/ThemeTransition'

const Navbar = () => {
  const path_name = usePathname()

  return (
    <>
      {/* <ThemeTransition /> */}
      <NavbarContainer>
        <nav className="flex items-center justify-between p-5">
          

          <div className="flex grow items-center justify-between">
            {/* Typewriter Effect -- Left */}
            <div>
              <Link href="/" aria-label={metadata.headerTitle}>
                <div className="flex items-center justify-between text-sm font-semibold dark:text-slate-200">
                  {`~${path_name}`} <Typewriter options={{ strings: [], autoStart: true, loop: true }} />
                </div>
              </Link>
            </div>

            {/* Navlinks -- Right */}
            <div className="flex items-center text-sm leading-5">
              <div className="hidden sm:block">
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

              <ThemeToggle />

              <Link aria-label="Home" href="/" className="hidden items-center space-x-2 lg:flex">
                <Icons.logo className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </nav>
      </NavbarContainer>
    </>
  )
}

export default Navbar
