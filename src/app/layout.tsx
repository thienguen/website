// Framework
import '@/styles/globals.css'

// Srr
import { fontMono } from '@/lib/font'
import { cn } from '@/lib/util/util'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { metadata } from '@/server/metadata'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head
          className={cn(
            'bg-gradient-to-b from-slate-200 to-gray-200', // light
            'dark:bg-gradient-to-b dark:from-black dark:to-gray-800' // dark
          )}
        >
          {/* TODO: Back here and update href */}
          <title>{metadata.creator}</title>
          <meta content={metadata.creator} property="og:title" />
          <meta content={metadata.description} name="description" />
          <meta content={metadata.description} property="og:description" />
          <meta content="???" property="og:url" />
          <meta content={`???`} property="og:image" />
        </head>

        <body
          className={cn('flex max-h-[100vh] min-h-[100vh] flex-col overflow-x-hidden antialiased', fontMono.variable)}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={['light', 'dark']}>
            <div
              className={cn(
                'grow',
                'bg-gradient-to-b from-slate-200 to-gray-300', // light
                'dark:bg-gradient-to-b dark:from-black dark:to-gray-800' // dark
              )}
            >
              <Navbar />
              {children}
            </div>
            <Footer />
            <Toaster /> {/* useless */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
