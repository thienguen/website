'use client'

/* Framework */
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
// Libraries
import { BsSun } from 'react-icons/bs'
import { WiMoonAltWaningCrescent2 } from 'react-icons/wi'
import useSound from 'use-sound'
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
      if (elapsedTime < 3000) {
        // less than 7 seconds
        setDisabled(true)
        const remainingTime = 3000 - elapsedTime
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

    // Reset the button to active state
    // and hide the message after 1.5 seconds
    localStorage.setItem('themeChangeTimestamp', Date.now().toString())
    location.reload() // this will refresh the page

    setTimeout(() => {
      setDisabled(false)
    }, 3000)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="mr-6 mt-1 h-8 hover:bg-slate-50 dark:hover:bg-gray-500"
      onClick={() => {
        ThemeSound()
        handleThemeChange()
      }} // <-- Updated onClick handler
      disabled={disabled}
      rel="noreferrer"
    >
      <div className="flex  items-center justify-center">
        <WiMoonAltWaningCrescent2 className="h-8 w-8 rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-0" />
        <BsSun className="absolute h-8 w-8 rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100" />
      </div>
    </Button>
  )
}

export default ThemeToggle
