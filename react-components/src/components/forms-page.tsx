import React, { useState } from 'react';
import { ICharacter } from '../types';
import Forms from './forms/forms';
import Card from './card/card';
import { useAppContext } from '../reducer';

const FormsPage = () => {
  const { state, dispatch } = useAppContext();
  /*const a: ICharacter[] = [];
  const [arrayCard, setArrayCard] = useState(a); */

  const getCardData = (newCharacter: ICharacter) => {
    /*const newArray = [...arrayCard, newCharacter];
    setArrayCard(newArray);*/
    if (dispatch) dispatch({ type: 'form-cards', payload: { cardForm: newCharacter } });
  };
  return (
    <>
      <Forms callback={getCardData} />
      <div className="cards-contener">
        {state.cardsForm
          ? state.cardsForm.map((item: ICharacter, index: number) => (
              <Card character={item} key={`${item.name}-${index}`} onClick={() => {}} />
            ))
          : ''}
        {/*arrayCard.map((item: ICharacter, index: number) => (
          <Card character={item} key={`${item.name}-${index}`} onClick={() => {}} />
        ))*/}
      </div>
    </>
  );
};

export default FormsPage;
