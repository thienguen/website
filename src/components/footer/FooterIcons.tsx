import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'
import { AiOutlineHeart, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import useSound from 'use-sound'
import { cn } from '@/lib/util/util'
import { buttonVariants } from '@/components/ui/custom-button'
import { Tooltip } from '@/components/common/Tooltip'
import { metadata } from '@/app/api/metadata'

export function FooterLove() {
  const [ThemeSound] = useSound('/sounds/switch-on.mp3', { volume: 1 })
  return (
    <>
      <span className="mx-2 text-sm">Made with</span>
      <AiOutlineHeart
        className="h-5 w-5 cursor-pointer"
        onClick={() => {
          ThemeSound()
        }}
      />
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
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
    <>
      <Tooltip text="GitHub">
        <Link
          href={metadata.github}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            ThemeSound()
          }}
        >
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:rotate-12 hover:bg-slate-50 dark:hover:bg-gray-500'
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
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
    <>
      <Tooltip text="Instagram">
        <Link
          href={metadata.instagram}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            ThemeSound()
          }}
        >
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:-rotate-12 hover:bg-slate-50 dark:hover:bg-gray-500'
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
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
    <>
      <Tooltip text="Linkedin">
        <Link
          href={metadata.linkedin}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            ThemeSound()
          }}
        >
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:-rotate-12 hover:bg-slate-50 dark:hover:bg-gray-500'
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
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
    <>
      <Tooltip text="I don't use Twitter, mb">
        <Link
          href="/"
          rel="noreferrer"
          onClick={() => {
            ThemeSound()
          }}
        >
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
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
    <>
      <Tooltip text="Contact me">
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL ?? ''}`}
          onClick={() => {
            ThemeSound()
          }}
        >
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:rotate-12 hover:bg-slate-50 dark:hover:bg-gray-500'
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
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
    <>
      <Tooltip text="just monika">
        <Link
          aria-label="Home"
          href="/"
          rel="noreferrer"
          className="m-auto"
          onClick={() => {
            ThemeSound()
          }}
        >
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:bg-slate-50 dark:hover:bg-gray-500'
            )}
          >
            <img
              src="https://avatars.githubusercontent.com/u/94078395"
              alt="Thien"
              width={24}
              // priority
              height={24}
              className="rounded-full"
            />
          </div>
        </Link>
      </Tooltip>
    </>
  )
}
