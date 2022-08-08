import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Signup from './pages/Signup';

export default function AppContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Search') {
      return <Search />;
    }
    return <Signup />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Gets navtabs.js */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* renders portfolio page */}
      {renderPage()}
    </div>
  );
}
