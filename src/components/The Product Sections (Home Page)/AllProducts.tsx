import { IMarqueeText } from "@/types/bazarDor.types";
import ProductCard from "./productsCard/ProductCard";


const AllProducts = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products", {next:{revalidate:60}});
    const allProducts:IMarqueeText[] = await res.json();
    return (
         <div id="all-products" className="mx-auto mt-10 w-full max-w-6xl px-3 sm:px-4">
                    <div className="mb-3">
                        <h2 className="font-bold text-[20px]">সব পণ্য</h2>
                        <p className="mb-5">মোট {allProducts.length.toString().replace(/\d/g, (digit)=> "০১২৩৪৫৬৭৮৯"[Number(digit)])}টি পণ্য দেখানো হচ্ছে</p>

                        <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-3">
                            {
                                allProducts.map(product=> <ProductCard key={product.id} card={product} />)
                            }
                        </div>
                    </div>
            
        </div>
    );
};

export default AllProducts;