import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const NoteModal = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton className='Modal_Header'>
        <Modal.Title>Add Notes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="note-content">Notes: *</label>
            <textarea className="form-control" id="note-content" name="noteContent" placeholder='Enter Notes' 
            style={{resize:"none" , height:"100px"}}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
        <Button variant="secondary">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoteModal;
