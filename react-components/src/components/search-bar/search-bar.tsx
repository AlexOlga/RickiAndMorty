import React from 'react';
//import { useAppContext } from '../../reducer';
import { connect } from 'react-redux';
import './search-bar.css';
import { changeSearchQuery } from '../../redux/actions';

type SearchProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};

const SearchBar = (prop: SearchProps) => {
  // const { state } = useAppContext();

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

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    searchQuery: state.searchQuery.searchQuery,
  };
};

export default connect(mapStateToProps, null)(SearchBar);
