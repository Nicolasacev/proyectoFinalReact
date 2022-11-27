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
              cookieName="crashpartcookie"
              buttonText = "Aceptar" 
              expires={365}
              style = {{background :"#000"}}
              declineButtonText = "Rechazar"
              containerClasses = "alert alert-dark col-lg-12" 
              onDecline={() => {
                alert("remove cookie here!");
                Cookies.remove("crashpartcookie")
              }}>
                Este sitio contiene cookies.
                <br></br>
                <span style={{ fontSize: "12px"}}>Usamos cookies para mejorar su experiencia de navegacion en nuestra web, para mostrarle contenidos personalizados y para analizar el trafico en nuestro sitio web.Ver <a href="/" >Politicas de privacidad</a> </span>
                
            </CookieConsent>
            <Footer/>
        </BrowserRouter>
        </CartProvider>
    )
}