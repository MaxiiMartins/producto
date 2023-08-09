import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)}
    return (
        <ModalContext.Provider value={{ isOpen, openModal,closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)
