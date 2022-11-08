import { ICharacter, IFormFilds } from 'types';
import * as constants from './constant';

export const creatCardForm = (cardForm: ICharacter) => {
  return {
    type: constants.FORM_CARDS,
    payload: {
      cardForm: cardForm,
    },
  };
};
export const getFormFilds = (formFilds: IFormFilds) => {
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

export const getCards = (cards: Required<ICharacter>[]) => {
  return {
    type: constants.SEARCH_RESULT,
    payload: {
      searchResults: cards,
    },
  };
};
export const setLastPageNumber = (lastPage: number) => {
  return {
    type: constants.LAST_PAGE,
    payload: {
      lastPage: lastPage,
    },
  };
};
export const setCount = (count: number) => {
  return {
    type: constants.COUNT,
    payload: {
      count: count,
    },
  };
};
export const setTypeSorting = (typeSorting: string) => {
  return {
    type: constants.TYPE_SORTING,
    payload: {
      typeSorting: typeSorting,
    },
  };
};
export const setCurrentPosition = (currentPosition: number | null) => {
  return {
    type: constants.CURRENT_POSITION,
    payload: {
      currentPosition: currentPosition,
    },
  };
};
export const setCurrentPage = (page: number) => {
  return {
    type: constants.CURRENT_PAGE,
    payload: {
      page: page,
    },
  };
};
export const changeOut = (out: number) => {
  return {
    type: constants.OUT,
    payload: {
      out: out,
    },
  };
};
