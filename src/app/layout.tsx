'use client'

// import { useEffect } from 'react'
import React, { useEffect, useRef } from 'react'

// Framework
import '@/styles/globals.css'
import '@/styles/hi.css'

import { usePathname } from 'next/navigation'
import { Analytics } from '@vercel/analytics/react'
import { gsap } from 'gsap'
import AuthProvider from '@/lib/nextauth/AuthProvider'
// import NextTopLoader from 'nextjs-toploader'

// Src
import { cn } from '@/lib/util/util'
import Particles from '@/components/ui/particles'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { metadata } from '@/app/api/metadata'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const cursorRef = useRef(null)

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY
      gsap.to(cursorRef.current, {
        x      : mouseX,
        y      : mouseY,
        opacity: 1,
        delay  : 0,
      })
    })

    const hideCursor = () => {
      gsap.to(cursorRef.current, { opacity: 0 })
    }

    const showCursor = () => {
      gsap.to(cursorRef.current, { opacity: 1 })
    }

    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mousedown', hideCursor)
    document.addEventListener('mouseup', showCursor)
  }, [])

  const path_name = usePathname()

  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <head
          className={cn(
            'bg-gradient-to-b from-slate-300 to-gray-300', // light
            'dark:bg-gradient-to-b dark:from-black dark:to-gray-900' // dark
          )}
        >
          <title>{metadata.creator}</title>
          <meta content={metadata.creator} property="og:title" />
          <meta content={metadata.description} property="og:description" />
          <link rel="icon" href="/images/monika-fa.png" /> {/* as if I know how app router works */}
        </head>

        <body
          suppressHydrationWarning={true}
          className={cn('flex max-h-[100vh] min-h-[100vh] flex-col overflow-x-hidden antialiased')}
        >
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={['light', 'dark']}>
              {/* Kbar Wrapper */}
              <div
                ref={cursorRef}
                className="pointer-events-none fixed z-[9999] mt-4 hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 bg-cover bg-no-repeat lg:block"
                style={{
                  backgroundImage: `url(/mouse/walking.gif)`,
                  backgroundPosition: '120% 100%',
                }}
              />
              {/* <NextTopLoader /> */}
              <div
                className={cn(
                  'z-20 grow',
                  'bg-gradient-to-b from-slate-300 to-gray-300', // light
                  'dark:bg-gradient-to-b dark:from-black dark:to-gray-900' // dark
                )}
              >
                <Particles className="absolute inset-0 -z-50" quantity={500} path_name={path_name} />
                <Navbar />
                {children}
              </div>
              {/* Kbar wrapper */}
              <Footer />
              <Toaster /> {/* useless */}
              <Analytics />
            </ThemeProvider>
          </AuthProvider>
        </body>
      </html>
    </>
  )
}
