import '@/styles/globals.css'

// Framework

// Srr
import { fontMono } from '@/lib/font'
import { cn } from '@/lib/util/util'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

export const metadata = {
  locale: 'en-US',
  language: 'en-us',
  theme: 'system',

  headerTitle: 'blank_dreams',
  description: 'Isekai already',

  creator: 'thienguen',
  name: 'Thienguen',
  url: 'https://github.com/Thienguen',
  email: 'nvktvanbo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thien-nguyen-2a4a37234/',
  siteRepo: 'https://github.com/Thienguen/Thien-Portfolio',
  github: 'https://github.com/Thienguen',

  title: {
    default: "Thienguen's Website",
    template: `%s - thienguen`,
  },

  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  // add icons here soon
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn('min-h-screen bg-background antialiased', fontMono.variable)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </>
  )
}
