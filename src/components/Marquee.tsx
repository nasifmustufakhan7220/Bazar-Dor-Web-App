import { IMarqueeText } from "@/bazarDor.types";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { cache: "force-cache" }
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
    <div className="w-full overflow-hidden border-y border-[#e9f0e9]">
      <MarqueeText direction="right">
        {data.map((marq) => (
          <div
            key={marq.id}
            className="inline-flex h-10 shrink-0 items-center gap-1.5 border-r border-[#e9f0e9] px-5 text-[14px] text-[#333]"
          >
            {/* Category Icon */}
            <span className="shrink-0 text-[15px]">
              {marq.categoryIcon}
            </span>

            {/* Product Name */}
            <span className="whitespace-nowrap">
              {marq.nameBn}
            </span>

            {/* Price */}
            <span className="whitespace-nowrap">
              {toBangalaNumber(marq.today)} টাকা/{unitMap[marq.unit]}
            </span>

            {/* Price Change */}
            {marq.change.dir === "up" ? (
              <span className="flex shrink-0 items-center text-red-600">
                <FaCaretUp className="text-[15px]" />

                <span className="text-[13px] font-semibold">
                  {toBangalaNumber(marq.change.pct)}%
                </span>
              </span>
            ) : (
              <span className="flex shrink-0 items-center text-green-600">
                <FaCaretDown className="text-[15px]" />

                <span className="text-[13px] font-semibold">
                  {toBangalaNumber(marq.change.pct)}%
                </span>
              </span>
            )}
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;