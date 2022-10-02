import React from 'react';
import SearchBar from './search-bar/search-bar';
import Cards from './cards/cards';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <SearchBar />
      <Cards />
    </div>
  );
};
export default HomePage;
