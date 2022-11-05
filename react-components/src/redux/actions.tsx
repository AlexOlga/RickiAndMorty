import { ICharacter } from 'types';
import { FORM_CARDS } from './constant';

export const creatCardForm = (cardForm: ICharacter) => {
  console.log('creatCardForm', cardForm);
  return {
    type: FORM_CARDS,
    payload: {
      cardForm: cardForm,
    },
  };
};
