import React from "react";
import "../styles/NavTabs.css";
import { useUser } from "../context/UserContext";
// returns the navbar on everypage
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function NavTabs({ currentPage, handlePageChange }) {
  const location = useLocation();
  const [userData] = useUser();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Rent My Ride
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/rentals"
              active={location.pathname === "/rentals"}
            >
              Find a Ride
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/rentalform"
              active={location.pathname === "/rentalform"}
            >
              List a Ride
            </Nav.Link>
          </Nav>

          {userData.logged_in ? (
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
          ) : (
            <Nav>
              <Nav.Link
                as={Link}
                to="/signup"
                active={location.pathname === "/signup"}
              >
                Signup
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/login"
                active={location.pathname === "/login"}
              >
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
