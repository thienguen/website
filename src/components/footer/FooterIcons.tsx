'use client'

/* Trash */
import { useState } from 'react'
import Link from 'next/link'

/* Hooks */
import useSound from 'use-sound'
import { useKBar } from 'kbar'

/* Icons */
import { Github, Twitter } from 'lucide-react'
import { BsCommand } from 'react-icons/bs'
import { /*  AiOutlineHeart, */ AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

/* UI, sup */
import { cn } from '@/lib/util/util'
import { buttonVariants } from '@/components/ui/custom-button'
import { Tooltip } from '@/components/common/Tooltip'
import { metadata } from '@/app/api/metadata'

/**
 * All the right hand side of the footer functionality, 
 * @recommended fold code 
 * To see the full view
 * Include:
 *   - FooterLove
 *   - FooterGithub
 *   - FooterInstagram
 *   - FooterLinkedin
 *   - FooterTwitter
 *   - FooterEmail
 *   - FooterProfile
 *   - FooterKbar
 * @returns
 * @version 2.0
 */

export function FooterLove() {
  const [ThemeSound] = useSound('/sounds/switch-on.mp3', { volume: 1 })
  return (
    <span className="sm:balanced mx-2 text-base text-slate-700 dark:text-slate-300">
      <span className='opacity-95 dark:opacity-70'>
        {`© 2023 `}
      </span>

      <Link
        onClick={() => {
          ThemeSound()
        }}
        href={metadata.discord}
        target="_blank"
      >
        <Tooltip text="find me here">
          <span className="text-slate-950 opacity-100 transition-colors duration-200 ease-in-out hover:text-pink-500 dark:text-white dark:hover:text-pink-500">
            Thien Nguyen
          </span>
        </Tooltip>
      </Link>
      <span className='opacity-95 dark:opacity-70'>
        {` • from a boy who was never enough.`}
      </span>
    </span>
  )
}

export function FooterGithub() {
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
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
  )
}

export function FooterInstagram() {
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
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
  )
}

export function FooterLinkedin() {
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
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
  )
}

export function FooterTwitter() {
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
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
  )
}

export function FooterEmail() {
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  return (
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
  )
}

export function FooterKbar() {
  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 1 })
  const { query } = useKBar()
  const [isToggled, setIsToggled] = useState(false) // State to track toggle

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    ThemeSound()

    if (isToggled) {
      query.disable // Notice there was an error here as well. You missed the function invocation `()`.
    } else {
      query.toggle()
    }

    setIsToggled(!isToggled) // Flip the state for next click
  }

  return (
    <Tooltip text="Kbar">
      <button aria-label="Kbar" rel="noreferrer" className="m-auto" onClick={handleButtonClick}>
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
  )
}
