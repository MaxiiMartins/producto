import CardProduct from "./CardProduct"
import { useModalContext } from "../context/ModalContext"
import { useProductsContext } from "../context/ProductsContext"


function ListProducts({ categoria }) {
  const { openModal } = useModalContext()
  const { selectedProduct } = useProductsContext()

  const handleClick=(product)=>{
    selectedProduct(product)
    setTimeout(() => {
      openModal()
    }, 300);
  }

  return (
    <div className="flex flex-col gap-4 border-t py-4 sm:gap-8 sm:py-8">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold sm:text-2xl">
          {categoria.nombre}
          <span className="text-black/60">
            ({categoria.productos.length})
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {
          categoria?.productos?.map((element,index) => (
            <CardProduct key={index} destacado={categoria.nombre.toLowerCase().trim() === "destacados"} {...element} openModal={() =>handleClick(element)} />
          ))
        }
      </div>
    </div>
  )
}

export default ListProducts