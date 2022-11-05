import { FORM_CARDS } from './constant';
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
  console.log('formCardReducer', action.type, action.payload);
  console.log('state', state);
  switch (type) {
    case FORM_CARDS:
      return {
        ...state,
        cardsForm: [...state.cardsForm, payload.cardForm],
        // state.cardsForm && payload.cardForm ? [...state.cardsForm, payload.cardForm] : [],
      };
    default:
      return state;
  }
};
