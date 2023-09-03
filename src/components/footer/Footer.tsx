import clsx from 'clsx'
import {
  FooterEmail,
  FooterGithub,
  FooterKbar,
  FooterLinkedin,
  FooterLove,
  FooterProfile,
} from '@/components/footer/FooterIcons'

import Presence from '@/components/footer/lanyard/presence'

type FooterBarProps = {
  isFullWidth?: boolean
}

const FooterBar = ({ isFullWidth }: FooterBarProps) => {
  return (
    <div className={clsx(isFullWidth ? 'w-full' : 'w-11/12 lg:w-2/3', 'mx-auto')}>
      {/* Footer Bar section */}
      <div className="flex h-[15px] items-center justify-between">
        {/* Dot at the beginning */}
        <div
          className={`flex h-3 w-3 items-center justify-center rounded-full bg-gradient-to-b from-gray-600 to-gray-400   shadow dark:bg-gradient-to-b dark:from-gray-50 dark:to-gray-100`}
        />

        {/* Bar in between */}
        <div className={`h-[2px] grow bg-slate-800 dark:bg-slate-50`} />

        {/* Dot at the end */}
        <div
          className={`flex h-3 w-3 items-center justify-center rounded-full bg-gradient-to-b from-gray-600 to-gray-400  shadow dark:bg-gradient-to-b dark:from-gray-50 dark:to-gray-100`}
        />
      </div>
    </div>
  )
}

/**
 * @version 1.0 this thing is a pain 6-24-2023
 * @version 2.0 indeed it is
 */
export default function Footer() {
  return (
    <>
      {/* <div className="mx-auto flex w-11/12 max-w-7xl dark:border-white border-t border-gray-300 lg:w-2/3" /> */}
      <footer className="bg-gray-300 shadow-md dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          {/* CAN IT BE OVER HERE */}

          {/* Bar */}
          <div className="flex w-full flex-row justify-start">
            <Presence />
          </div>

          <div>
            <FooterBar isFullWidth={true} />
          </div>

          {/* Content */}
          <div className="m-auto flex flex-col items-center justify-between px-4 md:h-10 md:flex-row lg:flex-row">
            <div className="z-20 flex items-center justify-center text-sm text-muted-foreground">
              <FooterLove />
            </div>

            <div className="z-20 flex items-center space-x-3">
              <FooterGithub />
              <FooterLinkedin />
              <FooterEmail />
              <FooterKbar />
              <FooterProfile />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
