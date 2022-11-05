import { combineReducers } from 'redux';
import { formCardReducer } from './reducers';
export const rootReducer = combineReducers({
  cardsForm: formCardReducer,
});
