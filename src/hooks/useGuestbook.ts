'use client'

type inputSchema = {
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
export default async function createGuestbookEntry(data: inputSchema) {
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
