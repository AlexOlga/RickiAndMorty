import React from 'react';
import { connect } from 'react-redux';
import { TGlobalState } from '../../types';
import './search-bar.css';

type SearchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};

const SearchBar = (prop: SearchProps) => {
  return (
    <>
      <input
        type="search"
        value={prop.searchQuery}
        onChange={prop.onChange}
        placeholder="Search character"
        className="search"
      />
    </>
  );
};

const mapStateToProps = (state: TGlobalState) => {
  // console.log('state', state);
  return {
    searchQuery: state.search.searchQuery,
  };
};

export default connect(mapStateToProps, null)(SearchBar);
