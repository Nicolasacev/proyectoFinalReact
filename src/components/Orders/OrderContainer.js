import React, { useContext } from 'react'
import Form from './Form'
import { CartContext } from '../CartContext/CartContext';
import OrdenDeCompra from './OrdenDeCompra'
import { Cart } from '../Cart/Cart';

export const OrderContainer = () => {

  const { orderId, buyIsFinished, cart} = useContext(CartContext)

  const carrito = [...cart].length
  const id = orderId.id

  return (
    <>
      {
        (carrito > 0 && id !== "") && <Cart/>
      }
      {( carrito > 0  && !buyIsFinished) && <Form/>}
      
      {
       (id) && <OrdenDeCompra lastId={id}/>
      }
    </>
  )
}

