'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'
import { ICONS } from '@/components/ui/icons'
import { metadata } from '@/app/api/metadata'

// import { useTheme } from 'next-themes'

type LottieRef = React.MutableRefObject<LottieRefCurrentProps | null>

const useActions = () => {
  const router = useRouter()
  const iconRef: LottieRef = useRef<LottieRefCurrentProps | null>(null)

  // const { theme, setTheme, resolvedTheme } = useTheme()
  // function toggleTheme(currentTheme: string | undefined, setThemeFunc: (theme: 'dark' | 'light') => void) {
  // console.log('toggleTheme', currentTheme, setThemeFunc)
  // console.log('resolvedTheme', resolvedTheme)
  // if (!currentTheme) setThemeFunc('dark');
  // const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  // // Store the timestamp in local storage.
  // localStorage.setItem('themeChangeTimestamp', Date.now().toString());
  // // Toggle the theme.
  // setThemeFunc(newTheme);
  // // Add a slight delay before reloading the page to give setTheme time to finish.
  // setTimeout(() => {
  //   location.reload();
  // }, 100); // 100ms delay for example. Adjust as needed.
  // }

  const routerPushnSound = (path: string) => {
    router.push(path)
  }

  return [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['l', 'i'],
      keywords: 'l i',
      section: 'Important',
      perform: () => {
        window.open(`${metadata.linkedin}`, '_blank')
      },
      icon: (
        <Lottie lottieRef={iconRef} animationData={ICONS['fig']} loop={true} autoplay={true} className="h-5 w-5 " />
      ),
    },
    {
      id: 'discord',
      name: 'Discord',
      shortcut: ['d', 'c'],
      keywords: 'd c',
      section: 'Important',
      // subtitle: 'Its me, Mario!',
      perform: () => {
        window.open(`https://discord.com/users/${metadata.discord}`, '_blank')
      },
      icon: (
        <Lottie lottieRef={iconRef} animationData={ICONS['email']} loop={true} autoplay={true} className="h-5 w-5 " />
      ),
    },
    {
      id: 'mail',
      name: 'Email',
      shortcut: ['e', 'm'],
      keywords: 'e m',
      section: 'Important',
      // subtitle: 'Its me, Mario!',
      perform: () => {
        window.open(`mailto:${process.env.NEXT_PUBLIC_EMAIL ?? ''}`, '_blank')
      },
      icon: (
        <Lottie lottieRef={iconRef} animationData={ICONS['uses']} loop={true} autoplay={true} className="h-5 w-5 " />
      ),
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'g h',
      section: 'Navigation',
      // subtitle: 'Probably',
      perform: () => routerPushnSound('/'),
      icon: (
        <Lottie lottieRef={iconRef} animationData={ICONS['home']} loop={true} autoplay={true} className="h-5 w-5 " />
      ),
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'g p',
      section: 'Navigation',
      // subtitle: 'Probably',
      perform: () => routerPushnSound('/projects'),
      icon: (
        <Lottie lottieRef={iconRef} animationData={ICONS['source']} loop={true} autoplay={true} className="h-5 w-5 " />
      ),
    },
    {
      id: 'guestbook',
      name: 'Guestbook',
      shortcut: ['g', 'b'],
      keywords: 'g b',
      section: 'Navigation',
      // subtitle: 'Probably',
      perform: () => routerPushnSound('/guestbook'),
      icon: (
        <Lottie lottieRef={iconRef} animationData={ICONS['heart']} loop={true} autoplay={true} className="h-5 w-5" />
      ),
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      shortcut: ['g', 'd'],
      keywords: 'g c',
      section: 'Navigation',
      // subtitle: 'Probably',
      perform: () => routerPushnSound('/dashboard'),
      icon: (
        <Lottie lottieRef={iconRef} animationData={ICONS['download']} loop={true} autoplay={true} className="h-5 w-5" />
      ),
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'g a',
      section: 'Navigation',
      // subtitle: 'Reconstruction-ing, scratch ver 1.0',
      perform: () => routerPushnSound('/about'),
      icon: (
        <Lottie
          lottieRef={iconRef}
          animationData={ICONS['podcasts']}
          loop={true}
          autoplay={true}
          className="h-5 w-5 "
        />
      ),
    },
    {
      id: 'idk',
      name: 'Esc to close',
      shortcut: ['z'],
      keywords: 'Notice',
      section: 'Isumi Mario',
      subtitle: 'Nan',
      icon: (
        <Lottie
          lottieRef={iconRef}
          animationData={ICONS['clipboard']}
          loop={true}
          autoplay={true}
          className="h-5 w-5 "
        />
      ),
    },

    // {
    //   id: 'theme',
    //   name: 'Change Theme',
    //   shortcut: ['g', 't'],
    //   keywords: 'Say hi!',
    //   section: 'Navigation',
    //   subtitle: 'Probably',
    //   perform: () => toggleTheme(theme, setTheme),
    //   icon: (
    //     <Lottie
    //       lottieRef={iconRef}
    //       animationData={ICONS['uses']}
    //       loop={true}
    //       autoplay={true}

    //       className="h-5 w-5"
    //     />
    //   ),
    // },
  ]
}

export default useActions
