import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './productdisplay.css';
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import StarRatings from 'react-star-ratings';

const Productdisplay = (props) => {
    const { product } = props;
    const { addtocart } = useContext(ShopContext);
    const [rating, setRating] = useState(0); // State to store the selected rating

    const handleRatingChange = (newRating) => {
        setRating(newRating); // Update the selected rating
    };

    const handleAddToCart = () => {
        addtocart(product.id); // Add the product to the shopping cart
    };


    return (
        <div className="productdisplay">
            <div style={{ paddingTop: '80px', paddingBottom:'60px', color:'black' }}>
                Home / Shop / {product.category} / {product.name}
                </div>

            <div className="row">
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
                <div className="col-md-6">
                    <div className="productdisplay-right">
                        <h1 className="productdisplay-info-name">{product.name}</h1>
                        <StarRatings
                            rating={rating}
                            starRatedColor="gold"
                            changeRating={handleRatingChange}
                            numberOfStars={5}
                            name='rating'
                            starDimension="25px"
                            starSpacing="5px"
                        />
                        
                        
                        <div className="productdisplay-price">
                            <h1 className="productdisplay-price-name">${product.price}</h1>
                        </div>

                        
                        <button onClick={handleAddToCart} className="btn btn-primary btn-lg w-100 mt-4 btn-transparent">Add To Cart</button>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Productdisplay;