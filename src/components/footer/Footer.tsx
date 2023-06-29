import { cn } from '@/lib/util/util'
import {
  FooterGithub,
  FooterInstagram,
  FooterLinkedin,
  FooterLove,
  FooterProfile,
  FooterTwitter,
} from '@/components/footer/FooterIcons'
import { ThemeToggle } from '@/components/footer/ThemeToggle'

export default function Footer() {
  return (
    <div
      className={cn(
        'bg-gradient-to-b from-slate-300 to-gray-400', // light
        'dark:bg-gradient-to-b dark:from-black dark:to-gray-900' // dark
      )}
    >
      <footer className="border-t border-black bg-gray-200 shadow-md dark:border-white dark:bg-gray-800">
        <div className="container flex flex-col items-center justify-between space-y-1 py-5 sm:w-[530px] md:h-16 md:w-[800px] md:flex-row md:py-0 lg:w-[1076px] xl:w-[1076px]">
          <div className="flex items-center justify-center text-base ">
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
    </div>
  )
}
