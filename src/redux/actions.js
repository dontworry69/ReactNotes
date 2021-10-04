import { NOTES, SORTING_NOTE } from './types';

export function addNote() {
  const notes = JSON.parse(localStorage.getItem('notes'));
  if (notes) {
    return {
      type: NOTES,
      payload: notes,
    };
  } else {
    return {
      type: NOTES,
      payload: [],
    };
  }
}

export function inputValueForSorting(notes) {
  return {
    type: SORTING_NOTE,
    payload: notes,
  };
}
