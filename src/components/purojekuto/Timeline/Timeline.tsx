import React from 'react'
import LeftTimeline from './LeftTimeline'
import RightTimeline from './RightTimeline'

const Timeline: React.FC = () => {
  const sampleDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  return (
    <div className="container mx-auto h-full w-full ">
      <div className="relative h-full flex-wrap overflow-hidden p-10">
        <div className="border-2-2 absolute h-full border border-gray-700 opacity-20" style={{ left: '50%' }}></div>
        <RightTimeline number="1" title="Lorem Ipsum" description={sampleDescription} />
        <LeftTimeline number="2" title="Lorem Ipsum" description={sampleDescription} />
        <RightTimeline number="3" title="Lorem Ipsum" description={sampleDescription} />
        <LeftTimeline number="4" title="Lorem Ipsum" description={sampleDescription} />
      </div>
    </div>
  )
}

export default Timeline
