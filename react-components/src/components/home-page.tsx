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
import Select from './select/select';
import { connect } from 'react-redux';
import { changeSearchQuery, getCards } from '../redux/actions';
import { ICharacter, TActionReducer } from '../types';

const BASE_PATH = 'https://rickandmortyapi.com/api/character/';
const SEARCH_PARAM = 'name=';
const PAGE_PARAM = 'page=';

type HomePegeProps = {
  changeSearchQuery: (a: string) => TActionReducer;
  searchQuery: string;
  searchResults: Required<ICharacter>[];
  getCards: (a: Required<ICharacter>[]) => TActionReducer;
};
const HomePage = (props: HomePegeProps) => {
  const { state, dispatch } = useAppContext();
  const [isPending, setIsPending] = useState(true); // проверка загрузки

  const fetchData = async () => {
    let pageQuery;
    if (state.out === 20) pageQuery = Number(state.page);
    if (state.out === 10 && Number(state.page) % 2 === 0) pageQuery = Number(state.page) / 2;
    if (state.out === 10 && Number(state.page) % 2 !== 0) pageQuery = (Number(state.page) + 1) / 2;
    const query = props.searchQuery ? `&${SEARCH_PARAM}${props.searchQuery}` : '';

    fetch(`${BASE_PATH}?${PAGE_PARAM}${pageQuery}${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          props.getCards([]);
          /* dispatch({
            type: 'search-results',
            payload: {
              searchResults: [],
            },
          });*/
        } else {
          dispatch({ type: 'last-page', payload: { lastPage: data.info.pages } });
          dispatch({ type: 'count', payload: { count: data.info.count } });
          const result =
            state.out === 20
              ? [...data.results]
              : Number(state.page) % 2 === 0
              ? data.results.slice(10)
              : data.results.slice(0, 10);
          console.log('result', result);
          props.getCards(result);
          /*
          dispatch({
            type: 'search-results',
            payload: {
              searchResults:
                state.out === 20
                  ? [...data.results]
                  : Number(state.page) % 2 === 0
                  ? data.results.slice(10)
                  : data.results.slice(0, 10),
            },
          });*/
        }

        setIsPending(false);
      })
      .catch((error) => error);
  };
  const sortingData = () => {
    if (state.searchResults) {
      let arrData = state.searchResults;
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
    sortingData();
  }, [state.typeSorting]);

  useEffect(() => {
    fetchData();
    sortingData();
  }, [state.page, state.out]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // dispatch({ type: 'search', payload: { searchQuery: e.target.value } });
    props.changeSearchQuery(e.target.value);
    dispatch({ type: 'current-page', payload: { page: 1 } });
    // console.log('page search', state.page);
    fetchData();
    sortingData();
  };
  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const btn = e.target as HTMLButtonElement; //
    const btnType = btn.getAttribute('data-name');

    switch (btnType) {
      case 'next':
        dispatch({ type: 'current-page', payload: { page: state.page ? state.page + 1 : 1 } });
        break;
      case 'prev':
        dispatch({ type: 'current-page', payload: { page: state.page ? state.page - 1 : 1 } });
        break;
    }
  };

  /*const cardsProps = {
    data: state.searchResults === undefined ? [] : state.searchResults,
  };*/
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
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    searchQuery: state.search.searchQuery,
    searchResults: state.search.searchResults,
  };
};

export default connect(mapStateToProps, { changeSearchQuery, getCards })(HomePage);
