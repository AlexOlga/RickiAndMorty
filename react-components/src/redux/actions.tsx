import { ICharacter, IFormFilds } from 'types';
import * as constants from './constant';

export const creatCardForm = (cardForm: ICharacter) => {
  console.log('creatCardForm', cardForm);
  return {
    type: constants.FORM_CARDS,
    payload: {
      cardForm: cardForm,
    },
  };
};
export const getFormFilds = (formFilds: IFormFilds) => {
  console.log('getFormFilds');
  return {
    type: constants.FORM_FILDS,
    payload: {
      formFilds: formFilds,
    },
  };
};
export const changeSearchQuery = (searchQuery: string) => {
  return {
    type: constants.SEARCH,
    payload: {
      searchQuery: searchQuery,
    },
  };
};
