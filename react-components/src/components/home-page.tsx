import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import './pages.css';
import SearchBar from './search-bar/search-bar';
import Cards from './cards/cards';
import Image404 from '../img/404.jpg';
import Loader from './loading-animation/loading-animation';
import Sort from './sorting/sorting';
import { sortAlphabet, firstAlive, firstDead } from '../utils';
import Pagination from './pagination/pagination';
import Select from './select/select';
import {
  changeSearchQuery,
  setCurrentPage,
  getCards,
  fetchSearchResults,
} from '../redux/searchSlice';

// type sorting
const FROM_AZ = 'from A to Z';
const FROM_ZA = 'from Z to A';
const FIRST_ALIVE = 'first Alive';
const FIRST_DEAD = 'first Dead';

const HomePage = () => {
  const { out, page, typeSorting, searchResults, searchQuery, loading, error } =
    useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  /* const sortingData = () => {
    if (searchResults) {
      let arrData = searchResults;
      switch (typeSorting) {
        case FROM_AZ:
          arrData = arrData.sort(sortAlphabet);
          dispatch(getCards(arrData));
          // props.getCards(arrData);
          break;
        case FROM_ZA:
          arrData = arrData.sort(sortAlphabet).reverse();
          dispatch(getCards(arrData));
          // props.getCards(arrData);
          break;
        case FIRST_ALIVE:
          arrData = arrData.sort(firstAlive);
          dispatch(getCards(arrData));
          //  props.getCards(arrData);
          break;
        case FIRST_DEAD:
          arrData = arrData.sort(firstDead);
          dispatch(getCards(arrData));
          // props.getCards(arrData);
          break;
      }
    }
  };
*/
  useEffect(() => {
    dispatch(fetchSearchResults());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSearchResults());
    // sortingData();
  }, [page, out]);

  /* useEffect(() => {
    sortingData();
  }, [typeSorting]);
*/
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeSearchQuery(e.target.value));
    dispatch(setCurrentPage(1));
    dispatch(fetchSearchResults);
    // sortingData();
  };
  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const btn = e.target as HTMLButtonElement; //
    const btnType = btn.getAttribute('data-name');

    switch (btnType) {
      case 'next':
        dispatch(setCurrentPage(page + 1));
        break;
      case 'prev':
        dispatch(setCurrentPage(page - 1));
        break;
    }
  };

  const cardsProps = {
    data: searchResults,
  };
  const imgStyle = { width: '100%', height: '100%' };

  let searchResult;
  if (cardsProps.data.length !== 0) {
    searchResult = (
      <>
        <Cards {...cardsProps} />;
        <Pagination onClick={handlePageChange} />
      </>
    );
  } else {
    searchResult = <img src={Image404} style={imgStyle} alt="not found" />;
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Sort />
        <Select />
        <SearchBar onChange={handleInputChange} />
      </div>

      {loading && <Loader />}
      {error && <h2>{error}</h2>}
      {loading && searchResult}
    </div>
  );
};
export default HomePage;
