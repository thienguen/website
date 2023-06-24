import {
  FooterGithub,
  FooterInstagram,
  FooterLinkedin,
  FooterLove,
  FooterTwitter,
} from '@/components/footer/FooterIcons'
import { ThemeToggle } from '@/components/footer/ThemeToggle'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between space-y-1 py-5 md:h-16 md:flex-row md:py-0">
        <div className="flex items-center justify-center text-base text-muted-foreground">
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
        </div>
      </div>
    </footer>
  )
}
