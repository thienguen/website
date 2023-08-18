import { type Metadata } from 'next'
import ProgressBar from '@/components/common/ProgressBar'
import { ProjectPageContent } from '@/components/purojekuto/(render)/Purojekuto'
import PageTitle from '@/components/ui/header-title'

export const metadata: Metadata = {
  title: '/projects',
  description: 'metadata is a funny lil concept.',
}

export default function Projects() {
  return (
    <>
      <ProgressBar steps={['/home', '/projects', '/about', '/guestbook']} currentStep={2} isFullWidth={false} key={'/projects'}/>
      <PageTitle title="Featured Projects" titleJP="注目プロジェクト。" /> {/* chūmoku purojekuto */}
      <ProjectPageContent />
    </>
  )
}
