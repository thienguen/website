'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'
import { ICONS } from '@/components/purojekuto/(render)/Purojekuto'

// import { useTheme } from 'next-themes'

type LottieRef = React.MutableRefObject<LottieRefCurrentProps | null>

const useActions = () => {
  const router = useRouter()
  const iconRef: LottieRef = useRef<LottieRefCurrentProps | null>(null)
  // const { theme, setTheme } = useTheme()

  // function toggleTheme(currentTheme: string | undefined, setThemeFunc: (theme: 'dark' | 'light') => void) {
  //   if (!currentTheme) setThemeFunc('light');

  //   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  //   // Store the timestamp in local storage.
  //   localStorage.setItem('themeChangeTimestamp', Date.now().toString());

  //   // Toggle the theme.
  //   setThemeFunc(newTheme);

  //   // Add a slight delay before reloading the page to give setTheme time to finish.
  //   setTimeout(() => {
  //     location.reload();
  //   }, 100); // 100ms delay for example. Adjust as needed.
  // }

  return [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'home page',
      section: 'Navigation',
      subtitle: 'Probably',
      perform: () => router.push('/'),
      icon: (
        <Lottie lottieRef={iconRef} animationData={ICONS['home']} loop={true} autoplay={true} className="h-5 w-5 " />
      ),
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'about me',
      section: 'Navigation',
      subtitle: 'Probably',
      perform: () => router.push('/about'),
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
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'Nothing here tbh',
      section: 'Navigation',
      subtitle: 'Probably',
      perform: () => router.push('/projects'),
      icon: (
        <Lottie lottieRef={iconRef} animationData={ICONS['source']} loop={true} autoplay={true} className="h-5 w-5 " />
      ),
    },
    {
      id: 'guestbook',
      name: 'Guestbook',
      shortcut: ['g', 'b'],
      keywords: 'Say hi!',
      section: 'Navigation',
      subtitle: 'Probably',
      perform: () => router.push('/guestbook'),
      icon: (
        <Lottie lottieRef={iconRef} animationData={ICONS['email']} loop={true} autoplay={true} className="h-5 w-5" />
      ),
    },
    // {
    //   id: 'theme',
    //   name: 'Theme Change',
    //   shortcut: ['g', 't'],
    //   keywords: 'Say hi!',
    //   section: 'Nani',
    //   subtitle: 'Probably',
    //   perform: () => toggleTheme(theme, setTheme),
    //   icon: (
    //     <Lottie
    //       lottieRef={iconRef}
    //       animationData={ICONS['heart']}
    //       loop={true}
    //       autoplay={true}

    //       className="h-5 w-5"
    //     />
    //   ),
    // },
    {
      id: 'idk',
      name: 'Short cut is currently broken, esc to close',
      shortcut: ['z'],
      keywords: 'DO SOMETHING GODDAMNIT',
      section: 'Important',
      subtitle: 'Its me, Mario!',
      // perform: () => window.open(metadata.github, '_blank'),
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
  ]
}

export default useActions
