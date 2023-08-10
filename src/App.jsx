import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import WhatsApp from "./components/WhatsApp"


function App() {

  return (<div className={`mx-auto max-w-screen-xl rounded-sm `}>
    <Header />
    <Main />
    <WhatsApp />
    <Footer/>
  </div>)
}

export default App
