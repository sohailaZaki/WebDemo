import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './productdisplay.css';
import { ShopContext } from "../../context/shopContext";
import StarRatings from 'react-star-ratings';
import Related from '../comments/comments'; // Import the Related component
import Comment from "../comments/comments";

const Productdisplay = (props) => {

    const { product } = props;
    const { addtocart } = useContext(ShopContext);
    const [rating, setRating] = useState(0); // State to store the selected rating
    const [reviews, setReviews] = useState([]); // State to store product reviews
    const [newReview, setNewReview] = useState(""); // State to store new review text
    const reviewsRef = useRef(null); // Ref for reviews section

    useEffect(() => {
        const  productx  = props;
        // Fetch reviews for the product when the component mounts
        fetchReviews();
    } );

    const fetchReviews = async () => {
        try {
            const response = await fetch(`http://localhost:4000/product/${product._id}/ratings`);
            if (response.ok) {
                const data = await response.json();
                setReviews(data.reviews);
            } else {
                throw new Error('Failed to fetch reviews');
            }
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };
    


    const handleAddToCart = () => {
        addtocart(product.id); // Add the product to the shopping cart
    };

 
    
    return (
        <div className="productdisplay">
            <div style={{ paddingTop: '80px', paddingBottom:'60px', color:'black' }}>
                Home / Shop / {product && product.category} / {product && product.name}
            </div>
            <div className="row">
                {product && (
                    <div className="col-md-6">
                        <div className="productdisplay-imge-main">
                            <img src={product.image} className="img-fluid" alt=""/>
                        </div>
                        <div className="productdisplay-imge">
                            <img src={product.image} className="img-fluid small-image" alt=""/>
                            <img src={product.image} className="img-fluid small-image" alt=""/>
                            <img src={product.image} className="img-fluid small-image" alt=""/>
                            <img src={product.image} className="img-fluid small-image" alt=""/>
                        </div>
                    </div>
                )}
                <div className="col-md-6">
                    <div className="productdisplay-right">
                        <h1 className="productdisplay-info-name">{product && product.name}</h1>
           
                        <div className="productdisplay-price">
                            <h1 className="productdisplay-price-name">${product && product.price}</h1>
                        </div>
                   
                        <button onClick={handleAddToCart} className="btn btn-primary btn-lg w-100 mt-4 btn-transparent">Add To Cart</button>
                    </div>
                </div>
            </div>
            <hr/>
            <div ref={reviewsRef}></div>
            <Comment product={product}/>
            </div>
        
    );
};

export default Productdisplay;
