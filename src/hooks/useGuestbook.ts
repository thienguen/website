'use client'

type createGuestBookSchema = {
  // id
  email: string
  content: string
  created_by: string
  // created_at
  // updated_at
}

type deleteGuestBookSchema = {
  id: string
}

/**
 * Create a new guestbook entry, whenever a user submits the form.
 * @param data - The data to be sent to the API.
 */
export async function createGuestbookEntry(data: createGuestBookSchema) {
  try {
    const res = await fetch('/api/guestbooks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        content: data.content,
        created_by: data.created_by,
      }),
    })
    const json = await res.json()
    if (!res.ok) throw new Error('Error creating new guestbook entry:', json)
    console.log('New Guestbook Entry:', json)
  } catch (error) {
    console.error('Error:', error)
  }
}


/**
 * Delete a guestbook entry, whenever a user clicks the delete button.
 * @param data - The data to be sent to the API.
 * @param id - The id of the guestbook entry to be deleted.
 */
export async function deleteGuestbookEntry(data: deleteGuestBookSchema) {
  try {
    const res = await fetch('/api/guestbooks', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: data.id,
      })
    })

    const json = await res.json()
    if (!res.ok) throw new Error('Error deleting guestbook entry:', json)
    console.log('Deleted Guestbook Entry:', json)
  } catch (error) {
    console.error('Error:', error)
  }
}
