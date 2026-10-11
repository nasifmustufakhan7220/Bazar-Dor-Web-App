import { IMarqueeText } from "@/types/bazarDor.types";
import ProductDetailsCard from "@/components/ProductDetailsCard";
import { Suspense } from "react";
import BazarDorSkeleton from "@/components/ProductDetailsSkeleton/ProductDetailsSkeleton";

export const instant = false

const ProductDetailsPage = async({params}:{params:Promise<{productId:string}>}) => {
    const {productId} = await params;
    
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productId}`, {next:{revalidate: 60}});
    const data:IMarqueeText = await res.json();
    
    return (
        <div className="mx-auto max-w-5xl">
            <Suspense fallback={<BazarDorSkeleton/>}>
                <ProductDetailsCard data={data} />
            </Suspense>
        </div>
    );
};

export default ProductDetailsPage;