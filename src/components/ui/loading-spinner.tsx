type loadingSpinnerProps = {
  stuff?: string
}

/**
 * Copi Copi, could have install loading sponner
 * @returns a loading spinner that animate-spin
 */
export default function LoadingSpinner({ stuff }: loadingSpinnerProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center">
        {stuff ? <p className="text-[11px]">{stuff}</p> : null}
        <svg className="h-3 w-3 animate-spin text-neutral-900 dark:text-neutral-100" viewBox="0 0 50 50">
          <circle className="stroke-current opacity-25" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
          <circle className="stroke-current opacity-75" cx="25" cy="25" r="20" fill="none" strokeDasharray="120" strokeDashoffset="60" />
        </svg>
      </div>
    </div>
  )
}
