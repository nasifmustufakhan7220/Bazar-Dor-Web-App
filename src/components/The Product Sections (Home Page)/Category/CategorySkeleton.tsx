const CategorySkeleton = () => {
  return (
    <div className="mx-auto max-w-7xl animate-pulse space-y-5 p-4">

      {/* Header Skeleton */}
      <div className="flex h-20 items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-4">
        {/* Icon */}
        <div className="h-10 w-10 shrink-0 rounded-full bg-base-300" />

        {/* Title and Description */}
        <div className="flex-1 space-y-2">
          <div className="h-5 w-24 rounded bg-base-300" />
          <div className="h-3 w-52 max-w-full rounded bg-base-300" />
        </div>
      </div>

      {/* Sorting Bar Skeleton */}
      <div className="flex h-14 items-center justify-end gap-3 rounded-2xl border border-base-300 bg-base-100 px-4">
        <div className="h-3 w-10 rounded bg-base-300" />
        <div className="h-8 w-16 rounded-lg bg-base-300" />
      </div>

      {/* Result Count Skeleton */}
      <div className="h-4 w-40 rounded bg-base-300" />

      {/* Product Cards Skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex h-30.5 flex-col justify-between rounded-2xl border border-base-300 bg-base-100 p-3.5"
          >
            {/* Product Image and Name */}
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-base-300" />

              <div className="flex-1 space-y-2">
                <div className="h-4 w-28 max-w-full rounded bg-base-300" />
                <div className="h-3 w-16 rounded bg-base-300" />
              </div>
            </div>

            {/* Price and Change */}
            <div className="flex items-end justify-between gap-3">
              <div className="space-y-2">
                <div className="h-3 w-16 rounded bg-base-300" />
                <div className="h-4 w-20 rounded bg-base-300" />
              </div>

              <div className="h-6 w-14 rounded-full bg-base-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;

