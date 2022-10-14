import React, { Component } from 'react';
import './pages.css';
import { ICharacter } from '../types';
import SearchBar from './search-bar/search-bar';
import Cards from './cards/cards';
import Image404 from '../img/404.jpg';

type HomePageState = {
  searchQuery: string;
  data: ICharacter[];
};

const BASE_PATH = 'https://rickandmortyapi.com/api/character/';
const SEARCH_PARAM = 'name=';

class HomePage extends Component<Record<string, never>, HomePageState> {
  state = {
    searchQuery: '',
    data: [],
  };
  constructor(props: Record<string, never>) {
    super(props);
    const searchQuery = localStorage.getItem('searchQuery');
    this.state.searchQuery = searchQuery ? searchQuery : '';
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    this.fetchData(searchQuery);
  }

  fetchData = (searchQuery: string) => {
    fetch(`${BASE_PATH}?${SEARCH_PARAM}${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.results });
      })
      .catch((error) => error);
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: searchQuery },
    } = e;
    this.setState({ searchQuery });
    if (searchQuery === '') this.fetchData(searchQuery);
  };

  getSearch = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      const { searchQuery } = this.state;
      this.fetchData(searchQuery);
    }
  };
  componentWillUnmount() {
    if (this.state.searchQuery) {
      localStorage.setItem('searchQuery', this.state.searchQuery);
    } else {
      localStorage.removeItem('searchQuery');
    }
  }

  render() {
    const { searchQuery } = this.state;
    const cardsProps = {
      data: this.state.data,
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
        <SearchBar
          onKeyPress={this.getSearch}
          onChange={this.handleInputChange}
          value={searchQuery}
        />

        {searchResult}
      </div>
    );
  }
}
export default HomePage;
