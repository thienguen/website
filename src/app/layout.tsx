'use client'

import React from 'react'
// import { useEffect } from 'react'
// Framework
import '@/styles/globals.css'
import { usePathname } from 'next/navigation'
import { Analytics } from '@vercel/analytics/react'
import AuthProvider from '@/lib/nextauth/AuthProvider'
// Srr
import { fontMono } from '@/lib/util/font'
import { cn } from '@/lib/util/util'
import Particles from '@/components/ui/particles'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { metadata } from '@/app/api/metadata'
import NextTopLoader from 'nextjs-toploader';

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  /**
   * Did I shutter?, typewriter title is good,
   * but I CANT GET IT TO WORK for dynamic ROUTES
   */

  // useEffect(() => {
  //   const SITE_NAME = metadata.creator;
  //   const TIME = 0.2 * 1000;

  //   const yieldTime = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds));

  //   async function initTypewriter() {
  //     await yieldTime(TIME * 4);
  //     for (let s = SITE_NAME.length; s >= 0; s--) {
  //       let newTitle = SITE_NAME.substring(0, s);  // Use .substring() here
  //       if (s === 0) newTitle = '_';

  //       document.title = newTitle;
  //       await yieldTime(TIME);
  //     }

  //     await yieldTime(TIME);
  //     for (let s = 0; s <= SITE_NAME.length; s++) {
  //       let newTitle = SITE_NAME.substring(0, s);  // Use .substring() here
  //       if (s === 0) newTitle = '_';

  //       document.title = newTitle;
  //       await yieldTime(TIME);
  //     }

  //     await initTypewriter();  // Call the function without 'await'
  //   }

  //   void initTypewriter();  // Call the function without 'await'

  //   // Cleanup the effect when component unmounts
  //   return () => {
  //     document.title = SITE_NAME;
  //   };
  // }, []);

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
          className={cn('flex max-h-[100vh] min-h-[100vh] flex-col overflow-x-hidden antialiased', fontMono.variable)}
        >
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={['light', 'dark']}>
              {/* Kbar Wrapper */}
              {/* <NextTopLoader /> */}
              <div
                className={cn(
                  'z-20 grow',
                  'bg-gradient-to-b from-slate-300 to-gray-300', // light
                  'dark:bg-gradient-to-b dark:from-black dark:to-gray-900' // dark
                  )}
              >
                <Particles className="absolute inset-0 -z-10" quantity={500} path_name={path_name} />
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
