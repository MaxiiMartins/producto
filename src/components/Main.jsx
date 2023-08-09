import Modal from './Modal';
import Cart from "./Cart";
import ListProducts from "./ListProducts";
import Dropwdown from "./Dropwdown";

import { useModalContext } from "../context/ModalContext"
import { useProductsContext } from "../context/ProductsContext";

import { categorias } from "../data/db";
import SearchInput from './SearchInput';

function Main() {
    const { isOpen } = useModalContext()
    const { category } = useProductsContext()
    return (
        <main className='px-4'>
            <div className='flex flex-col h-full'>
                <div className='sticky top-0 z-10 mb-2 flex items-center justify-between gap-4 bg-white py-2 sm:py-2'>
                    <SearchInput />
                    <Dropwdown opciones={categorias.map((ele) => ele.nombre.trim())} />
                </div>
                <div className='flex flex-col'>
                    {
                        !category?.length ? (
                            <div className="my-12 flex flex-col gap-4">
                                <h2 className="text-center text-xl text-black/60">No hay productos</h2>
                            </div>
                        ) : (
                            category.map((element,index) => (
                                <ListProducts key={index} categoria={element} />
                            ))
                        )
                    }
                </div>
                <Cart />
            </div>
            {isOpen && <Modal />}

        </main>
    )
}

export default Main