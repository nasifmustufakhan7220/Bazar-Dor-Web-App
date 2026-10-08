import Image from "next/image";
import { cacheLife } from "next/cache";

const Header = async () => {
  const updateDate = async () => {
    "use cache";

    cacheLife({
      revalidate: 60 * 60 * 24,
    });

    return new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });
  };

  const date = await updateDate();

  return (
    <div className="mx-auto mt-2 w-full max-w-5xl px-3 sm:px-4 md:px-6">
      <div className="flex items-center justify-between gap-2">
        {/* Logo + Brand */}
        <div className="flex min-w-0 items-center gap-2">
          <div className="shrink-0">
            <Image
              className="rounded-xl bg-[#068a3f] p-3"
              src="/logo-icon.png"
              alt="logo"
              width={40}
              height={40}
            />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-[18px] font-bold sm:text-[20px]">
              বাজার দর
            </h2>

            <p className="truncate text-[10px] text-[#1c261e] sm:text-[12px]">
              {date}
            </p>
          </div>
        </div>

        {/* Auth */}
        <div className="flex shrink-0 gap-2 sm:gap-3">
          <button className="text-[12px] font-semibold sm:text-[14px]">
            সাইন ইন
          </button>

          <button className="btn bg-[#068a3f] text-[12px] text-[#f2faf3] sm:text-[14px]">
            সাইন আপ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;