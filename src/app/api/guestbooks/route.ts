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

    console.log('guestbook', ' how many time')

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

    console.log('newGuestbookEntry', newGuestbookEntry)

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
 * NOT MY FAULT, NEXTJS framework failed on DELETE request
 * READ MORE AT: https://github.com/vercel/next.js/issues/53882
 * what a lovely day init
 */
// export function DELETE(req: any) {
//   try {
//     const body = await req.text(); // first, get the raw body text

//     if (!body) {
//       const res = await req.json()
//       console.log('res', res)
//       return NextResponse.json('Empty request body.', { status: 400 });
//     }

//     const data: guestbook = await req
//     console.log('data', req)
//     if (!data?.id) throw new Error('No id provided to DELETE route')

//     const deletedSoul = await prisma.guestbook.delete({
//       where: {
//         id: data.id,
//       },
//     })

//     console.log('deletedSoul', deletedSoul)

//     const jsonString = JSON.stringify(
//       stuff,
//       (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
//     )

//     return NextResponse.json('something something holy', { status: 200 })

//   } catch (error) {
//     console.error('Error DELETE route:', error)
//     return NextResponse.json('Everything went downhill from here', { status: 500 })
//   }
// }
