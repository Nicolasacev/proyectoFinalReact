import React, { useContext }from "react";
import './CartWidgetStyle.css';
import IconoCartWidget from './IconoCartWidget.png'
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

export const CartWidget = () => {

  const {cart} = useContext(CartContext)

  const carrito = [...cart]

  let totalProductos = 0
  
  carrito.forEach(e => {
    totalProductos = totalProductos + e.cantidad
  });


  return (
    <>
      { (carrito.length > 0)
      ? 
      <div className="cartContainer">
        <Link to="/cart">
          <div>
            <span>{totalProductos}</span>
            <img src={IconoCartWidget} alt="carrito" className="iconoCarrito"></img>
          </div>
        </Link> 
      </div>
      : <></>
      }
    </>
  );
}
