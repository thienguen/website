'use client'

import { useGuestbookWrapper } from '@/hooks/useGuestbookWrapper'
import { GuestbookEntry } from '@/components/guestbook/guestbook-entry'

import LoadingSpinner from '@/components/ui/loading-spinner'
import SuccessMessage from '@/components/ui/success-message'
import { SignInGithub, SignInGoogle, SignOut } from '@/components/guestbook/auth-button'

import { AiOutlineSend } from 'react-icons/ai'

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
  /* Hooks, reduce to only call hook ONCE */
  const {
    isLoading,
    showSuccessMessage,

    register,
    session,
    entries,

    formOnSubmit,
    hanleEntryCreate,

    handleEntryDelete,
    // handleDeleteClick,
    /* Something something */
  } = useGuestbookWrapper()

  return (
    <>
      {/* not sign-in */}
      {!session?.user && (
        <div className="my-2 flex w-full flex-row justify-center text-center">
          <SignInGithub />
          <SignInGoogle />
          {/* Discord, if do */}
        </div>
      )}

      {/* Form and already sign-in */}
      {session?.user && (
        <>
          {/* First row */}
          <div className="flex w-full items-center justify-end space-x-3 py-2">
            <img src={`${session?.user.image ?? ''}`} alt="profile" width={35} height={35} />
            <form onSubmit={hanleEntryCreate(formOnSubmit)} className="mx-auto w-full rounded-md text-sm">
              <label htmlFor="content" className="sr-only">
                Your Message
              </label>
              <input
                {...register('content', { required: true })}
                id="content"
                aria-label="Your message"
                placeholder="君の名は。"
                required
                maxLength={10000}
                className="h-12 w-full rounded-lg border-gray-300 bg-slate-200 p-3 font-dosis text-sm shadow-sm focus:border-gray-500 focus:ring-gray-500  dark:bg-zinc-700 dark:text-white dark:focus:border-gray-700 dark:focus:ring-neutral-600"
              />
            </form>
          </div>

          {/* Second row */}
          <div className="flex w-full justify-end space-x-1 pb-4">
            <SignOut />
            <button
              type="submit"
              className="flex w-20 flex-row place-items-center justify-center rounded-lg bg-slate-100 font-dosis text-sm font-semibold  tracking-wider shadow-sm ring-gray-300 transition-all duration-300 ease-in hover:bg-slate-300 hover:shadow-md dark:bg-gray-600 dark:hover:bg-gray-400"
              disabled={!session?.user || isLoading}
            >
              {isLoading ? (
                <LoadingSpinner stuff="..." />
              ) : (
                <>
                  <div className="flex flex-row items-center justify-between">
                    <span className="">Send</span>
                    <AiOutlineSend className="ml-2 h-4 w-4" />
                  </div>
                </>
              )}
            </button>
          </div>
          {showSuccessMessage && (
            <div className="flex justify-center">
              <SuccessMessage>Thanks for signing my guestbook! 💮</SuccessMessage>
            </div>
          )}
        </>
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
              handleEntryDelete={handleEntryDelete}
            />
          ))}
        </div>
      )}
    </>
  )
}
