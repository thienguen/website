import { useEffect, useState, type FormEvent } from 'react'
import { type guestbook } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { useForm, type FieldValues } from 'react-hook-form'
import { createGuestbookEntry, deleteGuestbookEntry, getGuestbookEntries } from '@/hooks/useGuestbook'
import { guestbookSchema } from './useGuestbook'

type formSchema = {
  content: string
}

/**
 * @returns all methods wrapper to handle with guestbook, for state management
 * And eslint wise, tbh, as if I know these thing LMAO
 */
export function useGuestbookWrapper() {
  const [isLoading, setIsLoading] = useState(false)
  const [entries, setEntries] = useState<guestbook[]>([])
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const { register, handleSubmit, reset } = useForm<{ content: string }>()
  const { data: session } = useSession()

  /**
   * Fetch [ALL] guestbook entries from the API, route.ts
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
  const buttonOnClick = (data: guestbook) => {
    console.log('Deleting entry:', data)
    deleteGuestbookEntry(data)
      .then(() => {
        setEntries(
          entries.filter(
            (entry) =>
              entry.created_by !== data.created_by && entry.content !== data.content && entry.email !== data.email
          )
        )
      })
      .catch((error) => {
        console.error('Error: DELETE buttonOnClick', error)
      })
  }

  // const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   event.preventDefault()
  //   buttonOnClick(entry.id)
  // }

  const handleEntryDelete = (data: guestbook) => () => {
    console.log('Deleting entry:', data)
    buttonOnClick(data)
  }

  /**
   * Create a guestbook entry from the API, route.ts
   * Eslint having issue and as we have to use the hook corretly
   */
  const formOnSubmit = async (data: formSchema) => {
    setIsLoading(true) // Set isLoading to true before submitting the form
    try {
      await createGuestbookEntry({
        email: session?.user?.email ?? 'Anonymous',
        content: data.content,
        created_by: session?.user?.name ?? 'Anonymous',
      })
      reset()
      setShowSuccessMessage(true) // Show the success message
    } catch (error) {
      console.error('Error during form submission:', error)
    } finally {
      setIsLoading(false) // Set isLoading to false after the form submission is complete
    }
  }

  const hanleEntryCreate = (submitFunction: (data: formSchema) => Promise<void>) => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    void handleSubmit((data: FieldValues) => submitFunction(data as formSchema))(e)
  }

  /**
   * State management for a success form submission
   */
  useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => {
        setShowSuccessMessage(false)
      }, 8000) // Adjust the duration as needed
      return () => clearTimeout(timeout)
    }
  }, [showSuccessMessage])

  return {
    isLoading,
    showSuccessMessage,

    entries,
    session,
    register,

    buttonOnClick, // delete button
    handleEntryDelete,

    formOnSubmit, // form submission
    hanleEntryCreate,
  }
}
