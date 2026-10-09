import { IMarqueeText } from "@/bazarDor.types";
import Image from "next/image";

const ProductDetailsCard = ({ data }: { data: IMarqueeText }) => {
  const priceSummary = [
    {
      title: "সর্বনিম্ন দাম",
    },
    {
      title: "সর্বাধিক দাম",
    },
    {
      title: "গড় দাম",
    },
  ];
  console.log(data);
  const toBangla = (number: number) => {
    return number
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
  };
  const convertText: Record<string, string> = {
    dozen: "ডজন",
    liter: "লিটার",
    kg: "কেজি",
    piece: "পিস",
  };

  return (
    <section className="min-h-screen bg-[#f1f6f1] px-3 py-5 sm:px-5 md:px-6">
      <div className="w-full space-y-4">
        {/* ================= PRODUCT HEADER ================= */}
        <div className="rounded-xl border border-[#dfe8df] bg-white p-4 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Product Info */}
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f1] text-4xl">
                🍚
              </div>

              <div>
                <h1 className="text-lg font-bold text-[#26332a] sm:text-xl">
                  {data.nameBn}
                </h1>

                <p className="text-xs text-gray-500">
                  প্রতি {convertText[data.unit]} {data.categoryNameBn}{" "}
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  সর্বশেষ আপডেট পাওয়া বাজার দর • ১ কেজি
                </p>
              </div>
            </div>

            {/* Current Price */}
            <div className="rounded-xl bg-[#f1f6f1] px-5 py-3 text-center sm:min-w-25">
              <p className="text-[10px] text-gray-500">আজকের দাম</p>

              <p className="mt-1 text-sm font-semibold text-gray-700">
                টাকা / {convertText[data.unit]}
              </p>

              <div className="mt-1 flex items-center justify-center gap-1">
                <div
                  className={`text-sm flex items-center font-bold ${data.change.dir === "up" ? "text-red-500" : "text-green-500"}`}
                >
                  {data.change.dir !== "up" ? (
                    <p>
                      <Image src="/▼.png" alt="" width={10} height={10} />
                    </p>
                  ) : (
                    <p>
                      <Image src="/▲.png" alt="" width={10} height={10} />
                    </p>
                  )}{" "}
                  {toBangla(data.change.pct)}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PRICE SUMMARY ================= */}
        <div className="rounded-xl border border-[#dfe8df] bg-white p-3 sm:p-5">
          <h2 className="mb-3 text-sm font-bold text-[#26332a]">
            দামের সারাংশপ্রেক্ষণ
          </h2>

          <div  className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {data.markets.map((price) => (
              <div key={price.market}>
                <div className="w-full rounded-3xl border border-[#dce5dd] bg-[#fbfdfb] px-9 py-6">
                  <p className="text-base font-normal text-[#26332c]">
                    {data.change.dir === "up" ? "" : ""}
                  </p>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-3xl font-bold leading-tight text-[#169b50]">
                      ৫৯
                    </span>
                    <span className="text-xl font-normal text-[#169b50]">
                      টাকা
                    </span>
                  </div>
                  <p className="mt-1 text-base font-normal text-[#26332c]">
                    সবচেয়ে কম দামের বাজার
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= TABLE ================= */}
          <div className="mt-5">
            <h2 className="mb-3 text-sm font-bold text-[#26332a]">
              বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[#dfe8df]">
              <table className="w-full min-w-162.5 border-collapse text-xs">
                <thead>
                  <tr className="bg-[#f7faf7] text-gray-500">
                    <th className="px-3 py-3 text-left font-medium">বাজার</th>

                    <th className="px-3 py-3 text-left font-medium">জেলা</th>

                    <th className="px-3 py-3 text-right font-medium">
                      সর্বনিম্ন
                    </th>

                    <th className="px-3 py-3 text-right font-medium">
                      সর্বাধিক
                    </th>

                    <th className="px-3 py-3 text-right font-medium">গড়</th>
                  </tr>
                </thead>

                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
