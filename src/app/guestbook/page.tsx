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

export const metadata: Metadata = {
  title: '/guestbook',
  description: 'metadata is a funny lil concept.',
}

export const dynamic = 'force-dynamic'

export default function Contact() {
  return (
    <>
      <div className="mx-auto mb-16 flex max-w-3xl flex-col items-start justify-center">
        {/* Header */}
        <div className="space-y-2 p-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
            {`Guestbook`}
          </h1>
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
            {`Acient technology from the 90's webs. Leave a comment below for my future visitors. !`}
          </p>
        </div>

        {/* <Guestbook fallbackData={fallbackData} /> */}
      </div>
    </>
  )
}
