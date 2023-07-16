import { type FormEvent } from 'react'

import { useSession } from 'next-auth/react'
import { useForm, type FieldValues } from 'react-hook-form'

import { createGuestbookEntry } from '@/hooks/useGuestbook'

type formSchema = {
  content: string
}

export default function GuestBookForm() {
  /**
   * User login
   * Customed Form, due to eslint being a b
   */
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
      <h1 className="flex w-full flex-col items-center justify-center text-center text-base font-bold tracking-tighter">
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
              rows={2}
              maxLength={500}
              className="w-full rounded-md border border-gray-300 p-2 text-xs shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:focus:border-gray-700 dark:focus:ring-neutral-600"
            />

            <button
              type="submit"
              className="grid w-full place-items-center rounded bg-neutral-100 px-2 py-0.5 font-medium ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600"
              disabled={!session?.user}
            >
              Sign
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
