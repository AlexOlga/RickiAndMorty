import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './search-bar.css';

type SearchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = (prop: SearchProps) => {
  const searchQuery = useAppSelector((state) => state.search.searchQuery);
  return (
    <>
      <input
        type="search"
        value={searchQuery}
        onChange={prop.onChange}
        placeholder="Search character"
        className="search"
      />
    </>
  );
};

export default SearchBar;
