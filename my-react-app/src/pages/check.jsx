import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";
import axios from "axios"; // Import axios
import{ totalcart }from "../context/shopContext";

const CheckoutPage = () => {

    const { cartitems, clearCart ,gettotalCartItems,totalcart} = useContext(ShopContext); ////55555
    

    const getItems = () => {

        const itemsArray = [];
        for (const [itemName, itemCount] of Object.entries(cartitems)) {
          if (itemCount > 0) {
            itemsArray.push({ IdOfProduct: itemName, count: itemCount });
          }
        }
        return itemsArray;

    };
    
    const [ data , setData ] =useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        address:"",
        governorate:"",
        location:"",
        TotalPrice:totalcart(),
        myArray:getItems(),
        
    })
    const [formErrors, setFormErrors] = useState({});
    
    const [scrollToTop, setScrollToTop] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    
    const onChangeHandler =(event)=>{
        const name =event.target.name;
        const value =event.target.value;
        setData(data=>({...data,[name]:value }))

    }

  
   //hereeee

    useEffect(()=>{
        console.log(data);

    },[data])

   
    useEffect(() => {
        if (scrollToTop) {
            window.scrollTo(0, 0);
            setScrollToTop(false);
        }
    }, [scrollToTop]);

   
//hereeeeeeeeeeee
    const checkoutPage=async (event)=>{
        //handlePlaceOrder();
        console.log(data);
        let response;
        let order = data;
        await fetch('http://localhost:4000/check', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
            }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert("order Added"):alert("Failed")
            })
        

    }
    const isEmailValid = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isPhoneNumberValid = (phoneNumber) => {
        const phoneRegex = /^(010|011|012)[0-9]{8}$/;
        return phoneRegex.test(phoneNumber);
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const errors = {};
        // Check each field for validation
        for (const field in data) {
          if (!data[field]) {
            errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            setFormErrors(errors);
          }else if (field === 'email' && !isEmailValid(data[field])) {
            errors[field] = 'Please enter a valid email address';
          } else if (field === 'phoneNumber' && !isPhoneNumberValid(data[field])) {
            errors[field] = 'Please enter a valid phone number';
          }
        }
        if (!Object.keys(errors).length > 0) {
          //setFormErrors(errors);
          console.log("Form submitted successfully!");
          // Proceed with placing the order
          setOrderPlaced(true);
          clearCart(); // Clear the cart after 3 seconds
          setScrollToTop(true);
          checkoutPage();
        } 
      };
       

   
    const isCartEmpty = Object.values(cartitems).every(quantity => quantity === 0);

    return (
        <div className="container">
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
                
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" name="firstName"className="form-control" id="firstName" value={data.firstName} onChange={onChangeHandler}  />
                    {formErrors.firstName && <div className="text-danger">{formErrors.firstName}</div>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" name="lastName"className="form-control" id="lastName" value={data.lastName} onChange={onChangeHandler} />
                    {formErrors.lastName && <div className="text-danger">{formErrors.lastName}</div>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email"className="form-control" id="email" value={data.email} onChange={onChangeHandler} />
                    {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="text" name="phoneNumber"className="form-control" id="phoneNumber" value={data.phoneNumber} onChange={onChangeHandler} />
                    {formErrors.phoneNumber && <div className="text-danger">{formErrors.phoneNumber}</div>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" name="address"className="form-control" id="address" value={data.address} onChange={onChangeHandler}/>
                    {formErrors.address && <div className="text-danger">{formErrors.address}</div>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="governorate" className="form-label">Governorate</label>
                    <select className="form-select" name="governorate"id="governorate" value={data.governorate} onChange={onChangeHandler}  >
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
                
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <select className="form-select" name="location"id="location" value={data.location} onChange={onChangeHandler}>
                        <option value="">Select Location</option>
                        <option value="home">Home</option>
                        <option value="office">Office</option>
                    </select>
                    {formErrors.location && <div className="text-danger">{formErrors.location}</div>}
                </div>
 
                
                
                <div style={{ marginTop: '20px' }}> 
                    <button onClick={(e)=>{handlePlaceOrder(e)}} className="btn btn-primary me-2" >Place Order</button>
                    <Link type="button" className="btn btn-primary" to={'/cart'}>Cancel</Link>
                </div>

                



            </form>
            </div>
            )}
        </div>
    );
}

export default CheckoutPage;

