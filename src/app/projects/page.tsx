import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '/projects',
  description: 'metadata is a funny lil concept.',
}

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center justify-center self-center">
        <h1>Projects</h1>
        <p>Something Holy</p>
      </div>
    </>
  )
}
