//shop.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from '../component/photo/photo';
import Shopall from '../component/shopall/shopall';
import NavbarComponent from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
const Shop = () => {
    return (
        <div>
            <NavbarComponent /> 
            <Photo />
            <Shopall/>
            
           <Footer />
        </div>
    );
}

export default Shop;
