// cart.jsx
import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartitems from "../component/cartitems/cartitems";
import NavbarComponent from "../component/navbar/navbar";
import Footer from "../component/footer/footer";



const Cart = () => {
    const { cartitems } = useContext(ShopContext);
    return (
        <div>
            <NavbarComponent /> 
            <Cartitems/>
            
             <Footer />
        </div>
    );
}

export default Cart;
