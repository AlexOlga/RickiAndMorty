import * as constants from './constant';
import { TActionReducer } from '../types';

/*const defaultState = {
  searchResults: [],
  formFilds: { name: '', date: '', status: '', switch: false, check: false },
  cardsForm: [],
  typeSorting: '',
  currentPosition: null,
  page: 1,
  lastPage: 1,
  out: 20,
  searchQuery: '',
}; */
export const formCardReducer = (state = { cardsForm: [] }, action: TActionReducer) => {
  const { type, payload } = action;
  switch (type) {
    case constants.FORM_CARDS:
      return {
        ...state,
        cardsForm: [...state.cardsForm, payload.cardForm],
      };
    default:
      return state;
  }
};
const defaultFormFilds = { name: '', date: '', status: '', switch: false, check: false };
export const formFildsReducer = (
  state = { formFilds: defaultFormFilds },
  action: TActionReducer
) => {
  const { type, payload } = action;
  switch (type) {
    case constants.FORM_FILDS:
      return {
        ...state,
        formFilds: payload.formFilds,
      };
    default:
      return state;
  }
};

export const searchQueryReducer = (state = { searchQuery: '' }, action: TActionReducer) => {
  const { type, payload } = action;
  switch (type) {
    case constants.SEARCH:
      return {
        ...state,
        searchQuery: payload.searchQuery,
      };
    default:
      return state;
  }
};
