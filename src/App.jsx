import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Modal from "./components/Modal"
import WhatsApp from "./components/WhatsApp"
import { useModalContext } from "./context/ModalContext"


function App() {
  const { isOpen } = useModalContext()

  return (<>
    <div className={`mx-auto max-w-screen-xl ${isOpen ? "pointer-events-none z-0":"pointer-events-auto"} rounded-sm `}>
      <Header />
      <Main />
      <WhatsApp />
      <Footer />
    </div>
    {isOpen && <Modal />}
  </>
  )
}

export default App
