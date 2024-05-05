function Product(props) {
    console.log(props);
    const { product } = props;
  
    return (
      <>
      
        <div className="card" style={{ width: "10px;" }}>
         <img src={product.image_link} className="card-img-top" alt="..." style={{width: '130px' , margin: 'auto'}} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{product.brand}</li>
            <li className="list-group-item">{product.product_type}</li>
            <li  className="list-group-item">{product.price} {product.price_sign}</li>
            <li  className="list-group-item">{product.price_sign}</li>
          </ul>
          <div className="card-body">
            <button className="card-link">Card link</button>
            <button className="card-link">Another link</button>
          </div>
        </div>
      </>
    );
  }
  export default Product;