import React, { Component } from 'react';
import { CardsProps, ICharacter } from '../../types';
import './cards.css';
import Card from '../card/card';

class Cards extends Component<CardsProps> {
  /*
  componentDidMount() {
    // fetch('https://rickandmortyapi.com/api/character')
    fetch(`${BASE_PATH}?${SEARCH_PARAM}${this.state.searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.results });
      });
  }
*/
  render() {
    const data = this.props.data;
    return (
      <div>
        <h1 className="title">Characters from the TV show Rick and Morty</h1>
        <div className="cards-contener">
          {data.map((item: ICharacter) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
