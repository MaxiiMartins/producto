/* eslint-disable react/prop-types */
import Image from "./Image"
import { tienda } from "../data/db"

function Header() {

    const WhatsApp = ({ href = "#" }) => {
        const prop = { rel: "noopener noreferrer", target: "_blank" }
        return (<a href={href} {...(href === "#" ? null : prop)}>
            <div style={{backgroundColor:tienda.color}} className={`flex h-10 w-10 items-center justify-center rounded-full text-white`}>
                <svg fill="currentColor" height="20" stroke="currentColor" strokeWidth="0" viewBox="0 0 16 16" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                </svg>
            </div>
        </a>
        )
    }
    const Instagram = ({ href = "#" }) => {
        const prop = { rel: "noopener noreferrer", target: "_blank" }
        return (<a href={href} {...(href === "#" ? null : prop)}>
            <div style={{backgroundColor:tienda.color}} className={`flex h-10 w-10 items-center justify-center rounded-full text-white`}>
                <svg fill="currentColor" height="26" stroke="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg>
            </div>
        </a>
        )
    }
    const Ubicacion = ({ href = "#" }) => {
        const prop = { rel: "noopener noreferrer", target: "_blank" }
        return (<a href={href} {...(href === "#" ? null : prop)}>
            <div style={{backgroundColor:tienda.color}} className={`flex h-10 w-10 items-center justify-center rounded-full text-white`}>
                <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
        </a>
        )
    }

    return (
        <div className='mb-4 flex flex-col gap-4 sm:px-4 '>
            {/* portada */}

            {
                !tienda.portada.color ? (
                    <Image src={tienda.portada.imagen} className="h-40 rounded-b-lg object-cover object-top sm:h-56" alt="portada" />
                ) : (
                    <div style={{backgroundColor:tienda.color}} className={"h-40 rounded-lg object-cover sm:h-56"}></div>
                )
            }
            {/* info de la tienda */}
            <div className="flex flex-col items-center gap-2 ">
                <div className="-mt-20 rounded-full p-1 ">
                    <Image alt={`logo de ${tienda.nombre}`} style={{backgroundColor:tienda.color}} className="h-40 w-40 min-w-[128px] rounded-full border-8 border-white" src={tienda.perfil} />
                </div>
                <div className="flex flex-col items-center gap-4 text-center ">
                    <div className="flex flex-col gap-1">
                        <p className="text-3xl font-bold uppercase sm:text-4xl">{tienda.nombre}</p>
                        <p className="font-medium text-black/40">{tienda.descripcion}</p>
                    </div>
                    <div className="flex gap-2">
                        <Instagram href={tienda.instagram} />
                        <WhatsApp href={tienda.whatsapp} />
                        <Ubicacion href={tienda.direccion} />
                    </div>          
                </div>
                <div style={{backgroundColor:`${tienda.color}4d`, color: tienda.color}} className={`font-medium w-full text-center text-sm sm:text-base rounded-lg my-4 px-4 py-3`}>{tienda.anuncio}</div>
            </div>
        </div>
    )
}

export default Header
