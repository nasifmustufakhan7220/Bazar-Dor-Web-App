import React from 'react';

const Category = async({params}: {params: Promise<{categoryName: string}>}) => {
    const {categoryName} = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryName}`, {next: {revalidate: 60}});
    const data = await res.json();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Category;