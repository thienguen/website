import { NextResponse, type NextRequest } from 'next/server'
import { type guestbook } from '@prisma/client'
import { prisma } from '@/lib/prisma'

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
      (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
    )

    return NextResponse.json(JSON.parse(jsonString), { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(null, { status: 500 })
  }
}

