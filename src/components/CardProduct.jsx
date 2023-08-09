/* eslint-disable react/prop-types */
import { tienda } from '../data/db'
import Image from './Image'


function CardProduct({ openModal,destacado, titulo = "Titulo del producto",detalle="Descripcion del producto", src = "", precio = 0 }) {
    return (
        <div onClick={openModal} style={{borderColor:destacado?tienda.color:""}} className="border-gray-200 flex cursor-pointer items-center justify-between gap-3 rounded-md border" data-testid="product">
            <div className="flex h-full w-full gap-4 p-4">
                <div className="flex w-full flex-col justify-between gap-1">
                    <div className="flex flex-col gap-1">
                        <p className="line-clamp-[1] font-medium sm:line-clamp-[2]">{titulo}</p>
                        <p className="line-clamp-[2] text-sm text-black/50 italic sm:line-clamp-3">{detalle}</p>
                    </div>
                    <div className="flex items-end">
                        <p style={{color:tienda.color}} className="text-sm font-medium">$&nbsp;{precio}</p>
                    </div>
                </div>
                <Image alt="producto" style={{backgroundImage:tienda.color}} className="min-w-24 sm:min-w-36 aspect-square h-24 w-24 rounded-md object-cover object-center sm:h-36 sm:w-36" loading="lazy" src={src} />
            </div>
        </div>
    )
}

export default CardProduct