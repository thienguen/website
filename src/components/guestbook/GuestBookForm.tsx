'use client'

import { useState, type FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { useForm, type FieldValues } from 'react-hook-form'
import { useEntries } from '@/hooks/useEntries'
import { createGuestbookEntry } from '@/hooks/useGuestbook'
import { GuestBookEntry } from '@/components/guestbook/GuestBookEntry'
import { SignIn, SignOut } from '../ui/auth-buttons'
import LoadingSpinner from '../ui/loading-spinner'

type formSchema = {
  content: string
}

export default function GuestBookForm() {
  /**
   * user login: useSession
   *   - sign in and sign out buttons
   * guestbook entries: useEntries
   *   - pull data from api, and display it (via planetscale + prisma)
   * form submission: useForm
   *   - customed Form, with a text area and a submit button
   */
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession()
  const { register, handleSubmit, reset } = useForm<formSchema>()
  const { entries, handleEntryDelete } = useEntries(isLoading)

  const customHandleSubmit =
    (submitFunction: (data: formSchema) => Promise<void>) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      void handleSubmit((data: FieldValues) => submitFunction(data as formSchema))(e)
    }

  const onSubmit = async (data: formSchema) => {
    setIsLoading(true) // Set isLoading to true before submitting the form
    try {
      await createGuestbookEntry({
        email: session?.user?.email ?? 'Anonymous',
        content: data.content,
        created_by: session?.user?.name ?? 'Anonymous',
      })
      reset()
      setIsLoading(false) // Set isLoading to false after the form submission is complete
    } catch (error) {
      setIsLoading(false) // Set isLoading to false if an error occurs during form submission
      console.error('Error during form submission:', error)
    }
  }

  return (
    <>
      {session?.user ? (
        <div className="flex w-full justify-end">
          <SignOut />
          <div className="w-10/12">
            <h1 className="flex w-full flex-col items-center justify-center text-center text-base tracking-tighter">
              sign my guestbook
            </h1>
            <div className="mx-auto my-2 w-full max-w-xl rounded-md border border-gray-200 bg-white px-4 py-1 shadow-xl shadow-gray-400 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
              <div className="flex flex-col">
                <form onSubmit={customHandleSubmit(onSubmit)} className="mb-2 flex flex-col items-center space-y-3">
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
                    className="w-full rounded-md border border-gray-300 p-2 text-xs shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:focus:border-gray-700 dark:focus:ring-neutral-600"
                  />

                  <button
                    type="submit"
                    className="grid w-full place-items-center rounded bg-slate-300 px-2 py-0.5 font-medium ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600"
                    disabled={!session?.user || isLoading} // Disable the button when user is not signed in or when loading is in progress
                  >
                    {isLoading ? <LoadingSpinner/> : 'Sign'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center text-center">
          <SignIn />
        </div>
      )}

      <div className="w-full">
        {entries?.map((entry) => (
          <GuestBookEntry
            key={entry.id.toString()}
            entry={entry}
            user={session?.user}
            onEntryDelete={() => handleEntryDelete(entry.id)}
          />
        ))}
      </div>
    </>
  )
}
