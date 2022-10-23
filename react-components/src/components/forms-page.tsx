import React, { useState } from 'react';
import { ICharacter } from '../types';
import Forms from './forms/forms';
import Card from './card/card';
const FormsPage = () => {
  const a: ICharacter[] = [];
  const [arrayCard, setArrayCard] = useState(a);

  const getCardData = (newCharacter: ICharacter) => {
    const newArray = [...arrayCard, newCharacter];
    setArrayCard(newArray);
  };
  return (
    <>
      <Forms callback={getCardData} />
      <div className="cards-contener">
        {arrayCard.map((item: ICharacter, index: number) => (
          <Card character={item} key={`${item.name}-${index}`} onClick={() => {}} />
        ))}
      </div>
    </>
  );
};

export default FormsPage;
