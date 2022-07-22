import React from 'react'
import './ItemStyle.css';
import { Link } from 'react-router-dom';

export const Item = ({imagen, nombre, precio, id}) => {
  return (
    <div className='card'>
      <div className='imgContainer'>
        <img src={imagen} alt="repuesto"/>
      </div>
      <h1>{nombre}</h1>
      <p> $ {precio}</p>
      <Link to={`/item/${id} `}className='button'>Ver detalle</Link> 
    </div>
  )
}
