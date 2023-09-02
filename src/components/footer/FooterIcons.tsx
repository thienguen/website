/* Trash */
import Link from 'next/link'
import { cn } from '@/lib/util/util'
import { metadata } from '@/app/api/metadata'

/* Hooks */
import { useKBar } from 'kbar'
import useSound from 'use-sound'

/* UI, sup */
import { buttonVariants } from '@/components/ui/custom-button'
import { Tooltip } from '@/components/common/Tooltip'

/* Icons */
import { Github, Twitter } from 'lucide-react'
import { /*  AiOutlineHeart, */ AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import { BsCommand } from 'react-icons/bs'

/**
 * All the right hand side of the footer functionality, recommended fold it
 * To see the full view
 * Include:
 *   - FooterLove
 *   - FooterGithub
 *   - FooterInstagram
 *   - FooterLinkedin
 *   - FooterTwitter
 *   - FooterEmail
 *   - FooterProfile
 * - FooterKbar
 * @returns
 * @version 2.0
 */

export function FooterLove() {
  const [ThemeSound] = useSound('/sounds/switch-on.mp3', { volume: 1 })
  return (
    <>
      <span className="mx-2 text-sm">
        {`© 2023 `}
        <Tooltip text="find me here">
          <Link
            onClick={() => {
              ThemeSound()
            }}
            href={metadata.discord}
            target="_blank"
            className="text-sm text-slate-600 underline transition-colors duration-200 ease-in-out hover:text-pink-500 dark:text-white dark:hover:text-pink-500"
          >
            Thien Nguyen
          </Link>
          {` • from a boy who was never enough.`}
        </Tooltip>
      </span>
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

export function FooterKbar() {
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  const { query } = useKBar()
  return (
    <>
      <Tooltip text="Kbar">
        <button
          aria-label="Kbar"
          rel="noreferrer"
          className="m-auto"
          onClick={(e) => {
            e.preventDefault()
            ThemeSound()
            query.toggle()
          }}
        >
          <div
            className={cn(
              buttonVariants({ size: 'sm', variant: 'ghost' }),
              'w-7 px-0 hover:-rotate-12 hover:bg-slate-50 dark:hover:bg-gray-500'
            )}
          >
            <BsCommand className="h-6 w-5" />
          </div>
        </button>
      </Tooltip>
    </>
  )
}
