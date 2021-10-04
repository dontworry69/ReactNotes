import { combineReducers } from 'redux';
import { notes, inputValueForSorting } from './reducers';

export const rootReducer = combineReducers({
  notes,
  inputValueForSorting,
});
