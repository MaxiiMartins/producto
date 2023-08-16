/* eslint-disable react/prop-types */

import { tienda } from "../data/db"
import Dropwdown from "./Dropwdown"

function Options({ opciones }) {
    const { talle, color } = opciones
    return (
        <div className="flex px-4 flex-row gap-8 mb-10 ">
            <div className="flex flex-col gap-4">
                <p className="text-lg font-medium">Cantidad</p>
                <div className="flex gap-2 items-baseline">
                    <button style={{ backgroundColor: tienda.color }} className="inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white px-2 py-1 text-base font-semibold h-5 w-5 rounded-sm">
                        -
                    </button>
                    <p className="min-w-[24px] text-center text-base font-medium">
                        1
                    </p>
                    <button style={{ backgroundColor: tienda.color }} className="inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white px-2 py-1 text-base font-semibold h-5 w-5 rounded-sm">
                        +
                    </button>
                </div>
            </div>
            {talle.status ? (
                    <Dropwdown opciones={talle.items.map(({valor}) => valor.trim())} label={"Talle"} />
            ) : null}
            {color.status ? (
                    <Dropwdown opciones={color.items.map(({valor}) => valor.trim())} label={"Color"} />
            ) : null}
        </div>
    )
}

export default Options