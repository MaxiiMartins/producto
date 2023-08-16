import Header from '../components/Header'
import Main from '../components/Main'
import WhatsApp from '../components/WhatsApp'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { useModalContext } from '../context/ModalContext'

function Shop() {
  const { isOpen } = useModalContext()

    return (
        <>
            <div className={`mx-auto max-w-screen-xl ${isOpen ? "pointer-events-none z-0" : "pointer-events-auto"} rounded-sm `}>
                <Header />
                <Main />
                <WhatsApp />
                <Footer />
            </div>
            {isOpen && <Modal />}
        </>

    )
}

export default Shop