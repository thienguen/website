import clsx from 'clsx'
import {
  FooterGithub,
  FooterInstagram,
  FooterLinkedin,
  FooterLove,
  FooterProfile,
  FooterTwitter,
} from '@/components/footer/FooterIcons'
import { ThemeToggle } from '@/components/footer/ThemeToggle'

type FooterBarProps = {
  isFullWidth?: boolean
}

const FooterBar = ({ isFullWidth }: FooterBarProps) => {
  return (
    <div className={clsx(isFullWidth ? 'w-full' : 'w-11/12 lg:w-2/3', 'mx-auto')}>
      {/* Footer Bar section */}
      <div className="flex h-[12px] items-center justify-between">
        {/* Dot at the beginning */}
        <div className={`flex h-3 w-3 items-center justify-center rounded-full bg-blue-800  shadow dark:bg-gray-50`} />

        {/* Bar in between */}
        <div className={`h-[2px] grow bg-slate-800 dark:bg-slate-50`} />

        {/* Dot at the end */}
        <div className={`flex h-3 w-3 items-center justify-center rounded-full bg-blue-800 shadow dark:bg-gray-50`} />
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <>
      {/* <div className="mx-auto flex w-11/12 max-w-7xl dark:border-white border-t border-gray-300 lg:w-2/3" /> */}
      <footer className="bg-gray-300 shadow-md dark:bg-gray-900">
        <div className="">
          <FooterBar isFullWidth={false} />
        </div>
        <div className="m-auto flex w-11/12 items-center justify-between px-4 sm:flex-col md:h-10 md:flex-row lg:w-2/3 lg:flex-row">
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            {/* The icon is here looking for it now */}
            <FooterLove />
          </div>

          <div className="flex items-center space-x-1">
            <FooterGithub />
            <FooterInstagram />
            <FooterLinkedin />
            <FooterTwitter />

            {/* This thing is a pain 6-24-2023 */}
            <ThemeToggle />
            <FooterProfile />
          </div>
        </div>
      </footer>
    </>
  )
}
