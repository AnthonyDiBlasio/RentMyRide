import React from "react";
import "../styles/NavTabs.css";

// returns the navbar on everypage
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
export default function NavTabs({ currentPage, handlePageChange }) {
  const location = useLocation();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Rent My Ride</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/rentals" active={location.pathname === "/rentals"}>
              Find a Ride
            </Nav.Link>
            <Nav.Link
              href="/rentalform"
              active={location.pathname === "/rentalform"}
            >
              List a Ride
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signup" active={location.pathname === "/signup"}>
              Signup
            </Nav.Link>
            <Nav.Link href="/login" active={location.pathname === "/login"}>
              Login
            </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>
              <a
                href="/logout"
                onClick={() => handlePageChange("Signup")}
                className={
                  currentPage === "Signup" ? "nav-link active" : "nav-link"
                }
              >
                Logout
              </a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
