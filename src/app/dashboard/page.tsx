import { type Metadata } from 'next'
import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/ui/progress-bar'
import { DiscordStatus, GithubCard, StatAgeCard, StatCard, Technologies, GithubCal } from '@/components/dashboard'


export const metadata: Metadata = {
  title      : '/projects',
  description: 'metadata is a funny lil concept.',
}

export default function Projects() {
  return (
    <>
      <ProgressBar
        // steps={['home', '/about', '/dashboard', '/projects', '/guestbook']}
        steps={['/dashboard', '/projects', '/guestbook', '/about']}
        currentStep={1}
        isFullWidth={false}
        key={'/dashboard'}
      />
      <PageTitle title="Dashboard" titleJP="ダッシュボード。" subTitle="A good track of info" /> {/* Dasshubōdo */}
      {/* Body */}
      <div className="mx-auto mb-8 mt-4 max-w-3xl px-6 sm:px-8 md:px-12 lg:px-0">
        <DiscordStatus />

        {/* grid 2 col, and each take one here, better control */}
        <div className="mt-5 grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-2">
          {/* 1st Left */}
          <GithubCard />

          {/* 1st Right */}
          <Technologies />

          {/* 2nd Left */}
          <StatCard href="https://bento.me/dreams" title="I ran out of idea" value={'So I put my bento here'} />

          {/* 2nd Right */}
          <StatAgeCard />

          {/* 3rd Full */}
          <GithubCal />
        </div>

        {/* Techno */}

        {/* Github repo and track */}

        {/* Age, the fk map */}

        {/* Carousal */}
      </div>
    </>
  )
}
