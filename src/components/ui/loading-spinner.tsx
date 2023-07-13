/**
 * Copi Copi
 * @returns a loading spinner that animate-spin
 */
export default function LoadingSpinner() {
  return (
    <svg className="ml-3 h-5 w-5 animate-spin text-neutral-900 dark:text-neutral-100" viewBox="0 0 50 50">
      <circle className="stroke-current opacity-25" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
      <circle
        className="stroke-current opacity-75"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
        strokeDasharray="120"
        strokeDashoffset="60"
      />
    </svg>
  )
}
