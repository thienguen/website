import usePresence from '@/hooks/lanyard/usePresence'
import { Icons } from '@/components/ui/icons'

// 1. define all presence data type -- done
// 2. define the possible value for it -- partial
// 3. Grabbing the value and store them
// 4. Think of what we going to need
// 5. name, detail, state, application_id,
// 6. figma, kraken, vscode, notepad at max its showing 2 ALL TIME
// 7. if the user is not playing anything, activty is none
// 8. if the user is playing something, display them, this should be easy

const ICON_MAP: { [key: string]: JSX.Element | undefined | string} = {
  'Visual Studio Code': '/images/vscode.png',
  'GitKraken': Icons.gitkraken({ size: 40 }),
  'Figma': Icons.figma({ size: 40 }),
  // 'Notepad': <IconNotepad />,
};

function Presence() {
  const activities = usePresence()

  return (
    <div className="mx-auto mt-3 w-5/6 lg:w-2/4">
      <ul className="flex flex-row items-center gap-2">
        {activities.map((activity) => (
          <li key={activity.application_id} className="flex flex-row items-center gap-2">
            {activity.name ? ICON_MAP[activity.name] : null}
            {activity.name === 'Visual Studio Code' && (
              <span>
                vscode: current workspace: {activity.state?.replace('Workspace: ', '')}, editing: {activity.details}
              </span>
            )}
          </li>
        ))}
        {/* <img src="/icons/gitkraken.svg" alt="something" width={40} height={40} className='dark:invert'/> */}
      </ul>
    </div>
  )
}

export default Presence
