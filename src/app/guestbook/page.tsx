/**
 * Plans to make guestbook
 * 1. Set up nextauth, or an authientication system { [nextauth, jwt, bcrypt], [clerk] } -- partially done
 * 2. Set up a database, storing the messages [ planetscale ] -- done
 * 3. Set up a form, to send the messages to the database [ react-hook-form ]
 * ------------------------------------------------------------------------
 * 4. Set up api to display the messages [ react-query ]
 * 6. Set up prisma to call the api [ prisma ] -- done
 * 7. Connect db and api [ prisma ]
 * ------------------------------------------------------------------------
 */
import { type Metadata } from 'next'
import GuestbookForm from '@/components/guestbook/GuestbookForm'

// export const metadata: Metadata = {
//   title: '/guestbook',
//   description: 'metadata is a funny lil concept.',
// }

export const dynamic = 'force-dynamic'

export default function Guestbook() {
  return (
    <>
      <div className="mx-auto mb-12 mt-6 flex max-w-2xl flex-col items-center justify-center">
        {/* Header */}
        <div className="space-y-1 p-4 md:space-y-5">
          <h1 className="text-base font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-6 md:text-3xl">
            {`guestbook`}
          </h1>
          <p className=" text-sm leading-6 text-gray-900 dark:text-gray-100">
            {`Journey back to the 90's tehnologies guestbook! Leave your mark and let me know you were here in this retro digital oasis.`}
          </p>
        </div>

        {/* Guestbook */}
        <GuestbookForm />
      </div>
    </>
  )
}
