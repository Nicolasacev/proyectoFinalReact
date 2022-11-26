import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart } from "../Cart/Cart"
import { CartProvider } from "../CartContext/CartContext"
import { Footer } from "../Footer/Footer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { NavBar } from "../NavBar/NavBar"
import {OrderContainer} from "../Orders/OrderContainer"
import CookieConsent from "react-cookie-consent";


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
            <CookieConsent debug={true}
                location="bottom"
                buttonText="Entendido"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}>
                Este sitio web utiliza cookies.{" "}
                <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
            </CookieConsent>
            <Footer/>
        </BrowserRouter>
        </CartProvider>
    )
}