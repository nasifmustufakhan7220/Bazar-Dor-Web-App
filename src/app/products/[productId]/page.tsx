import { IMarqueeText } from "@/types/bazarDor.types";
import ProductDetailsCard from "@/components/ProductDetailsCard";
import { Suspense } from "react";
import BazarDorSkeleton from "@/components/ProductDetailsSkeleton/ProductDetailsSkeleton";
import Link from "next/link";

export const instant = false;

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
    { next: { revalidate: 60 } },
  );
  const data: IMarqueeText = await res.json();

  return (
    <div className="mx-auto max-w-5xl">
      <nav aria-label="Breadcrumb" className="mb-4 ml-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[#26332a]">
          <li>
            <Link href="/" className="hover:text-green-700">
              হোম
            </Link>
          </li>

          <li aria-hidden="true">›</li>

          <li>
            <Link
              href={`/category/${data.category}`}
              className="hover:text-green-700"
            >
              {data.categoryNameBn}
            </Link>
          </li>

          <li aria-hidden="true">›</li>

          <li aria-current="page" className="font-medium">
            {data.nameBn}
          </li>
        </ol>
      </nav>
      <Suspense fallback={<BazarDorSkeleton />}>
        <ProductDetailsCard data={data} />
      </Suspense>
    </div>
  );
};

export default ProductDetailsPage;
