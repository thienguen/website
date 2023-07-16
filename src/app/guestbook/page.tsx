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
// import { type Metadata } from 'next'
// import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { useEntries } from '@/hooks/useEntries'
import { SignIn, SignOut } from '@/components/ui/auth-buttons'
import { GuestBookEntry } from '@/components/guestbook/GuestBookEntry'
import GuestBookForm from '@/components/guestbook/GuestBookForm'

// export const metadata: Metadata = {
//   title: '/guestbook',
//   description: 'metadata is a funny lil concept.',
// }

export const dynamic = 'force-dynamic'

export default function Guestbook() {
  const { data: session } = useSession()

  const { entries, handleEntryDelete } = useEntries()

  return (
    <>
      <div className="mx-auto mb-12 mt-6 flex max-w-2xl flex-col items-start justify-center">
        {/* Header */}
        <div className="space-y-1 p-4 md:space-y-5">
          <h1 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-6 md:text-3xl">
            {`Guestbook`}
          </h1>
          <p className="text-base leading-5 text-gray-500 dark:text-gray-400">
            {`Welcome to the 90's Web Guestbook! Say hi and let I know you were here in this retro digital oasis.`}
          </p>
        </div>

        {session?.user ? (
          <>
            <GuestBookForm />
            <div className="flex w-full justify-center">
              <SignOut />
            </div>
          </>
        ) : (
          <div className="flex w-full justify-center">
            <SignIn />
          </div>
        )}

        <div className="w-full">
          {entries?.map((entry) => (
            <GuestBookEntry
              key={entry.id.toString()}
              entry={entry}
              user={session?.user}
              onEntryDelete={() => handleEntryDelete(entry.id.toString())}
            />
          ))}
        </div>
      </div>
    </>
  )
}
