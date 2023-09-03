'use client'

/* Framework */
import { useEffect, useState } from 'react'
// Libraries
import { useTheme } from 'next-themes'
import { HiOutlineSun } from 'react-icons/hi'
import { WiMoonAltWaningCrescent2 } from 'react-icons/wi'
import useSound from 'use-sound'
// Src
import { Button } from '@/components/ui/custom-button'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [disabled, setDisabled] = useState(false) // <-- State to manage button's disabled status
  const [ThemeSound] = useSound('/sounds/switch-on.mp3', { volume: 1 })

  useEffect(() => {
    const changeTime = localStorage.getItem('themeChangeTimestamp')

    // store on local storage the last time the theme was change
    // if the time is less than 7 seconds, disable the button
    // This prevent user intentionally spamming the button
    if (changeTime) {
      const elapsedTime = Date.now() - Number(changeTime)
      if (elapsedTime < 7000) {
        // less than 7 seconds
        setDisabled(true)
        const remainingTime = 7000 - elapsedTime
        setTimeout(() => {
          setDisabled(false)
        }, remainingTime)
      }
    }
  }, [])

  const handleThemeChange = () => {
    // Set the button to disabled and show the message
    setDisabled(true)
    setTheme(theme === 'dark' ? 'light' : 'dark')

    location.reload() // this will refresh the page
    localStorage.setItem('themeChangeTimestamp', Date.now().toString())
    // Reset the button to active state
    // and hide the message after 1.5 seconds
    setTimeout(() => {
      setDisabled(false)
    }, 3000)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-9 w-10 hover:bg-slate-50 dark:hover:bg-gray-500"
      onClick={() => {
        ThemeSound()
        handleThemeChange()
      }} // <-- Updated onClick handler
      disabled={disabled}
      rel="noreferrer"
    >
      <WiMoonAltWaningCrescent2 className="absolute h-5 w-4 rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
      <HiOutlineSun className="absolute h-5 w-4 rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100" />
    </Button>
  )
}

export default ThemeToggle
