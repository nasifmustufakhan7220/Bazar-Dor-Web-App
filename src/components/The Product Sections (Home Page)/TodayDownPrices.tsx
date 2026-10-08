import { IMarqueeText } from '@/bazarDor.types';
import React from 'react';

const TodayDownPrices = async() => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products", {next:{revalidate: 60}});
    const topDecreaseProducts:IMarqueeText[] = await res.json();
    const decreaseProducts = topDecreaseProducts.filter(t=> t.change.dir === "down");
    console.log(decreaseProducts);
    return (
        <div>
            
        </div>
    );
};

export default TodayDownPrices;