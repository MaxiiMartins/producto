/* eslint-disable react/prop-types */
import {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext
} from "react"

import { parseCurrency } from './../utils/parseCurrency';

import { getCartMessage, getCartTotal } from "../utils/parserAText"

const CartContext = createContext({})

function CartProvider(props) {
  const [checkout, setCheckout] = useState(() => new Map())
  const [cart, setCart] = useState(() => new Map())
  const total = useMemo(() => parseCurrency(getCartTotal(cart)), [cart])
  const quantity = useMemo(
    () =>
      Array.from(cart.values()).reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  )
  const message = useMemo(() => getCartMessage(cart, checkout), [
    cart,
    checkout
  ])

  const addItem = useCallback(
    (id, value) => {
      cart.set(id, value)

      setCart(new Map(cart))
    },
    [cart]
  )

  const removeItem = useCallback(
    id => {
      cart.delete(id)

      setCart(new Map(cart))
    },
    [cart]
  )

  const updateItem = useCallback(
    (id, value) => {
      cart.set(id, value)

      setCart(new Map(cart))
    },
    [cart]
  )

  const updateField = useCallback(
    (id, value) => {
      checkout.set(id, value)

      setCheckout(new Map(checkout))
    },
    [checkout]
  )

  const state = useMemo(() => ({ checkout, cart, total, quantity, message }), [
    checkout,
    cart,
    total,
    quantity,
    message
  ])
  const actions = useMemo(
    () => ({ updateItem, updateField, addItem, removeItem }),
    [updateItem, updateField, addItem, removeItem]
  )

  return (
    <CartContext.Provider value={{ state, actions }}>
      {props.children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const { state, actions } = useContext(CartContext)

  return [state, actions]
}

export default CartProvider
