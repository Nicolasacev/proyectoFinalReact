import React, {createContext, useState} from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
   
    //obtener db de firestore
    const db = getFirestore();

    //useState del carrito
    const [cart, setCart] = useState([]);
     //para manejar los componentes del las ordenes de compra
    const [compraTerminada, setCompraTerminada] = useState(false)
    const [orderId, setOrderId] = useState()


    //función para agregar elementos al carrito
    const addItemToCart = (producto, count) => {
        
        const {id, nombre, precio, stock,imagen} = producto

    //asigno el counter al objeto product
    let itemWithQuantity = {id, nombre, precio, stock, imagen, cantidad:count}

        //funcion para evitar duplicados
        const isInCart = cart.some(item => item.id === id)
        
            isInCart ?
                setCart(cart.map(p =>{
                    return p.id === id 
                    ? {...p, cantidad: p.cantidad + count}
                    : p
                }))

                : setCart( () => {
                    return cart.concat(itemWithQuantity)
                })
               
    }

    //función para remover elementos
    const removeFromCart = (product) => {
        
        const carrito = [...cart]

        const removeElement = carrito.indexOf(product); 

        let newList =  [
            ...carrito.slice(0, removeElement),
            ...carrito.slice(removeElement + 1),
          ]
        setCart(newList)
    }

    //función para limpiar el carrito
    function cleanCart() {
        setCart([])
    }

    const onSubmit = async(data) => {
        
        let totalCompra = 0
        cart.forEach(element => {
            totalCompra = totalCompra + element.precio * element.cantidad
        });

        const order = {
            Buyer: {
                name:data.name,
                email:data.email,
                phone:data.phone
            },
            Productos: cart.map(e => {
                return {
                    producto:e.nombre,
                    precio: e.precio,
                    cantidad: e.cantidad
                }
            }), 
            Total: {
                totalCompra
            }
        }
            
        const { id } = await addDoc(collection(db, "orders"), order);
        setOrderId(id)
        cleanCart()   
    }

    return (
        <CartContext.Provider value={{
             cart,
             orderId,
             compraTerminada,
             setOrderId,
             setCompraTerminada,
             addItemToCart,
             removeFromCart,  
             cleanCart,
             onSubmit
             }}>
            {children}
        </CartContext.Provider>
    )
}