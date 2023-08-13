import { type guestbook } from '@prisma/client'
import dayjs from 'dayjs'

// import { useGuestbookWrapper } from '@/hooks/useGuestbookWrapper'

type GuestBookEntryProps = {
  entry: guestbook
  user:
    | {
        name?: string | null
        email?: string | null
        image?: string | null
      }
    | undefined
  // onEntryDelete: () => void
}

export function GuestbookEntry({ entry, user }: GuestBookEntryProps) {
  return (
    <>
      <div className="my-3 w-full rounded-md border border-gray-300 bg-gray-100 p-4 text-sm shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
        <div className="mb-2 text-sm">{entry.content}</div>

        <div className="line-clamp-1 flex flex-col">
          <p className="text-xs text-slate-950 text-opacity-70 dark:text-gray-400">
            {entry.created_by} • {dayjs(entry.updated_at).format('D MMM YYYY [at] h:mm A')}
          </p>

          {user && entry.created_by === user?.name && (
            <>
              {/* <button
                aria-label="delete comment"
                className="mt-1 flex justify-start text-sm text-red-600 dark:text-red-400"
                // onClick={handleEntryDelete({
                //   id: entry.id,
                //   email: entry.email,
                //   content: entry.content,
                //   created_by: entry.created_by,
                //   created_at: entry.created_at,
                //   updated_at: entry.updated_at,
                // })}
                // onSubmit={handleEntryDelete(entry.id)}
                disabled
                key={entry.id.toString()}
              >
                Delete, but not done yet
              </button> */}
            </>
          )}
        </div>
      </div>
    </>
  )
}
