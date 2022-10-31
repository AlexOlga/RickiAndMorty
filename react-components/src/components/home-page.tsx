import React, { useState, useEffect } from 'react';
import './pages.css';
import SearchBar from './search-bar/search-bar';
import Cards from './cards/cards';
import Image404 from '../img/404.jpg';
import Loader from './loading-animation/loading-animation';
import Sort from './sorting/sorting';
import { useAppContext } from '../reducer';
import { sortAlphabet, firstAlive, firstDead } from '../utils';
import Pagination from './pagination/pagination';

const BASE_PATH = 'https://rickandmortyapi.com/api/character/';
const SEARCH_PARAM = 'name=';
const PAGE_PARAM = 'page=';

const HomePage = () => {
  const { state, dispatch } = useAppContext();

  const [searchQuery, setSearchQuery] = useState(() => {
    const localStorageItem = localStorage.getItem('searchQuery');
    return localStorageItem ? localStorageItem : '';
  });

  const [isPending, setIsPending] = useState(true); // проверка загрузки

  const fetchData = (searchQuery: string) => {
    const query = searchQuery ? `&${SEARCH_PARAM}${searchQuery}` : '';
    fetch(`${BASE_PATH}?${PAGE_PARAM}${state.page}${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        dispatch({ type: 'last-page', payload: { lastPage: data.info.pages } });
        dispatch({ type: 'search-results', payload: { searchResults: data.results } });
        sortingData();
        setIsPending(false);
      })
      .catch((error) => error);
  };
  const sortingData = () => {
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
        case 'first Alive':
          arrData = arrData.sort(firstAlive);
          dispatch({ type: 'search-results', payload: { searchResults: arrData } });
          break;
        case 'first Dead':
          arrData = arrData.sort(firstDead);
          dispatch({ type: 'search-results', payload: { searchResults: arrData } });
          break;
      }
    }
  };

  useEffect(() => {
    if (searchQuery) {
      localStorage.setItem('searchQuery', searchQuery);
    } else {
      localStorage.removeItem('searchQuery');
    }
    dispatch({ type: 'current-page', payload: { page: 1 } });
    fetchData(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    sortingData();
  }, [state.typeSorting]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const btn = e.target as HTMLButtonElement; //.getAttribute('data-name');
    const btnType = btn.getAttribute('data-name');
    switch (btnType) {
      case 'next':
        const newpage = state.page ? state.page + 1 : 1;
        dispatch({ type: 'current-page', payload: { page: newpage } });
        break;
      case 'prev':
        dispatch({ type: 'current-page', payload: { page: state.page ? state.page - 1 : 1 } });
        break;
    }
  };
  useEffect(() => {
    fetchData(searchQuery);
  }, [state.page]);

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
      {!isPending && searchResult}
      {!isPending && <Pagination onClick={handlePageChange} />}
    </div>
  );
};

export default HomePage;
