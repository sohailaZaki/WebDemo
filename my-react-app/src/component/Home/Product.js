import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

function Product({ product }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('img').classList.add('hovered');
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('img').classList.remove('hovered');
  };

  return (
    <MDBCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MDBCardBody>
        <MDBCardImage
          src={product.image_link}
          alt={product.name}
          className="w-100"
        />
        <div className="card-content">
          <h5 className="card-title mb-3">{product.name}</h5>
          <p>{product.product_type}</p>
          <p>{product.brand}</p>
          <h6 className="mb-3">{product.price}$</h6>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Product;
