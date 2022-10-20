import React, { useState, useEffect } from 'react';
import './pages.css';
// import { ICharacter } from '../types';
import SearchBar from './search-bar/search-bar';
import Cards from './cards/cards';
import Image404 from '../img/404.jpg';
import Loader from './loading-animation/loading-animation';

/* type HomePageState = {
  searchQuery: string;
  data: ICharacter[];
  isPending: boolean;
}; */

const BASE_PATH = 'https://rickandmortyapi.com/api/character/';
const SEARCH_PARAM = 'name=';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
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
    const searchQueryFromLocal = localStorage.getItem('searchQuery');
    if (searchQueryFromLocal) setSearchQuery(searchQueryFromLocal);
  }, []);

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

/*class HomePage extends Component<Record<string, never>, HomePageState> {
  state = {
    searchQuery: '',
    data: [],
    isPending: true,
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
        this.setState({ data: data.results, isPending: false });
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
        {this.state.isPending && <Loader />}
        {searchResult}
      </div>
    );
  }
}*/
export default HomePage;
