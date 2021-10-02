import React from 'react';
import { Button, Popup,Input } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
export function Header () {
  const customStyle ={
    header:{
      display:'flex',
      padding:'20px',
    }
  };
  const notes = useSelector(state => state.notes);
  function createNote () {
    const note = {
      title:'',
      subtitle:'',
      id:Date.now(),
    };
    notes.push(note)
    localStorage.setItem('notes',JSON.stringify(notes))
  }
  return(
    <header className={"app-header"} style={customStyle.header}>
      <Popup  content='Add note' trigger={<Button icon='add' onClick={()=> createNote()} />} />
      <Input icon='search' placeholder='Search...' />
    </header>
  )
}