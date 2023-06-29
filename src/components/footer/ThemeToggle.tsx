'use client'

/* Framework */
// Libraries
import { useTheme } from 'next-themes'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

// Src
import { Button } from '@/components/ui/button'
import { Tooltip } from '@/components/common/Tooltip'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Tooltip text="Changing Theme">
      <Button
        variant="ghost"
        size="sm"
        className="w-9 px-0 hover:bg-slate-50 dark:hover:bg-gray-500" // force hover
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        rel="noreferrer"
      >

        {/*  */}
        <HiOutlineSun className="h-6 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        {/*  */}
        <HiOutlineMoon className="absolute h-6 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </Tooltip>
  )
}
