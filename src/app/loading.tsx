const BazarDorLoading = () => {
  return (
    <main className="min-h-screen bg-[#f1f6f1]">
      {/* Loading Header */}
      <header className="border-b border-[#dce7dc] bg-white">
        <div className="mx-auto flex max-w-300 items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#eaf5eb]">
              <div className="size-5 animate-pulse rounded-full bg-[#b8d9bd]" />
            </div>

            <div className="space-y-2">
              <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
              <div className="h-2.5 w-36 animate-pulse rounded bg-gray-200" />
            </div>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <div className="h-8 w-20 animate-pulse rounded-lg bg-gray-200" />
            <div className="h-8 w-20 animate-pulse rounded-lg bg-gray-200" />
          </div>
        </div>
      </header>

      {/* Loading Message */}
      <section className="mx-auto max-w-300 px-4 pt-6 sm:px-6">
        <div className="rounded-xl border border-[#dce7dc] bg-white px-4 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="size-9 shrink-0 animate-spin rounded-full border-4 border-[#dce7dc] border-t-[#15803d]" />

            <div className="space-y-2">
              <h1 className="text-sm font-semibold text-[#17452b] sm:text-base">
                বাজার দর লোড হচ্ছে...
              </h1>

              <p className="text-xs text-gray-500 sm:text-sm">
                সর্বশেষ বাজারদরের তথ্য সংগ্রহ করা হচ্ছে।
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BazarDorLoading;
