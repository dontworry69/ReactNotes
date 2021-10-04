import React from 'react';
import { Button, Popup, Input } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, inputValueForSorting } from '../../redux/actions';

export function Header() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  function createNote() {
    const note = {
      title: '',
      subtitle: '',
      id: Date.now(),
    };
    notes.unshift(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    dispatch(addNote());
  }

  const handlerInputSearch = (value) => {
    dispatch(inputValueForSorting(value));
  };
  return (
    <header className={'app-header'} style={{display:'flex',padding:'20px'}}>
      <Popup
        content="Add note"
        trigger={<Button icon="add" onClick={() => createNote()} />}
      />
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(event) => handlerInputSearch(event.target.value)}
      />
    </header>
  );
}
