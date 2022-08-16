import React from 'react';

// returns the navbar on everypage

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="/"
          onClick={() => handlePageChange('Home')}
          //need logo in nav

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/signup"
          onClick={() => handlePageChange('Signup')}
          

          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
        Signup
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/login"
          onClick={() => handlePageChange('Signup')}
          

          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
        Login
        </a>
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
        <a
          href="/rentals"
        

          onClick={() => handlePageChange('Rentals')}
          className={currentPage === 'Rentals' ? 'nav-link active' : 'nav-link'}
        >
          Find your Dream Ride!
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/rentalform"
          onClick={() => handlePageChange('RentalForm')}
          

          className={currentPage === 'RentalForm' ? 'nav-link active' : 'nav-link'}
        >
          Rent your Ride!
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
