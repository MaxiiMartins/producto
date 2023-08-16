/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { categorias } from "../data/db";

export const ProductsContext = createContext();


export function ProductsContextProvider({ children }) {
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingCategory, setLoadingCategory] = useState(false)
    const [oneProduct, setOneProduct] = useState(false)
    const filterCategory = (value) => {
        setLoadingCategory(true)
        const stateFilter = [...categorias]
        setCategory(value === "todos" ? stateFilter : stateFilter.filter(ele => ele.nombre.trim() === value.trim()))
        setTimeout(() => {
            setLoadingCategory(false)
        }, 500);
    }
    const selectedProduct = (value) => setOneProduct(value)
    const cleanSelectedProduct = () => setOneProduct(false)
    function filtrarProductosPorFrase(datos, frase) {
        const categoriasConCoincidencias = [];
        datos.forEach(elemento => {
            const productosCoincidentes = elemento.productos.filter(producto =>
                producto.titulo.trim().toLowerCase().includes(frase.toLowerCase().trim())
            );
            if (productosCoincidentes.length > 0) {
                categoriasConCoincidencias.push({ ...elemento, productos: productosCoincidentes });
            }
        });
        return categoriasConCoincidencias;
    }

    const searchProductPerCategory = (value) => {
        setLoadingCategory(true)
        const allProducts = [...categorias]
        setCategory(filtrarProductosPorFrase(allProducts, value))
        setTimeout(() => {
            setLoadingCategory(false)
        }, 500);
    }

    useEffect(() => {
        setCategory([...categorias])
        setTimeout(() => {
            setLoading(false)
        }, 4000);
    }, [categorias])


    return (
        <ProductsContext.Provider value={{ category, loading,loadingCategory, filterCategory, selectedProduct, cleanSelectedProduct, oneProduct, searchProductPerCategory }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)
