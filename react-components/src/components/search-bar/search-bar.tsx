import React, { Component } from 'react';
import './search-bar.css';
type SearchState = {
  inputText: string;
};
type SearchProps = {
  value: string;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

class SearchBar extends Component<SearchProps, SearchState> {
  render() {
    const { onChange, onKeyPress, value } = this.props;
    return (
      <>
        <input
          type="search"
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="Search character"
          className="search"
        />
      </>
    );
  }
}
export default SearchBar;
