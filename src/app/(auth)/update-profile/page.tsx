"use client";
import { useSession, signOut, updateUser } from "@/lib/auth-client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { toast } from "react-toastify";

const ProfilePage = () => {
    const router = useRouter();
  const { data, isPending } = useSession();
  useEffect(()=>{
    if(!isPending && !data?.user){
        router.push('/sign-in');
        return;
    }
  },[data, isPending, router]);
  const handelSingOut = () => {
    signOut();
  };
  const handleUpdate = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    const {data:userData, error} = await updateUser({
        name: data.name,
    });

    if (!error && userData) {
          toast.success(
            `আপনার নাম সফলভাবে আপডেট হয়েছে`,
            {
              icon: () => <span>🌿</span>,
              autoClose: 4000,
            },
          );
        } else {
          toast.error(
            error?.message || " আবার চেষ্টা করুন।",
            {
              icon: () => <span>⚠️</span>,
              autoClose: 4500,
            },
          );
    
          console.log(error);
          return;
        }
  };

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 sm:px-6">
          <div className="mx-auto max-w-5xl">
            {/* Profile Heading */}
            <div className="mb-5">
              <h1 className="text-xl font-bold text-[#26312a]">
                আমার প্রোফাইল
              </h1>

              <p className="text-sm text-gray-500">
                আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
              </p>
            </div>

            {/* Profile Card */}
            <section className="mb-4 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#e0e8e0] bg-[#fbfdfb] p-4 sm:flex-row sm:items-center sm:px-5 sm:py-4">
              <div className="flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-2 py-1.5">
                      <div className="flex h-10.5 w-10.5 items-center justify-center rounded-full">
                        <FaRegCircleUser className="text-2xl" />
                      </div>
              
                      <span className="text-base font-medium text-[#26332c]">
                        {data?.user.name.split(" ").slice(0, 1)}
                      </span>
              
                      
                    </div>

              <button
                type="button"
                onClick={handelSingOut}
                className="inline-flex items-center gap-2 rounded-lg border border-red-400 px-3 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
              >
                <FaSignOutAlt size={13} />
                সাইন আউট
              </button>
            </section>

            {/* Update Information Card */}
            <section className="rounded-xl border border-[#e0e8e0] bg-[#fbfdfb] p-5 sm:p-6">
              <h2 className="mb-7 text-base font-bold text-[#26312a]">তথ্য</h2>

              <form onSubmit={handleUpdate} className="space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-[#26312a]"
                  >
                    নাম
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="আপনার নাম লিখুন"
                    className="h-9.5 w-full rounded-lg border border-[#e1e9e1] bg-transparent px-3 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <button
                  type="submit"
                  className="h-9.5 w-full rounded-lg bg-[#078b43] text-sm font-semibold text-white shadow-sm transition hover:bg-[#067537] active:scale-[0.99]"
                >
                  আপডেট
                </button>
              </form>
            </section>
          </div>
    </main>
  );
};

export default ProfilePage;
