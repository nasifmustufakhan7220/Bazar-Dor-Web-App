import { IMarqueeText } from '@/bazarDor.types';
import Image from 'next/image';
import React from 'react';
import ProductCard from './productsCard/ProductCard';

const TodayDownPrices = async() => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products", {next:{revalidate: 60}});
    const topDecreaseProducts:IMarqueeText[] = await res.json();
    const decreaseProducts = topDecreaseProducts.filter(t=> t.change.dir === "down");
    const topSix = decreaseProducts.sort((a,b)=>a.change.pct - b.change.pct).slice(0,6);

    return (
        <div className="mt-10 mx-auto max-w-5xl">
            <div className="flex gap-1 items-center mb-3">
                <p><Image src="/▼.png" alt="" width={10} height={10}/></p>
                <h2 className="font-bold text-[20px]">আজ দাম কমেছে</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    topSix.map(six=> <ProductCard key={six.id} card={six} />)
                }
            </div>
        </div>
    );
};

export default TodayDownPrices;