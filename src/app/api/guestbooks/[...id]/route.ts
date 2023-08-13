import { NextResponse, type NextRequest } from 'next/server'
// import { type guestbook } from '@prisma/client'
import { prisma } from '@/lib/prisma'


/**
 * Not working, a very sad day 
 */
export async function GET(req: NextRequest) {
  const query = {
    guest_id: req.nextUrl.searchParams.get('id'),
  }

  const id = req.nextUrl
  console.log('guestbook/[id] url', id)

  if (query.guest_id) {
    console.log('query', query)
    try {
      const singleGuestbookEntry = await prisma.guestbook.findUnique({
        where: {
          id: BigInt(query.guest_id ?? 0),
        },
      })

      const jsonString = JSON.stringify(singleGuestbookEntry, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
      ) // return everything else unchanged

      return NextResponse.json(JSON.parse(jsonString), { status: 200 })
    } catch (error) {
      console.log('error:', error)
    }
  }
}

export async function DELETE(req: NextRequest) {
  const guestId = req.nextUrl.searchParams.get('id')
  if (guestId) console.log('query', guestId)

  console.log('req', req)

  try {
    await prisma.guestbook.delete({
      where: {
        id: Number(guestId) || 0,
      },
    })
  } catch (error) {
    console.error('Error DELETE route:', error)
    return NextResponse.json(null, { status: 500 })
  }

  return NextResponse.next()
}
