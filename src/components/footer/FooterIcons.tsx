import Link from 'next/link'

import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { AiOutlineHeart } from 'react-icons/ai'

import { cn } from '@/lib/util/util'
import { buttonVariants } from '@/components/ui/button'
import { Tooltip } from '@/components/common/Tooltip'
import { metadata } from '@/app/layout'

export function FooterLove() {
  return (
    <>
      <span className="mx-1">Made with</span>
      <AiOutlineHeart className="h-5 w-5" />
      <span className="mx-1">by</span>
      <Tooltip text="find me here">
        <Link
          href={metadata.discord}
          target="_blank"
          className="underline transition-colors duration-200 ease-in-out hover:text-pink-500"
        >
          blank_dreams
        </Link>
        .
      </Tooltip>
    </>
  )
}

export function FooterGithub() {
  return (
    <>
      <Tooltip text="GitHub">
        <Link href={metadata.github} target="_blank" rel="noreferrer">
          <div className={cn(buttonVariants({ size: 'sm', variant: 'ghost' }), 'w-9 px-0')}>
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
      </Tooltip>
    </>
  )
}

export function FooterInstagram() {
  return (
    <>
      <Tooltip text="Instagram">
        <Link href={metadata.instagram} target="_blank" rel="noreferrer">
          <div className={cn(buttonVariants({ size: 'sm', variant: 'ghost' }), 'w-9 px-0')}>
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </div>
        </Link>
      </Tooltip>
    </>
  )
}

export function FooterLinkedin() {
  return (
    <>
      <Tooltip text="Linkedin">
        <Link href={metadata.linkedin} target="_blank" rel="noreferrer">
          <div className={cn(buttonVariants({ size: 'sm', variant: 'ghost' }), 'w-9 px-0')}>
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">Linkedin</span>
          </div>
        </Link>
      </Tooltip>
    </>
  )
}

export function FooterTwitter() {
  return (
    <>
      <Tooltip text="I don't use Twitter, mb">
        <Link href="/" rel="noreferrer">
          <div className={cn(buttonVariants({ size: 'sm', variant: 'ghost' }), 'w-9 px-0')}>
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
      </Tooltip>
    </>
  )
}
