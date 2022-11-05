import { combineReducers } from 'redux';
import { formCardReducer, formFildsReducer, searchQueryReducer } from './reducers';
export const rootReducer = combineReducers({
  cardsForm: formCardReducer,
  formFilds: formFildsReducer,
  searchQuery: searchQueryReducer,
});
