import React from 'react'
import LeftTimeline from './LeftTimeline'
import RightTimeline from './RightTimeline'

const Timeline: React.FC = () => {
  const sampleDescription = 'Lorem Ipsum is simply dummy text of the printing. Something something holy'

  return (
    <div className="container mx-auto max-w-5xl px-4">
      <div className="flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
        <LeftTimeline year="2023" title="Lorem Ipsum" description={sampleDescription} />

        <RightTimeline year="2023" title="Lorem Ipsum" description={sampleDescription} />

        <LeftTimeline  title="Lorem Ipsum" description={sampleDescription} />

        <LeftTimeline  title="Lorem Ipsum" description={sampleDescription} />

        <RightTimeline year="2023" title="Lorem Ipsum" description={sampleDescription} />
      </div>
    </div>
  )
}

export default Timeline
