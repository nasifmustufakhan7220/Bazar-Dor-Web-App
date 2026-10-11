
const Skeleton = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200/80 ${className}`}
    />
  );
};

const BazarDorSkeleton = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-300 bg-[#f1f6f1] px-3 py-3 sm:px-5 md:px-6">
      <div className="space-y-3">

        {/* Header Skeleton */}
        <section className="flex items-center justify-between gap-3 rounded-lg border border-[#d9e5d9] bg-white p-3 sm:p-4">
          <div className="flex min-w-0 items-center gap-3">
            <Skeleton className="size-10 shrink-0 rounded-xl" />

            <div className="min-w-0 space-y-2">
              <Skeleton className="h-4 w-24 sm:w-32" />
              <Skeleton className="h-3 w-16 sm:w-24" />
              <Skeleton className="h-2.5 w-32 max-w-full sm:w-48" />
            </div>
          </div>

          <div className="shrink-0 space-y-2 rounded-lg bg-[#f1f6f1] p-3">
            <Skeleton className="h-2 w-12" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-2 w-10" />
          </div>
        </section>

        {/* Main Content Skeleton */}
        <section className="rounded-lg border border-[#d9e5d9] bg-white p-3 sm:p-4">

          {/* Section Title */}
          <Skeleton className="mb-3 h-3 w-28" />

          {/* Summary Cards */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="space-y-2 rounded-2xl border border-[#d9e5d9] bg-[#fbfdfb] p-4"
              >
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-3 w-28" />
              </div>
            ))}
          </div>

          {/* Table Title */}
          <Skeleton className="mb-3 mt-5 h-3 w-36" />

          {/* Table Skeleton */}
          <div className="overflow-hidden rounded-lg border border-[#d9e5d9]">

            {/* Table Header */}
            <div className="grid grid-cols-4 gap-2 bg-[#f7faf7] px-3 py-3 sm:grid-cols-5 sm:px-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className={`h-3 w-full max-w-16 ${
                    index === 4 ? "hidden sm:block" : ""
                  }`}
                />
              ))}
            </div>

            {/* Table Rows */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-4 items-center gap-2 border-t border-[#e1e8e1] px-3 py-3 sm:grid-cols-5 sm:px-4"
              >
                <Skeleton className="h-3 w-full max-w-24" />
                <Skeleton className="h-3 w-full max-w-16" />
                <Skeleton className="h-3 w-full max-w-14" />
                <Skeleton className="h-3 w-full max-w-14" />
                <Skeleton className="hidden h-3 w-full max-w-14 sm:block" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default BazarDorSkeleton;

