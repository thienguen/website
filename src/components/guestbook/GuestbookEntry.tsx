'use client'

import React, { useState } from 'react'
import { type guestbook } from '@prisma/client'
import dayjs from 'dayjs'

type GuestBookEntryProps = {
  entry: guestbook
  user:
    | {
        name?: string | null
        email?: string | null
        image?: string | null
      }
    | undefined
  handleEntryDelete?: (id: bigint) => void
}

export function GuestbookEntry({ entry, user, handleEntryDelete }: GuestBookEntryProps) {
  const isLongContent = entry.content.split(' ').length > 75
  const [isExpanded, setIsExpanded] = useState(!isLongContent)

  return (
    <>
      <div className="mx-auto my-3 w-11/12 rounded-md border border-gray-700 p-4  text-sm shadow-sm shadow-gray-300 dark:border-zinc-700 dark:shadow-none  sm:w-full">
        {/* <div className="mb-1.5 font-dosis text-lg font-normal dark:font-light">{entry.content}</div> */}
        <div
          className={`mb-2 font-dosis text-lg font-normal dark:font-light ${isExpanded ? '' : 'truncate-text'}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {entry.content}
        </div>

        <div className="line-clamp-1 flex flex-row justify-between">
          <p className="pr-2 font-metropolis text-sm text-slate-950 text-opacity-70 dark:text-gray-400">
            {entry.created_by} • {dayjs(entry.updated_at).format('D MMM YYYY [at] h:mm A')}
          </p>

          <div className="flex flex-row">
            {isLongContent && (
              <button
                className="cursor-pointer px-2 font-metropolis text-sm text-blue-500"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {`${isExpanded ? 'Read less' : 'Read more'}`}
              </button>
            )}
            {user && entry.created_by === user?.name && (
              <div className="shrink-0 items-end">
                <button
                  aria-label="delete comment"
                  className="flex cursor-pointer place-content-end items-end justify-end px-2 font-metropolis text-sm text-red-600 dark:text-red-400"
                  onClick={() => handleEntryDelete && handleEntryDelete(entry.id)}
                  key={entry.id.toString()}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
