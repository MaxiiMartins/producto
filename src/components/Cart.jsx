import { useEffect, useState } from 'react'

function Cart({ productos = [] }) {
    const [precio, setPrecio] = useState(0)
    useEffect(() => {
        let total = precio
        productos?.length ? (productos.forEach(element => total += element.price), setPrecio(total)) : null
    }, [productos])

    return (
        precio ? (
            <div className="sticky bottom-0 z-50 flex content-center items-center pb-4 sm:m-auto sm:pb-8" >
                <button className="focus-visible:ring-ring ring-offset-[#cf0000]/75 inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#cf0000] hover:bg-brand-600 text-white/90 text-md h-11 rounded-md px-8 w-full shadow-black shadow-md sm:w-fit">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <p className="leading-6">Ver pedido</p>
                            <p className="rounded-sm bg-black/25 px-2 py-1 text-xs font-semibold text-white/90"> {productos?.length} items </p>
                        </div>
                        <p className="leading-6">
                            ${precio}
                        </p>
                    </div>
                </button>
            </div>
        ) : null
    )
}

export default Cart