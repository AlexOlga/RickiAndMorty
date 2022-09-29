import React, { Component } from "react";
type SearchState = {
  inputText: string;
};

class SearchBar extends Component<Record<string, never>, SearchState> {
  state = {
    inputText: "",
  };
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: inputText },
    } = e;
    this.setState({ inputText });
    console.log(this.state.inputText);
  };
  render() {
    const { inputText } = this.state;
    return (
      <>
        <input
          type="text"
          value={inputText}
          onChange={this.handleInputChange}
        />
      </>
    );
  }
}
export default SearchBar;
