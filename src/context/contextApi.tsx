"use client"
import { IMarqueeText } from '@/types/bazarDor.types';
import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
type SortType = "default" | "price-low" | "price-high";
interface IContextType{
    sort: SortType
    setSortBY: Dispatch<SetStateAction<SortType>>
    newCategory: IMarqueeText[], 
    setNewCategory: Dispatch<SetStateAction<IMarqueeText[]>>
}
export const CategoryContext = createContext<IContextType>({
    sort: "default",
    setSortBY: ()=>{},
    newCategory: [], 
    setNewCategory: ()=>{}
});

const ContextApi = ({children}:{children:React.ReactNode}) => {
    const [sort, setSortBY] = useState<SortType>("default");
    const [newCategory, setNewCategory] = useState<IMarqueeText[]>([]);

    const obj={
        sort,
        setSortBY,
        newCategory, 
        setNewCategory
    }
    return (
        <CategoryContext.Provider value={obj}>
            {children}
        </CategoryContext.Provider>
    );
};

export default ContextApi;