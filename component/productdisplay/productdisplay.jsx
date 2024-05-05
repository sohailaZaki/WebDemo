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
    const [selectedColor, setSelectedColor] = useState(product.colours[0]); // State to store the selected color

    const handleRatingChange = (newRating) => {
        setRating(newRating); // Update the selected rating
    };

    const handleAddToCart = () => {
        addtocart(product.id); // Add the product to the shopping cart
    };

    const handleColorChange = (color) => {
        setSelectedColor(color); // Update the selected color
    };

    return (
        <div className="productdisplay">
            <div style={{ paddingTop: '80px', paddingBottom:'60px', color:'black' }}>
                Home / Shop / {product.categorey} / {product.name}
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
                        <h1 className="productdisplay-info-discription" style={{ color: '#888', fontSize: '20px' }}>{product.discription}</h1>

                        <div className="productdisplay-colors">
                            {product.colours.map((color, index) => (
                                <div
                                    key={index}
                                    className={`productdisplay-color-circle ${selectedColor === color ? 'active' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorChange(color)}
                                ></div>
                            ))}
                            
                        </div>
                        <span className="productdisplay-selected-color">Colour: {selectedColor}</span>
                        <button onClick={handleAddToCart} className="btn btn-primary btn-lg w-100 mt-4 btn-transparent">Add To Cart</button>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Productdisplay;