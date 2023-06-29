// Framework
import '@/styles/globals.css'

// Srr
import { fontMono } from '@/lib/font'
import { cn } from '@/lib/util/util'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { my_metadata } from '@/server/metadata'
import Particles from '@/components/ui/particles'
import { type Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		default: "Thienguen",
		template: "%s | thienguen",
	},
	description: "dissapointment",
	openGraph: {
		title: "thienguen",
		description:
			"dissapointment",
		url: "https://thienguen",
		siteName: "thienguen",
		images: [
			{
				url: "https://thienguen/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	icons: {
		shortcut: "/monika.png",
	},
};


interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head
          className={cn(
            'bg-gradient-to-b from-slate-300 to-gray-400', // light
            'dark:bg-gradient-to-b dark:from-black dark:to-gray-900' // dark
          )}
        >
          {/* TODO: Back here and update href */}
          <title>{my_metadata.creator}</title>
          <meta content={my_metadata.creator} property="og:title" />
          <meta content={my_metadata.description} name="description" />
          <meta content={my_metadata.description} property="og:description" />
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
                'bg-gradient-to-b from-slate-300 to-gray-400', // light
                'dark:bg-gradient-to-b dark:from-black dark:to-gray-900' // dark
              )}
            >
              <Particles className="absolute inset-0 -z-0 animate-fade-in" quantity={150} />
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
