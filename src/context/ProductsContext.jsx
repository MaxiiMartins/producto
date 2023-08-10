/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { categorias } from "../data/db";

export const ProductsContext = createContext();

function obtenerTextoProductosQueCoinciden(datos, frase) {
    const mensajes = [];

    datos.forEach(elemento => {
        const productosCoincidentes = elemento.productos.filter(producto =>
            producto.titulo.trim().toLowerCase().includes(frase.toLowerCase().trim())
        );

        if (productosCoincidentes.length > 0) {
            productosCoincidentes.forEach(producto => {
                let mensaje = `${producto.titulo}\nPrecio: $${producto.precio}`;

                if (producto.opciones.talle.status) {
                    mensaje += `\nTalle: ${producto.opciones.talle.items[0].valor.toUpperCase()}`;
                }

                if (producto.opciones.color.status) {
                    mensaje += `\nColor: ${producto.opciones.color.items[0].valor.toUpperCase()}`;
                }

                mensaje += `\nStock: ${producto.stock}`;

                mensajes.push({ categoria: elemento.nombre, mensaje });
            });
        }
    });

    return mensajes;
}

export function ProductsContextProvider({ children }) {
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)
    const [oneProduct, setOneProduct] = useState(false)
    const filterCategory = (value) => {
        setLoading(true)
        const stateFilter = [...categorias]
        setCategory(value === "todos" ? stateFilter : stateFilter.filter(ele => ele.nombre.trim() === value.trim()))
        setTimeout(() => {
            setLoading(false)
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
        setLoading(true)
        const allProducts = [...categorias]
        setCategory(filtrarProductosPorFrase(allProducts, value))
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }

    useEffect(() => {
        const data = obtenerTextoProductosQueCoinciden([...categorias],"")
        data.forEach(mensaje => {
            
            console.log(`https://wa.me/5492213174726?text=${encodeURIComponent(mensaje.mensaje)}`);
        });
        setCategory([...categorias])
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [categorias])


    return (
        <ProductsContext.Provider value={{ category, loading, filterCategory, selectedProduct, cleanSelectedProduct, oneProduct, searchProductPerCategory }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)
