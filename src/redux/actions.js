import {
  NOTES,
} from './types';

export function addNote(){
  const notes = JSON.parse(localStorage.getItem('notes'));
  if(notes){
    return {
      type:NOTES,
      payload:notes,
    }
  }else {
    return {
      type:NOTES,
      payload:[],
    }
  }
}