'use client'

/* Framework */
import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
/* Libraries */

import { Twirl as Hamburger } from 'hamburger-react'
/* Src */
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { NavbarLeft, NavbarMiddle, /* NavbarRight, */ NavMiddleSmall } from '@/components/navbar/NavbarLeftRight'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState('0px')

  /**
   * path_name for  typewriter effect
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

  /* If the user decided to hard refresh, like they always do */
  if (isBreakpoint === null) {
    return (
      <nav className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-between pb-2 pl-6 pt-4 font-dosis md:flex-nowrap">
        <NavbarLeft path_name={path_name} />
        <NavbarMiddle />
        {/* <NavbarRight /> */}
      </nav>
    )
  }

  return (
    <>
      {/* Trust, me I don't know suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Useless */}
        {isBreakpoint ? (
          <nav className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-between pb-2 pl-6 pt-4 font-dosis md:flex-nowrap">
            <NavbarLeft path_name={path_name} />
            <NavbarMiddle />
            {/* <NavbarRight /> */}
          </nav>
        ) : (
          <>
            <div className="mx-auto mt-2 w-4/5 py-5" ref={navRef}>
              <div className="m-0 flex flex-col items-center justify-center text-slate-950 dark:text-slate-100">
                <Hamburger toggled={isOpen} toggle={expand} />
              </div>
              <div
                className="mt-2 flex w-full flex-col items-center justify-center gap-2 space-y-2 overflow-hidden text-center text-slate-200 transition-all duration-200"
                style={{ maxHeight: height }}
              >
                <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
                  <NavMiddleSmall path_name={path_name} isOpen={isOpen} />
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
