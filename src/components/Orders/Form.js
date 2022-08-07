import React, {useContext} from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useForm } from "react-hook-form";
import './form.css';
import OrdenDeCompra from './OrdenDeCompra';

const Form = () => {  
    const {onSubmit, orderId} = useContext(CartContext);
    const { register,formState: { errors }, handleSubmit } = useForm();



    return (

      (orderId === undefined) ?
        <div className='formContainer'>
          <h2>Orden de compra</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.name && <p className='inputField'>El campo es obligatorio</p>}
            <input {...register("name", { required: true })} placeholder="Tu nombre" />
            {errors.phone && <p className='inputField'>El campo es obligatorio</p>}
            <input {...register("phone", { required: true })} placeholder="Tu teléfono" />
            {errors.email && <p className='inputField'>El campo es obligatorio</p>}
            <input {...register("email", { required: true })} placeholder="Tu correo" />
            <br></br>
            <input type="submit" className='send' />
          </form>
      </div> 
      
      : <OrdenDeCompra/> 
    );
};

export default Form;