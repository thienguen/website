export type TimelineProps = {
  title       : string
  url         : string
  description?: string
  since      ?: string
  active     ?: boolean
  icon        : string
  stats      ?: string
  tech       ?: string[]
}

export type CombinedTimeline = {
  year       : string
  allProjects: TimelineProps[]
  careers    : TimelineProps[]
}

export type SubTimelineProps = {
  year          ?: string
  title         ?: string
  description   ?: string
  tech          ?: string[]
  url           ?: string
  since         ?: string
  primaryColor  ?: string
  secondaryColor?: string
}