import { createContext, useContext } from 'react';
import { IContext, TActionReducer, TGlobalContent } from './types';
const defaultState = {
  search: '',
  formFilds: { name: '', date: '', status: '', gender: '', switch: false, check: false },
  cardsForm: [],
};

const AppContext = createContext<TGlobalContent>({
  state: defaultState,
});
const useAppContext = () => useContext(AppContext);

const reducer = (state: IContext, action: TActionReducer) => {
  const { type, payload } = action;
  switch (type) {
    case 'search':
      return {
        search: payload.search,
        formFilds: state.formFilds,
        cardsForm: state.cardsForm,
      };
    case 'form-filds':
      return {
        search: state.search,
        formFilds: payload.formFilds,
        cardsForm: state.cardsForm,
      };
    case 'form-cards':
      return {
        search: state.search,
        formFilds: state.formFilds,
        cardsForm:
          state.cardsForm && payload.cardForm ? [...state.cardsForm, payload.cardForm] : [],
      };
    default:
      return state;
  }
};
export { AppContext, reducer, defaultState, useAppContext };
