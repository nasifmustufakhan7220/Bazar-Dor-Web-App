import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto mt-8 w-full max-w-250 rounded-2xl bg-[#fafcfa] px-4 py-10 sm:px-6 md:px-8 md:py-8">
      <div className="grid items-center gap-10 md:grid-cols-2">

        {/* Left Content */}
        <div>
          {/* Eyebrow */}
          <p className="mb-4 inline-block rounded-md bg-[#e1f2e8] px-3 py-1 text-sm font-semibold text-green-700">
            বাজারদর এক নজরে
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            প্রতিদিনের বাজারদর
            <br />
            এখন হাতের মুঠোয়
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
            চাল, ডাল, তেল, সবজি, মাছ ও মাংসসহ নিত্যপ্রয়োজনীয়
            পণ্যের সর্বশেষ বাজারদর এক জায়গায় দেখুন।
          </p>

          {/* CTA */}
          <Link
            href="#সব-পণ্য"
            className="mt-7 inline-flex items-center rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের পণ্যের ঝুড়ি"
            width={400}
            height={300}
            priority
            className="h-auto w-65 md:w-85"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;