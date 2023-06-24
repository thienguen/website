import Link from 'next/link'

import { AiOutlineHeart } from 'react-icons/ai'

import { cn } from '@/lib/util/util'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { ThemeToggle } from '@/components/footer/ThemeToggle'
import { metadata } from '@/app/layout'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between space-y-1 py-5 md:h-16 md:flex-row md:py-0">
        <div className="flex items-center justify-center text-base text-muted-foreground">
          {/* The icon is here looking for it now */}
          <span>Made with</span>
          <AiOutlineHeart className="mx-1" />
          <span>by</span>
          <Link
            href="https://github.com/Thienguen"
            target="_blank"
            className="mx-1 underline transition-colors duration-200 ease-in-out hover:text-pink-500"
          >
            blank_dreams
          </Link>
          <span>.</span>
        </div>

        <div className="flex items-center space-x-1">
          <Link href={metadata.github} target="_blank" rel="noreferrer">
            <div className={cn(buttonVariants({ size: 'sm', variant: 'ghost' }), 'w-9 px-0')}>
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
