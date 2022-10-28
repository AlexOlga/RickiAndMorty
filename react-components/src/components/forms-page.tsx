import React from 'react';
import { ICharacter } from '../types';
import Forms from './forms/forms';
import Card from './card/card';
import { useAppContext } from '../reducer';

const FormsPage = () => {
  const { state, dispatch } = useAppContext();
  const getCardData = (newCharacter: ICharacter) => {
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
      </div>
    </>
  );
};

export default FormsPage;
