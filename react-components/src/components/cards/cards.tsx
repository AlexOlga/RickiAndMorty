import React, { useState } from 'react';
import { CardsProps, ICharacter } from '../../types';
import './cards.css';
import Card from '../card/card';
import Modal from '../modal/modal';

/*type CardsState = {
  isOpen: boolean;
  dataCard: ICharacter;
}; */
const Cards = (cardData: CardsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataCard, setDataCard] = useState({});
  const handleCancel = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.value.includes('modal-overlay')) setIsOpen(false);
    if (target.classList.value.includes('button-close')) setIsOpen(false);
  };
  const data = cardData.data; // передать просто data
  return (
    <>
      <h1 className="title">Characters from the TV show Rick and Morty</h1>
      <div className="cards-contener">
        {data.map((item: ICharacter) => (
          <Card
            character={item}
            key={item.id}
            onClick={() => {
              setDataCard(item);
              setIsOpen(true);
            }}
          />
        ))}
      </div>
      <Modal isOpen={isOpen} onCancel={(e: React.MouseEvent) => handleCancel(e)} data={dataCard} />
    </>
  );
};
/*class Cards extends Component<CardsProps, CardsState> {
  state = {
    isOpen: false,
    dataCard: {},
  };

  handleCancel(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.classList.value.includes('modal-overlay')) this.setState({ isOpen: false });
    if (target.classList.value.includes('button-close')) this.setState({ isOpen: false });
  }
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
        <Modal
          isOpen={this.state.isOpen}
          onCancel={(e: React.MouseEvent) => this.handleCancel(e)}
          data={this.state.dataCard}
        />
      </>
    );
  }
}*/

export default Cards;
