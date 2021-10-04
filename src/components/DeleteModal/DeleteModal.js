import React from 'react';
import ReactModal from 'react-modal';
import { Button } from 'semantic-ui-react';

export function DeleteModal({ isOpen, isChangeModal, deleteNote, idNote }) {
  const customStyles = {
    overlay: {
      zIndex: 15,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      height: '300px',
      backgroundColor: '#272A33',
      borderRadius: '23px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      border: 'none',
    },
  };
  return (
    <ReactModal style={customStyles} isOpen={isOpen} ariaHideApp={false}>
      <div>
        <h3 style={{ color: '#fff' }}>Do you want to delete a note?</h3>
        <div style={{ marginTop: '20px' }}>
          <Button primary onClick={() => isChangeModal()}>
            Save Note
          </Button>
          <Button
            secondary
            onClick={() => {
              deleteNote(idNote);
              isChangeModal();
            }}>
            Delete Note
          </Button>
        </div>
      </div>
    </ReactModal>
  );
}
