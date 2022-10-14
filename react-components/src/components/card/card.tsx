import React from 'react';
import { ICharacter } from '../../types';
import './card.css';
type CardProps = {
  character: ICharacter;
  onClick: () => void;
};

class Card extends React.Component<CardProps> {
  render() {
    const { character, onClick } = this.props;
    return (
      <div className="character_card" onClick={onClick}>
        <h3 className="character_name">{character.name}</h3>
        <img className="character_img" src={character.image} alt="Character image" />
        <div className="text-contener">
          <p>
            <span className="character_category">Status: </span> {character.status}
          </p>
          <p>
            <span className="character_category">Species: </span>
            {character.species}
          </p>
        </div>
      </div>
    );
  }
}
export default Card;
