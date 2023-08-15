import { NextResponse, type NextRequest } from 'next/server'
import { type guestbook } from '@prisma/client'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const query = {
    guest_id: req.nextUrl.searchParams.get('id'),
  }

  // const id = req.nextUrl
  // console.log('guestbook GET', id)

  if (query.guest_id) {
    console.log('query', query)
  }

  try {
    const guestbook = await prisma.guestbook.findMany({
      orderBy: {
        created_at: 'desc',
      },
    })

    const jsonString = JSON.stringify(
      guestbook,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
    )

    console.log('jsonString', jsonString)
    return NextResponse.json(JSON.parse(jsonString), { status: 200 })
  } catch (error) {
    console.log('error:', error)
    return NextResponse.json(null, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  // const query = {
  //   guest_id: req.nextUrl.searchParams.get('id'),
  // }

  // const id = req.nextUrl
  // console.log('guestbook POST', id)

  // if (query.guest_id) {
  //   console.log('query POST', query)
  // }

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

/**
 * Failed, fk
 */
export async function DELETE(req: NextRequest) {
  const guestId = req.nextUrl.searchParams.get('id')
  if (guestId) console.log('query', guestId)

  try {
    const data: guestbook = await req.json()

    if (!data?.id) throw new Error('No id provided to DELETE route')

    const stuff = await prisma.guestbook.delete({
      where: {
        id: data.id,
        email: data.email,
        content: data.content,
        created_by: data.created_by,
      },
    })

    const jsonString = JSON.stringify(
      stuff,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
    )

    return NextResponse.json(JSON.parse(jsonString), { status: 200 })
    
  } catch (error) {
    console.error('Error DELETE route:', error)
    return NextResponse.json(null, { status: 500 })
  }
}
