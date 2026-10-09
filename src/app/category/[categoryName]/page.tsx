import Category from '@/components/The Product Sections (Home Page)/Category/Category';
import CategorySkeleton from '@/components/The Product Sections (Home Page)/Category/CategorySkeleton';
import React, { Suspense } from 'react';

const CategoryPage = async({params}: {params: Promise<{categoryName: string}>}) => {
    return (
        <div>
            <Suspense fallback={<CategorySkeleton/>}>
                <Category params={params}></Category>
            </Suspense>
        </div>
    );
};

export default CategoryPage;