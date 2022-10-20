import React, { Component } from 'react';
import './search-bar.css';
type SearchState = {
  inputText: string;
};
type SearchProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

class SearchBar extends Component<SearchProps, SearchState> {
  render() {
    const { onChange, value } = this.props;
    return (
      <>
        <input
          type="search"
          value={value}
          onChange={onChange}
          placeholder="Search character"
          className="search"
        />
      </>
    );
  }
}
export default SearchBar;
