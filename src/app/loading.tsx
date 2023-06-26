import { SkeletonCard } from '@/components/ui/skeleton-card'

export default function Loading() {
  return (
    <div className="items-center justify-center space-y-4">
      <h1 className="my-16 text-center text-xl font-medium text-slate-800/40 dark:text-gray-400/80">Loading...</h1>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 lg:grid-cols-3">
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
        <SkeletonCard isLoading={true} />
      </div>
    </div>
  )
}
