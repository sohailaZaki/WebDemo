import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDetails.css';
import { Link, useParams } from "react-router-dom";
const apiurl = "https://makeup-api.herokuapp.com/api/v1/products.json?"


const ProductDetails = (props) => {
    const params = useParams();
    useEffect(()=>{
        fetch(`${apiurl}/`)
    },[]) 
    return (
        <div className="swiper-slide">
            <div className="product-item">
                <div className="image-holder position-relative">
                    
                    <Link to={`/product/${props.id}`}>
                    <img src={props.image} alt="" className="product-image img-fluid" />
                    </Link>

                    <div className="product-content-below">
                        <h5 className="element-title text-uppercase fs-6 mt-3">
                            <p className="product-name">{props.name}</p>
                        </h5>
                        <div className="item-price"><p>{props.price}</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails;
