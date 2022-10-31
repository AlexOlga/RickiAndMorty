import React from 'react';
import { useAppContext } from '../../reducer';
import './search-bar.css';

type SearchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = (prop: SearchProps) => {
  const { state } = useAppContext();

  return (
    <>
      <input
        type="search"
        value={state.searchQuery}
        onChange={prop.onChange}
        placeholder="Search character"
        className="search"
      />
    </>
  );
};

export default SearchBar;
