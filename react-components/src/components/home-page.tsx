import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
  getCards,
  setLastPageNumber,
  setCount,
  setTypeSorting,
  setCurrentPage,
} from '../redux/actions';
import { ICharacter, TActionReducer, TGlobalState } from '../types';

const BASE_PATH = 'https://rickandmortyapi.com/api/character/';
const SEARCH_PARAM = 'name=';
const PAGE_PARAM = 'page=';

// type sorting
const FROM_AZ = 'from A to Z';
const FROM_ZA = 'from Z to A';
const FIRST_ALIVE = 'first Alive';
const FIRST_DEAD = 'first Dead';

type HomePegeProps = {
  changeSearchQuery: (a: string) => TActionReducer;
  searchQuery: string;
  searchResults: Required<ICharacter>[];
  count: number;
  lastPage: number;
  typeSorting: string;
  page: number;
  out: number;
  getCards: (a: Required<ICharacter>[]) => TActionReducer;
  setLastPageNumber: (a: number) => TActionReducer;
  setCount: (a: number) => TActionReducer;
  setTypeSorting: (a: string) => TActionReducer;
  setCurrentPage: (a: number) => TActionReducer;
};
const HomePage = (props: HomePegeProps) => {
  const [isPending, setIsPending] = useState(true); // проверка загрузки

  const fetchData = async () => {
    let pageQuery;
    if (props.out === 20) pageQuery = Number(props.page);
    if (props.out === 10 && Number(props.page) % 2 === 0) pageQuery = Number(props.page) / 2;
    if (props.out === 10 && Number(props.page) % 2 !== 0) pageQuery = (Number(props.page) + 1) / 2;
    const query = props.searchQuery ? `&${SEARCH_PARAM}${props.searchQuery}` : '';
    fetch(`${BASE_PATH}?${PAGE_PARAM}${pageQuery}${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          props.getCards([]);
        } else {
          props.setLastPageNumber(data.info.pages);

          props.setCount(data.info.count);
          const result =
            props.out === 20
              ? [...data.results]
              : Number(props.page) % 2 === 0
              ? data.results.slice(10)
              : data.results.slice(0, 10);

          props.getCards(result);
        }
        setIsPending(false);
      })
      .catch((error) => error);
  };
  const sortingData = () => {
    if (props.searchResults) {
      let arrData = props.searchResults;
      switch (props.typeSorting) {
        case FROM_AZ:
          arrData = arrData.sort(sortAlphabet);
          props.getCards(arrData);

          break;
        case FROM_ZA:
          arrData = arrData.sort(sortAlphabet).reverse();
          props.getCards(arrData);

          break;
        case FIRST_ALIVE:
          arrData = arrData.sort(firstAlive);
          props.getCards(arrData);

          break;
        case FIRST_DEAD:
          arrData = arrData.sort(firstDead);
          props.getCards(arrData);

          break;
      }
    }
  };

  useEffect(() => {
    sortingData();
  }, []);

  useEffect(() => {
    fetchData();
    sortingData();
  }, [props.page, props.out]);

  useEffect(() => {
    sortingData();
  }, [props.typeSorting]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.changeSearchQuery(e.target.value);
    props.setCurrentPage(1);
    fetchData();
    sortingData();
  };
  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const btn = e.target as HTMLButtonElement; //
    const btnType = btn.getAttribute('data-name');

    switch (btnType) {
      case 'next':
        props.setCurrentPage(props.page + 1);
        break;
      case 'prev':
        props.setCurrentPage(props.page - 1);
        break;
    }
  };

  const cardsProps = {
    data: props.searchResults,
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

      {isPending && <Loader />}
      {!isPending && searchResult}
    </div>
  );
};
const mapStateToProps = (state: TGlobalState) => {
  return {
    searchQuery: state.search.searchQuery,
    searchResults: state.search.searchResults,
    lastPage: state.search.lastPage,
    count: state.search.count,
    typeSorting: state.search.typeSorting,
    page: state.search.page,
    out: state.search.out,
  };
};

export default connect(mapStateToProps, {
  changeSearchQuery,
  getCards,
  setLastPageNumber,
  setCount,
  setTypeSorting,
  setCurrentPage,
})(HomePage);
