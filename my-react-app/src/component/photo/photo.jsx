// shop.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import shop from '../../images/banner-large-7.jpg'

const Photo = () => {
    return (
        <div className="Photo">
 <div className="container-fluid px-0">
  <div className="row position-relative">
    <div className="col">
      <img src={shop} alt="Shop" className="img-fluid" style={{ maxHeight: '15cm', width: '100%', objectFit: 'cover' }} />
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-white text-center" style={{ fontSize: '65px' }}>SHOP </h1>
        <ul className="list-unstyled text-white text-center" style={{ fontSize: '20px' }}>
          <li><a href="#">Home</a> / <a href="#">Pages</a> / <a href="#">ShopAll</a> </li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </div>
)}
export default Photo;