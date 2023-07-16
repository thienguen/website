import { useEffect, useState } from 'react'
import { type guestbook } from '@prisma/client'
import { deleteGuestbookEntry, getGuestbookEntries } from '@/hooks/useGuestbook'

export function useEntries(isLoading: boolean) {
  const [entries, setEntries] = useState<guestbook[]>([])

  /**
   * Fetch guestbook entries from the API, route.ts
   * and set the state to the response, a very naive :< approach
   * @returns {void}
   */
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        if (!isLoading) {
          const res = await getGuestbookEntries()
          if (res && 'data' in res) {
            setEntries(res.data)
          } else {
            console.error('Unexpected response:', res)
          }
        }
      } catch (error) {
        console.error('Failed to fetch guestbook entries:', error)
      }
    }
    fetchEntries().catch((err) => console.error('Error in fetchEntries:', err))
  }, [isLoading])

  /**
   * Delete a guestbook entry from the API, route.ts
   * and remove the entry from state, through generated id, its actually bigInt
   * but meh
   */
  const handleEntryDelete = (id: bigint) => {
    console.log('Deleting entry:', id)
    deleteGuestbookEntry(id)
      .then(() => {
        setEntries(entries.filter((entry) => entry.id !== id))
      })
      .catch((error) => {
        console.error('Error: DELETE guestbook handler', error)
      })
  }
  

  return { entries, handleEntryDelete }
}
