import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from "./page/Shop"
import Panel from "./page/Panel"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Shop />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/*" element={<div>PAGINA NO ENCONTRADA</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
