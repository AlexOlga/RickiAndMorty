import React, { useState, useEffect } from 'react';
import './pages.css';
// import { ICharacter } from '../types';
import SearchBar from './search-bar/search-bar';
import Cards from './cards/cards';
import Image404 from '../img/404.jpg';
import Loader from './loading-animation/loading-animation';

// create context

const BASE_PATH = 'https://rickandmortyapi.com/api/character/';
const SEARCH_PARAM = 'name=';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(() => {
    const localStorageItem = localStorage.getItem('searchQuery');
    return localStorageItem ? localStorageItem : '';
  });
  const [data, setData] = useState([]); // ICharacter[]
  const [isPending, setIsPending] = useState(true);

  const fetchData = (searchQuery: string) => {
    fetch(`${BASE_PATH}?${SEARCH_PARAM}${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setIsPending(false);
      })
      .catch((error) => error);
  };

  useEffect(() => {
    if (searchQuery) {
      localStorage.setItem('searchQuery', searchQuery);
    } else {
      localStorage.removeItem('searchQuery');
    }
    fetchData(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const cardsProps = {
    data: data,
  };
  const imgStyle = { width: '100%', height: '100%' };

  let searchResult;
  if (cardsProps.data) {
    searchResult = <Cards {...cardsProps} />;
  } else {
    searchResult = <img src={Image404} style={imgStyle} alt="not found" />;
  }

  return (
    <div className="wrapper">
      <SearchBar onChange={handleInputChange} value={searchQuery} />
      {isPending && <Loader />}
      {searchResult}
    </div>
  );
};

export default HomePage;
