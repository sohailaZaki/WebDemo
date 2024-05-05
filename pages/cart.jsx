// cart.jsx
import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartitems from "../component/cartitems/cartitems";



const Cart = () => {
    const { cartitems } = useContext(ShopContext);


    return (
        <div>
            <Cartitems/>
        </div>
    );
}

export default Cart;
