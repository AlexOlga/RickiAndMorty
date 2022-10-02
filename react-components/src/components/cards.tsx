import React, { Component } from 'react';
import Card from './card';

interface ICharacter {
  id?: number;
  name?: string;
  image?: string;
  status?: string;
  species?: string;
}

type CardsState = {
  data: ICharacter[];
};

class Cards extends Component<ICharacter, CardsState> {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        console.log('data results', data.results);
        this.setState({ data: data.results });
      });
  }

  render() {
    const { data } = this.state;
    console.log('state', data);
    return (
      <div>
        <h1>Character:</h1>
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
