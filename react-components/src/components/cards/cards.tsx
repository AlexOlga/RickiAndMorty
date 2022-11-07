import React from 'react';
import { Link } from 'react-router-dom';
import { CardsProps, ICharacter } from '../../types';
import './cards.css';
import Card from '../card/card';

const Cards = (cardData: CardsProps) => {
  const data = cardData.data;
  return (
    <>
      <h1 className="title">Characters from the TV show Rick and Morty</h1>
      <div className="cards-contener">
        {data.map((item: ICharacter) => (
          <Link className="link-card-page" to={`/cards/${item.id}`} key={item.id}>
            <Card character={item} onClick={() => {}} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cards;
