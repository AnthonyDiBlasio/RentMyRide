import React from 'react';
import '../styles/NavTabs.css';
import { Link} from 'react-router-dom';
import { LoneSchemaDefinitionRule } from 'graphql';
// returns the navbar on everypage

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs justify-content-end navColor">
      <li className="nav-item ">
        <Link
          to="/"
          

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signup"
    
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
        Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
        
          

          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
        Login
        </Link>
      </li>
      <li className="nav-item">
        <a
          href="/logout"
          onClick={() => handlePageChange('Signup')}
          

          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
        Logout
        </a>
      </li>
      <li className="nav-item">
        <Link
          to="/rentals"
        

          
          className={currentPage === 'Rentals' ? 'nav-link active' : 'nav-link'}
        >
          Find your Dream Ride!
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/rentalform"
         
          

          className={currentPage === 'RentalForm' ? 'nav-link active' : 'nav-link'}
        >
          Rent your Ride!
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
