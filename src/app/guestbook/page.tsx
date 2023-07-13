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
import { type FormEvent } from 'react'

import { useSession } from 'next-auth/react'
import { useForm, type FieldValues } from 'react-hook-form' // stupid

import createGuestbookEntry from '@/hooks/useGuestbook'
import { SignIn, SignOut } from '@/components/ui/auth-buttons'

type formSchema = {
  content: string
}

// export const metadata: Metadata = {
//   title: '/guestbook',
//   description: 'metadata is a funny lil concept.',
// }

export const dynamic = 'force-dynamic'

export default function Contact() {
  const { data: session } = useSession()

  const { register, handleSubmit, reset } = useForm<formSchema>()

  const customHandleSubmit =
    (submitFunction: (data: formSchema) => Promise<void>) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      void handleSubmit((data: FieldValues) => submitFunction(data as formSchema))(e)
    }

  const onSubmit = async (data: formSchema) => {
    console.log(data)
    await createGuestbookEntry({
      email: session?.user?.email ?? 'Anonymous',
      content: data.content,
      created_by: session?.user?.name ?? 'Anonymous',
    })
    reset()
  }

  return (
    <>
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        {/* Header */}
        <div className="space-y-2 p-6 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl">
            {`Guestbook`}
          </h1>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {`Acient technology from the 90's webs. Say hi and I know that you were here!`}
          </p>
        </div>

        {/* SEPARATING FROM HERE */}

        <h1 className="mr-6 flex w-full flex-col items-center justify-center text-center text-xl font-bold tracking-tighter">
          sign my guestbook
        </h1>

        {/* {!session && (
            <>
              <SignIn />
            </>
          )}

          {session && (
            <>
              <SignOut />
            </>
          )} */}

        {/* {session?.user ? (
            <>
              <SignOut />
            </>
          ) : (
            <SignIn />
          )} */}

        {session?.user ? (
          <>
            <form onSubmit={customHandleSubmit(onSubmit)} className="relative max-w-[500px] text-sm">
              <label htmlFor="content" className="sr-only">
                Your Message
              </label>
              <textarea
                {...register('content', { required: true })}
                id="content"
                className="mt-1 block w-full rounded-md border-neutral-300 bg-gray-100 py-2 pl-4 pr-32 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 flex h-7 w-16 items-center justify-center rounded bg-neutral-200 px-2 py-1 font-medium text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
                disabled={!session?.user}
              >
                Sign
              </button>
              <SignOut />
            </form>
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </>
  )
}
