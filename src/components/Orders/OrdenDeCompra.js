import React, { useContext } from 'react'
import './ordenDeCompra.css';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const OrdenDeCompra = () => {
  const { setBuyIsFinished, orderId } = useContext(CartContext)

  const cleanOrder = () => {
    setBuyIsFinished(false)
  }

  return (
    <div className='orderMain'>    
      <h2 className='orderSuccess'>¡Tu pedido está más cerca tuyo!</h2>
      <div>ID de tu orden: {orderId}  </div>
      <Link to="/">
      <button className='toHome' onClick= {() => cleanOrder()}>Finalizar compra</button>
      </Link>
    </div>
  )
}

export default OrdenDeCompra