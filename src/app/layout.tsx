'use client'

  // Framework
import '@/styles/globals.css'
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

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang = "en" suppressHydrationWarning = {true}>
        <head
          className={cn(
            'bg-gradient-to-b from-slate-300 to-gray-300',            // light
            'dark:bg-gradient-to-b dark:from-black dark:to-gray-900'  // dark
          )}
        >
          <style>
            {`
              ::selection {
                  background-color: #898989;
                  color           : white;
              }
            `}
          </style>
          {/* TODO: Back here and update href */}
          <title>{metadata.creator}</title>
          <meta content = {metadata.creator} property     = "og:title" />
          <meta content = {metadata.description} name     = "description" />
          <meta content = {metadata.description} property = "og:description" />
          <link rel     = "shortcut icon" href            = "/images/monika-fa.png" />{' '}
          {/* as if I know how app router works */}
        </head>

        <body
          suppressHydrationWarning = {true}
          className                = {cn(
            'flex max-h-[100vh] min-h-[100vh] flex-col overflow-x-hidden antialiased',
            fontMono.variable
          )}
        >
          <AuthProvider>
            <ThemeProvider
              attribute    = "class"
              defaultTheme = "system"
              enableSystem
              themes = {['light', 'dark']}
            >
              <div
                className={cn(
                  'z-20 grow',
                  'bg-gradient-to-b from-slate-300 to-gray-300',                                                          // light
                                                                'dark:bg-gradient-to-b dark:from-black dark:to-gray-900'  // dark
                )}
              >
                <Particles className = "absolute inset-0 -z-10" quantity = {500} />
                <Navbar />
                {children}
                {/* BUGS: Can't grow to the footer, or when page is scroollable */}
                {/* Unless I'm making another layout, but I'm too tired */}
              </div>
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
