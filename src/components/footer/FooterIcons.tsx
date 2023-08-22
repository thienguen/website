import Image from 'next/image'
import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'
// import { useSession } from 'next-auth/react'
import { AiOutlineHeart, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import { cn } from '@/lib/util/util'
import { buttonVariants } from '@/components/ui/button'
import { Tooltip } from '@/components/common/Tooltip'
import { metadata } from '@/app/api/metadata'

export function FooterLove() {
  return (
    <>
      <span className="mx-2 text-sm">Made with</span>
      <AiOutlineHeart className="h-5 w-5" />
      <span className="mx-2 text-sm">by</span>
      <Tooltip text="find me here">
        <Link
          href={metadata.discord}
          target="_blank"
          className="text-sm text-slate-600 underline transition-colors duration-200 ease-in-out hover:text-pink-500 dark:text-white dark:hover:text-pink-500"
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
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
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
        <Link href={metadata.instagram} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
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
        <Link href={metadata.linkedin} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
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
              'w-7 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
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

export function FooterEmail() {
  return (
    <>
      <Tooltip text="Contact me">
        <a href={`mailto:${metadata.email}`}>
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
            )}
          >
            <AiOutlineMail className="h-6 w-5" />
            <span className="sr-only">Email</span>
          </div>
        </a>
      </Tooltip>
    </>
  )
}

export function FooterProfile() {
  // const { data: session } = useSession()
  // let profileImage = `https://avatars.githubusercontent.com/u/94078395`
  // let profileText = `just monika`

  // if (session?.user?.image && session?.user?.name !== 'Thien Nguyen') {
  //   profileImage = session.user.image
  //   profileText = session?.user?.name ?? `just monika`
  // }

  return (
    <>
      <Tooltip text="just monika">
        <Link aria-label="Home" href="/" rel="noreferrer" className="m-auto">
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:bg-slate-50 dark:hover:bg-gray-500 '
            )}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/94078395"
              alt="Thien"
              width={24}
              priority
              height={24}
              className="rounded-full"
            />
          </div>
        </Link>
      </Tooltip>
    </>
  )
}
