import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./css/Modals.css"
import "./css/LeadModal.css"

// For Mobile 
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const LeadModal = ({ showModal, handleClose }) => {

  const [phone, setPhone] = useState('');

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton className='Modal_Header'>
        <Modal.Title>Add Lead</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>

          <div id="Lead_First">

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

            <div>
              <label for="Source">Source:</label>
              <br />
              <select name="Source" id="Source" className='Modal_Dropdown'>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>



          </div>

          <div id="Lead_second" className='my-3'>
            <div>
              <label for="User">User:</label>
              <br />
              <select name="User" id="User" className='Modal_Dropdown'>
                <option value="User">Jenish</option>
              </select>
            </div>


            <div id='Lead_Mobile'>
              <label htmlFor="mobileno">Customer Mobile Number: *</label>
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>

          </div>

          <div id="Lead_Third" className='my-3'>
            <div id="Lead_companyname">
              <label htmlFor="companyname">Company Name(optional)</label> <br />
              <input type="text" name="companyname" id="companyname" placeholder='Enter Company Name' />
            </div>

            <div>
              <label htmlFor="date">Date:</label> <br />
              <input type="date" id='Lead_date' />
            </div>

          </div>

          <div id="Lead_Four">

            <div>
              <label htmlFor="name">Customer Name: *</label>
              <input type="text" name="name" id="name" placeholder='Enter Customer Name' className='Lead_Four_Input' />
            </div>

            <div className='my-3'>
              <label htmlFor="email">Email(optional)</label>
              <input type="email" name="email" id="email" placeholder='Enter Email' className='Lead_Four_Input' />
            </div>
          </div>

          <div id="Lead_Five">

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

            <div id='reference_div'>
              <label htmlFor="reference">Reference(Optional)</label>
              <input type="text" name="reference" id="reference" placeholder='Enter Reference' />
            </div>

          </div>


          <div id="Lead_six" className='my-3'>
            <div>
              <label htmlFor="address">Address (Optional):</label> <br />
              <textarea name="address" id="address" placeholder='Enter Address'></textarea>
            </div>

            <div>
              <label htmlFor="address">Comment (Optional):</label> <br />
              <textarea name="address" id="address" placeholder='Enter Address'></textarea>
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

export default LeadModal;
