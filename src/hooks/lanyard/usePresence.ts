import { type Activity, useLanyard } from "use-lanyard";

// 5. name, detail, state, application_id,
type PartialActivity = {
  name: string;
  details: string;
  state: string;
  application_id: string;
}


function filterActivities(activities: Activity[]): Partial<Activity>[] {
  return activities.map(activity => ({
      application_id: activity.application_id,
      name: activity.name,
      details: activity.details,
      state: activity.state
  }));
}

export default function usePresence() {
  const { data } = useLanyard(process.env.NEXT_PUBLIC_DISCORD_ID as `${bigint}`)
  const activities: Activity[] = data?.activities || []
  const filteredActivities: Partial<Activity>[] = filterActivities(activities);
  console.log('Filtered',filteredActivities);
  return filteredActivities;
}