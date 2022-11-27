import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart } from "../Cart/Cart"
import { CartProvider } from "../CartContext/CartContext"
import { Footer } from "../Footer/Footer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { NavBar } from "../NavBar/NavBar"
import {OrderContainer} from "../Orders/OrderContainer"
import CookieConsent, { Cookies } from "react-cookie-consent";


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

            <CookieConsent
              enableDeclineButton
              buttonText = "Acepto" 
              expires={365}
              declineButtonText = "Rechazar"
              containerClasses = "alert alert-dark col-lg-12" 
              onDecline={() => {
                alert("remove cookie here!");
                Cookies.remove("Crashpartcookie")
              }}>
                Este sitio contiene cookies.{" "}
                <br></br>
                <span style={{ fontSize: "14px" }}>
                Las cookies nos ayudan a brindarte informacion mas relevante, conoce nuestras <a href="/">"Politicas de privacidad"</a>.
                </span>
            </CookieConsent>
            <Footer/>
        </BrowserRouter>
        </CartProvider>
    )
}