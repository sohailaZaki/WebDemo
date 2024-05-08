// navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './navbar.css';
import logo from '../../images/main-logo.png'

import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import all_product from "../assest/allProduct";

const NavbarComponent = () => {
    const {gettotalCartItems}=useContext(ShopContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        console.log('Search query:', event.target.value); // Debugging log
    };
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('Enter key pressed'); // Debugging log
            console.log('Search query:', searchQuery); // Debugging log
            // Filter products based on the search query
            const results = all_product.filter(
                (product) =>
                    product.discription.toLowerCase().includes(searchQuery.toLowerCase())
            );
            console.log('Search results:', results); // Debugging log
            // Update the state with search results
            setSearchResults(results);
        }
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  variant="light">
                <Container>
                <Navbar.Brand as={Link} to="/" style={{ marginRight: '10rem' }}> 
                        {/* Replace mainLogo with the correct path to your logo image */}
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Use Link instead of href */}
                            
                            
                            <NavDropdown title="Shop" id="dropdownShop" >
                                <NavDropdown.Item><Link to='/shop'>All</Link></NavDropdown.Item> {/* Updated link */}
                                <NavDropdown.Item><Link to='/SkinCare'>SkinCare</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to='/MakeUP'>MakeUp</Link></NavDropdown.Item>
                            </NavDropdown>
                            {/* Add other NavDropdown items */}
                            <NavDropdown title="Pages" id="dropdownPages" >
                                <NavDropdown.Item href="about.html">About</NavDropdown.Item>
                                <NavDropdown.Item ><Link to ='/cart' >Cart</Link></NavDropdown.Item>
                                {/* Add other pages here */}
                            </NavDropdown>
                            <Nav.Link href="contact.html">Contact</Nav.Link>
                            <Nav.Link href='/login'>Logout</Nav.Link>
                        </Nav>
                        <Nav>
                        <div>
                    <ul className="list-unstyled d-flex m-0 mt-3 mt-xl-0 justify-content-end flex-wrap">
       
                            <li className="mx-3">
                                <a   className="text-uppercase"><Link to="/cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>
                                    <span className="cart-count">({gettotalCartItems()})</span>
                                    </Link>
                                </a>
                            </li>
                            <li className="mx-3">
                                <a href="#like">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="mx-3 search-box" ref={searchInputRef}>
                                        {isSearchOpen ? (
                                           <input
                                           type="text"
                                           className="search-input"
                                           placeholder="Search products..."
                                           onChange={handleSearchChange}
                                           onKeyPress={handleKeyPress} // Bind handleKeyPress function
                                           style={{ background: 'none'}}
                                       />
                                    ) : (
                                            <a href="#" className="search-button" onClick={toggleSearch}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="25"
                                                    height="25"
                                                    fill="currentColor"
                                                    className="bi bi-search"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                                                    ></path>
                                                </svg>
                                            </a>
                                        )}
                                    </li>

                        </ul>
                        
                    </div>

                
                </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default NavbarComponent;
