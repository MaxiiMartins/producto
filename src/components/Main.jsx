import Cart from "./Cart";
import ListProducts from "./ListProducts";
import Dropwdown from "./Dropwdown";

import { useProductsContext } from "../context/ProductsContext";

import { categorias } from "../data/db";
import SearchInput from './SearchInput';
import SkeletonCardProduct from './SkeletonListProducts';

function Main() {
    const { category, loading } = useProductsContext()
    return (
        <main className='px-4 mb-4'>
            <div className='flex flex-col h-full'>
                <div className='sticky top-0 z-10 mb-2 flex items-center justify-between gap-4 bg-white py-2 sm:py-2'>
                    <SearchInput />
                    <Dropwdown opciones={categorias.map((ele) => ele.nombre.trim())} />
                </div>
                <div className='flex flex-col'>
                    {
                        loading ? (

                            category.map((element, index) => (
                                <SkeletonCardProduct key={index} categoria={element} />
                            ))


                        ) : (!category?.length ? (
                            <div className="my-12 flex flex-col justify-center items-center gap-4 h-[300px]">
                                <h2 className="text-center text-xl font-medium text-black/30">No se encontraron productos</h2>
                            </div>
                        ) : (
                            category.map((element, index) => (
                                <ListProducts key={index} categoria={element} />
                            ))
                        ))
                    }
                </div>
                <Cart />
            </div>
        </main>
    )
}

export default Main