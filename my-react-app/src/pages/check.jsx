import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "../component/navbar/navbar";
import Footer from "../component/footer/footer";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { totalcart, removefromcart, all_product } = useContext(ShopContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [governorate, setGovernorate] = useState("");
    const [location, setLocation] = useState("");
    const [useShippingAsBilling, setUseShippingAsBilling] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const { cartitems, clearCart } = useContext(ShopContext);
    const [scrollToTop, setScrollToTop] = useState(false);

    const validateForm = () => {
        const errors = {};

        if (!firstName.trim()) {
            errors.firstName = "First name is required";
        }
        if (!lastName.trim()) {
            errors.lastName = "Last name is required";
        }
        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email format";
        }
        if (!phoneNumber.trim()) {
            errors.phoneNumber = "Phone number is required";
        } else if (!/^(010|011|012)[0-9]{8}$/.test(phoneNumber)) {
            errors.phoneNumber = "Invalid phone number format";
        }
        if (!address.trim()) {
            errors.address = "Address is required";
        }
        if (!governorate.trim()) {
            errors.governorate = "Governorate is required";
        }
        if (!location.trim()) {
            errors.location = "Location is required";
        }
        if (paymentMethod === "creditCard") {
            if (!cardNumber.trim()) {
                errors.cardNumber = "Card number is required";
            }
            if (!expiryDate.trim()) {
                errors.expiryDate = "Expiry date is required";
            }
            if (!securityCode.trim()) {
                errors.securityCode = "Security code is required";
            }
            if (!cardHolderName.trim()) {
                errors.cardHolderName = "Card holder name is required";
            }
            if (paymentMethod === "creditCard") {
                if (!cardNumber.trim()) {
                    errors.cardNumber = "Card number is required";
                } else if (!/^\d{16}$/.test(cardNumber)) {
                    errors.cardNumber = "Invalid card number format";
                }
                if (!expiryDate.trim()) {
                    errors.expiryDate = "Expiry date is required";
                } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(expiryDate)) {
                    errors.expiryDate = "Invalid expiry date format";
                }
                if (!securityCode.trim()) {
                    errors.securityCode = "Security code is required";
                } else if (!/^\d{3,4}$/.test(securityCode)) {
                    errors.securityCode = "Invalid security code format";
                }
                if (!cardHolderName.trim()) {
                    errors.cardHolderName = "Card holder name is required";
                } else if (!/^[a-zA-Z\s]+$/.test(cardHolderName)) {
                    errors.cardHolderName = "Invalid card holder name format";
                }
            }
        
        }

        return errors;
    };
    useEffect(() => {
        if (scrollToTop) {
            window.scrollTo(0, 0);
            setScrollToTop(false);
        }
    }, [scrollToTop]);


    const [orderPlaced, setOrderPlaced] = useState(false);

        
    
    const handlePlaceOrder = () => {
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            // Proceed with placing the order
            setOrderPlaced(true);
            clearCart(); // Clear the cart after 3 seconds
            setScrollToTop(true);
        } else {
            setFormErrors(errors);
        }
    };


    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleUseShippingAsBillingChange = (e) => {
        setUseShippingAsBilling(e.target.checked);
    };
    const isCartEmpty = Object.values(cartitems).every(quantity => quantity === 0);

    return (
        <div className="container">
            <NavbarComponent /> 
            <div style={{ paddingBottom: '30px', paddingTop: '80px' , color:'black'}}>
                <h1 style={{ fontSize: '5rem' }}>Checkout</h1>
                
            </div>

            {isCartEmpty && (
                <div className="empty-cart-message">
                    <hr/>
                     <h1 style={{ fontSize: '5rem',textAlign:'center'}}>Order is placed <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></h1>
                     <hr/>
                </div>
            )}
            {!isCartEmpty && (
                <div>
            <form>
                {/* First name */}
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {formErrors.firstName && <div className="text-danger">{formErrors.firstName}</div>}
                </div>
                {/* Last name */}
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    {formErrors.lastName && <div className="text-danger">{formErrors.lastName}</div>}
                </div>
                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                </div>
                {/* Phone number */}
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    {formErrors.phoneNumber && <div className="text-danger">{formErrors.phoneNumber}</div>}
                </div>
                {/* Address */}
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    {formErrors.address && <div className="text-danger">{formErrors.address}</div>}
                </div>
                {/* Governorate */}
                <div className="mb-3">
                    <label htmlFor="governorate" className="form-label">Governorate</label>
                    <select className="form-select" id="governorate" value={governorate} onChange={(e) => setGovernorate(e.target.value)}>
    <option value="">Select Governorate</option>
    <option value="Cairo">Cairo</option>
    <option value="Alexandria">Alexandria</option>
    <option value="Ismailia">Ismailia</option>
    <option value="Port Said">Port Said</option>
    <option value="Suez">Suez</option>
    <option value="Aswan">Aswan</option>
    <option value="Asyut">Asyut</option>
    <option value="Beheira">Beheira</option>
    <option value="Beni Suef">Beni Suef</option>
    <option value="Dakahlia">Dakahlia</option>
    <option value="Damietta">Damietta</option>
    <option value="Faiyum">Faiyum</option>
    <option value="Gharbia">Gharbia</option>
    <option value="Giza">Giza</option>
    <option value="Ismailia">Ismailia</option>
    <option value="Kafr El Sheikh">Kafr El Sheikh</option>
    <option value="Luxor">Luxor</option>
    <option value="Matrouh">Matrouh</option>
    <option value="Minya">Minya</option>
    <option value="Monufia">Monufia</option>
    <option value="New Valley">New Valley</option>
    <option value="North Sinai">North Sinai</option>
    <option value="Port Said">Port Said</option>
    <option value="Qalyubia">Qalyubia</option>
    <option value="Qena">Qena</option>
    <option value="Red Sea">Red Sea</option>
    <option value="Sharqia">Sharqia</option>
    <option value="Sohag">Sohag</option>
    <option value="South Sinai">South Sinai</option>
</select>

                    {formErrors.governorate && <div className="text-danger">{formErrors.governorate}</div>}
                </div>
                {/* Location */}
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <select className="form-select" id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
                        <option value="">Select Location</option>
                        <option value="home">Home</option>
                        <option value="office">Office</option>
                    </select>
                    {formErrors.location && <div className="text-danger">{formErrors.location}</div>}
                </div>
 
                
                
                <div style={{ marginTop: '20px' }}>
                    <button type="button" className="btn btn-primary me-2" onClick={handlePlaceOrder}>Place Order</button>
                    <Link type="button" className="btn btn-primary" to={'/cart'}>Cancel</Link>
                </div>

                



            </form>
            </div>
            )}
            <div className="down row mt-5">
                        <div className="total col-md-6">
                            <h1>Cart Total</h1>
                            <div className="cart-items">
                                <p>SubTotal</p>
                                <p style={{ color:'black' }}>{totalcart}</p>
                            </div>
                            <hr/>
                            <div className="cart-items">
                                <p>Shipping Fee</p>
                                <p style={{ color:'black' }}>Free</p>
                            </div>
                            <hr/>
                            <div className="cart-items">
                                <h3>Total</h3>
                                <h3>{totalcart}</h3>
                            </div>
                            <Link onClick={()=>navigate('/checkOut')} className="btn btn-primary btn-lg w-100 mt-4 btn-transparent">Checkout</Link>
                        </div>
            </div>
            
      <Footer />
        </div>
    );
}

export default CheckoutPage;
