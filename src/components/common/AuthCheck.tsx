'use client'

import { useSession } from 'next-auth/react'

export default function AuthCheck({ children }: { children: React.ReactNode }) {

  const { data: session, status } = useSession()

  console.log('session', session)
  console.log('status', status)
  
  if (status === 'loading') return <p>Loading...</p>
  if (status === 'unauthenticated') return <></>
  if (status === 'authenticated') return <>{children}</>
}
