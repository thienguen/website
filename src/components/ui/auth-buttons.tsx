import { useState } from 'react'

import { signIn, signOut } from 'next-auth/react'

import LoadingSpinner from '@/components/ui/loading-spinner'

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

const SignIn = () => {
  const [isLoadingGithub, setIsLoadingGithub] = useState<boolean>()

  return (
    <button
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-3 py-2 text-sm leading-4 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-600"
      onClick={(e) => {
        e.preventDefault()
        signIn('github')
          .then(() => {
            setIsLoadingGithub(true)
          })
          .catch((error) => {
            console.error('Error during sign in:', error)
          })
      }}
    >
      {isLoadingGithub ? (
        <>
          Loading <LoadingSpinner />
        </>
      ) : (
        <>
          {/* <div className="mb-2 dark:text-neutral-300">Sign in with Github</div> */}
          <GitHubIcon />
          <div className="ml-3">Sign in with GitHub</div>
        </>
      )}
    </button>
  )
}

const SignOut = () => {
  return (
    <button
      className="rounded border border-neutral-200 bg-neutral-50 p-2 px-3 text-xs text-neutral-700 transition-colors duration-200 ease-in-out hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
      onClick={(e) => {
        e.preventDefault()
        signOut().catch((error) => {
          console.error('Error during sign out:', error)
        })
      }}
    >
      Sign out
    </button>
  )
}

export { SignIn, SignOut }
