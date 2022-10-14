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
  constructor(props: SearchProps) {
    super(props);
    /* const inputText = localStorage.getItem('inputText');
    this.state = inputText ? { inputText: inputText } : { inputText: '' }; */
  }
  /*
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: inputText },
    } = e;
    this.setState({ inputText });
  };

  handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      console.log('enter press here! ');
    }
  }; 
  componentWillUnmount() {
    if (this.state.inputText) {
      localStorage.setItem('inputText', this.state.inputText);
    } else {
      localStorage.removeItem('inputText');
    }
  }
*/
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
