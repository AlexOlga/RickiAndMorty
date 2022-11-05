import { combineReducers } from 'redux';
import { formCardReducer, formFildsReducer } from './reducers';
export const rootReducer = combineReducers({
  cardsForm: formCardReducer,
  formFilds: formFildsReducer,
});
