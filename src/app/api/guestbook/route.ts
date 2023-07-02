import { NextResponse, type NextRequest } from 'next/server'

import { type guestbook } from '@prisma/client'

import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const query = {
    guest_id: req.nextUrl.searchParams.get('id'),
  }

  console.log('query:', query)
  try {
    const guestbook = await prisma.guestbook.findMany({
      orderBy: {
        created_at: 'desc',
      },
    })
    console.log('guestbook:', guestbook)
    return NextResponse.json(guestbook)
  } catch (error) {
    console.log('error:', error)
    return NextResponse.json(null, { status: 500 })
  }
}


export async function POST(req: NextRequest) {
  try {
    const data: guestbook = await req.json()
    console.log('data:', data)
    const newGuestbookEntry = await prisma.guestbook.create({
      data: {
        email: data.email,
        content: data.content,
        created_by: data.created_by,
        // Prisma will automatically handle 'created_at' and 'updated_at' fields
      },
    })

    console.log('New Guestbook Entry:', newGuestbookEntry)
    return NextResponse.json(newGuestbookEntry, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(null, { status: 500 })
  }
}
