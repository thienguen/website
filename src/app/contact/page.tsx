// import PreLoader from "@/components/ui/pre-loader"
import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/ui/progress-bar'
import ContactMessage from '@/components/contact/the-message'
import { type  Metadata } from 'next'

export const metadata: Metadata = {
  title: '/contact',
  description: 'metadata is a funny lil concept.',
}

export default function Contact() {
  return (
    <>
      <ProgressBar
        steps={['/home', '/projects', '/about', '/guestbook', '/contact']}
        currentStep={5}
        isFullWidth={false}
        key={'/projects'}
      />
      <PageTitle title="Please send me a message" titleJP="メッセージください。" /> {/* Messēji kudasa */}
      <ContactMessage />
    </>
  )
}
