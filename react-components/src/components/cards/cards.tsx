import React, { Component } from 'react';
import { CardsProps, ICharacter } from '../../types';
import './cards.css';
import Card from '../card/card';
import Modal from '../modal/modal';

type CardsState = {
  isOpen: boolean;
  dataCard: ICharacter;
};

class Cards extends Component<CardsProps, CardsState> {
  state = {
    isOpen: false,
    dataCard: {},
  };

  /* openModal = (dataCard: ICharacter) => {
    this.setState({ dataCard: dataCard, isOpen: true });
  }; */

  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const data = this.props.data;
    return (
      <>
        <h1 className="title">Characters from the TV show Rick and Morty</h1>
        <div className="cards-contener">
          {data.map((item: ICharacter) => (
            <Card
              character={item}
              key={item.id}
              onClick={() => {
                this.setState({ dataCard: item, isOpen: true });
              }}
            />
          ))}
        </div>
        <Modal isOpen={this.state.isOpen} onCancel={this.handleCancel} data={this.state.dataCard} />
      </>
    );
  }
}

export default Cards;
