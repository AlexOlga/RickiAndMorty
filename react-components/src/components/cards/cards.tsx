import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardsProps, ICharacter } from '../../types';
import './cards.css';
import Card from '../card/card';
// import Modal from '../modal/modal';

const Cards = (cardData: CardsProps) => {
  /*  const [isOpen, setIsOpen] = useState(false);
  const [dataCard, setDataCard] = useState({}); //ICharacter
  const handleCancel = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.value.includes('modal-overlay')) setIsOpen(false);
    if (target.classList.value.includes('button-close')) setIsOpen(false);
  };*/
  const data = cardData.data; // передать просто data ?
  return (
    <>
      <h1 className="title">Characters from the TV show Rick and Morty</h1>
      <div className="cards-contener">
        {data.map((item: ICharacter) => (
          <Link className="link-card-page" to={`/${item.id}`} key={item.id}>
            <Card
              character={item}
              onClick={() => {
                /* setDataCard(item);
                setIsOpen(true);*/
              }}
            />
          </Link>
        ))}
      </div>
      {/*<Modal isOpen={isOpen} onCancel={(e: React.MouseEvent) => handleCancel(e)} data={dataCard} />*/}
    </>
  );
};

export default Cards;
