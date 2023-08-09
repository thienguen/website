import { useCallback, useEffect, useState } from 'react'

export const useMediaQuery = (width: string) => {
  // Initialized to null to indicate a "loading" state
  const [targetReached, setTargetReached] = useState<null | boolean>(null)

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width})`)
    media.addEventListener('change', (e) => updateTarget(e))
    
    // On component mount, we immediately check the media query's state
    if (media.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
    
    return () => media.removeEventListener('change', updateTarget) // Fixed the removeEventListener
  }, [width, updateTarget])

  return targetReached
}
