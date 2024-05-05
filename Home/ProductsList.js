import React, { useEffect, useState } from 'react';
import line from '../../../images/line.png';
import Product from './Product';

function ProductsList() {
  const apiurl = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section id="new-arrival" className="new-arrival product-carousel position-relative open-up aos-init aos-animate" data-aos="zoom-out">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center my-5 py-lg-5">
          <div className="line-img my-2">
            <img src={line} alt="" />
          </div>
          <h4 className="text-uppercase mb-0">New Arrivals</h4>
          <div className="line-img my-2">
            <img src={line} alt="" />
          </div>
        </div>
        <div className="swiper product-swiper overflow-hidden swiper-initialized swiper-horizontal swiper-backface-hidden">
          <div className="swiper-wrapper d-flex">
            {products.slice(0, 4).map((product) => (
              <div className="swiper-slide" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
          <div className="icon-arrow no-outline icon-arrow-left bg-light swiper-button-disabled" tabIndex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-7fa7c110e65b89c8f" aria-disabled="true" data-sider-select-id="533e2b8d-0ef5-45d0-9ea0-2bffbca34b23"></div>
          <div className="icon-arrow no-outline icon-arrow-right bg-light" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-7fa7c110e65b89c8f" aria-disabled="false" data-sider-select-id="7de716be-e6bd-4aae-9c95-152bd4097272"></div>
        </div>
        <div className="text-center mt-5">
          <a href="shop-sidebar.html" className="btn-link">View All Products</a>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
