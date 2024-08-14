import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { IoMdLogIn } from "react-icons/io";
import { TiUserAdd } from "react-icons/ti";
import { IoMdCart } from "react-icons/io";

import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.handleCart) || [];
  
  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="nav-container">
          <div>
            <Navbar.Brand as={Link} to="/">Emart</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/product">Products</Nav.Link>
              <Nav.Link as={Link} to="#About">About</Nav.Link>
              <Nav.Link as={Link} to="#Contact">Contact</Nav.Link>
            </Nav>
            <div className="buttons">
              <Link className="login nav-btn" to="/login">
                <IoMdLogIn />
                login
              </Link>
              <Link className="register nav-btn" to="/register">
                <TiUserAdd />
                register
              </Link>
              <Link className="cart nav-btn" to="/cart">
                <IoMdCart />
                Cart ({cartItems.length})
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
