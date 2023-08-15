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
  /* Hooks */
  const {
    isLoading,
    showSuccessMessage,

    register,
    session,
    entries,

    formOnSubmit,
    hanleEntryCreate,
    /* Something something */
  } = useGuestbookWrapper()

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="font-dosis text-lg leading-6 text-gray-900 dark:text-gray-100">
          {`Journey back to the 90's technologies guestbook! Leave your mark and let me know you were here in this retro digital oasis. `}
        </div>
        {session?.user ? <SignOut /> : null}
      </div>

      {/* Form and already sign-in */}
      {session?.user && (
        <div className="flex w-full items-center justify-end pt-2">
          {/* <SignOut /> */}
          <div className="mx-auto my-2 w-full rounded-xl border border-gray-200 bg-white px-6 py-2 shadow-xl shadow-gray-400 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
            <div className="">
              <form onSubmit={hanleEntryCreate(formOnSubmit)} className="mb-3 flex flex-row items-center space-y-3.5">
                <label htmlFor="content" className="sr-only">
                  Your Message
                </label>
                <textarea
                  {...register('content', { required: true })}
                  id="content"
                  aria-label="Your message"
                  placeholder="Your message..."
                  required
                  rows={2}
                  maxLength={500}
                  className="w-5/6 rounded-md border-2 border-gray-300 p-3 text-xs shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:focus:border-gray-700 dark:focus:ring-neutral-600"
                />
                <button
                  type="submit"
                  className="ml-5 flex w-1/6  flex-row place-items-center justify-center rounded-3xl bg-slate-200 py-2 font-dosis text-sm font-semibold tracking-wider ring-gray-300 transition-all hover:bg-slate-300 hover:ring-2 dark:bg-gray-600"
                  disabled={!session?.user || isLoading} // Disable the button when user is not signed in or when loading is in progress
                >
                  <svg className="mr-2 h-5 w-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  {isLoading ? <LoadingSpinner stuff="...Submitting" /> : 'Sign'}
                </button>
                {showSuccessMessage && <SuccessMessage>Thanks for signing my guestbook! 💮</SuccessMessage>}
              </form>
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
      {entries?.length === 0 ? (
        <>
          <LoadingSpinner stuff="...Chottomattekudasai" />
        </>
      ) : (
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
      )}
    </>
  )
}
