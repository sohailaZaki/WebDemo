import React from 'react';
import { Link } from 'react-router-dom';
import AddProductImage from '../../assets/add-product.png';
import RemoveProductImage from '../../assets/delete-product.png';
import All from '../../assets/pick-list.png';
import "./sidebar.css"
const Sidebar = () => {

    return (
        <div className='sidebar'>
                    <Link to={'/addproduct'} style={{textDecoration:"none"}} >
                        <div className='item'>
                        <img src={AddProductImage} alt=""  style={{maxWidth:"20%"}}/>
                        <p>Add product</p>
                        </div>
                    </Link>

                    <Link to={'/listproduct'} style={{textDecoration:"none"}} >
                        <div className='item'>
                        <img src={All} alt="" style={{maxWidth:"20%"}}/>
                        <p>List of product</p>
                        </div>
                    </Link>
                    <Link to={'/removeproducts'} style={{textDecoration:"none"}} >
                        <div className='item'>
                        <img src={RemoveProductImage} alt="" style={{maxWidth:"20%"}} />
                        <p>Remove product</p>
                        </div>
                    </Link>

        </div>
    );
}

export default Sidebar;
