import React, { Component } from 'react';
import './pages.css';
import { ICharacter } from '../types';
import SearchBar from './search-bar/search-bar';
import Cards from './cards/cards';

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
  };

  getSearch = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      const { searchQuery } = this.state;
      this.fetchData(searchQuery);
    }
  };
  render() {
    const { searchQuery } = this.state;
    const cardsProps = {
      data: this.state.data,
    };

    return (
      <div className="wrapper">
        <SearchBar
          onKeyPress={this.getSearch}
          onChange={this.handleInputChange}
          value={searchQuery}
        />
        <Cards {...cardsProps} />
      </div>
    );
  }
}
export default HomePage;
