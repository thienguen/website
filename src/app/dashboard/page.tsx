import { type Metadata } from 'next'

import PageTitle from '@/components/ui/header-title'
import ProgressBar from '@/components/ui/progress-bar'

import {
  DiscordStatus /* GithubCard, */,
  GithubCal,
  RPGMaker,
  StatAgeCard,
  StatCard,
  Technologies,
} from '@/components/dashboard'

import { CiCoffeeCup } from 'react-icons/ci'
import { Tooltip } from '@/components/common/Tooltip'

export const metadata: Metadata = {
  title: '/projects',
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
      <div className="mx-auto mb-8 mt-4 max-w-3xl px-6 font-dosis sm:px-8 md:px-12 lg:px-0">
        <DiscordStatus />

        {/* grid 2 col, and each take one here, better control */}
        <div className="mt-5 grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-2">
          {/* 1st Right */}
          <Technologies />

          {/* 1st Left */}
          {/* <GithubCard /> */}
          <RPGMaker />

          {/* 2nd Left */}
          <StatCard href="https://bento.me/dreams" title="I ran out of idea" value={'So I put my bento here'} />

          {/* 2nd Right */}
          <StatAgeCard />

          {/* 3rd Full */}
          <GithubCal />
        </div>

        <div className={` flex flex-row justify-center`}>
          <Tooltip text="I can't code">
            <CiCoffeeCup className="heartbeat h-6 w-6 animate-pulse" />
          </Tooltip>
        </div>
      </div>
    </>
  )
}
