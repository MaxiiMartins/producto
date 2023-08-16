import Image from './Image';
import creador from "../assets/creador.png"
import { tienda } from '../data/db';
import { useProductsContext } from '../context/ProductsContext';

function Footer() {
  const { loading } = useProductsContext()

  return (
    loading ? <SkeletonComponent /> :
    <footer style={{ backgroundColor: tienda.color }} className="p-6 flex sm:justify-end justify-center rounded-t-md items-center">
      <p style={{ textShadow: "0.8px 0.5px 0px #444444" }} className="sm:text-md text-center text-sm font-semibold text-white">
        <a className="font-medium flex flex-row gap-2 items-start uppercase" href="https://www.instagram.com/zeusdesignweb/" rel="noopener noreferrer" target="_blank">
          Sitio creado por 
          <Image src={creador} className="w-36 mt-[1px]" />
        </a>
      </p>
    </footer>
  )
}

export default Footer

const SkeletonComponent = ()=>{
  return (
    <footer  className="p-6 flex justify-end rounded-t-md h-14 bg-gray-200 animate-pulse sm:h-20 items-center">
    </footer>
  )
}