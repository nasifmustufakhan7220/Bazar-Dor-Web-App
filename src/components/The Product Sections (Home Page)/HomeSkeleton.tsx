
const Skeleton = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200/80 ${className}`}
    />
  );
};

const HomePageSkeleton = () => {
  // Screenshot অনুযায়ী বিভিন্ন category-তে card-এর সংখ্যা
  const categories = [
    { id: 1, cards: 6 },
    { id: 2, cards: 6 },
    { id: 3, cards: 24 },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl bg-[#f1f6f1] px-3 py-4 sm:px-4">
      <div className="space-y-5">
        {categories.map((category) => (
          <section key={category.id} className="space-y-2">
            {/* Category Title */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-1 rounded-full" />
              <Skeleton className="h-3 w-24" />
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 gap-2 min-[480px]:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: category.cards }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-[#e2eae2] bg-white p-3"
                >
                  {/* Product name and icon */}
                  <div className="flex items-start gap-2">
                    <Skeleton className="size-8 shrink-0 rounded-lg" />

                    <div className="min-w-0 flex-1 space-y-2 pt-0.5">
                      <Skeleton className="h-3 w-24 max-w-full" />
                      <Skeleton className="h-2 w-16 max-w-full" />
                    </div>
                  </div>

                  {/* Product information */}
                  <div className="mt-3 space-y-2">
                    <Skeleton className="h-2 w-20 max-w-full" />

                    <div className="flex items-center justify-between gap-2">
                      <Skeleton className="h-3 w-14" />
                      <Skeleton className="h-3 w-10" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default HomePageSkeleton;
