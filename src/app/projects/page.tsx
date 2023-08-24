import { type Metadata } from 'next'
import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/ui/progress-bar'
import { ProjectPageContent } from '@/components/purojekuto/(render)/Purojekuto'
// import PreLoader from '@/components/ui/pre-loader'

export const metadata: Metadata = {
  title: '/projects',
  description: 'metadata is a funny lil concept.',
}

export default function Projects() {
  return (
    <>
      {/* <PreLoader>Projects</PreLoader> */}
      <ProgressBar
        steps={['/home', '/projects', '/about', '/guestbook', '/contact']}
        currentStep={2}
        isFullWidth={false}
        key={'/projects'}
      />
      <PageTitle title="Featured Projects" titleJP="注目プロジェクト。" /> {/* chūmoku purojekuto */}
      <ProjectPageContent />
    </>
  )
}
