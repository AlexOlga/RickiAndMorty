import React from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import Forms from './forms/forms';
import Card from './card/card';
import { ICharacter } from '../types';
import { createCardForm } from '../redux/formSlice';

const FormsPage = () => {
  const cardsForm = useAppSelector((state) => state.form.cardsForm);
  const dispatch = useAppDispatch();
  const createCard = (cardForm: ICharacter) => dispatch(createCardForm(cardForm));

  return (
    <>
      <Forms callback={createCard} />
      <div className="cards-contener">
        {cardsForm
          ? cardsForm.map((item: ICharacter, index: number) => (
              <Card character={item} key={`${item.name}-${index}`} onClick={() => {}} />
            ))
          : ''}
      </div>
    </>
  );
};

export default FormsPage;
