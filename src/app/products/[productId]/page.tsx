import { IMarqueeText } from "@/bazarDor.types";
import ProductDetailsCard from "@/components/ProductDetailsCard";

export const instant = false

const ProductDetailsPage = async({params}:{params:Promise<{productId:string}>}) => {
    const {productId} = await params;
    
    const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${productId}`);
    const data:IMarqueeText = await res.json();
    
    return (
        <div className="mx-auto max-w-5xl">
            <ProductDetailsCard data={data} />
        </div>
    );
};

export default ProductDetailsPage;