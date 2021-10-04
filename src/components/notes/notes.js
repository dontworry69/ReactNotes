import React, { useState, useRef, useMemo } from 'react';
import { Card, Input, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, inputValueForSorting } from '../../redux/actions';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import './notes.scss';

export function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const inputValueForSorting = useSelector((state) => state.inputValueForSorting);
  const [selectNote, setSelectNote] = useState({});
  const changeSetSelectNote = (note) => {
    setSelectNote(note);
  };
  const sortedNotes = useMemo(
    () => notes.filter((note) => note.title.includes(inputValueForSorting)),
    [inputValueForSorting, notes]
  );
  const noteTitle = useRef('');
  const noteSubtitle = useRef('');

  const saveNote = (id) => {
    const updateNotes = notes.map((note) =>
      note.id === id
        ? {
            ...note,
            title: noteTitle.current.inputRef.current.value,
            subtitle: noteSubtitle.current.value,
          }
        : { ...note }
    );
    localStorage.setItem('notes', JSON.stringify(updateNotes));
    dispatch(addNote());
  };
  const handleChangeTitle = (value) =>
    setSelectNote({ ...selectNote, title: value });
  const handleChangeSubtitle = (value) =>
    setSelectNote({ ...selectNote, subtitle: value });

  const deleteNote = (id) => {
    const updateNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(updateNotes));
    dispatch(addNote());
    changeSetSelectNote(notes[0]);
  };

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const changeOpenDeleteModal = () => setOpenDeleteModal(!openDeleteModal);

  return (
    <main className={"notes"}>
      <DeleteModal
        isOpen={openDeleteModal}
        isChangeModal={changeOpenDeleteModal}
        deleteNote={deleteNote}
        idNote={selectNote.id}
      />
      {notes.length === 0 ? (
        <div className={"notes-tile"}>
          Create Note
        </div>
      ) : (
        <>
          <div className={"notes-right-bar"}>
            {sortedNotes.length === 0 ? (
              <div className={"notes-tile"}>
                Notes not found
              </div>
            ) : (
              sortedNotes.map((note) => {
                return (
                  <Card key={note.id} onClick={() => changeSetSelectNote(note)}>
                    <Card.Content>
                      <Card.Header content={note.title} />
                      <Card.Description content={note.subtitle} />
                    </Card.Content>
                  </Card>
                );
              })
            )}
          </div>
          {sortedNotes.length === 0 ? (
            <></>
          ) : (
            <div className={"notes-left-bar"}>
              <div className={"notes-left-bar__form"}>
                <Input
                  style={{ width: '100%' }}
                  placeholder="Title"
                  value={selectNote.title}
                  onChange={(event) => handleChangeTitle(event.target.value)}
                  ref={noteTitle}
                />
                <textarea
                  cols="30"
                  rows="10"
                  ref={noteSubtitle}
                  value={selectNote.subtitle}
                  placeholder="Subtitle"
                  onChange={(event) => handleChangeSubtitle(event.target.value)}
                  style={{
                    marginTop: '20px',
                    width: '100%',
                    padding: '15px',
                    outline: 'none',
                    border: '1px solid rgba(34,36,38,.15)',
                    borderRadius: '8px',
                  }}></textarea>
              </div>
              <div style={{ marginTop: '20px' }}>
                <Button primary onClick={() => saveNote(selectNote.id)}>
                  Save
                </Button>
                <Button secondary onClick={() => changeOpenDeleteModal()}>
                  Delete
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
}
