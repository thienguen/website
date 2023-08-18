import { type guestbook } from '@prisma/client'
import dayjs from 'dayjs'

type GuestBookEntryProps = {
  entry: guestbook
  user : 
    | {
        name ?: string | null
        email?: string | null
        image?: string | null
      }
    | undefined
  handleEntryDelete?: (id: bigint) => void
}

export function GuestbookEntry({ entry, user, handleEntryDelete }: GuestBookEntryProps) {
  return (
    <>
      <div className="mx-auto my-3 w-11/12 rounded-md border border-gray-700 p-4  text-sm shadow-sm shadow-gray-300 dark:border-zinc-700 dark:shadow-none  sm:w-full">
        <div className="mb-2 text-sm dark:font-extralight">{entry.content}</div>

        <div className="line-clamp-1 flex flex-row justify-between">
          <p className="pr-2 text-xs text-slate-950 text-opacity-70 dark:text-gray-400">
            {entry.created_by} • {dayjs(entry.updated_at).format('D MMM YYYY [at] h:mm A')}
          </p>

          {user && entry.created_by === user?.name && (
            <div className="shrink-0 items-end">
              <button
                aria-label="delete comment"
                className="flex cursor-pointer place-content-end items-end justify-end text-xs text-red-600 dark:text-red-400"
                onClick={() => handleEntryDelete && handleEntryDelete(entry.id)}
                key={entry.id.toString()}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
