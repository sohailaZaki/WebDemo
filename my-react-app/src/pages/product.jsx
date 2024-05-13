import React, { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom"; 
import Productdisplay from "../component/productdisplay/productdisplay";
import { ShopContext } from "../context/shopContext";
import Review from "../component/reviews/reviews";
import Comment from "../component/comments/comments"
import NavbarComponent from "../component/navbar/navbar";
import Footer from "../component/footer/footer";

const Product = () => {
    const { productId } = useParams(); // Make sure you're correctly extracting the productId

    const { all_product } = useContext(ShopContext);

    let product = all_product.find((e) => e.id === Number(productId)); ;
    useEffect(() => {

        product = all_product.find((e) => e.id === Number(productId));

    } );
    return (
        <div>
         
            <Productdisplay product={product} />

           <Footer />
            
        </div>
    );
}

export default Product;
