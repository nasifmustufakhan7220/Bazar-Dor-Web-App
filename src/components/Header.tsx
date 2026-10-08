import Image from "next/image";
import { cacheLife } from "next/cache";

const Header = async () => {
  const updateDate = async () => {
    "use cache";
    cacheLife({ revalidate: 60 * 60 * 24 });
    return new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  };
  const date = await updateDate();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div>
            <Image
              className="bg-[#068a3f] p-3 rounded-xl"
              src={"/logo-icon.png"}
              alt="logo"
              width={40}
              height={40}
            />
          </div>
          <div className="">
            <h2 className="font-bold text-[20px]">বাজার দর</h2>
            <p className="text-[12px] text-[#1c261e]">{date}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="font-semibold text-[14px]">সাইন ইন</button>
          <button className="btn bg-[#068a3f] text-[#f2faf3]">সাইন আপ</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
