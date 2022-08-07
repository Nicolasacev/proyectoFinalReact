import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './cartList.css';
import { CartItem } from '../CartItem/CartItem';
import { CartContext } from '../CartContext/CartContext';

export const CartList = () => {
    const { cleanCart, cart, setCompraTerminada } = useContext(CartContext)

    const carrito = [...cart]
    let total = 0
    
  
    carrito.forEach(element => {
        total = total + element.precio * element.cantidad
    });

    const finalizarCompra = () => {

        setCompraTerminada(true)
    }

    return (
        <>
         { (carrito.length > 0)
         ?
         <>
         <table className="table list">
                <tbody className="tbody">
                    <CartItem/>
                </tbody>
            </table>
            <div className="totalContainer">
            <div>
                <h3 className="itemCartTotal ">$ { total }</h3>
            </div>
            <div>
                <button type="button" className="btn btn-danger" onClick={ () => { cleanCart() } }>
                    Vaciar Carrito
                </button>        
            </div>
            <div>
                <Link to={"/order"}>
                    <button type="button" className="btn buy"  onClick = { () =>{ finalizarCompra()} } >
                        Comprar
                    </button>
                </Link>        
            </div>
        </div>
    </>
            
        :  
          <div className='empty'>
            <h5>No hay productos en el carrito</h5>
            <Link to={"/"}><button className='toHome'>Ir a la tienda</button></Link>
          </div>
        }
        </>         
    )
}


