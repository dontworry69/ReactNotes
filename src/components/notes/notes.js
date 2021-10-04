import React, { useState,useRef } from 'react';
import { Card,Input,Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../redux/actions';
import { DeleteModal } from '../DeleteModal/DeleteModal';

export function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const [selectNote,setSelectNote] = useState({});
  const changeSetSelectNote = (note) => {
    setSelectNote(note);
  };
  const noteTitle = useRef('');
  const noteSubtitle = useRef('');
  const saveNotes = (id) => {
    const updateNotes = notes.map(note => note.id === id ? {...note,title:noteTitle.current.inputRef.current.value,subtitle:noteSubtitle.current.value} : {...note});
    localStorage.setItem('notes',JSON.stringify(updateNotes));
    dispatch(addNote());
  };
  const handleChangeTitle = value => setSelectNote({...selectNote, title: value});
  const handleChangeSubtitle = value => setSelectNote({...selectNote, subtitle:value});
  const deleteNote = id => {
    const updateNotes = notes.filter(note => note.id !== id)
    localStorage.setItem('notes',JSON.stringify(updateNotes));
    dispatch(addNote());
    changeSetSelectNote(notes[0]);
  };
  const [openDeleteModal,setOpenDeleteModal] = useState(false);
  const changeOpenDeleteModal = ()=> setOpenDeleteModal(!openDeleteModal);

  return (
    <main style={{padding:'20px',display:'flex'}}>
      <DeleteModal isOpen={openDeleteModal} isChangeModal={changeOpenDeleteModal} deleteNote={deleteNote} idNote={selectNote.id}/>
      <div style={{overflow:'auto'}}>
        {
          notes.map(note => {
            return(
              <Card key={note.id} onClick={() => changeSetSelectNote(note)}>
                <Card.Content>
                  <Card.Header content={note.title} />
                  <Card.Description content={note.subtitle} />
                </Card.Content>
              </Card>
            )
          })
        }
      </div>
      <div style={{flexGrow:'2',marginLeft:'20px'}}>
        <div style={{backgroundColor:'#ffff',padding:'20px',borderRadius:'8px'}}>
          <Input style={{width:'100%'}} placeholder='Title' value={selectNote.title} onChange={event=>handleChangeTitle(event.target.value)} ref={noteTitle}/>
          <textarea cols='30' rows='10' ref={noteSubtitle} value={selectNote.subtitle} placeholder="Subtitle" onChange={event=>handleChangeSubtitle(event.target.value)} style={{marginTop:'20px',width:'100%',padding:'15px',outline:'none',border:'1px solid rgba(34,36,38,.15)',borderRadius:'8px'}}></textarea>
          <div style={{marginTop:'20px'}}>
            <Button primary onClick={()=> saveNotes(selectNote.id)}>Save</Button>
            <Button secondary onClick={()=>changeOpenDeleteModal()}>Delete</Button>
          </div>
        </div>
      </div>
    </main>
  )
}