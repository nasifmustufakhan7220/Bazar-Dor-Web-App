import React from 'react';

const Category = async({params}: {params: Promise<{categoryName: string}>}) => {
    const {categoryName} = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoryName}`);
    const data = await res.json();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Category;