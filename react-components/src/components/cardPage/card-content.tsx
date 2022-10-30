import React from 'react';
import { ICharacter } from '../../types';
import './card-page.css';

type CardProps = {
  character: ICharacter;
};

class CardContent extends React.Component<CardProps> {
  render() {
    const { character } = this.props;
    return (
      <>
        <div className="character_page">
          <img className="character_img" src={character.image} alt="Character image" />
          <div className="text-contener">
            <p>
              <span className="character_category">Status: </span> {character.status}
            </p>
            <p>
              <span className="character_category">Species: </span>
              {character.species}
            </p>
            <p>
              <span className="character_category">Last known location: </span>
              {character.location?.name}
            </p>
            <p>
              <span className="character_category">First seen in: </span>
              {character.origin?.name}
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default CardContent;
