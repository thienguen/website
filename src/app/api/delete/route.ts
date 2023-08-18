import { NextResponse, type NextRequest } from 'next/server'
import { type guestbook } from '@prisma/client'
import { prisma } from '@/lib/prisma'

/**
 * Making a "DELETE" request to this endpoint 
 * will delete the guestbook entry with the given id.
 * 
 * Read more here: https://github.com/vercel/next.js/issues/53882
 * This is due to a bug on Next.js.
 */
export async function POST(req: NextRequest) {
  try {
    const data: guestbook = await req.json()

    const deletedSoul = await prisma.guestbook.delete({
      where: {
        id: data.id,
      },
    })

    console.log('deletedSoul:', deletedSoul)

    // can't serialize BigInts, so we need to convert them to strings
    const jsonString = JSON.stringify(
      deletedSoul,
      (_, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
    )

    return NextResponse.json(JSON.parse(jsonString), { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(null, { status: 500 })
  }
}

