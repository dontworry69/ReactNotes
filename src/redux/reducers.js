import { NOTES, SORTING_NOTE } from './types';

const initialState = {
  notes: [],
  inputValueForSorting: '',
};

export function notes(state = initialState.notes, action) {
  switch (action.type) {
    case NOTES:
      return (state = action.payload);
    default:
      return state;
  }
}
export function inputValueForSorting(state = initialState.inputValueForSorting, action) {
  switch (action.type) {
    case SORTING_NOTE:
      return (state = action.payload);
    default:
      return state;
  }
}
