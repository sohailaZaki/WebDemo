import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './navbar.css';
import logo from '../../assets/main-logo.png'
import { Link } from "react-router-dom";

const NavbarComponent = ({ onCategorySelect }) => {
    const handleCategorySelect = (category) => {
        onCategorySelect(category);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home" style={{ marginRight: '10rem' }}>
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <NavDropdown title="Shop" id="dropdownShop">
                                <NavDropdown.Item onClick={() => handleCategorySelect('all')}>All</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleCategorySelect('skincare')}>SkinCare</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleCategorySelect('makeup')}>MakeUp</NavDropdown.Item>
                            </NavDropdown>
                            {/* Add other NavDropdown items */}
                            <NavDropdown title="Pages" id="dropdownPages">
                                <NavDropdown.Item href="about.html">About</NavDropdown.Item>
                                <NavDropdown.Item><Link to='/cart'>Cart</Link></NavDropdown.Item>
                                {/* Add other pages here */}
                            </NavDropdown>
                            <Nav.Link href="contact.html">Contact</Nav.Link>
                            <Nav.Link href='/login'>Logout</Nav.Link>
                        </Nav>
                        <Nav>
                            <div>
                                <ul className="list-unstyled d-flex m-0 mt-3 mt-xl-0 justify-content-end flex-wrap">
                                    <li className="mx-3">
                                        <a href="#like">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                            </svg>
                                        </a>
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
