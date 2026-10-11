"use client";
import { IMarqueeText } from "@/types/bazarDor.types";
import ProductCard from "./The Product Sections (Home Page)/productsCard/ProductCard";
import { useState } from "react";

const CategorySort = ({ data }: { data: IMarqueeText[] }) => {
  const [sort, setSort] = useState<"default" | "price-low" | "price-high">(
    "default",
  );
  const toBangal = (number: number) => {
    return number
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
  };

  const handelSort = (categories:IMarqueeText[])=>{
    const sortCategory = [...categories];
    if(sort === "price-low"){
        sortCategory.sort((a,b)=>a.today - b.today)
    }else if(sort === "price-high"){
        sortCategory.sort((a,b)=>b.today - a.today)
    }
    return sortCategory;
  }

  const categorySort = handelSort(data);
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl space-y-6 px-3 py-7 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="flex min-h-26 items-center gap-4 rounded-[20px] border border-[#dce5dc] bg-[#fbfcfb] px-5 py-5 sm:px-7">
          <div className="shrink-0 text-4xl sm:text-5xl">{data.map(i=>i.image).slice(0,1)}</div>

          <div className="min-w-0">
            <h2 className="text-2xl font-bold text-[#202820] sm:text-3xl">
              {data.map(n=>n.categoryNameBn).slice(0,1)}
            </h2>
            <p className="text-sm text-[#707970] sm:text-base">
              {toBangal(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
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
            value={sort}
            onChange={(e) =>
              setSort(e.target.value as "default" | "price-low" | "price-high")
            }
            className="max-w-full cursor-pointer rounded-xl border border-[#cdd6cd] bg-transparent px-3 py-2 text-sm text-[#303830] outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-low">দাম: কম থেকে বেশি</option>
            <option value="price-high">দাম: বেশি থেকে কম</option>
          </select>
        </div>

        <p className="text-[#818a84]">
          {" "}
          মোট {toBangal(data.length)} টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-3">
          {categorySort.map((c) => (
            <ProductCard key={c.id} card={c} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategorySort;
