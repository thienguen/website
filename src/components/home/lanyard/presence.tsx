import { type ReactElement } from 'react'
import usePresence from '@/hooks/lanyard/usePresence'
import ActivityDetails from '@/components/home/lanyard/activity'

// 1. define all presence data type -- done
// 2. define the possible value for it -- partial
// 3. Grabbing the value and store them
// 4. Think of what we going to need
// 5. name, detail, state, application_id,
// 6. figma, kraken, vscode, notepad at max its showing 2 ALL TIME
// 7. if the user is not playing anything, activty is none
// 8. if the user is playing something, display them, this should be easy

function Presence(): ReactElement {
  const activities = usePresence()

  return (
    <div className="mx-auto w-5/6 translate-y-[-1rem] animate-fade-in py-1 text-center font-pixeloidMono opacity-0 [--animation-delay:200ms] lg:w-2/4">
      <ul className="flex  flex-col items-center justify-center gap-2">
        {activities.map((activity, index) => (
          <li key={index} className="flex flex-row items-center gap-2">
            <ActivityDetails activity={activity} activities={activities} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Presence
