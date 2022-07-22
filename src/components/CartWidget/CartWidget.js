import React, { useContext }from "react";
import './CartWidgetStyle.css';
import IconoCartWidget from './IconoCartWidget.png'
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

export const CartWidget = () => {
  const { cant, cartIsEmpty } = useContext(CartContext)
  return (
    <>
      { cartIsEmpty === false 
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
