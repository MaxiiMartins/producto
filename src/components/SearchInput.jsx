import { useState } from 'react'
import { tienda } from '../data/db'
import { useProductsContext } from '../context/ProductsContext'

function SearchInput() {
const [input,setInput]=useState("")
const {searchProductPerCategory} = useProductsContext()
const handleChange = (e)=>(searchProductPerCategory(e.target.value),setInput(e.target.value))
    return (
        <div className='relative flex w-full items-center sm:max-w-xs'>
            <svg style={{ stroke: tienda.color }} className="absolute left-3 h-4 w-4 opacity-40" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            </svg>
            <input onChange={handleChange} value={input} className="flex h-10 w-full text-black/60 rounded-md tracking-wider font-medium border bg-transparent py-2 text-sm file:border-0 file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-9" placeholder="Buscar..." />
        </div>
    )
}

export default SearchInput