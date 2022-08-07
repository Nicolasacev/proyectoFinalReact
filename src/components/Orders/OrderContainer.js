import React, { useContext } from 'react'
import Form from './Form'
import { CartContext } from '../CartContext/CartContext';
import { Cart } from '../Cart/Cart';

export const OrderContainer = () => {

  const { compraTerminada } = useContext(CartContext)

  return (
    <>
      { !compraTerminada   && <Cart/> }

      {  compraTerminada && <Form/> }
  
    </>
  )
}

