'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Tooltip } from '@/components/common/Tooltip'
import { type ProjectCareerProps } from '@/components/purojekuto/(render)/one/one.type'

type OneCareerItemProps = {
  career: ProjectCareerProps
}

function OneCareerItem({ career }: OneCareerItemProps) {
  const { theme } = useTheme()

  const darkPrimaryColor    = '#84FFB8'
  const darkSecondaryColor  = '#82FFDA'
  const lightPrimaryColor   = '#D87787'
  const lightSecondaryColor = '#861657'

  const [primaryColor, setPrimaryColor]     = useState(darkPrimaryColor)
  const [secondaryColor, setSecondaryColor] = useState(darkSecondaryColor)

  useEffect(() => {
    if (theme === 'dark') {
      setPrimaryColor(darkPrimaryColor)
      setSecondaryColor(darkSecondaryColor)
    } else {
      setPrimaryColor(lightPrimaryColor)
      setSecondaryColor(lightSecondaryColor)
    }
  }, [theme])

  return (
    <li>
      <Tooltip text={career.description ?? ''}>
        <p
          className="cursor-grab font-dosis hover:opacity-80"
          style={{
            backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
            backgroundSize: '100% 0.075em',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 92%',
            transition: 'background-size 0.25s ease-in, opacity 0.25s ease-in',
          }}
        >
          {career.title}
        </p>
      </Tooltip>
    </li>
  )
}

export default OneCareerItem