import React from "react";
import ProductCard from "../productsCard/ProductCard";
import { IMarqueeText } from "@/types/bazarDor.types";


const Category = async ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryName}`,
    { next: { revalidate: 60 } },
  );
  const data:IMarqueeText[] = await res.json();

  const toBangal = (number:number)=>{
    return number.toString().replace(/\d/g, (digit)=> "০১২৩৪৫৬৭৮৯"[Number(digit)]);
  }


  return (
    <div>
      <section className="mx-auto w-full max-w-5xl space-y-6 px-4 py-7 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex min-h-26 items-center gap-4 rounded-[20px] border border-[#dce5dc] bg-[#fbfcfb] px-5 py-5 sm:px-7">
          <div className="shrink-0 text-4xl sm:text-5xl">🍚</div>

          <div className="min-w-0">
            <h2 className="text-2xl font-bold text-[#202820] sm:text-3xl">
              চাল
            </h2>
            <p className="text-sm text-[#707970] sm:text-base">
              ৬টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* Sorting */}
        <div className="flex min-h-18 flex-wrap items-center justify-end gap-3 rounded-[20px] border border-[#dce5dc] bg-[#fbfcfb] px-5 py-4 sm:px-7">
          <label
            htmlFor="rice-sort-one"
            className="text-sm text-[#626c63] sm:text-base"
          >
            সাজান
          </label>

          <select
            id="rice-sort-one"
            defaultValue="default"
            className="cursor-pointer rounded-xl border border-[#cdd6cd] bg-transparent px-3 py-2 text-sm text-[#303830] outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-low">দাম: কম থেকে বেশি</option>
            <option value="price-high">দাম: বেশি থেকে কম</option>

          </select>
        </div>

        <p className="text-[#818a84]"> মোট {toBangal(data.length)} টি পণ্য দেখানো হচ্ছে</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {
                data.map(c=> <ProductCard key={c.id} card={c} />)
            }
        </div>
      </section>
    </div>
  );
};

export default Category;
