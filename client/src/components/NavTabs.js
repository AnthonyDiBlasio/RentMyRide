import React from 'react';

// returns the navbar on everypage

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="/"
          onClick={() => handlePageChange('Home')}
          

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/about"
          onClick={() => handlePageChange('About')}
          

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
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
          href="#Search"
        

          onClick={() => handlePageChange('Search')}
          className={currentPage === 'Search' ? 'nav-link active' : 'nav-link'}
        >
          Search
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#users"
          onClick={() => handlePageChange('Users')}
          

          className={currentPage === 'Users' ? 'nav-link active' : 'nav-link'}
        >
          Users
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
