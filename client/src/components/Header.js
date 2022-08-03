import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to = "/"href="#home">RentmyRide</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link class = 'home' href="#home" to ="/">Home</Nav.Link>
            <Nav.Link class = 'search' href="#search" to ="/search">Search</Nav.Link>
            <Nav.Link class = "rent" href="#rent" to = "/rent">Rent and Earn</Nav.Link>
            <Nav.Link class = "signup" href="#signup" to ="signup">SignUp/SignIn</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </>
  );
}

export default Header;

