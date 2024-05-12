import React, { useState, useEffect } from 'react';
import line from "../../images/line.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '@fortawesome/fontawesome-free/css/all.css';
import Product from '../../pages/product';
import { useNavigate } from 'react-router-dom';
import {
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import "./ProductList.css";
import { Link } from 'react-router-dom';

function ProductList({ productType, sliceStart = 0, sliceEnd = 10 ,Status}) {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartClicked, setCartClicked] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);
  const [showProduct, setShowProduct] = useState(false); // State to toggle Product component visibility

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/allproduct'); // Adjust URL to match your backend endpoint
        const data = await response.json();
        setProducts(data.slice(sliceStart, sliceEnd)); // Slice the products array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [sliceStart, sliceEnd]);

  const handleCartClick = () => {
    setCartClicked(!cartClicked);
  };

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };

  const handleBuyNowClick = () => {
    console.log('Button clicked!'); // Adding a log to check if the button is clicked
    setShowProduct(true);
    console.log('showProduct:', showProduct);
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-center my-5 py-lg-5">
        <div className="line-img my-2">
          <img src={line} alt="" />
        </div>
        <h4 className="text-uppercase mb-0" style={{ padding: "10px 150px" }}>{productType}</h4>
        <div className="line-img my-2">
          <img src={line} alt="" />
        </div>
      </div>

      <div className="product-list-wrapper">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <Carousel responsive={responsive}>
            {products.map((product, index) => (
              <div key={index} className="bg-image-container">
              <Link to={`/product/${product.id}`}> 
              <MDBRipple
                  rippleTag="div"
                  className="hover-zoom"
                  style={{ position: "relative", display: "block" }}
                >  <Link to={`/product/${product.id}`}>
                <MDBCardImage
                src={product.image}
                className="w-80"
                style={{ transition: "transform 0.3s ease" }}
              />
                </Link>
            
                  <div className="overlay">
                    <div className="overlay-content">
                      <h5>
                        <span className="badge bg-primary ms-2">{Status}</span>
                      </h5>
                      <Link to={`/product/${product.id}`} className="btn buy-now-btn">
                        Buy Now
                        </Link>
                      <div className="overlay-icons">
                        <MDBIcon fas icon="shopping-cart" className={`overlay-icon ${cartClicked ? 'clicked' : ''}`} id="Cart-icon" onClick={handleCartClick} />
                        <MDBIcon fas icon="heart" className={`overlay-icon ${heartClicked ? 'text-red' : ''}`} id="heart-icon" onClick={handleHeartClick} />
                      </div>
                    </div>
                  </div>
                </MDBRipple>
                </Link> 
                <MDBCardBody>
                  <a href={product.product_link} className="text-reset" target="_blank" rel="noopener noreferrer">
                    <h5 className="card-title mb-3" style={{ textAlign: 'center' }}>{product.name}</h5>
                  </a>
                  <p>{product && product.category}</p>
                  <h6 className="mb-3" style={{ textAlign: 'center' }}>{product.price}$</h6>
                </MDBCardBody>
              </div>
            ))}
          </Carousel>
        )}

        {showProduct && <Product />} {/* Render Product component if showProduct is true */}

        <div className="text-center mt-2">
          <Link to="/shop" className="btn" id='Productsbtn'>View All Products</Link>
        </div>
      </div>
    </>
  );
}

export default ProductList;
