import { NOTES } from './types';

const initialState = {
  notes:[],
}

export function notes(state = initialState.notes,action) {
  switch (action.type){
    case NOTES : return state = action.payload;
    default : return state;
  }
}
