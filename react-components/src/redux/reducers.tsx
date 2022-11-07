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
  count: 0,
  typeSorting: '',
  currentPosition: null,
  page: 1,
  lastPage: 1,
  out: 20,
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
    case constants.COUNT:
      return {
        ...state,
        count: payload.count,
      };
    case constants.LAST_PAGE:
      return {
        ...state,
        lastPage: payload.lastPage,
      };
    case constants.TYPE_SORTING:
      return {
        ...state,
        typeSorting: payload.typeSorting,
      };
    case constants.CURRENT_POSITION:
      return {
        ...state,
        typeSorting: payload.currentPosition,
      };
    case constants.CURRENT_PAGE:
      return {
        ...state,
        typeSorting: payload.page,
      };
    case constants.OUT:
      return {
        ...state,
        out: payload.out,
      };
    default:
      return state;
  }
};
