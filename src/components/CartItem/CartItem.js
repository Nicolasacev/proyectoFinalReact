import React, {useContext} from 'react'
import { CartContext } from '../CartContext/CartContext';
import './cartItem.css';

export const CartItem = () => {

  //Hook para traer las funciones del context
  const {cart, removeFromCart} = useContext(CartContext);
    
    return (
        <>
        {cart.map(p => 
            <tr key={p.id}>          
                <th scope="row">
                    <div className='imgCart' >
                        <img src={p.imagen} alt="repuesto" className='cartPhoto'/>
                    </div>   
                </th>
                <td><h6>{p.nombre}</h6></td>
                <td><p>${p.precio}</p></td>
                <td>
                    <span>{p.cantidad}u</span>
                </td>        
                <td>
                    <button className="btn btn-secondary" onClick={()=>{removeFromCart(p)}}>x</button>
                </td>  
            </tr>           
        )}    
        </>
    )
}


