import Image from "next/image";

const Hero = () => {
  return (
    <section className="mx-auto mt-5 w-full max-w-6xl px-3 sm:mt-8 sm:px-4">
      <div className="grid items-center gap-7 rounded-2xl bg-[#fafcfa] px-4 py-8 sm:gap-10 sm:px-6 sm:py-10 md:grid-cols-2 md:px-8 md:py-8">

        {/* Left Content */}
        <div className="text-center md:text-left">
          {/* Eyebrow */}
          <p className="mb-4 inline-block rounded-md bg-[#e1f2e8] px-3 py-1 text-sm font-semibold text-green-700">
            বাজারদর এক নজরে
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            প্রতিদিনের বাজারদর
            <br className="hidden sm:block" />
            এখন হাতের মুঠোয়
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 md:mx-0 md:text-lg">
            চাল, ডাল, তেল, সবজি, মাছ ও মাংসসহ নিত্যপ্রয়োজনীয়
            পণ্যের সর্বশেষ বাজারদর এক জায়গায় দেখুন।
          </p>

          {/* CTA */}
          <a
            href="#all-products"
            className="btn btn-sm mt-6 bg-green-700 px-5 text-white sm:btn-md sm:mt-7 sm:px-6"
          >
            সব পণ্য দেখুন
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের পণ্যের ঝুড়ি"
            width={400}
            height={300}
            priority
            className="h-auto w-52 sm:w-65 md:w-85"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;