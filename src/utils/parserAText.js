import { tienda } from "../data/db"
import { parseCurrency } from "./parseCurrency"

export function getCartItemPrice(item) {
  const optionsPrice = item.options
    ? Object.values(item.options).reduce(
        (price, option) => price + option[0]?.price,
        0
      )
    : 0

  return (optionsPrice + item.price) * item.quantity
}

export function getCartTotal(cart) {
  return Array.from(cart.values()).reduce(
    (total, item) => total + getCartItemPrice(item),
    0
  )
}

export function getCartItemOptionsSummary(options) {
  return Object.entries(options)
    .reduce(
      (_options, [category, option]) =>
        _options.concat(`${category}: ${option[0].title}`),
      []
    )
    .join(", ")
}

export function getCartMessage(cart, checkout) {
  const items = Array.from(cart.values())
    .map(
      item =>
        `* ${item.title}${item.quantity > 1 ? ` (X${item.quantity})` : ``}${
          item.options && Object.keys(item.options).length > 0
            ? ` [${getCartItemOptionsSummary(item.options)}]`
            : ``
        } - ${parseCurrency(getCartItemPrice(item))}`
    )
    .join("\n")
  const fields = Array.from(checkout.entries())
    .map(([key, value]) => `* ${key}: ${value}`)
    .join("\n")
  const total = `Total: ${parseCurrency(getCartTotal(cart))}`

  return [items, fields, total].join("\n\n")
}

export function generatedWhatsappUrl ({titulo,precio,opciones}){
  let mensaje = `Hola *${tienda.nombre.toUpperCase()}*\nQuiero realizar una compra, este es el detalle:\n 🛒 *Productos* \n *${titulo}*`;
  if (opciones.talle.status) {
      mensaje += `\n Talle ${opciones.talle.items[0].valor.toUpperCase()}`;
  }
  if (opciones.color.status) {
      mensaje += `\n Color ${opciones.color.items[0].valor.toUpperCase()}`;
  }
  mensaje += `\n Total *${parseCurrency(precio)}*`
  // mensaje += `\nStock: ${stock}`;
  return `https://wa.me/${tienda.whatsapp}?text=${encodeURIComponent(mensaje)}`
}
