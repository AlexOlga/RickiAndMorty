import { combineReducers } from 'redux';
import { formReducer, searchReducer } from './reducers';
export const rootReducer = combineReducers({
  form: formReducer,
  search: searchReducer,
});
