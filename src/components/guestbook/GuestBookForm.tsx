'use client'

import { useGuestbookWrapper } from '@/hooks/useGuestbookWrapper'
import { GuestbookEntry } from '@/components/guestbook/GuestbookEntry'
import { SignIn, SignOut } from '../ui/auth-buttons'
import LoadingSpinner from '../ui/loading-spinner'
import SuccessMessage from '../ui/success-message'

/**
 * user login: useSession
 *   - sign in and sign out buttons
 * guestbook entries: useEntries
 *   - pull data from api, and display it (via planetscale + prisma)
 * form submission: useForm
 *   - customed Form, with a text area and a submit button
 *
 * State: + isLoading, + showSuccessMessage
 */
export default function GuestbookForm() {
  const {
    isLoading,
    showSuccessMessage,
    entries,
    register,
    formOnSubmit,
    hanleEntryCreate,
    session,
  } = useGuestbookWrapper()

  return (
    <>
      {/* Form and already sign-in */}
      {session?.user && (
        <div className="flex w-full justify-end">
          <SignOut />
          <div className="w-10/12">
            <h1 className="flex w-full flex-col items-center justify-center text-center text-base tracking-tighter">
              sign my guestbook
            </h1>
            <div className="mx-auto my-2 w-full max-w-xl rounded-xl border border-gray-200 bg-white px-4 py-1 shadow-xl shadow-gray-400 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
              <div className="flex flex-col">
                <form onSubmit={hanleEntryCreate(formOnSubmit)} className="mb-2 flex flex-col items-center space-y-3">
                  <label htmlFor="content" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    {...register('content', { required: true })}
                    id="content"
                    aria-label="Your message"
                    placeholder="Your message..."
                    required
                    rows={3}
                    maxLength={500}
                    className="w-full rounded-md border-2 border-gray-300 p-3 text-xs shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:focus:border-gray-700 dark:focus:ring-neutral-600"
                  />

                  <button
                    type="submit"
                    className="grid w-full place-items-center rounded bg-slate-200 px-2 py-0.5 text-sm font-medium ring-gray-300 transition-all hover:bg-slate-300 hover:ring-2 dark:bg-gray-600"
                    disabled={!session?.user || isLoading} // Disable the button when user is not signed in or when loading is in progress
                  >
                    {isLoading ? <LoadingSpinner stuff="...Submitting" /> : 'Sign'}
                  </button>
                  {showSuccessMessage && <SuccessMessage>Thanks for signing my guestbook! 💮</SuccessMessage>}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* not sign-in */}
      {!session?.user && (
        <div className="flex w-full justify-center text-center">
          <SignIn />
        </div>
      )}

      {/* All entries there is */}
      <div className="w-full">
        {entries?.map((entry) => (
          <GuestbookEntry
            key={entry.id.toString()}
            entry={entry}
            user={session?.user}
            // onEntryDelete={() => handleEntryDelete(entry.id)}
          />
        ))}
      </div>
    </>
  )
}
