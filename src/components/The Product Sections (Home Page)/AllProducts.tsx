import { IMarqueeText } from "@/bazarDor.types";
import ProductCard from "./productsCard/ProductCard";


const AllProducts = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products", {next:{revalidate:60}});
    const allProducts:IMarqueeText[] = await res.json();
    return (
         <div className="mt-10 mx-auto max-w-5xl">
                    <div className="mb-3">
                        <h2 className="font-bold text-[20px]">সব পণ্য</h2>
                        <p>মোট {allProducts.length.toString().replace(/\d/g, (digit)=> "০১২৩৪৫৬৭৮৯"[Number(digit)])}টি পণ্য দেখানো হচ্ছে</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {
                                allProducts.map(product=> <ProductCard key={product.id} card={product} />)
                            }
                        </div>
                    </div>
            
        </div>
    );
};

export default AllProducts;