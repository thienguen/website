import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch } from 'kbar'
import Results from '@/components/ui/(kbar)/result'

const KBar = () => {
  return (
    <KBarPortal>
      <KBarPositioner className="kbar-positioner fixed inset-0 flex w-full items-start justify-center bg-slate-950/50">
        <KBarAnimator className="kbar-animator w-full max-w-[600px] overflow-hidden rounded-lg bg-[#1a1c1e] text-white">
          <KBarSearch
            // className="w-full border-0 bg-white p-4 text-sm text-gray-800 outline-none dark:bg-slate-500 dark:text-gray-100"
            className="kbar-search m-0 w-full border-none bg-command p-3 text-center font-pixeloidMono text-xl text-white outline-none dark:text-primary"
            placeholder="Type a command or search…"
          />
          <Results />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

export default KBar
