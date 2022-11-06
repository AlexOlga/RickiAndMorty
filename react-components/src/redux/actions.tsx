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

export const getCards = (cards: Required<ICharacter>[]) => {
  console.log('search');
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
      count: typeSorting,
    },
  };
};
/*
const reducer = (state: IContext, action: TActionReducer) => {


    case 'type-sorting':
      return {
        ...state,
        typeSorting: payload.typeSorting,
      };
    case 'current-position':
      return {
        ...state,
        currentPosition: payload.currentPosition,
      };
    case 'current-page':
      return {
        ...state,
        page: payload.page,
      };

    case 'out':
      return {
        ...state,
        out: payload.out,
      };

 
  }
};


*/
