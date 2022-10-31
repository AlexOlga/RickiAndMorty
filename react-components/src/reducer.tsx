import { createContext, useContext } from 'react';
import { IContext, TActionReducer, TGlobalContent } from './types';
const defaultState = {
  searchResults: [],
  formFilds: { name: '', date: '', status: '', switch: false, check: false },
  cardsForm: [],
  typeSorting: '',
  currentPosition: null,
  page: 1,
  lastPage: 1,
  out: 20,
  cardsToShow: [],
  searchQuery: '',
};

const AppContext = createContext<TGlobalContent>({
  state: defaultState,
  dispatch: () => {},
});
const useAppContext = () => useContext(AppContext);

const reducer = (state: IContext, action: TActionReducer) => {
  const { type, payload } = action;
  switch (type) {
    case 'search-results':
      return {
        ...state,
        searchResults: payload.searchResults,
      };
    case 'form-filds':
      return {
        ...state,
        formFilds: payload.formFilds,
      };
    case 'form-cards':
      return {
        ...state,
        cardsForm:
          state.cardsForm && payload.cardForm ? [...state.cardsForm, payload.cardForm] : [],
      };
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
    case 'last-page':
      return {
        ...state,
        lastPage: payload.lastPage,
      };
    case 'out':
      return {
        ...state,
        out: payload.out,
      };
    case 'count':
      return {
        ...state,
        count: payload.count,
      };
    case 'search':
      return {
        ...state,
        searchQuery: payload.searchQuery,
      };
    default:
      return state;
  }
};

export { AppContext, reducer, defaultState, useAppContext };
