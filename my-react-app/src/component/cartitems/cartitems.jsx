import React, { useContext } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShopContext } from "../../context/shopContext";
import carticon from '../../images/cart_cross_icon.png';
import './cartitems.css';

const Cartitems = () => {
    const { totalcart, cartitems, removefromcart, all_product } = useContext(ShopContext);

    // Calculate subtotal and total
    const subtotal = Object.keys(cartitems).reduce((acc, productId) => {
        const product = all_product.find(p => {
            return p.id === parseInt(productId);
        });
        return acc + (product ? product.price * cartitems[productId] : 0);
    }, 0);
    

    const total = subtotal;

    // Check if cart is empty
    const isCartEmpty = totalcart() === 0;



    return (
        <div className="cart-items container">
            <div style={{ paddingBottom: '30px', paddingTop: '80px' , color:'black'}}>
                <h1 style={{ fontSize: '5rem' }}>Cart</h1>

                Home / pages / cart 

            </div>

            {isCartEmpty && (
                <div className="empty-cart-message">
                    <hr/>
                     <h1 style={{ fontSize: '5rem',textAlign:'center'}}>Cart is empty <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
                        <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                     </h1>
                    <hr/>
                </div>
            )}

            {!isCartEmpty && (
                <div>
                    <div className="format-main row">
                        <div className="col">Product</div>
                        <div className="col">Title</div>
                        <div className="col">Price</div>
                        <div className="col">Quantity</div>
                        <div className="col">Total</div>
                        <div className="col">Remove</div>
                    </div>
                    <hr/>
                    {all_product.map((product) => {
                        if (cartitems[product.id] > 0) {
                            
                            return (
                                <div key={product.id} className="format row">
                                    <div className="col">
                                    <Link to={`/product/${product.id}`} className="product-link">
                                        <img href="{`/product/${product.id}`}" src={product.image} className="cart-icon" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col">{product.name}</div>
                                    <div className="col">${product.price}</div>
                                    <div className="col">
                                        <button className="btn">{cartitems[product.id]}</button>
                                    </div>
                                    <div className="col">${product.price * cartitems[product.id]}</div>
                                    <div className="col">
                                        <img src={carticon} className="remove-cart-icon" onClick={() => removefromcart(product.id)} alt="" />
                                    </div>
                                </div>
                                
                            );
                           
                        }
                        return null;
                    })}
                    
                    <div className="down row mt-5">
                        <div className="total col-md-6">
                            <h1>Cart Total</h1>
                            <div className="cart-items">
                                <p>SubTotal</p>
                                <p style={{ color:'black' }}>${subtotal}</p>
                            </div>
                            <hr/>
                            <div className="cart-items">
                                <p>Shipping Fee</p>
                                <p style={{ color:'black' }}>Free</p>
                            </div>
                            <hr/>
                            <div className="cart-items">
                                <h3>Total</h3>
                                <h3>${total}</h3>
                            </div>
                            <Link to='/checkOut' className="btn btn-primary btn-lg w-100 mt-4 btn-transparent">Checkout</Link>

                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}
export default Cartitems;
