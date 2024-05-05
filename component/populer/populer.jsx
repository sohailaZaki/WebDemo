import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './populer.css';
import Data_product from '../assest/data';
import Item from '../item/item';
import lineImage from "../../images/line.png";

const Populer = () => {
    return (
        <div className="populer container">
            <div className="line-img-container d-flex align-items-center mb-4">
                <div className="line-img">
                    <img src={lineImage} alt=""/>
                </div>
                <h4 className="text-uppercase mx-3">Populer in Makeup</h4>
                <div className="line-img">
                    <img src={lineImage} alt=""/>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
                {Data_product.map((item, i) => (
                    <div key={i} className="col mb-4">
                        <Item name={item.discription} image={item.image} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Populer;
