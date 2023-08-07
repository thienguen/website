'use client'

/* Framework */
import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
/* Libraries */
import { Twirl as Hamburger } from 'hamburger-react'
/* Src */
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { NavbarLeft, NavbarRight, NavbarRightSmall } from '@/components/navbar/Navbar-left-right'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState('0px')

  /**
   * path_name for  typewriter effect
   * copi copi
   */
  const path_name = usePathname()
  const isBreakpoint = useMediaQuery('780px')

  const navRef = useRef<HTMLDivElement>(null)

  /**
   * For dynamic, responsive navbar, when smaller
   * size is detected, the navbar will XXX
   */
  const expand = useCallback(() => {
    /* Use functions setter */
    setHeight((prevHeight) => (prevHeight === '0px' ? '15rem' : '0px'))
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }, [])

  /**
   * Animation effect, tbh, a bit meh
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isOpen &&
        !document.querySelector('.navbar')?.contains(event.target as Node)
      ) {
        expand()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, expand])

  return (
    <>
      {/* Trust, me I don't know suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        {' '}
        {/* Useless */}
        {isBreakpoint ? (
          <>
            <nav className="m-auto mt-2 flex w-3/5 flex-wrap items-center justify-between py-5 md:flex-nowrap">
              {/* Typewriter Effect -- Left */}
              <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
                <NavbarLeft path_name={path_name} />
              </div>
              {/* ------------------------- */}
              <div>
                <NavbarRight />
              </div>
              {/* Navlinks Effects -- Right */}
            </nav>
          </>
        ) : (
          <>
            <div className="my-6" ref={navRef}>
              <div className="flex flex-col items-center justify-center text-slate-950 dark:text-slate-100">
                <Hamburger toggled={isOpen} toggle={expand} />
              </div>
              <div
                className="mt-2 flex w-full flex-col items-center justify-center gap-2 space-y-2 overflow-hidden text-center text-slate-200 transition-all duration-200"
                style={{ maxHeight: height }}
              >
                <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
                  <NavbarRightSmall path_name={path_name} isOpen={isOpen} />
                </div>
              </div>
            </div>
          </>
        )}
      </Suspense>
    </>
  )
}

export default Navbar
