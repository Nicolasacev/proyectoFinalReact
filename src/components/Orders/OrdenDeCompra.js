import React, { useContext } from 'react'
import './ordenDeCompra.css';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const OrdenDeCompra = () => {
  const {  orderId, cleanCart, setOrderId } = useContext(CartContext)

  const resetarCompra = () => {
    cleanCart()
    setOrderId()
  }

  return (
    <div className='orderMain'>    
      <h2 className='orderSuccess'>¡Tu pedido está más cerca tuyo!</h2>
      <div>ID de tu orden: {orderId}  </div>
      <Link to="/">
      <button className='toHome' onClick={ () => resetarCompra()} >Finalizar compra</button>
      </Link>
    </div>
  )
}

export default OrdenDeCompra