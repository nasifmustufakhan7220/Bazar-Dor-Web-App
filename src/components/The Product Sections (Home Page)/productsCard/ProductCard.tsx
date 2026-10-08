import { IMarqueeText } from "@/bazarDor.types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ card }: { card: IMarqueeText }) => {
  const convertText: Record<string, string> = {
    dozen: "ডজন",
    liter: "লিটার",
    kg: "কেজি",
    piece: "পিস",
  };
  return (
   <Link href={`/products/${card.id}`}>
     <div className="cursor-pointer w-full rounded-[18px] border border-[#dce4dd] bg-[#f9fbf9] px-4.5 py-4.5">
      <div className="flex h-full flex-col justify-between">
        {/* Top Section */}
        <div className="flex items-center gap-4">
          {/* Product Image */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[15px] bg-[#f0f5f1] text-[32px]">
            {card.image}
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-[18px] font-bold leading-[1.2] text-[#202923]">
              {card.nameBn}
            </h2>

            <p className="mt-1 text-[14px] leading-none text-[#202923]">
              প্রতি {convertText[card.unit]}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-5 flex items-end justify-between">
          {/* Price */}
          <div>
            <p className="text-[14px] leading-none text-[#202923]">আজকের দাম</p>

            <p className="mt-2 text-[22px] font-bold leading-none text-[#202923]">
              {card.today}
              <span className="ml-1 text-[17px] font-normal">টাকা</span>
            </p>
          </div>

          {/* Percentage */}
          {card.change.pct !== 0 ? (
            <div className="flex items-center gap-1.5 rounded-full bg-[#f0f5f1] px-3 py-1.5">
              <span className="text-[13px] font-bold">
                {card.change.dir === "up" ? (
                  <>
                    <Image src="/▲.png" alt="" width={10} height={10} />
                  </>
                ) : (
                  <>
                    <Image src="/▼.png" alt="" width={10} height={10} />
                  </>
                )}
              </span>

              <span
                className={`text-[13px] font-bold ${card.change.dir === "up" ? "text-red-500" : "text-green-500"}`}
              >
                {card.change.pct.toString().replace(/\d/g, (digit)=> "০১২৩৪৫৬৭৮৯"[Number(digit)])}%
              </span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-1.5 rounded-full bg-[#f0f5f1] px-3 py-1.5">
                <span className="text-[13px] font-bold">
                  <Image src="/—.png" alt="" width={10} height={10} />
                </span>
                <span
                  className={`text-[13px] font-bold`}
                >
                  {card.change.pct.toString().replace(/\d/g, (digit)=>"০১২৩৪৫৬৭৮৯"[Number(digit)])}.০%
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
   
   </Link>
  );
};

export default ProductCard;
