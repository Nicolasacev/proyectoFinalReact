import React, { useContext } from 'react'
import Form from './Form'
import { CartContext } from '../CartContext/CartContext';
import OrdenDeCompra from './OrdenDeCompra'
import { Cart } from '../Cart/Cart';

export const OrderContainer = () => {

  const { lastId, buyIsFinished, cartIsEmpty} = useContext(CartContext)

  return (
    <>
      {
        (cartIsEmpty && !lastId) && <Cart/>
      }
      {(!cartIsEmpty && !buyIsFinished) && <Form/>}
      
      {
       (lastId) && <OrdenDeCompra lastId={lastId}/>
      }
    </>
  )
}

