import { IMarqueeText } from "@/types/bazarDor.types";
import CategorySort from "@/components/CategorySort";
import EmptyState from "@/components/EmptyState";
import { notFound } from "next/navigation";


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

  if(!res.ok){
    notFound();
  }

  const data:IMarqueeText[] = await res.json();

  if(data.length === 0){
    return <EmptyState/>
  }
  


  return (
    <div>
      <CategorySort data={data} />
    </div>
  );
};

export default Category;
