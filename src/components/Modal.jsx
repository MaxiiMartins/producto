import { useState } from "react";
import { useModalContext } from "../context/ModalContext"
import Image from './Image';
import { useProductsContext } from "../context/ProductsContext";
import { tienda } from "../data/db";
import Options from './Options';

function Modal() {
  const { closeModal } = useModalContext()
  const { oneProduct, cleanSelectedProduct } = useProductsContext()
  const [d, setD] = useState(false)
  const [ms, setMs] = useState(false)

  const closeAnimation = () => {
    setD(false)
    setTimeout(() => {
      closeModal()
      cleanSelectedProduct()
    }, 150);
  }
  setTimeout(() => {
    setD(true)
  }, 150);

  return (
    <div className="min-h-screen min-w-full bg-black/30 backdrop-blur-sm fixed z-[999999999] flex flex-col sm:justify-center justify-start items-center top-0 bottom-0 left-0 sm:p-4">
      <div className={`bg-white w-full sm:w-[50%] max-h-full h-full z-50 duration-100 transition-all ease-linear ${d ? "translate-x-0 sm:scale-100" : "translate-x-[30rem] sm:translate-x-0 sm:scale-0"} sm:rounded-2xl overflow-hidden shadow-lg grid grid-rows-[auto_1fr_auto]`}>
        {/* header */}
        <div onClick={closeAnimation} className="flex z-20 absolute group bg-white shadow-sm shadow-black cursor-pointer flex-row shrink-0 items-center left-0 my-4 p-4 rounded-r-lg border-b" >
          <button className="box-content w-4 h-4 p-1 text-black bg-transparent group-hover:opacity-90 opacity-60" >
            <svg className="group-hover:fill-[#ff0000]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" ><path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z" /></svg>
          </button>
        </div>
        {/* descripcion producto */}
        <div className="overflow-y-auto h-full">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="h-[240px] w-full sm:h-[350px] overflow-hidden relative">
                  <Image onClick={() => setMs(true)} style={{ backgroundColor: tienda.color, transition: "transform 0.5s ease" }} src={oneProduct.src} alt={oneProduct.titulo} className="h-full w-full absolute -z-0 cursor-zoom-in object-cover object-center sm:h-full" />
                </div>
                <h2 className="px-4 text-2xl font-medium">{oneProduct.titulo}</h2>
                <p className="px-4 text-md whitespace-pre-wrap text-black/50 italic sm:text-lg">{oneProduct.detalle}</p>
              </div>
              {/* opciones producto */}
              <Options opciones={oneProduct.opciones} />
            </div>
        </div>
        {/* precio total */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2">
          <div className="flex w-full flex-col justify-end gap-4 p-4">
            <hr />
            <div style={{color:tienda.color}} className="flex items-center justify-between text-lg font-medium">
              <p>Precio</p>
              <p>$&nbsp;{oneProduct.precio}</p>
            </div>
            <button className="focus-visible:ring-ring text-center bg-[#23a455] inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#23a455]/90 text-white text-md h-11 rounded-md px-8 w-full">
            <svg  className=' stroke-white mx-2' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path></svg>
              Pedir producto
            </button>
          </div>
        </div>
      </div>
      {
        ms ? (
          <div onClick={() => setMs(false)} className="min-h-screen min-w-full bg-black/80 backdrop-blur-2xl fixed z-[999999999] flex flex-col sm:justify-center justify-start items-center top-0 bottom-0 left-0 ">
            <svg className="fill-white hover:fill-[#ff0000] absolute right-0 top-0 w-8 h-8 m-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" ><path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z" /></svg>
            <Image style={{ backgroundColor: tienda.color + "40", transition: "transform 0.5s ease" }} src={oneProduct.src} alt={oneProduct.titulo} className="h-full w-full cursor-zoom-out object-contain sm:h-full" />
          </div>
        ) : null
      }
    </div>
  )
}

export default Modal