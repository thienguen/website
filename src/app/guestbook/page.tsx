'use client'

/**
 * Plans to make guestbook
 * 1. Set up nextauth, or an authientication system { [nextauth, jwt, bcrypt], [clerk] } -- partially done
 * 2. Set up a database, storing the messages [ planetscale ] -- done
 * 3. Set up a form, to send the messages to the database [ react-hook-form ]
 * ------------------------------------------------------------------------
 * 4. Set up api to display the messages [ react-query ]
 * 6. Set up prisma to call the api [ prisma ] -- done
 * 7. Connect db and api [ prisma ]
 * ------------------------------------------------------------------------
 */
import { useState } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { signIn, useSession } from 'next-auth/react'
// import { SignIn, SignOut } from '@/app/guestbook/authState'

import LoadingSpinner from '@/components/ui/loading-spinner'

export const metadata: Metadata = {
  title: '/guestbook',
  description: 'metadata is a funny lil concept.',
}

export const dynamic = 'force-dynamic'

export default function Contact() {
  const { data: session } = useSession()
  const [isLoadingGithub, setIsLoadingGithub] = useState<boolean>()

  return (
    <>
      <div className="mx-auto mb-16 flex max-w-3xl flex-col items-start justify-center">
        {/* Header */}
        <div className="space-y-2 p-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
            {`Guestbook`}
          </h1>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {`Acient technology from the 90's webs. Leave a comment below for my future visitors. !`}
          </p>
        </div>

        {/* <Guestbook fallbackData={fallbackData} /> */}
        {!session && (
          <div className="flex flex-row">
            <Link
              href="/api/auth/signin/"
              className="mx-2 my-4 flex h-20 w-1/2 items-center justify-center rounded bg-neutral-100 font-light text-gray-900 ring-gray-300 transition-all hover:ring-2 dark:bg-zinc-800 dark:text-gray-100"
              onClick={(e) => {
                e.preventDefault();
                signIn()
                  .then(() => {
                    setIsLoadingGithub(true);
                  })
                  .catch((error) => {
                    console.error('Error during sign in:', error);
                  });
              }}
            >
              {isLoadingGithub ? (
                <>
                  Loading <LoadingSpinner />
                </>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-2 dark:text-neutral-300">Github</div>
                </div>
              )}
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
