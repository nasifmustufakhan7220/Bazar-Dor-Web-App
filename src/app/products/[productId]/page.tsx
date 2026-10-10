import { IMarqueeText } from "@/bazarDor.types";
import ProductDetailsCard from "@/components/ProductDetailsCard";

export const instant = false

const ProductDetailsPage = async({params}:{params:Promise<{productId:string}>}) => {
    const {productId} = await params;
    
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productId}`, {next:{revalidate: 60}});
    const data:IMarqueeText = await res.json();
    
    return (
        <div className="mx-auto max-w-5xl">
            <ProductDetailsCard data={data} />
        </div>
    );
};

export default ProductDetailsPage;