import React, { Component } from 'react';
import './search-bar.css';
type SearchState = {
  inputText: string;
};

class SearchBar extends Component<Record<string, never>, SearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    const inputText = localStorage.getItem('inputText');
    this.state = inputText ? { inputText: inputText } : { inputText: '' };
  }

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

  render() {
    const { inputText } = this.state;
    return (
      <>
        <input
          type="search"
          value={inputText}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Search bar"
          className="search"
        />
      </>
    );
  }
}
export default SearchBar;
