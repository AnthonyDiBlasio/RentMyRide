import React from "react";
import "../styles/NavTabs.css";
import { useUser } from "../context/UserContext";
// returns the navbar on everypage
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLogout } from "../context/UserContext";
export default function NavTabs({ currentPage, handlePageChange }) {
  const location = useLocation();
  const [userData] = useUser();
  const logout = useLogout();
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
              to="/find-my-ride"
              active={location.pathname === "/find-my-ride"}
            >
              Find a Ride
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/profile"
              active={location.pathname === "/profile"}
            >
              My Profile
            </Nav.Link>
            {userData.logged_in &&
              <Nav.Link
                as={Link}
                to="/list-my-ride"
                active={location.pathname === "/list-my-ride"}
              >
                List a Ride
              </Nav.Link>
            }
           
          </Nav>

          {userData.logged_in ? (
            <Nav>
              <Button onClick={logout}>logout</Button>
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
