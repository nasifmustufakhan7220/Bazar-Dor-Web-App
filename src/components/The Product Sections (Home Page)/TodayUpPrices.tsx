import { IMarqueeText } from "@/types/bazarDor.types";
import ProductCard from "./productsCard/ProductCard";
import Image from "next/image";


const TodayUpPrices = async() => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products", {next:{revalidate: 60}});
    const topIncreaseProducts:IMarqueeText[] = await res.json();
    const increaseProducts = topIncreaseProducts.filter(increase=> increase.change.dir==="up");
    const topSix = increaseProducts.sort((a,b)=>b.change.pct - a.change.pct).slice(0,6);
    return (
        <div className="mx-auto mt-10 w-full max-w-6xl px-3 sm:px-4">
            <div className="flex gap-1 items-center mb-3">
                <p><Image src="/▲.png" alt="" width={10} height={10}/></p>
                <h2 className="font-bold text-[20px]">আজ দাম বেড়েছে</h2>
            </div>

            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-3">
                {
                    topSix.map(six=> <ProductCard key={six.id} card={six} />)
                }
            </div>
        </div>
    );
};

export default TodayUpPrices;