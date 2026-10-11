import React from "react";

import { IMarqueeText } from "@/types/bazarDor.types";
import CategorySort from "@/components/CategorySort";


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

  


  return (
    <div>
      <CategorySort data={data} />
    </div>
  );
};

export default Category;
