"use client"
import Link from "next/link";
import { FaArrowLeft, FaBoxOpen, FaHouse } from "react-icons/fa6";

const EmptyState = () => {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#f1f6f1] px-4 py-12 sm:px-6">
      <section className="w-full max-w-lg rounded-2xl border border-[#dce7dc] bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
        {/* Illustration */}
        <div className="relative mx-auto mb-6 flex size-24 items-center justify-center rounded-full bg-[#e8f5e9]">
          <div className="absolute inset-2 rounded-full border border-dashed border-[#b9d8bd]" />

          <FaBoxOpen className="text-4xl text-[#247a42]" />

          <span className="absolute -right-1 top-1 flex size-8 items-center justify-center rounded-full border-4 border-white bg-[#f1f6f1] text-sm font-bold text-[#247a42]">
            ?
          </span>
        </div>

        {/* Error Code */}
        <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#278344]">
          404 · NOT FOUND
        </p>

        {/* Heading */}
        <h1 className="text-2xl font-bold tracking-tight text-[#173d28] sm:text-3xl">
          কোনো পণ্য পাওয়া যায়নি!
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500 sm:text-base">
          দুঃখিত, এই ক্যাটাগরিতে কোনো পণ্য নেই অথবা আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#176b38] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#10552c] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176b38]"
        >
          <FaHouse className="text-sm" />
          হোম পেজে ফিরে যান
          <FaArrowLeft className="text-xs transition-transform duration-200 group-hover:-translate-x-1" />
        </Link>

        {/* Footer Note */}
        <div className="mt-8 border-t border-[#edf1ed] pt-5">
          <p className="text-xs text-gray-400">
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </p>
        </div>
      </section>
    </main>
  );
};

export default EmptyState;
