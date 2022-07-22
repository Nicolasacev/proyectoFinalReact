import React, {useContext} from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useForm } from "react-hook-form";
import './form.css';

const Form = () => {  
    const {onSubmit} = useContext(CartContext);
    const { register,formState: { errors }, handleSubmit } = useForm();

    return (
      <div className='formContainer'>
        <h2>Orden de compra</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.name && <p style={{"color":"red"}}>El campo es obligatorio</p>}
          <input {...register("name", { required: true })} placeholder="Tu nombre" />
          {errors.phone && <p style={{"color":"red"}}>El campo es obligatorio</p>}
          <input {...register("phone", { required: true })} placeholder="Tu teléfono" />
          {errors.email && <p style={{"color":"red"}}>El campo es obligatorio</p>}
          <input {...register("email", { required: true })} placeholder="Tu correo" />
          <br></br>
          <input type="submit" className='send' />
        </form>
      </div>     
      );
};

export default Form;