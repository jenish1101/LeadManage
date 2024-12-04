import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./css/Modals.css"
import "./css/ReminderModal.css"
import Form from 'react-bootstrap/Form';

const ReminderModal = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton className='Modal_Header'>
        <Modal.Title>Add Reminder</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <form>

          <div className="form-group">

            <div id="reminder_radio">
              <div class="reminder-option">
                <input type="radio" id="Once" name="Reminder" value="Once" />
                <label for="Once">Once</label>
              </div>

              <div class="reminder-option">
                <input type="radio" id="Daily" name="Reminder" value="Daily" />
                <label for="Daily">Daily</label>
              </div>

              <div class="reminder-option">
                <input type="radio" id="Weekly" name="Reminder" value="Weekly" />
                <label for="Weekly">Weekly</label>
              </div>

              <div class="reminder-option">
                <input type="radio" id="Monthly" name="Reminder" value="Monthly" />
                <label for="Monthly">Monthly</label>
              </div>

              <div class="reminder-option">
                <input type="radio" id="Yearly" name="Reminder" value="Yearly" />
                <label for="Yearly">Yearly</label>
              </div>

            </div>

          </div>

          <div className="form-group my-3">

            <div id="second_reminder">

              <div id='second_reminder_first'>
                <label htmlFor="date">Date:</label> <br />
                <input type="date" id='reminder_date' className='second_reminder_input' />
              </div>

              <div id='second_reminder_second'>
                <label for="User">User:</label>
                <br />
                <select name="User" id="User" className='second_reminder_input'>
                  <option value="User">Jenish</option>
                </select>
              </div>

            </div>

          </div>

          <div className="form-group">
            <div id="rmdr_txt">
              <label htmlFor="msg">Message: *</label> <br />
              <textarea name="msg" id="msg" placeholder='Enter Message'></textarea>
            </div>
          </div>

          <div className="form-group">
            <div id="automation_rmdr">
              <h1 className='my-2'>Automation</h1>
              <div>
                <p className='my-1'>whatsapp Automation</p>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                />
              </div>
            </div>
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

export default ReminderModal;
