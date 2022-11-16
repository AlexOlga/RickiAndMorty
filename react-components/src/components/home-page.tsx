import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import './pages.css';
import SearchBar from './search-bar/search-bar';
import Cards from './cards/cards';
import Image404 from '../img/404.jpg';
import Loader from './loading-animation/loading-animation';
import Sort from './sorting/sorting';
import Pagination from './pagination/pagination';
import Select from './select/select';
import { changeSearchQuery, setCurrentPage, fetchSearchResults } from '../redux/searchSlice';

const HomePage = () => {
  const { out, page, typeSorting, searchResults, loading, error, searchQuery } = useAppSelector(
    (state) => state.search
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSearchResults());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSearchResults());
  }, [page, out, searchQuery, typeSorting]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeSearchQuery(e.target.value));
    dispatch(setCurrentPage(1));
    dispatch(fetchSearchResults);
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
      {!loading && searchResult}
    </div>
  );
};
export default HomePage;
