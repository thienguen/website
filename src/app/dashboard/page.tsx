import { type Metadata } from 'next'
import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/ui/progress-bar'

export const metadata: Metadata = {
  title: '/projects',
  description: 'metadata is a funny lil concept.',
}

export default function Projects() {
  return (
    <>
      {/* <PreLoader>Projects</PreLoader> */}
      <ProgressBar
        steps={['home', '/about', '/dashboard', '/projects', '/guestbook']}
        currentStep={3}
        isFullWidth={false}
        key={'/dashboard'}
      />
      <PageTitle title="Dashboard" titleJP="ダッシュボード。" /> {/* Dasshubōdo */}
    </>
  )
}
