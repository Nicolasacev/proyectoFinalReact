import React, {createContext, useState} from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    let orderId; 

    //useState del carrito
    const [cart, setCart] = useState([]);
    //useSataet de la cantidad de unidades de cada producto
    const [cant, setCant] = useState(0);
    //useState que maneja el precio total
    const [totalPrice, setTotalPrice] = useState(0)
    //obtener db de firestore
    const db = getFirestore();
    //estado que indica si ya se realizola compra
    const [buyIsFinished, setBuyIsFinished] = useState(false);
    //función para agregar elementos al carrito
    const addItemToCart = (producto, count) => {
        
        const {id, nombre, precio, stock,imagen} = producto

    //asigno el counter al objeto product
    let itemWithQuantity = {id, nombre, precio, stock,imagen, cantidad:count}

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
        //Sumamos la cantidad de elementos al useState de cantidad
        setCant(cant + count)
        //Sumamos el precio de los elementos al total
        setTotalPrice(totalPrice + (precio * count));
               
    }

    //función para remover elementos
    const removeFromCart = (product) => {
        
        const remove = cart.findIndex(p => p.id === product.id)
        const totalItemPrice = (cart[remove].precio * cart[remove].cantidad)
            
            setTotalPrice(totalPrice - totalItemPrice)
            setCant(cant - cart[remove].cantidad)
            cart.splice(remove,1)
            setCart([...cart])
    }

    //función para limpiar el carrito
    function cleanCart() {
        setCart([])
        setCant(0)
        setTotalPrice(0)
    }

    const onSubmit = async(data) => {
        const order = {
            Buyer: {
                name:data.name,
                email:data.email,
                phone:data.phone
            },
            Productos: cart.map(e => {
                return {
                    producto:
                    e.nombre,
                    precio: e.precio,
                    cantidad: e.cantidad
                }
            }), 
            Total: {
                    totalPrice
            }
        }
            
        orderId = await addDoc(collection(db, "orders"), order);
        
        setBuyIsFinished(true)
        cleanCart()   
    }

    return (
        <CartContext.Provider value={{
             cart,
             cant,
             totalPrice,
             orderId,
             buyIsFinished,
             setBuyIsFinished,
             addItemToCart,
             removeFromCart,  
             cleanCart,
             onSubmit
             }}>
            {children}
        </CartContext.Provider>
    )
}