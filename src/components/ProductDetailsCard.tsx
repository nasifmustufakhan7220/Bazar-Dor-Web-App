import { IMarqueeText } from "@/bazarDor.types";
import Image from "next/image";

const ProductDetailsCard = ({ data }: { data: IMarqueeText }) => {
  const min = data.markets
    .sort((a, b) => a.min - b.min)
    .map((item) => item.min)[0];
  const max = data.markets
    .sort((a, b) => b.max - a.max)
    .map((item) => item.max)[0];
  const avg = (min + max) / 2;
  const convertText: Record<string, string> = {
    dozen: "ডজন",
    liter: "লিটার",
    kg: "কেজি",
    piece: "পিস",
  };

  const toBangla = (number: number) => {
    return number
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
  };

  const priceSummary = [
    {
      title: "সর্বনিম্ন দাম",
      price: min,
      description: "সবচেয়ে কম দামের বাজার",
      color: "text-green-600",
    },
    {
      title: "সর্বাধিক দাম",
      price: max,
      description: "সবচেয়ে কম দামের বাজার",
      color: "text-red-600",
    },
    {
      title: "গড় দাম",
      price: avg,
      description: `প্রতি ${convertText[data.unit]}-এর হিসাবে`,
      color: "text-green-600",
    },
  ];

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
                  )}
                  {toBangla(data.change.pct)}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PRICE SUMMARY ================= */}
        <div className="rounded-xl border border-[#dfe8df] bg-white p-3 sm:p-5">
          <h2 className="mb-3 text-sm font-bold text-[#26332a]">
            দামের সারসংক্ষেপ
          </h2>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {priceSummary.map((item) => (
              <div
                key={item.title}
                className="w-full rounded-3xl border border-[#dce5dd] bg-[#fbfdfb] px-6 py-6"
              >
                <p className="text-base font-normal text-[#26332c]">
                  {item.title}
                </p>

                <div className="mt-1 flex items-baseline gap-1">
                  <span
                    className={`text-3xl font-bold leading-tight ${item.color}`}
                  >
                    {toBangla(item.price)}
                  </span>

                  <span className={`text-xl font-normal ${item.color}`}>
                    টাকা
                  </span>
                </div>

                <p className="mt-1 text-sm font-normal text-[#26332c]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ================= RESPONSIVE TABLE ================= */}
          <div className="mt-6">
            <h2 className="mb-4 text-sm font-bold text-[#26332a] sm:text-base">
              বাজারভিত্তিক আজকের দাম
            </h2>

            {/* Mobile View: Card Layout */}
            <div className="grid grid-cols-1 gap-3 md:hidden">
              {data.markets.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-[#dfe8df] bg-white shadow-sm"
                >
                  {/* Market Name */}
                  <div className="flex items-center justify-between gap-3 border-b border-[#e8eee8] bg-[#f7faf7] px-4 py-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold text-[#26332a]">
                        {item.market}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        জেলা: {item.division}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      বাজার দর
                    </span>
                  </div>

                  {/* Price Details */}
                  <div className="grid grid-cols-3 divide-x divide-[#e8eee8] px-2 py-4">
                    <div className="min-w-0 px-1 text-center">
                      <p className="text-[11px] text-gray-500 sm:text-xs">
                        সর্বনিম্ন
                      </p>
                      <p className="mt-2 wrap-break-word text-sm font-semibold text-green-700 sm:text-base">
                        {toBangla(item.min)}
                      </p>
                      <p className="text-[11px] text-gray-500">টাকা</p>
                    </div>

                    <div className="min-w-0 px-1 text-center">
                      <p className="text-[11px] text-gray-500 sm:text-xs">
                        সর্বাধিক
                      </p>
                      <p className="mt-2 wrap-break-word text-sm font-semibold text-red-600 sm:text-base">
                        {toBangla(item.max)}
                      </p>
                      <p className="text-[11px] text-gray-500">টাকা</p>
                    </div>

                    <div className="min-w-0 px-1 text-center">
                      <p className="text-[11px] text-gray-500 sm:text-xs">গড়</p>
                      <p className="mt-2 wrap-break-word text-sm font-bold text-[#26332a] sm:text-base">
                        {toBangla((item.min + item.max) / 2)}
                      </p>
                      <p className="text-[11px] text-gray-500">টাকা</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet & Desktop View: Table Layout */}
            <div className="hidden overflow-x-auto rounded-xl border border-[#dfe8df] md:block">
              <table className="w-full min-w-162.5 table-fixed border-collapse text-sm">
                <thead>
                  <tr className="bg-[#f7faf7] text-gray-500">
                    <th className="w-[28%] px-4 py-4 text-left font-medium">
                      বাজার
                    </th>

                    <th className="w-[18%] px-4 py-4 text-left font-medium">
                      জেলা
                    </th>

                    <th className="w-[18%] px-4 py-4 text-right font-medium">
                      সর্বনিম্ন
                    </th>

                    <th className="w-[18%] px-4 py-4 text-right font-medium">
                      সর্বাধিক
                    </th>

                    <th className="w-[18%] px-4 py-4 text-right font-medium">
                      গড়
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.markets.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-t border-[#dfe5df] transition-colors hover:bg-[#edf5ed] ${
                        index % 2 === 0 ? "bg-white" : "bg-[#f8faf8]"
                      }`}
                    >
                      <td className="truncate px-4 py-4 text-left text-gray-700">
                        {item.market}
                      </td>

                      <td className="truncate px-4 py-4 text-left text-gray-700">
                        {item.division}
                      </td>

                      <td className="whitespace-nowrap px-4 py-4 text-right font-medium text-green-700">
                        {toBangla(item.min)} টাকা
                      </td>

                      <td className="whitespace-nowrap px-4 py-4 text-right font-medium text-red-600">
                        {toBangla(item.max)} টাকা
                      </td>

                      <td className="whitespace-nowrap px-4 py-4 text-right font-bold text-[#26332a]">
                        {toBangla((item.min + item.max) / 2)} টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
