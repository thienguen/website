import { NextResponse, type NextRequest } from 'next/server'

import { type guestbook } from '@prisma/client'

import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const query = {
    guest_id: req.nextUrl.searchParams.get('id'),
  }

  if (query.guest_id) console.log('query', query)

  try {
    const guestbook = await prisma.guestbook.findMany({
      orderBy: {
        created_at: 'desc',
      },
    })

    console.log('guestbook:', guestbook)

    const jsonString = JSON.stringify(
      guestbook,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
    )

    return NextResponse.json(JSON.parse(jsonString), { status: 200 })
  } catch (error) {
    console.log('error:', error)
    return NextResponse.json(null, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const data: guestbook = await req.json()

    const newGuestbookEntry = await prisma.guestbook.create({
      data: {
        // id
        email: data.email,
        content: data.content,
        created_by: data.created_by,
        // created_at
        // updated_at
        // Prisma will automatically handle id, created_at, and updated_at
      },
    })

    console.log('New Guestbook Entry:', newGuestbookEntry)

    // can't serialize BigInts, so we need to convert them to strings
    const jsonString = JSON.stringify(
      newGuestbookEntry,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
    )
    return NextResponse.json(JSON.parse(jsonString), { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(null, { status: 500 })
  }
}
