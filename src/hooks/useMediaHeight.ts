import { useCallback, useEffect, useState } from "react"

export const useMediaHeight = (height: string, max?: boolean) => {
  const [targetReached, setTargetReached] = useState<null | boolean>(null)

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    let media = window.matchMedia(`(min-height: ${height})`)

    if (max) {
      media = window.matchMedia(`(max-height: ${height})`)
    }
    media.addEventListener('change', (e) => updateTarget(e))

    if (media.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }

    return () => media.removeEventListener('change', updateTarget)
  }, [height, max, updateTarget])

  return targetReached
}
