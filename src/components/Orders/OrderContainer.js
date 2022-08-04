import React, { useContext } from 'react'
import Form from './Form'
import { CartContext } from '../CartContext/CartContext';
import OrdenDeCompra from './OrdenDeCompra'
import { Cart } from '../Cart/Cart';

export const OrderContainer = () => {

  const { orderId, buyIsFinished, cart} = useContext(CartContext)

  const carrito = [...cart].length



  return (
    <>
      {( carrito > 0 && !buyIsFinished )  && <Cart/>}
      {( !orderId > 0 && !buyIsFinished )  && <Form/>}   
      {(carrito === 0 && orderId) && <OrdenDeCompra/>}
    </>
  )
}

