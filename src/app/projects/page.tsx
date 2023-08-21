import { type Metadata } from 'next'
import PageTitle from '@/components/ui/header-title'
import PreLoader from '@/components/ui/pre-loader'
import ProgressBar from '@/components/ui/progress-bar'
import { ProjectPageContent } from '@/components/purojekuto/(render)/Purojekuto'

export const metadata: Metadata = {
  title: '/projects',
  description: 'metadata is a funny lil concept.',
}

export default function Projects() {
  return (
    <>
      <PreLoader>Projects</PreLoader>
      <ProgressBar
        steps={['/home', '/projects', '/about', '/guestbook']}
        currentStep={2}
        isFullWidth={false}
        key={'/projects'}
      />
      <PageTitle title="Featured Projects" titleJP="注目プロジェクト。" /> {/* chūmoku purojekuto */}
      <ProjectPageContent />
    </>
  )
}
