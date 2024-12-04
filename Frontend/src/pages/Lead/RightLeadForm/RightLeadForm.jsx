import React, { useState } from "react";
import "./RightLeadForm.css";

// For Mobile
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const RightLeadForm = ({ onBack }) => {
  const [phone, setPhone] = useState("");

  return (
    <>

      <div className="Leadform">

        <div id="Back_btn">
          <button className="btn btn-secondary px-3" onClick={onBack}>Back</button>
        </div>

        <form action="" className="my-5">
          <div id="Right_Lead_First">
            <div className="Right_Lead_First_div">
              <label for="status">Status:</label>
              <br />
              <select name="status" id="status" className="Modal_Dropdown">
                <option value="New">New</option>
                <option value="Processing">Processing</option>
                <option value="Close-by">Close-by</option>
                <option value="Confirm">Confirm</option>
                <option value="Cancle">Cancle</option>
              </select>
            </div>

            <div className="Right_Lead_First_div">
              <label for="Source">Source:</label>
              <br />
              <select name="Source" id="Source" className="Modal_Dropdown">
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            <div className="Right_Lead_First_div">
              <label for="User">User:</label>
              <br />
              <select name="User" id="User" className="Modal_Dropdown">
                <option value="User">Jenish</option>
              </select>
            </div>
          </div>

          <div id="Right_Lead_second" className="my-3">
            <div className="Right_Lead_second_div">
              <label htmlFor="mobileno">Customer Mobile Number: *</label>
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                style={{ width: "100%" }}
              />
            </div>

            <div className="Right_Lead_second_div">
              <label htmlFor="date">Date:</label> <br />
              <input type="date" id="Lead_date" />
            </div>
          </div>

          <div id="Right_Lead_third" className="my-3">
            <div className="Right_Lead_third_div">
              <label htmlFor="name">Customer Name: *</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Customer Name"
                className="Lead_Four_Input"
              />
            </div>

            <div className="Right_Lead_third_div">
              <label htmlFor="email">Email(optional)</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="Lead_Four_Input"
              />
            </div>
          </div>

          <div id="Right_Lead_four">
            <div className="Right_Lead_four">
              <label for="label">Label(Optional):</label>
              <br />
              <select
                name="label"
                id="label"
                className="Modal_Dropdown Right_Lead_four_input"
              >
                <option value="Website Development">Website Development</option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Degital Marketing">Degital Marketing</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="SEO">SEO</option>
                <option value="Logo Design">Logo Design</option>
              </select>
            </div>

            <div className="Right_Lead_four">
              <label htmlFor="reference">Reference(Optional)</label> <br />
              <input
                className="Right_Lead_four_input"
                type="text"
                name="reference"
                placeholder="Enter Reference"
                id="Right_Lead_four_rf"
              />
            </div>
          </div>

          <div id="Right_Lead_five" className="my-3">
            <div>
              <label htmlFor="address">Address (Optional):</label> <br />
              <textarea
                name="address"
                id="address"
                placeholder="Enter Address"
              ></textarea>
            </div>

            <div>
              <label htmlFor="address">Comment (Optional):</label> <br />
              <textarea
                name="address"
                id="address"
                placeholder="Enter Address"
              ></textarea>
            </div>
          </div>
        </form>

        <div id="Submit_btn">
          <button className="btn btn-primary">Submit</button>
        </div>
        
      </div>
    </>
  );
};

export default RightLeadForm;
