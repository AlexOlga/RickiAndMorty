import React, { useState, useEffect } from 'react';
import './pages.css';
import SearchBar from './search-bar/search-bar';
import Cards from './cards/cards';
import Image404 from '../img/404.jpg';
import Loader from './loading-animation/loading-animation';
import Sort from './sorting/sorting';
import { useAppContext } from '../reducer';
import { ICharacter } from 'types';
import { reverse } from 'dns';

const BASE_PATH = 'https://rickandmortyapi.com/api/character/';
const SEARCH_PARAM = 'name=';

const HomePage = () => {
  const { state, dispatch } = useAppContext();

  const [searchQuery, setSearchQuery] = useState(() => {
    const localStorageItem = localStorage.getItem('searchQuery');
    return localStorageItem ? localStorageItem : '';
  });

  const [isPending, setIsPending] = useState(true); // проверка загрузки

  const fetchData = (searchQuery: string) => {
    fetch(`${BASE_PATH}?${SEARCH_PARAM}${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'search-results', payload: { searchResults: data.results } });
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

  function sortAlphabet(a: ICharacter, b: ICharacter) {
    if (a.name && b.name) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
    }
    return 0;
  }
  useEffect(() => {
    if (state.searchResults) {
      let arrData = [...state.searchResults];
      switch (state.typeSorting) {
        case 'from A to Z':
          arrData = arrData.sort(sortAlphabet);
          dispatch({ type: 'search-results', payload: { searchResults: arrData } });
          break;
        case 'from Z to A':
          arrData = arrData.sort(sortAlphabet).reverse();
          dispatch({ type: 'search-results', payload: { searchResults: arrData } });
          break;
      }
    }
  }, [state.typeSorting]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const cardsProps = {
    data: state.searchResults === undefined ? [] : state.searchResults,
  };
  const imgStyle = { width: '100%', height: '100%' };

  let searchResult;
  if (cardsProps.data.length !== 0) {
    searchResult = <Cards {...cardsProps} />;
  } else {
    searchResult = <img src={Image404} style={imgStyle} alt="not found" />;
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Sort />
        <SearchBar onChange={handleInputChange} value={searchQuery} />
      </div>

      {isPending && <Loader />}
      {searchResult}
    </div>
  );
};

export default HomePage;
