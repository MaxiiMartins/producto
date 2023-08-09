import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModalContextProvider } from './context/ModalContext';
import { ProductsContextProvider } from './context/ProductsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>,
)
