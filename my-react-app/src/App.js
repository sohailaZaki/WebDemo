import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./component/navbar/navbar";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Shopcategoery from "./pages/shopcategoery";
import Product from "./pages/product";
import Login from "./pages/login";
import Makeupbanner from "./images/banner-large-1.jpg";
import skinbanner from "./images/banner-large-image2.jpg";
import Footer from "./component/footer/footer";
import ScrollToTop from "./component/scroll/ScrollToTop";
import CheckoutPage from "./pages/check";
import Home from "./component/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent /> 
       
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/MakeUP" element={<Shopcategoery banner={Makeupbanner} categorey="MakeUP" />} />
          <Route path="/SkinCare" element={<Shopcategoery banner={skinbanner} categorey="SkinCare" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkOut" element={<CheckoutPage />} />
        
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
