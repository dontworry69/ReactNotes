import {GET_NOTES} from './types';

const initialState = {
  notes:[],
}

export function notes(state = initialState.notes,action) {
  switch (action.type){
    case GET_NOTES : return state = action.payload;
    default : return state;
  }
}