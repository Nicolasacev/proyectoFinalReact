import React, { useContext }from "react";
import './CartWidgetStyle.css';
import IconoCartWidget from './IconoCartWidget.png'
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

export const CartWidget = () => {
  const { cant, cart} = useContext(CartContext)

  const carrito = [...cart]
  return (
    <>
      { (carrito.length > 0)
      ? 
      <div className="cartContainer">
        <Link to="/cart">
          <div>
            <span>{cant}</span>
            <img src={IconoCartWidget} alt="carrito" className="iconoCarrito"></img>
          </div>
        </Link> 
      </div>
      : <></>
      }
    </>
  );
}
