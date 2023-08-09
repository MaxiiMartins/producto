/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import { categorias } from "../data/db";

export const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
    const [category,setCategory] = useState([...categorias])
    const [oneProduct,setOneProduct] = useState(false)
    const filterCategory =(value)=> {
        const stateFilter = [...categorias]
        setCategory(value === "todos" ? stateFilter: stateFilter.filter(ele => ele.nombre.trim() === value.trim()))
    }
    const selectedProduct =(value)=>setOneProduct(value)
    const cleanSelectedProduct =()=>setOneProduct(false)
    return (
        <ProductsContext.Provider value={{ category,filterCategory,selectedProduct,cleanSelectedProduct,oneProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)
