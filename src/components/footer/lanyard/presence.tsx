import { type ReactElement } from 'react'
import usePresence from '@/hooks/lanyard/usePresence'
import ActivityDetails from '@/components/footer/lanyard/activity'

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
  const activityAtIndex1 = activities[1]

  return (
    <>
      {activityAtIndex1 ? (
        <div className="ml-4 py-1 text-center font-pixeloidMono">
          <ul className="flex translate-y-[-1rem] animate-fade-in  flex-col items-center justify-center gap-2 opacity-0 [--animation-delay:100ms]">
            <li className="flex flex-row items-center gap-2">
              <ActivityDetails activity={activityAtIndex1} activities={activities} />
            </li>
          </ul>
        </div>
      ): (
        <div className='h-8'> </div>
      )}
    </>
  )
}

export default Presence
