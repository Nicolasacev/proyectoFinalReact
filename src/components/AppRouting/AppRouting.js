import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart } from "../Cart/Cart"
import { CartProvider } from "../CartContext/CartContext"
import { Footer } from "../Footer/Footer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { NavBar } from "../NavBar/NavBar"
import {OrderContainer} from "../Orders/OrderContainer"

export const AppRouting = () =>{
    return( 
        <CartProvider>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>  
                <Route path="/category/:familia" element={<ItemListContainer/>}/>
                <Route path="/item/:productById" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/order" element={<OrderContainer/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </CartProvider>
    )
}