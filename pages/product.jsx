import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom"; 
import Productdisplay from "../component/productdisplay/productdisplay";
import { ShopContext } from "../context/shopContext";
import Related from "../component/related/related";

const Product = () => {
    const { productId } = useParams(); // Make sure you're correctly extracting the productId

    const { allproducts } = useContext(ShopContext);

    const product = allproducts.find((e) => e.id === Number(productId));

    return (
        <div>

            <Productdisplay product={product} />

            <Related/>
            
        </div>
    );
}

export default Product;
