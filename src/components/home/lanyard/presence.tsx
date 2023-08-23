import { type ReactElement } from 'react'
import { type Activity } from 'use-lanyard'
import usePresence from '@/hooks/lanyard/usePresence'

// 1. define all presence data type -- done
// 2. define the possible value for it -- partial
// 3. Grabbing the value and store them
// 4. Think of what we going to need
// 5. name, detail, state, application_id,
// 6. figma, kraken, vscode, notepad at max its showing 2 ALL TIME
// 7. if the user is not playing anything, activty is none
// 8. if the user is playing something, display them, this should be easy
const GitKrakenActivity = () => (
  <>
    <img src={'/icons/gitkraken.png'} alt="GitKraken" width={24} height={24} className="heartbeat dark:invert" />
    <code className="relative mx-auto  cursor-cell appearance-none rounded-lg bg-transparent text-center font-pixeloidMono text-base text-black/90 dark:text-gray-400 ">
      GitKraken: is pushing something to the cloud
    </code>
  </>
)

const FigmaActivity = () => (
  <>
    <img src={'/icons/figma.png'} alt="Figma" width={24} height={24} className="heartbeat dark:invert" />
    <code className="relative mx-auto  cursor-cell appearance-none rounded-lg bg-transparent text-center font-pixeloidMono text-base text-black/90 dark:text-gray-400 ">
      Figma: making a coffee shop or something, idk
    </code>
  </>
)

const NotepadActivity = () => (
  <>
    <img src={'/icons/notepad.png'} alt="Notepad" width={24} height={24} className="heartbeat" />
    <code className="relative mx-auto  cursor-cell appearance-none rounded-lg bg-transparent text-center font-pixeloidMono text-base text-black/90 dark:text-gray-400 ">
      Notepad: quick, write something down!
    </code>
  </>
)

const VsCodeActivity: React.FC<{ state?: string; details?: string }> = ({ state, details }) => {
  const defaultStatus = 'VS Code: Idling'
  let statusText = ''

  // Construct status text based on available state and details
  if (state && details) {
    statusText = `${state}, ${details?.replace('Editing', 'editing:')}`
  } else if (!state && details) {
    statusText = defaultStatus
  } else if (state && !details) {
    statusText = defaultStatus
  } else {
    statusText = defaultStatus
  }

  return (
    <>
      <img
        src={'/icons/vscode.png'}
        alt="Visual Studio Code"
        className="heartbeat"
        width={24}
        height={24}
        style={{ animationPlayState: state && details ? 'running' : 'paused' }} // Only animate if there's state and details
      />
      <code className="relative mx-auto cursor-cell appearance-none rounded-lg bg-transparent text-center font-pixeloidMono text-base text-black/90 dark:text-gray-400 ">
        {statusText}
      </code>
    </>
  )
}

function Presence(): ReactElement {
  const activities = usePresence()

  const renderActivityComponent = (activity: Partial<Activity>): ReactElement | null => {
    switch (activity.name) {
      case 'Visual Studio Code':
        return <VsCodeActivity state={activity.state} details={activity.details} />
      case 'GitKraken':
        return <GitKrakenActivity />
      case 'Figma':
        return <FigmaActivity />
      case 'Notepad':
        return <NotepadActivity />
      default:
        return null
    }
  }

  return (
    <div className="mx-auto w-5/6 translate-y-[-1rem] animate-fade-in text-center font-pixeloidMono opacity-0 [--animation-delay:200ms] lg:w-2/4">
      <ul className="flex  flex-col items-center justify-center gap-2">
        {activities.map((activity, index) => {
          return (
            <li key={index} className="flex flex-row items-center gap-2">
              {renderActivityComponent(activity)}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Presence
