import React from 'react';
import { ICharacter } from '../../types';
import './card.css';

class Card extends React.Component<ICharacter> {
  render() {
    return (
      <div className="character_card">
        <h3 className="character_name">{this.props.name}</h3>
        <img className="character_img" src={this.props.image} alt="Character image" />
        <div className="text-contener">
          <p>
            <span className="character_category">Status: </span> {this.props.status}
          </p>
          <p>
            <span className="character_category">Species: </span>
            {this.props.species}
          </p>
        </div>
      </div>
    );
  }
}
export default Card;
