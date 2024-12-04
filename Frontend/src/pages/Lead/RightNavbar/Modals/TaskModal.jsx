import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./css/Modals.css"
import "./css/TaskModal.css"
import Form from 'react-bootstrap/Form';

const TaskModal = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton className='Modal_Header'>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="form-group">
            <div id="t_subject">
              <label htmlFor="Subject">Subject: *</label> <br />
              <input type="text" placeholder='Enter Subject' />
            </div>
          </div>


          <div className="form-group my-3">
            <div className="t_second">
              <div id="Lead_First">

                <div>
                  <label for="Priority">Priority:</label>
                  <br />
                  <select name="Priority" id="Priority" className='Modal_Dropdown'>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div>
                  <label for="status">Status:</label>
                  <br />
                  <select name="status" id="status" className='Modal_Dropdown'>
                    <option value="New">New</option>
                    <option value="Processing">Processing</option>
                    <option value="Close-by">Close-by</option>
                    <option value="Confirm">Confirm</option>
                    <option value="Cancle">Cancle</option>
                  </select>
                </div>





              </div>
            </div>
          </div>

          <div className="form-group flex align-middle">
            <div>
              <label for="label">Label(Optional):</label>
              <br />
              <select name="label" id="label" className='Modal_Dropdown'>
                <option value="Website Development">Website Development</option>
                <option value="Software Development">Software Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Degital Marketing">Degital Marketing</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="SEO">SEO</option>
                <option value="Logo Design">Logo Design</option>
              </select>
            </div>

            <div className="t_switch mx-5">
              <h1>Recursive</h1>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
            </div>
          </div>

          <div className="form-group my-3">
            <div id="t_date">
              <div className="tm_date">
                <label htmlFor="start_date">Start Date:</label>
                <input type="date" name="start_date" id="start_date" />
              </div>
              <div className="tm_date">
                <label htmlFor="end_date">End Date:</label>
                <input type="date" name="end_date" id="end_date" />
              </div>
            </div>
          </div>

          <div className="form-group" id='t_txt'>
            <label htmlFor="Description">Description:</label>
            <textarea name="Description" id="Description" placeholder='Enter Description'></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="fileInput">Attachment (optional)</label> <br />
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              accept=".jpg, .jpeg, .png, .pdf, .doc, .docx"
            />
          </div>

        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">
          Submit
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancle
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
