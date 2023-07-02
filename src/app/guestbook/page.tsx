/**
 * Plans to make guestbook
 * 1. Set up nextauth, or an authientication system { [nextauth, jwt, bcrypt], [clerk] } -- shit
 * 2. Set up a database, storing the messages [ planetscale ] -- dpne
 * 3. Set up a form, to send the messages to the database [ react-hook-form ]
 * ------------------------------------------------------------------------
 * 4. Set up api to display the messages [ react-query ]
 * 6. Set up prisma to call the api [ prisma ] -- done
 * ------------------------------------------------------------------------
 */
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '/guestbook',
  description: 'metadata is a funny lil concept.',
};

export const dynamic = 'force-dynamic'

export default function Contact() {
  return (
    <>
      <h1>Guestbook</h1>
    </>
  )
}
