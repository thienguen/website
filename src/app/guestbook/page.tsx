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

import { createGuestbookEntry, deleteGuestbookEntry } from '@/hooks/useGuestbook'
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
      <div className="mx-auto mb-16 mt-8 flex max-w-3xl flex-col items-start justify-center">
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

        {session?.user ? (
          <>
            <div className="mx-auto my-2 w-full max-w-2xl rounded-md border border-gray-200 bg-white px-6 py-2 shadow-xl shadow-gray-400 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
              <div className="grid items-center justify-center">
                <h1 className="mr-6 flex w-full flex-col items-center justify-center text-center text-xl font-bold tracking-tighter">
                  sign my guestbook
                </h1>
              </div>
              <div className="flex flex-col">
                <form onSubmit={customHandleSubmit(onSubmit)} className="mb-2 flex flex-col items-center space-y-4">
                  <label htmlFor="content" className="sr-only">
                    {`Your Message`}
                  </label>
                  <textarea
                    {...register('content', { required: true })}
                    id="content"
                    aria-label="Your message"
                    placeholder="Your message..."
                    required
                    rows={3}
                    maxLength={500}
                    className="w-full rounded-md border border-gray-300 text-sm shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:focus:border-gray-700 dark:focus:ring-neutral-600"
                  />

                  <button
                    type="submit"
                    className="grid w-full place-items-center rounded bg-neutral-100 px-3 py-1 font-medium ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600"
                    disabled={!session?.user}
                  >
                    Sign
                  </button>
                </form>
              </div>
            </div>

            <SignOut />
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </>
  )
}
