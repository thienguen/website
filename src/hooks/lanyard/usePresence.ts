import { useLanyard, type Activity } from 'use-lanyard'

/**
 * @see presence.types.ts simple info filter
 * 5. name, detail, state, application_id, <-- this should be what we care abot
 */
function filterActivities(activities: Activity[]): Partial<Activity>[] {
  return activities.map((activity) => ({
    application_id: activity.application_id,
    name          : activity.name,
    details       : activity.details,
    state         : activity.state,
    timestamps    : activity.timestamps,
  }))
}

/**
 * This thing fetch continueosly, might be heavy
 * @returns Activities in the user's presence
 */
export default function usePresence() {
  const { data } = useLanyard(process.env.NEXT_PUBLIC_DISCORD_ID as `${bigint}`)
  const activities: Activity[] = data?.activities || []
  const filteredActivities: Partial<Activity>[] = filterActivities(activities)
  return filteredActivities
}
