/* eslint-disable react/prop-types */
import { useState } from "react"
import { tienda } from './../data/db';
import { useProductsContext } from "../context/ProductsContext";

function Dropwdown({ opciones = [] }) {
    const { filterCategory } = useProductsContext()
    const [isOpen, setIsOpen] = useState(false)
    const [isHover, setIsHover] = useState("")
    const handleClick = (value) => {
        filterCategory(value)
        setIsOpen(false)
    }
    return (
        <div className="relative flex flex-col h-10 items-center w-44 rounded-md border gap-2 text-black/60 font-semibold">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-white p-4 w-full h-full text-[15px] gap-1 flex rounded-md items-center justify-between tracking-wider font-medium">
                Categoria
                {
                    isOpen ? (
                        <svg style={{ fill: tienda.color }} strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg>
                    ) : (
                        <svg style={{ fill: tienda.color }} strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
                    )
                }
            </button>
            {
                isOpen && opciones.length ? (
                    <div className="bg-white border -mt-1 rounded-md flex flex-col item-start w-full tracking-wider font-medium text-sm">
                        <div onClick={()=>handleClick("todos")} id={"todos"} onMouseLeave={() => setIsHover("")} onMouseEnter={(e) => setIsHover(e.target.id)} style={{ backgroundColor: isHover === "todos" ? `${tienda.color}4d` : "transparent" }} className={`flex w-full p-2 hover:cursor-pointer rounded-t-md`}>
                            <h2>Todos</h2>
                        </div>
                        {opciones?.map((ele, index) => (
                            <div onClick={()=>handleClick(ele)} id={ele} onMouseLeave={() => setIsHover("")} onMouseEnter={(e) => setIsHover(e.target.id)} style={{ backgroundColor: isHover === ele ? `${tienda.color}4d` : "transparent" }} className={`flex w-full p-2 hover:cursor-pointer ${index === (opciones.length - 1) ? "rounded-b-md" : ""}`} key={index}>
                                <h2>{ele}</h2>
                            </div>
                        ))}
                    </div>
                ) : null
            }
        </div >
    )
}

export default Dropwdown