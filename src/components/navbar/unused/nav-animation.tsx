'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navItems = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/now',
    name: 'Now',
  },
  {
    path: '/guestbook',
    name: 'Guestbook',
  },
  {
    path: '/writing',
    name: 'Writing',
  },
]

export default function NavBarTest() {
  let pathname = usePathname() || '/'

  if (pathname.includes('/writing/')) {
    pathname = '/writing'
  }

  const [hoveredPath, setHoveredPath] = useState(pathname)

  return (
    <div className="sticky top-4 z-[100] mb-12 rounded-lg border border-stone-800/90 bg-stone-900/80 p-[0.4rem] backdrop-blur-md">
      <nav className="relative z-[100] flex w-full justify-start rounded-lg">
        {navItems.map((item, _) => {
          const isActive = item.path === pathname

          return (
            <Link
              key={item.path}
              className={`relative rounded-md px-4 py-2 text-sm no-underline duration-300 ease-in lg:text-base ${
                isActive ? 'text-zinc-100' : 'text-zinc-400'
              }`}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 -z-10 h-full rounded-md bg-stone-800/80"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: '100%',
                  }}
                  transition={{
                    type: 'spring',
                    bounce: 0.15,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.5,
                  }}
                />
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
