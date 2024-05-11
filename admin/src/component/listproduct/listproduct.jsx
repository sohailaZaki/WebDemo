import React , {useState, useEffect } from "react";
import './listproduct.css'
import Removee from "../../assets/cart_cross_icon.png"

const Listproduct = () => {
    const [all_product, setAllProductDetails] = useState([]);
    
    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproduct')
            .then((res) => res.json())
            .then((data) => {
                setAllProductDetails(data);
            });
    }
    
    useEffect(() => {
        fetchInfo();
    }, []);
    const Removeproduct = async (id) => {
        await fetch('http://localhost:4000/removeproducts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json', // Corrected typo here
            },
            body: JSON.stringify({ id: id }),
        });
        await fetchInfo();
    }
    
    
    return (
        <div className="list">
            <h1>All Product</h1>
            <div className="list-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="list-allproduct">
                <hr/>
                {all_product.map((product, index) => {
                    return <>
                        <div key={index} className="list-main list-format">
                            <img src={product.image} alt="" className="list-image"/>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                            <img onClick={() => { Removeproduct(product.id) }} className="remove-icon" src={Removee} alt=""/>

                        </div>
                        <hr/>
                        </>
                })}
            </div>
        </div>
    )
}

export default Listproduct;
