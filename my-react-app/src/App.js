// App.jsx

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
import MiniDrawer from "./pages/dashboard";
import { Dashboard } from "@mui/icons-material";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent /> 
        {/* < MiniDrawer/> */}
        <ScrollToTop />
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/shop" element={<Shop />} />
          <Route path="/MakeUP" element={<Shopcategoery banner={Makeupbanner} categorey="MakeUP" />} />
          <Route path="/SkinCare" element={<Shopcategoery banner={skinbanner} categorey="SkinCare" />} />
          <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product />}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkOut" element={<CheckoutPage />} />
          <Route path="/dashboard" element={<MiniDrawer />}>
              <Route index element={<Dash />} />
              <Route path="user" element={<user />} /> 

            <Route path="contacts" element={<Contacts />} />
            {/* <Route path="invoices" element={<Invoices />} />
            <Route path="form" element={<Form />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="bar" element={<BarChart />} />
            <Route path="pie" element={<PieChart />} />
            <Route path="line" element={<LineChart />} />
            <Route path="geography" element={<Geography />} />
            <Route path="*" element={<NotFound />} />  */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
