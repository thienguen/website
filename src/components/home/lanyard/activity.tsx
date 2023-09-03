import { type Activity } from 'use-lanyard'
import useElapsedTime from '@/hooks/lanyard/useElapsedTime'
import GenericActivity from '@/components/home/lanyard/generic'

type ActivityDetailsProps = {
  activity: Partial<Activity>
  activities: Partial<Activity>[]
}

const ActivityDetails: React.FC<ActivityDetailsProps> = ({ activity, activities }) => {
  const elapsedTime = useElapsedTime(activity.timestamps?.start)

  let defaultStatus = 'VS Code: idling'

  const statusText =
    activity.state && activity.details
      ? `${activity.state}, ${activity.details.replace('Editing', 'editing:')}`
      : defaultStatus

  switch (activity.name) {
    case 'Visual Studio Code':
      return (
          <GenericActivity
            statusText={statusText}
            icon="/icons/vscode.png"
            altText="Visual Studio Code"
            text={`VS Code: `}
            elapsedTime={elapsedTime ?? ''}
          />
      )
    case 'GitKraken':
      return (
        <GenericActivity
          statusText={'committing something to the cloud'}
          icon="/icons/gitkraken.png"
          altText="GitKraken"
          text="GitKraken: "
          elapsedTime={elapsedTime ?? ''}
        />
      )
    case 'Figma':
      return (
        <GenericActivity
          statusText={'making a coffee shop or something, idk'}
          icon="/icons/figma.png"
          altText="Figma"
          text="Figma: "
          elapsedTime={elapsedTime ?? ''}
        />
      )
    case 'Notepad':
      return (
        <GenericActivity
          statusText={`taking note for no reason~`}
          icon="/icons/notepad.png"
          altText="Notepad"
          text="Notepad: "
          elapsedTime={elapsedTime ?? ''}
        />
      )
    case 'IntelliJ IDEA Ultimate':
      defaultStatus = 'Intellij IDEA: idling'
      return (
        <GenericActivity
          statusText={statusText}
          icon="/icons/intellij.png"
          altText="Intellij IDEA Ultimate"
          text={statusText}
          elapsedTime={elapsedTime ?? ''}
        />
      )
    case 'Custom Status':
      return (
        <>
          {activities.length == 1 && (
            <GenericActivity
              statusText={statusText}
              icon="/icons/vscode.png"
              altText="Visual Studio Code"
              text={'Not coding right now'}
              elapsedTime={elapsedTime ?? ''}
            />
          )}
        </>
      )
    default:
      return null
  }
}

export default ActivityDetails
