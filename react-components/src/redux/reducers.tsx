import * as constants from './constant';
import { TActionReducer } from '../types';

const defaultFormState = {
  cardsForm: [],
  formFilds: { name: '', date: '', status: '', switch: false, check: false },
};
export const formReducer = (state = defaultFormState, action: TActionReducer) => {
  const { type, payload } = action;
  switch (type) {
    case constants.FORM_CARDS:
      return {
        ...state,
        cardsForm: [...state.cardsForm, payload.cardForm],
      };
    case constants.FORM_FILDS:
      return {
        ...state,
        formFilds: payload.formFilds,
      };
    default:
      return state;
  }
};

const defaultSearchState = {
  searchQuery: '',
  searchResults: [],
};

export const searchReducer = (state = defaultSearchState, action: TActionReducer) => {
  const { type, payload } = action;
  switch (type) {
    case constants.SEARCH:
      return {
        ...state,
        searchQuery: payload.searchQuery,
      };
    case constants.SEARCH_RESULT:
      return {
        ...state,
        searchResults: payload.searchResults ? [...payload.searchResults] : [],
      };
    default:
      return state;
  }
};
