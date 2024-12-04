import React, { useState } from "react";
import "./RightTableView.css";
import { Link } from "react-router-dom";
import TableMessages from "./TableMessages/TableMessages";
import RightLeadForm from "../RightLeadForm/RightLeadForm";

const RightTableView = ({ setShowLeadForm }) => {
  return (
    <>
      {/* Table View */}
      <div className="table">
        <div className="table-view-menu">
          <div className="left">
            <button className="table-btn">Table view</button>
          </div>

          <div className="allLabels">
            <select name="allLabels" id="allLabels">
              <option value="" disabled selected>
                All Labels
              </option>
              <option value="Website Development">Website Development</option>
              <option value="Software Development">Software Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Degital Marketing">Degital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
              <option value="SEO">SEO</option>
              <option value="Logo Design">Logo Design</option>
            </select>
          </div>

          <div className="right">
            <button className="table-btn" onClick={() => setShowLeadForm(true)}>
              <span>+</span>
              Add Lead
            </button>
          </div>
        </div>
      </div>

      {/* Table Messages */}
      <TableMessages />
    </>
  );
};

export default RightTableView;
