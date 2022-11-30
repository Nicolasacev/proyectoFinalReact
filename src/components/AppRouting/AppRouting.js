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
              style = {{background :"#000", justifyItems:"center", width: "98vw", marginLeft: "4px" }}
              declineButtonText = "Rechazar"
              containerClasses = "alert alert-dark col-lg-12" 
              contentStyle={{padding:"15px"}}

              onDecline={() => {
              //  alert("Se rechazaron las cookies!");
                Cookies.remove("crashpartcookie")
              }}>
                Este sitio contiene cookies.
                <br></br>
                <span style={{ fontSize: "12px", textDecoration:"none"}}>Usamos cookies para mejorar su experiencia de navegación en nuestra web, para mostrarle contenidos personalizados y para analizar el tráfico en nuestro sitio.<br></br>Ver nuestras <a href="/" style={{textDecoration:"none"}}>Políticas de privacidad</a> </span>
            </CookieConsent>
            <Footer/>
        </BrowserRouter>
        </CartProvider>
    )
}