"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaUser, FaSignOutAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

const Profile = () => {
  const { data } = useSession();
  const handelSingOut = () => {
    signOut();
  };

  console.log(data);

  return (
    <div className="group relative">
      {/* Profile Button */}
      <div className="flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-2 py-1.5">
        <div className="flex h-10.5 w-10.5 items-center justify-center rounded-full">
          {
            data?.user?.image ? <>
              <Image className="rounded-2xl" src={`${data?.user?.image}`} alt="" width={30} height={30} />
            </> : <><FaRegCircleUser className="text-2xl" /></>
          }
        </div>

        <span className="text-base font-medium text-[#26332c]">
          {data?.user.name.split(" ").slice(0, 1)}
        </span>

        <FaChevronDown className="ml-1 text-[10px] text-gray-500 transition-transform duration-200 group-hover:rotate-180" />
      </div>

      {/* Profile Dropdown UI */}
      <div
        className="invisible absolute right-0 top-full z-50 w-74
        max-w-[calc(100vw-24px)] translate-y-2 rounded-[20px]
        border border-[#e1e8e2] bg-[#fcfdfc] p-6 opacity-0
        shadow-[0_8px_14px_rgba(0,0,0,0.16)]
        transition-all duration-200 ease-in-out
        group-hover:visible group-hover:translate-y-0
        group-hover:opacity-100"
      >
        {/* User Information */}
        <div className="mb-4">
          <h3 className="text-[16px] font-semibold leading-6 text-[#26332c]">
            {data?.user.name}
          </h3>

          <p className="break-all text-[13px] text-[#68736c]">
            {data?.user.email}
          </p>
        </div>

        {/* My Profile */}
        <Link href={`/update-profile`}>
          <div
            className="flex cursor-pointer items-center gap-2.5 py-1.5
          text-[15px] text-[#26332c] transition-colors
          hover:text-green-700"
          >
            <FaUser className="text-[14px] text-[#6084a0]" />
            <span>আমার প্রোফাইল</span>
          </div>
        </Link>

        {/* Sign Out */}
        <div
          className="mt-1 flex cursor-pointer items-center gap-2.5 py-1.5
          text-[15px] text-red-500 transition-colors
          hover:text-red-700"
        >
          <FaSignOutAlt className="text-[15px]" />
          <span onClick={() => handelSingOut()}>সাইন আউট</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
