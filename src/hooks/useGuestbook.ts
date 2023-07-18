'use client'

/**
 * This is the api fetch 
 */

type createGuestBookSchema = {
  // id
  email: string
  content: string
  created_by: string
  // created_at
  // updated_at
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
    console.error('Error: POST guestbook', error)
  }
}

/**
 * Delete a guestbook entry, whenever a user clicks the delete button.
 * @param data - The data to be sent to the API.
 * @param id - The id of the guestbook entry to be deleted.
 */
export async function deleteGuestbookEntry(id: bigint) {
  try {
    const res = await fetch(`/api/guestbooks/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      })
    })
    const json = await res.json()
    if (!res.ok) throw new Error('Error deleting a guestbook entry:', json)
    console.log('Deleting this Entry:', json)
  } catch (error) {
    console.error('Error: DELETE guestbook', error)
  }
}

/**
 * Get all guestbook entries from the API.
 * -------------------------------------------------------------
 * @example
 * const { data } = await getGuestbookEntries();
 * console.log(data); // [{ id: 1, email: '...', content: '...', created_by: '...' }]
 * @example
 * const { data } = await getGuestbookEntries();
 * console.log(data); // []
 * @example
 * const { data } = await getGuestbookEntries();
 * console.log(data); // undefined
 */
export async function getGuestbookEntries() {
  try {
    const res = await fetch('/api/guestbooks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   id: 9876543211002,
      // }),
    })

    const json = await res.json()

    if (!res.ok) throw new Error('Error getting guestbook entries:', json)
    return { data: json } // return as an object with data property
  } catch (error) {
    console.error('Error: GET guestbook', error)
  }
}
