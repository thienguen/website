import { type Activity } from 'use-lanyard'
import useElapsedTime from '@/hooks/lanyard/useElapsedTime'
import GenericActivity from '@/components/home/lanyard/generic'

type ActivityDetailsProps = {
  activity: Partial<Activity>
  activities: Partial<Activity>[]
}

const ActivityDetails: React.FC<ActivityDetailsProps> = ({ activity, activities }) => {
  const elapsedTime = useElapsedTime(activity.timestamps?.start)

  switch (activity.name) {
    case 'Visual Studio Code':
      const defaultStatus = 'VS Code: idling'
      const statusText =
        activity.state && activity.details
          ? `${activity.state}, ${activity.details.replace('Editing', 'editing:')}`
          : defaultStatus
      return (
        <GenericActivity
          icon="/icons/vscode.png"
          altText="Visual Studio Code"
          text={statusText}
          elapsedTime={elapsedTime ?? ''}
        />
      )
    case 'GitKraken':
      return (
        <GenericActivity
          icon="/icons/gitkraken.png"
          altText="GitKraken"
          text="GitKraken: is committing something to the cloud"
          elapsedTime={elapsedTime ?? ''}
        />
      )
    case 'Figma':
      return (
        <GenericActivity
          icon="/icons/figma.png"
          altText="Figma"
          text="Figma: making a coffee shop or something, idk"
          elapsedTime={elapsedTime ?? ''}
        />
      )
    case 'Notepad':
      return (
        <GenericActivity
          icon="/icons/notepad.png"
          altText="Notepad"
          text="Notepad: taking note for no reason~"
          elapsedTime={elapsedTime ?? ''}
        />
      )
    case 'Custom Status':
      return (
        <>
          {activities.length == 1 && (
            <GenericActivity
              icon="/icons/vscode.png"
              altText="Visual Studio Code"
              text={'Idling'}
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
