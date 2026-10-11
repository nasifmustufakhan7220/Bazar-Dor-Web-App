"use client"
import Link from "next/link";
import {
  FaArrowLeft,
  FaHouse,
  FaMagnifyingGlass,
} from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#f1f6f1] px-4 py-12 sm:px-6">
      <section className="w-full max-w-xl text-center">

        {/* 404 Illustration */}
        <div className="relative mx-auto mb-7 flex h-44 w-64 max-w-full items-center justify-center">
          {/* Background circles */}
          <div className="absolute size-40 rounded-full bg-[#e1efe2]" />
          <div className="absolute size-32 rounded-full border border-dashed border-[#a8c9ae]" />

          {/* 404 Text */}
          <div className="relative flex items-center gap-1">
            <span className="text-6xl font-black tracking-tighter text-[#176b38] sm:text-7xl">
              4
            </span>

            <div className="flex size-18 items-center justify-center rounded-full border-[5px] border-white bg-[#c8e5cb] shadow-sm sm:size-20">
              <FaMagnifyingGlass className="text-3xl text-[#176b38] sm:text-4xl" />
            </div>

            <span className="text-6xl font-black tracking-tighter text-[#176b38] sm:text-7xl">
              4
            </span>
          </div>

          {/* Decorative dots */}
          <span className="absolute left-7 top-7 size-3 rounded-full bg-[#a8d96c]" />
          <span className="absolute right-7 top-10 size-2 rounded-full bg-[#176b38]" />
          <span className="absolute bottom-5 left-12 size-2 rounded-full bg-[#176b38]" />
          <span className="absolute bottom-7 right-10 size-3 rounded-full bg-[#a8d96c]" />
        </div>

        {/* Message */}
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#39804d]">
          Error 404
        </p>

        <h1 className="text-2xl font-extrabold leading-tight text-[#173d28] sm:text-4xl">
          দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
          এর ঠিকানা পরিবর্তন হয়েছে অথবা পেজটি আর উপলব্ধ নেই।
        </p>

        {/* Home Button */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#176b38] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#10552c] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176b38] sm:w-auto"
          >
            <FaHouse />
            হোম পেজে ফিরে যান
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#cbdccb] bg-white px-6 py-3 text-sm font-semibold text-[#245a35] transition hover:bg-[#e8f3e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176b38] sm:w-auto"
          >
            <FaArrowLeft />
            আগের পেজে যান
          </button>
        </div>

        {/* Footer Branding */}
        <div className="mt-12 border-t border-[#dce7dc] pt-5">
          <p className="text-sm font-bold text-[#176b38]">
            বাজার দর
          </p>
          <p className="mt-1 text-xs text-gray-500">
            প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </p>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
