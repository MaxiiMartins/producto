import { Button, ChakraProvider, Flex, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import Login from './components/Login'
import Panelp from './components/Panelp'

function Panel() {
    const [user, setUser] = useState(true)
    const userLogged = () => setUser(!user)
    return (

        <ChakraProvider>
            <Flex
                minH={'100dvh'} 
                w={'100dvw'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>

                {/* <Button onClick={userLogged}>loginn</Button> */}
                {!!(user) ? (
                    <Panelp />
                ) : (<Login />)}

            </Flex>
        </ChakraProvider>
    )
}

export default Panel

    // < div className = "bg-white p-4 rounded-lg mb-4 max-w-full shadow-md lg:w-[100%]" >
    //     {/* Cajas pequeñas */ }
    //     < div className = "flex flex-wrap justify-between h-full" >
    //         {/* Caja pequeña 1 */ }
    //         < div className = "flex-1 bg-gradient-to-r from-indigo-400 to-indigo-700 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2" >
    //                             <i className="fas fa-hand-holding-usd text-white text-4xl" />
    //                             <p className="text-white">Depositar</p>
    //                         </div >
    // {/* Caja pequeña 2 */ }
    // < div className = "flex-1 bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2" >
    //                             <i className="fas fa-exchange-alt text-white text-4xl" />
    //                             <p className="text-white">Transferir</p>
    //                         </div >
    // {/* Caja pequeña 3 */ }
    // < div className = "flex-1 bg-gradient-to-r from-sky-400 to-sky-700 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2" >
    //                             <i className="fas fa-qrcode text-white text-4xl" />
    //                             <p className="text-white">Canjear</p>
    //                         </div >
    //                     </div >
    //                 </div >