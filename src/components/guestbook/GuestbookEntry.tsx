import { type guestbook } from '@prisma/client'
import { format } from 'date-fns'
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

export function GuestbookEntry({ entry, user /*, onEntryDelete */ }: GuestBookEntryProps) {
  // using the hook
  // const { handleEntryDelete } = useGuestbookWrapper()

  return (
    <>
      <div className="my-3 w-full rounded-md border border-gray-300 bg-gray-100 p-4 text-sm shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
        <div className="mb-2 text-sm text-neutral-900 dark:text-neutral-300">{entry.content}</div>
        <div className="line-clamp-1 text-gray-600 text-opacity-80 dark:text-white">
          <div className=" flex">
            <p className="text-xs text-gray-500">
              {entry.created_by} • {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
            </p>
          </div>
          {/* <div className="flex items-center">
            {user && entry.created_by === user?.name && (
              <>
                <button
                  aria-label="delete comment"
                  className="text-sm text-red-600 dark:text-red-400"
                  onClick={handleEntryDelete({
                    id: entry.id,
                    email: entry.email,
                    content: entry.content,
                    created_by: entry.created_by,
                    created_at: entry.created_at,
                    updated_at: entry.updated_at,
                  })}
                  // onSubmit={handleEntryDelete(entry.id)}
                  key={entry.id.toString()}
                >
                  Delete
                </button>
              </>
            )}
          </div> */}
        </div>
      </div>
    </>
  )
}
