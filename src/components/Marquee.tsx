
import { IMarqueeText } from "@/types/bazarDor.types";
import Link from "next/link";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { cache: "force-cache" },
  );

  const data: IMarqueeText[] = await res.json();

  const toBangalaNumber = (number: number) => {
    return number
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
  };

  const unitMap: Record<string, string> = {
    kg: "কেজি",
    liter: "লিটার",
    pice: "টি",
  };

  return (
    <div className="w-full cursor-pointer overflow-hidden border-y border-[#e9f0e9]">
      <MarqueeText direction="right" duration={15} pauseOnHover={true}>
        {data.map((marq) => (
          <Link
            href={`/products/${marq.id}`}
            key={marq.id}
            className="group relative inline-flex h-10 shrink-0 items-center"
          >
            {/* Product Information */}
            <div className="inline-flex h-full items-center gap-1.5 border-r border-[#e9f0e9] px-3 text-xs text-[#333] sm:px-5 sm:text-sm">
              {/* Category Icon */}
              <span className="shrink-0 text-sm sm:text-[15px]">
                {marq.categoryIcon}
              </span>

              {/* Product Name */}
              <span className="whitespace-nowrap transition-colors duration-200 group-hover:text-[#176b38]">
                {marq.nameBn}
              </span>

              {/* Price */}
              <span className="whitespace-nowrap">
                {toBangalaNumber(marq.today)} টাকা/
                {unitMap[marq.unit]}
              </span>

              {/* Price Change */}
              {marq.change.dir === "up" ? (
                <span className="flex shrink-0 items-center text-red-600">
                  <FaCaretUp className="text-[15px]" />

                  <span className="text-xs font-semibold sm:text-[13px]">
                    {toBangalaNumber(marq.change.pct)}%
                  </span>
                </span>
              ) : (
                <span className="flex shrink-0 items-center text-green-600">
                  <FaCaretDown className="text-[15px]" />

                  <span className="text-xs font-semibold sm:text-[13px]">
                    {toBangalaNumber(marq.change.pct)}%
                  </span>
                </span>
              )}
            </div>

            {/* Animated Hover Underline */}
            <span className="pointer-events-none absolute bottom-0 left-5 right-5 h-0.5 origin-left scale-x-0 bg-[#176b38] transition-transform duration-200 group-hover:scale-x-100" />
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
