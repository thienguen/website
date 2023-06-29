import Image from 'next/image'
import Link from 'next/link'

import { my_metadata } from '@/server/metadata'
import { Github, Twitter } from 'lucide-react'
import { AiOutlineHeart, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

import { cn } from '@/lib/util/util'
import { buttonVariants } from '@/components/ui/button'
import { Tooltip } from '@/components/common/Tooltip'

export function FooterLove() {
  return (
    <>
      <span className="mx-2">Made with</span>
      <AiOutlineHeart className="h-5 w-5" />
      <span className="mx-2">by</span>
      <Tooltip text="find me here">
        <Link
          href={my_metadata.discord}
          target="_blank"
          className="text-slate-600 underline transition-colors duration-200 ease-in-out hover:text-pink-500 dark:text-white dark:hover:text-pink-500"
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
        <Link href={my_metadata.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-9 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
            )}
          >
            <Github className="h-6 w-5" />
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
        <Link href={my_metadata.instagram} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-9 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
            )}
          >
            <AiOutlineInstagram className="h-6 w-5" />
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
        <Link href={my_metadata.linkedin} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-9 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
            )}
          >
            <AiOutlineLinkedin className="h-6 w-5" />
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
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-9 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
            )}
          >
            <Twitter className="h-6 w-5" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
      </Tooltip>
    </>
  )
}

export function FooterProfile() {
  return (
    <>
      <Tooltip text="just monika">
        <Link aria-label="Home" href="/" rel="noreferrer" className="m-auto">
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-9 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
            )}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/94078395"
              alt="Thien"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        </Link>
      </Tooltip>
    </>
  )
}
