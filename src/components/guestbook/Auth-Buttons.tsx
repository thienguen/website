import { useState } from 'react'
import { signIn, signOut } from 'next-auth/react'
import LoadingSpinner from '@/components/ui/loading-spinner'
import { Icons } from '../ui/icons'

const SignInGithub = () => {
  const [isLoadingGithub, setIsLoadingGithub] = useState<boolean>()

  return (
    <button
      className="m-2 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm leading-4 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-600"
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
          {Icons.github({ size: 20 })}
          <div className="ml-3">Sign in with Github</div>
        </>
      )}
    </button>
  )
}

const SignInGoogle = () => {
  const [isLoadingGoogle, setisLoadingGoogle] = useState<boolean>()

  return (
    <button
      className="m-2 inline-flex items-center rounded border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm leading-4 text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-600"
      onClick={(e) => {
        e.preventDefault()
        signIn('google')
          .then(() => {
            setisLoadingGoogle(true)
          })
          .catch((error) => {
            console.error('Error during sign in:', error)
          })
      }}
    >
      {isLoadingGoogle ? (
        <>
          Loading <LoadingSpinner />
        </>
      ) : (
        <>
          {Icons.google({ size: 20 })}
          <div className="ml-3">Sign in with Google</div>
        </>
      )}
    </button>
  )
}

const SignOut = () => {
  return (
    <button
      className="w-2/12 rounded-lg bg-slate-500 p-1.5 px-3 font-dosis text-xs tracking-wider text-neutral-100 transition-colors duration-200 ease-in-out hover:opacity-80 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
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

export { SignInGithub, SignInGoogle, SignOut }