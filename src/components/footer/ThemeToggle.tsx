'use client'

/* Framework */
import { useEffect, useState } from 'react'
// Libraries
import { useTheme } from 'next-themes'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
// Src
import { Button } from '@/components/ui/button'
import { Tooltip } from '@/components/common/Tooltip'

export function ThemeToggle() {
  const { theme, setTheme }     = useTheme()
  const [disabled, setDisabled] = useState(false) // <-- State to manage button's disabled status


  useEffect(() => {
    const changeTime = localStorage.getItem('themeChangeTimestamp')

    // store on local storage the last time the theme was change
    // if the time is less than 7 seconds, disable the button
    // This prevent user intentionally spamming the button
    if (changeTime) {
      const elapsedTime = Date.now() - Number(changeTime)
      if (elapsedTime < 7000) { // less than 7 seconds
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
    
    localStorage.setItem('themeChangeTimestamp', Date.now().toString())
    location.reload() // this will refresh the page
    // Reset the button to active state
    // and hide the message after 1.5 seconds
    setTimeout(() => {
      setDisabled(false)
    }, 7000)
  }

  return (
    <Tooltip
      text={`${disabled ? 'Changing theme in background' : 'Changing Theme, this took 5s so please be patient!'}`}
      isThemetoogle
    >
      <Button
        variant="ghost"
        size="sm"
        className="w-7 px-0 hover:bg-slate-50 dark:hover:bg-gray-500"
        onClick={handleThemeChange} // <-- Updated onClick handler
        disabled={disabled}         // <-- Add disabled prop
        rel="noreferrer"
      >
        <HiOutlineSun className="h-6 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <HiOutlineMoon className="absolute h-6 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </Tooltip>
  )
}
