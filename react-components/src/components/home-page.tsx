import React from 'react';
import './pages.css';
import SearchBar from './search-bar/search-bar';
import Cards from './cards/cards';

const HomePage = () => {
  return (
    <div className="wrapper">
      <SearchBar />
      <Cards />
    </div>
  );
};
export default HomePage;
