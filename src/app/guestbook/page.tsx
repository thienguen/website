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
import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/common/ProgressBar'
import GuestbookForm from '@/components/guestbook/GuestbookForm'

export const metadata: Metadata = {
  title: '/guestbook',
  description: 'metadata is a funny lil concept.',
}

export const dynamic = 'force-dynamic'

export default function Guestbook() {
  return (
    <>
      <ProgressBar
        steps={['/home', '/projects', '/about', '/guestbook']}
        currentStep={4}
        isFullWidth={false}
        key={'/guestbook'}
      />
      {/* Header gesuto bukku*/}
      <PageTitle title="guestbook" titleJP="ゲストブック。" />

      <div className="mx-auto mb-6 flex max-w-2xl flex-col items-center justify-center">
        {/* Guestbook */}
        <GuestbookForm />
      </div>
    </>
  )
}
